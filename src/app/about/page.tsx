import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "О нас — xread",
  description: "Миссия и команда международной платформы для авторов xread.",
};

const stats = [
  { value: "120K+", label: "авторов" },
  { value: "80+", label: "стран" },
  { value: "2024", label: "год основания" },
  { value: "45", label: "человек в команде" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="🌍 О компании"
        title="Мы делаем издательское дело доступным каждому"
        description="xread основан авторами, которые устали ждать ответа от издательств. Мы строим платформу, где рукопись превращается в книгу за дни, а не годы."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-bold text-zinc-950 dark:text-white">{s.value}</dt>
              <dd className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 space-y-6 text-zinc-700 dark:text-zinc-300">
          <p>
            xread начался как небольшой проект для независимых авторов из Центральной Азии, которым
            было сложно пробиться в традиционные издательства. Сегодня это международная платформа,
            которая объединяет писателей, читателей и технологии ИИ, чтобы издание книги занимало
            дни, а не месяцы.
          </p>
          <p>
            Мы верим, что хорошая история заслуживает читателей независимо от того, на каком языке
            она написана и в какой стране живёт автор. Поэтому наша дистрибуция охватывает более 80
            стран, а инструменты перевода и озвучки делают книги доступными на десятках языков.
          </p>
          <p>
            Команда xread — это бывшие редакторы, инженеры и сами авторы, которые каждый день
            работают над тем, чтобы платформа оставалась честной: прозрачные роялти, никаких скрытых
            комиссий и полный контроль над правами у автора.
          </p>
        </div>
      </section>
    </>
  );
}
