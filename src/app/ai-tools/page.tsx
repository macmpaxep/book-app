import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "AI-инструменты — xread",
  description: "AI-озвучка, обложки и переводы для авторов xread.",
};

const tools = [
  {
    icon: "🎧",
    title: "AI-озвучка книг",
    description: "Превратите текст в профессиональную аудиокнигу на 30+ языках одним нажатием.",
  },
  {
    icon: "🌍",
    title: "AI-перевод",
    description: "Переводите книгу на другие языки с сохранением стиля автора и последующей ручной вычиткой.",
  },
  {
    icon: "🎨",
    title: "Генератор обложек",
    description: "Создавайте профессиональные обложки по описанию сюжета и жанра за минуты.",
  },
  {
    icon: "✍️",
    title: "AI-редактор",
    description: "Проверка грамматики, стиля и ритма текста — с объяснением каждой правки.",
  },
  {
    icon: "📝",
    title: "Генератор описаний",
    description: "AI напишет аннотацию и маркетинговый текст для карточки книги на основе рукописи.",
  },
  {
    icon: "📊",
    title: "AI-аналитика читателей",
    description: "Предсказание спроса и рекомендации по цене на основе данных похожих книг.",
  },
];

export default function AiToolsPage() {
  return (
    <>
      <PageHero
        kicker="✨ AI для авторов"
        title="Инструменты, которые экономят месяцы работы"
        description="От озвучки до перевода — xread берёт на себя техническую часть издания книги."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.title} className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
              <span className="text-3xl">{tool.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
