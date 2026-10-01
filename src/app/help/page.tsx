import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Центр помощи — xread",
  description: "Ответы на частые вопросы авторов и читателей xread.",
};

const categories = [
  {
    title: "Публикация книги",
    questions: [
      "Какие форматы файлов принимаются?",
      "Сколько времени занимает модерация?",
      "Можно ли изменить книгу после публикации?",
    ],
  },
  {
    title: "Выплаты и роялти",
    questions: [
      "Когда приходят выплаты?",
      "Какие способы вывода доступны?",
      "Что делать, если платёж не пришёл?",
    ],
  },
  {
    title: "Права и авторство",
    questions: [
      "Сохраняю ли я права на книгу?",
      "Можно ли публиковать книгу одновременно на других площадках?",
      "Как защититься от пиратства?",
    ],
  },
  {
    title: "Аккаунт",
    questions: [
      "Как изменить email или пароль?",
      "Можно ли удалить аккаунт?",
      "Как подключить двухфакторную аутентификацию?",
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        kicker="🛟 Центр помощи"
        title="Чем мы можем помочь?"
        description="Часто задаваемые вопросы. Не нашли ответ — напишите в поддержку."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">{cat.title}</h2>
              <ul className="mt-4 space-y-3">
                {cat.questions.map((q) => (
                  <li key={q}>
                    <a
                      href="#contact"
                      className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      {q}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
          <p className="font-semibold text-zinc-950 dark:text-white">Не нашли ответ?</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Наша поддержка отвечает в течение 24 часов.
          </p>
          <a
            href="mailto:authors@xread.me"
            className="mt-4 inline-block rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Написать в поддержку
          </a>
        </div>
      </section>
    </>
  );
}
