import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Начать публиковать — xread",
  description: "Создайте аккаунт автора и опубликуйте первую книгу на xread бесплатно.",
};

const steps = [
  {
    step: "1",
    title: "Создайте аккаунт",
    description: "Укажите email и имя автора — это займёт меньше минуты.",
  },
  {
    step: "2",
    title: "Загрузите рукопись",
    description: "Поддерживаются DOCX, PDF, EPUB и Markdown. Мы сами подготовим форматы.",
  },
  {
    step: "3",
    title: "Настройте продажу",
    description: "Выберите цену, страны продаж и формат: e-book, аудио или печать.",
  },
  {
    step: "4",
    title: "Публикуйте и получайте роялти",
    description: "Книга появляется в каталоге за 24 часа. Выплаты — ежемесячно.",
  },
];

export default function StartPage() {
  return (
    <>
      <PageHero
        kicker="🚀 Для новых авторов"
        title="Опубликуйте книгу за четыре шага"
        description="Регистрация бесплатна. Первая книга может быть опубликована уже сегодня."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-md px-6 lg:px-8">
          <form className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Создать аккаунт автора
            </h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Имя автора
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                placeholder="Как подписывать книги"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                placeholder="Минимум 8 символов"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Создать аккаунт бесплатно
            </button>
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
              Уже есть аккаунт?{" "}
              <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Войти
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
