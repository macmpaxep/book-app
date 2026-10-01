const authors = [
  {
    name: "Елена Марич",
    country: "Россия 🇷🇺",
    genre: "Фэнтези-сага",
    bio: "Автор трилогии «Город туманов», более 400K проданных копий на 12 языках.",
    earnings: "$182K за 2 года",
    avatarColor: "bg-indigo-500",
  },
  {
    name: "David Cohen",
    country: "США 🇺🇸",
    genre: "Научная фантастика",
    bio: "Бывший инженер SpaceX, пишет о будущем технологий и этике ИИ.",
    earnings: "$240K за 3 года",
    avatarColor: "bg-rose-500",
  },
  {
    name: "Mei Lin",
    country: "Китай 🇨🇳",
    genre: "Современная драма",
    bio: "Лауреат премии «Новый голос Азии», книги переведены на 8 языков.",
    earnings: "$95K за 1 год",
    avatarColor: "bg-emerald-500",
  },
  {
    name: "Amara Diallo",
    country: "Нигерия 🇳🇬",
    genre: "Поэзия и проза",
    bio: "Начала с публикации стихов на платформе, теперь издаётся тиражом 50K+.",
    earnings: "$38K за 8 месяцев",
    avatarColor: "bg-amber-500",
  },
];

export default function AuthorsShowcase() {
  return (
    <section id="authors" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Истории успеха наших авторов
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Писатели из разных стран уже зарабатывают на своих книгах вместе с нами.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <div
              key={author.name}
              className="rounded-2xl border border-zinc-200 p-6 text-center dark:border-zinc-800"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white ${author.avatarColor}`}
              >
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-950 dark:text-white">
                {author.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{author.country}</p>
              <span className="mt-3 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                {author.genre}
              </span>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {author.bio}
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                💸 {author.earnings}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
