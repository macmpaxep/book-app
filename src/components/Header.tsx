"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navItems = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Книги", href: "#books" },
  { label: "Авторы", href: "#authors" },
  { label: "Монетизация", href: "#monetization" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center">
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#login"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Войти
          </a>
          <a
            href="#start"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Начать публиковать
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/20"
            aria-label="Открыть меню"
          >
            <span className="sr-only">Меню</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 px-6 pb-6 lg:hidden dark:border-white/10">
          <nav className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <a href="#login" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Войти
              </a>
              <a
                href="#start"
                className="rounded-full bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Начать публиковать
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
