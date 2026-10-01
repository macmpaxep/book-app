"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Остались вопросы?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Оставьте заявку — наша команда поддержки авторов свяжется с вами
              в течение 24 часов и поможет с публикацией первой книги.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-white">Email</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  authors@xread.me
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Поддержка 24/7
                </dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Чат в приложении и на сайте
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-zinc-950 dark:text-white">Офисы</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Лондон · Нью-Йорк · Сингапур · Алматы
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="text-4xl">🎉</span>
                <p className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                  Спасибо за заявку!
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                      placeholder="Ваше имя"
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
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Тема обращения
                  </label>
                  <select
                    id="topic"
                    className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    <option>Публикация книги</option>
                    <option>Вопросы по выплатам</option>
                    <option>Сотрудничество для издательств</option>
                    <option>Техническая поддержка</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    placeholder="Расскажите, чем мы можем помочь"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
