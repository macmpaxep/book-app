import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Блог — xread",
  description: "Советы для авторов, новости платформы и разборы рынка книг.",
};

const posts = [
  {
    category: "Маркетинг",
    title: "Как написать аннотацию, которая продаёт книгу",
    excerpt: "Разбираем структуру аннотаций бестселлеров и даём шаблон для вашей книги.",
    date: "28 сен 2026",
  },
  {
    category: "Роялти",
    title: "Сколько реально зарабатывают независимые авторы в 2026",
    excerpt: "Анализ данных 10 000 авторов xread по жанрам и странам.",
    date: "14 сен 2026",
  },
  {
    category: "AI",
    title: "Аудиокнига за час: гайд по AI-озвучке",
    excerpt: "Пошаговая инструкция, как превратить рукопись в аудиокнигу на 30 языках.",
    date: "2 сен 2026",
  },
  {
    category: "Истории",
    title: "От барахолки до бестселлера: как Елена Марич нашла читателей",
    excerpt: "История автора «Города туманов» о первых продажах и выходе на международный рынок.",
    date: "20 авг 2026",
  },
  {
    category: "Платформа",
    title: "Что нового в xread: осеннее обновление",
    excerpt: "Печать по требованию, новые страны дистрибуции и обновлённая аналитика.",
    date: "5 авг 2026",
  },
  {
    category: "Маркетинг",
    title: "5 ошибок в обложке, которые отпугивают читателей",
    excerpt: "Разбираем типичные промахи и показываем, как их избежать с AI-генератором обложек.",
    date: "22 июл 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="✍️ Блог"
        title="Советы, разборы и новости для авторов"
        description="Практические материалы о том, как писать, издавать и продавать книги."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <span className="inline-block w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                {post.category}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
              <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
