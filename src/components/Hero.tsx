import Image from "next/image";

const stats = [
  { value: "120K+", label: "авторов по всему миру" },
  { value: "2.4M", label: "опубликованных книг" },
  { value: "80+", label: "стран" },
  { value: "₽4.2B", label: "выплачено авторам" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-black dark:to-black">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:pt-24">
        <div className="lg:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
            🌍 Международная платформа для авторов
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            Публикуйте книги.
            <br />
            Зарабатывайте по&nbsp;всему миру.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            xread — платформа для писателей, которые хотят издавать электронные,
            аудио- и печатные книги, находить читателей на новых рынках и получать
            честные роялти без посредников.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#start"
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
            >
              Опубликовать книгу бесплатно
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-zinc-300 px-8 py-3.5 text-center text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
            >
              Как это работает
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-zinc-950 dark:text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-16 lg:mt-0 lg:w-1/2">
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
            {[
              { title: "Город туманов", author: "Елена Марич", cover: "/covers/gorod-tumanov.jpg" },
              { title: "The Last Algorithm", author: "David Cohen", cover: "/covers/last-algorithm.jpg" },
              { title: "花园的影子", author: "Mei Lin", cover: "/covers/sad-tenei.jpg" },
              { title: "El Vuelo de Ícaro", author: "Carlos Rivas", cover: "/covers/vuelo-de-icaro.jpg" },
            ].map((book, i) => (
              <div
                key={book.title}
                className={`relative aspect-[3/4.2] overflow-hidden rounded-2xl shadow-xl ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={book.cover}
                  alt={`Обложка книги «${book.title}»`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                  priority
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  Бестселлер
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
