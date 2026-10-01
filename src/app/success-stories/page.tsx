import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Истории успеха — xread",
  description: "Реальные истории авторов, которые зарабатывают на книгах через xread.",
};

const stories = [
  {
    name: "Елена Марич",
    country: "Россия 🇷🇺",
    quote:
      "Я выложила «Город туманов» просто чтобы попробовать. Через год это была моя основная работа.",
    earnings: "$182K за 2 года",
    avatarColor: "bg-indigo-500",
  },
  {
    name: "David Cohen",
    country: "США 🇺🇸",
    quote:
      "xread дал мне доступ к читателям в 40 странах без единого издательского контракта.",
    earnings: "$240K за 3 года",
    avatarColor: "bg-rose-500",
  },
  {
    name: "Mei Lin",
    country: "Китай 🇨🇳",
    quote: "AI-перевод помог мне выйти на англоязычный рынок за месяц вместо года.",
    earnings: "$95K за 1 год",
    avatarColor: "bg-emerald-500",
  },
  {
    name: "Amara Diallo",
    country: "Нигерия 🇳🇬",
    quote: "Начинала со стихов для друзей. Теперь это тираж 50 000+ экземпляров.",
    earnings: "$38K за 8 месяцев",
    avatarColor: "bg-amber-500",
  },
  {
    name: "Carlos Rivas",
    country: "Испания 🇪🇸",
    quote: "Аудиоверсия моей книги принесла больше, чем сам текст — AI-озвучка окупилась сразу.",
    earnings: "$61K за 1.5 года",
    avatarColor: "bg-pink-500",
  },
  {
    name: "Haruto Sato",
    country: "Япония 🇯🇵",
    quote: "Сообщество xread помогло найти иллюстратора для обложки и редактора за неделю.",
    earnings: "$29K за 6 месяцев",
    avatarColor: "bg-fuchsia-500",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        kicker="⭐ Истории авторов"
        title="Истории успеха"
        description="Писатели из разных стран уже зарабатывают на своих книгах вместе с xread."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${s.avatarColor}`}
                >
                  {s.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-semibold text-zinc-950 dark:text-white">{s.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{s.country}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic leading-6 text-zinc-600 dark:text-zinc-400">
                «{s.quote}»
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                💸 {s.earnings}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
