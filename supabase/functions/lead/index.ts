// Supabase Edge Function "lead": принимает заявку со страницы и отправляет её в Telegram.
// Секреты (не кладите их в HTML!):
//   TELEGRAM_BOT_TOKEN  — токен от @BotFather
//   TELEGRAM_CHAT_ID    — id вашего чата с ботом (или группы)
// Деплой:
//   supabase secrets set TELEGRAM_BOT_TOKEN=... TELEGRAM_CHAT_ID=...
//   supabase functions deploy lead --no-verify-jwt

const ALLOWED_ORIGINS = ["https://xread.me"]; // добавьте свои домены при необходимости

const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
  const digits = phone.replace(/\D/g, "");
  if (name.length < 2 || digits.length < 10 || digits.length > 15) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!token || !chatId) return json({ ok: false, error: "not configured" }, 500);

  const text =
    `📚 <b>Новая заявка: «Тетрадь в клетку»</b>\n` +
    `Имя: ${esc(name)}\n` +
    `Телефон: ${esc(phone)}\n` +
    `Источник: ${esc(source)}\n` +
    `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`;

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
  if (!tg.ok) {
    console.error("telegram error", tg.status, await tg.text());
    return json({ ok: false, error: "telegram" }, 502);
  }

  return json({ ok: true });
});
