import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Гайд по роялти — xread",
  description: "Как устроены выплаты авторам на xread: ставки, сроки и валюты.",
};

const tiers = [
  { plan: "Starter", rate: "50%", note: "Базовая ставка для первой книги" },
  { plan: "Author Pro", rate: "до 70%", note: "При продажах выше $500 в месяц" },
  { plan: "Publisher", rate: "индивидуально", note: "Для издательств и агентств" },
];

const faqs = [
  {
    q: "Когда приходят выплаты?",
    a: "Роялти начисляются ежемесячно, 5 числа, за продажи предыдущего месяца. Минимальная сумма для вывода — $20.",
  },
  {
    q: "В какой валюте платят?",
    a: "Вы можете выбрать USD, EUR, тенге или рубли при выводе — конвертация происходит по курсу на момент выплаты.",
  },
  {
    q: "Берёт ли xread дополнительные комиссии?",
    a: "Нет скрытых комиссий. Ставка роялти уже учитывает платёжные издержки и дистрибуцию на все площадки.",
  },
  {
    q: "Что влияет на процент роялти?",
    a: "Тариф аккаунта, объём продаж и выбранный формат (e-book, аудио, печать по требованию имеют разную себестоимость).",
  },
];

export default function RoyaltyGuidePage() {
  return (
    <>
      <PageHero
        kicker="💰 Для авторов"
        title="Гайд по роялти"
        description="Прозрачная система выплат — без скрытых комиссий и сюрпризов."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.plan} className="rounded-2xl border border-zinc-200 p-6 text-center dark:border-zinc-800">
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{t.plan}</p>
              <p className="mt-2 text-3xl font-bold text-indigo-600">{t.rate}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">Частые вопросы</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-zinc-950 dark:text-white">{f.q}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
