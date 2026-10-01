import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Карьера — xread",
  description: "Открытые вакансии в команде xread.",
};

const jobs = [
  { title: "Senior Frontend Engineer", team: "Продукт", location: "Удалённо" },
  { title: "ML Engineer (Speech Synthesis)", team: "AI", location: "Алматы / Удалённо" },
  { title: "Редактор-координатор", team: "Контент", location: "Удалённо" },
  { title: "Менеджер по работе с авторами", team: "Поддержка", location: "Лондон" },
  { title: "Product Designer", team: "Продукт", location: "Удалённо" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="💼 Карьера"
        title="Присоединяйтесь к команде xread"
        description="Мы небольшая распределённая команда, которая меняет то, как авторы издают книги."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {jobs.map((job) => (
            <div key={job.title} className="flex items-center justify-between py-5">
              <div>
                <p className="font-semibold text-zinc-950 dark:text-white">{job.title}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.team} · {job.location}
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
              >
                Откликнуться
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Не нашли подходящую роль?{" "}
          <a href="mailto:authors@xread.me" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Напишите нам
          </a>{" "}
          — мы всегда рады сильным специалистам.
        </p>
      </section>
    </>
  );
}
