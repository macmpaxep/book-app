import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Пресс-центр — xread",
  description: "Новости, пресс-релизы и медиаконтакты xread.",
};

const releases = [
  {
    date: "Сентябрь 2026",
    title: "xread запускает AI-озвучку книг на 30 языках",
    excerpt: "Новая функция позволяет авторам создавать аудиокниги без студии и диктора.",
  },
  {
    date: "Май 2026",
    title: "xread привлекает $12M на расширение в Юго-Восточную Азию",
    excerpt: "Инвестиции пойдут на локализацию платформы и новые партнёрства с ритейлерами.",
  },
  {
    date: "Январь 2026",
    title: "100 000 авторов опубликовали книги на xread",
    excerpt: "Платформа отмечает рубеж спустя полтора года после запуска.",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        kicker="📰 Пресс-центр"
        title="Новости и медиаматериалы"
        description="Пресс-релизы, статистика и контакты для журналистов."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-8">
          {releases.map((r) => (
            <article key={r.title} className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{r.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{r.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{r.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-700">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Медиазапросы и брендбук:{" "}
            <a href="mailto:press@xread.me" className="font-semibold text-indigo-600 hover:text-indigo-500">
              press@xread.me
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
