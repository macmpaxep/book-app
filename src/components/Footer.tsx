import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Платформа",
    links: [
      { label: "Как это работает", href: "/#how-it-works" },
      { label: "Монетизация", href: "/royalty-guide" },
      { label: "Тарифы", href: "/#pricing" },
      { label: "Мобильное приложение", href: "/mobile-app" },
    ],
  },
  {
    title: "Авторам",
    links: [
      { label: "Начать публиковать", href: "/start" },
      { label: "Гайд по роялти", href: "/royalty-guide" },
      { label: "AI-инструменты", href: "/ai-tools" },
      { label: "Истории успеха", href: "/success-stories" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Карьера", href: "/careers" },
      { label: "Пресс-центр", href: "/press" },
      { label: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { label: "Центр помощи", href: "/help" },
      { label: "Контакты", href: "/#contact" },
      { label: "Условия использования", href: "/terms" },
      { label: "Политика конфиденциальности", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="h-7 w-auto" />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Международная платформа для публикации и монетизации книг.
            </p>
            <div className="mt-5 flex gap-3">
              {["X", "IG", "YT", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-xs font-semibold text-zinc-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-400"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} xread Inc. Все права защищены.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500 dark:text-zinc-500">
            <Link href="/terms" className="hover:text-indigo-600">
              Условия
            </Link>
            <Link href="/privacy" className="hover:text-indigo-600">
              Конфиденциальность
            </Link>
            <Link href="/cookies" className="hover:text-indigo-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
