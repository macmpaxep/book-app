import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Политика Cookies — xread",
  description: "Как xread использует cookies и локальное хранилище браузера.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero kicker="🍪 Документы" title="Политика Cookies" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-7 text-zinc-700 dark:text-zinc-300 lg:px-8">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">Последнее обновление: 1 октября 2026</p>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Что мы используем</h2>
          <p className="mt-2">
            xread использует минимальный набор технологий хранения данных в браузере:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>localStorage</strong> — для сохранения выбранной темы оформления (светлая/тёмная).
              Хранится только на вашем устройстве.
            </li>
            <li>
              <strong>Сессионные cookie</strong> — для авторизации в личном кабинете автора.
            </li>
            <li>
              <strong>Обезличенная аналитика</strong> — собственная система аналитики без сторонних
              рекламных cookie и без отслеживания между сайтами.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Рекламные cookie</h2>
          <p className="mt-2">
            Мы не используем сторонние рекламные или маркетинговые cookie-трекеры.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Управление</h2>
          <p className="mt-2">
            Вы можете очистить localStorage и cookie в любой момент через настройки браузера — это не
            повлияет на доступность публичных страниц сайта.
          </p>
        </div>
      </section>
    </>
  );
}
