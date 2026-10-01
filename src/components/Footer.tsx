import Logo from "./Logo";

const columns = [
  {
    title: "Платформа",
    links: ["Как это работает", "Монетизация", "Тарифы", "Мобильное приложение"],
  },
  {
    title: "Авторам",
    links: ["Начать публиковать", "Гайд по роялти", "AI-инструменты", "Истории успеха"],
  },
  {
    title: "Компания",
    links: ["О нас", "Карьера", "Пресс-центр", "Блог"],
  },
  {
    title: "Поддержка",
    links: ["Центр помощи", "Контакты", "Условия использования", "Политика конфиденциальности"],
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      {link}
                    </a>
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
            <a href="#" className="hover:text-indigo-600">
              Условия
            </a>
            <a href="#" className="hover:text-indigo-600">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-indigo-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
