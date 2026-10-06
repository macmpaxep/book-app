// Supabase Edge Function "lead": сохраняет заявку со страницы в таблицу public.leads и отправляет её в Telegram.
// Секреты (не кладите их в HTML!):
//   TELEGRAM_BOT_TOKEN  — токен от @BotFather
//   TELEGRAM_CHAT_ID    — id вашего чата с ботом (или группы)
// SUPABASE_URL и SUPABASE_SERVICE_ROLE_KEY Supabase подставляет в функцию сам.
// Деплой: supabase functions deploy lead --no-verify-jwt

const ALLOWED_ORIGINS = ["https://xread.me"]; // добавьте свои домены при необходимости

const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const SB_URL = Deno.env.get("SUPABASE_URL");
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

async function sb(path: string, init: RequestInit & { json?: unknown }) {
  return await fetch(`${SB_URL}/rest/v1/${path}`, {
    method: init.method,
    headers: {
      apikey: SB_KEY!,
      Authorization: `Bearer ${SB_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: init.json === undefined ? undefined : JSON.stringify(init.json),
  });
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? "";
  const cors = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...cors, "Content-Type": "application/json" },
    });

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return json({ ok: false }, 405);

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ ok: false, error: "bad json" }, 400);
  }

  // ловушка для ботов: поле "website" скрыто от людей
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = String(data.name ?? "").trim().slice(0, 80);
  const phone = String(data.phone ?? "").trim().slice(0, 25);
  const source = String(data.source ?? "").trim().slice(0, 60) || "прямой заход";
  const page = String(data.page ?? "").trim().slice(0, 200);
  const book = String(data.book ?? "").trim().slice(0, 80) || "Тетрадь в клетку";
  const digits = phone.replace(/\D/g, "");
  if (name.length < 2 || digits.length < 10 || digits.length > 15) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  // 1. сохраняем заявку в базу (если база недоступна, всё равно пробуем Telegram)
  let leadId: string | null = null;
  try {
    const r = await sb("leads", { method: "POST", json: { name, phone, source, page, book } });
    if (r.ok) {
      const rows = await r.json();
      leadId = rows?.[0]?.id ?? null;
    } else {
      console.error("db insert error", r.status, await r.text());
    }
  } catch (e) {
    console.error("db insert exception", String(e));
  }

  const setStatus = async (tg_status: "sent" | "failed", tg_error?: string) => {
    if (!leadId) return;
    try {
      await sb(`leads?id=eq.${leadId}`, { method: "PATCH", json: { tg_status, tg_error: tg_error ?? null } });
    } catch (e) {
      console.error("db update exception", String(e));
    }
  };

  // 2. отправляем в Telegram
  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!token || !chatId) {
    await setStatus("failed", "not configured");
    return leadId ? json({ ok: true }) : json({ ok: false, error: "not configured" }, 500);
  }

  const text =
    `📚 <b>Новая заявка: «${esc(book)}»</b>\n` +
    `Имя: ${esc(name)}\n` +
    `Телефон: ${esc(phone)}\n` +
    `Источник: ${esc(source)}\n` +
    `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`;

  let tgOk = false;
  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    tgOk = tg.ok;
    if (!tg.ok) {
      const body = await tg.text();
      console.error("telegram error", tg.status, body);
      await setStatus("failed", `${tg.status} ${body}`.slice(0, 300));
    }
  } catch (e) {
    console.error("telegram exception", String(e));
    await setStatus("failed", String(e).slice(0, 300));
  }

  if (tgOk) await setStatus("sent");

  // заявка не потеряна, если сохранена в базе или ушла в Telegram
  if (tgOk || leadId) return json({ ok: true });
  return json({ ok: false, error: "telegram" }, 502);
});
