import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Вход — xread",
  description: "Войдите в личный кабинет автора xread.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-20 lg:px-8">
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
        Вход в xread
      </h1>
      <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Рады видеть вас снова. Войдите, чтобы управлять книгами и доходом.
      </p>

      <form className="mt-10 space-y-5 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Пароль
            </label>
            <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
              Забыли пароль?
            </a>
          </div>
          <input
            id="password"
            type="password"
            required
            className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Войти
        </button>
        <div className="relative py-2 text-center text-xs text-zinc-400">
          <span className="bg-white px-2 dark:bg-black">или</span>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <button
          type="button"
          className="w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
        >
          Войти через Google
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Ещё нет аккаунта?{" "}
        <Link href="/start" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Начать публиковать
        </Link>
      </p>
    </section>
  );
}
