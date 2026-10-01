import Image from "next/image";

const books = [
  {
    title: "Город туманов",
    author: "Елена Марич",
    genre: "Фэнтези",
    rating: "4.8",
    price: "$3.99",
    cover: "/covers/gorod-tumanov.jpg",
    country: "🇷🇺",
  },
  {
    title: "The Last Algorithm",
    author: "David Cohen",
    genre: "Sci-Fi",
    rating: "4.6",
    price: "$5.49",
    cover: "/covers/last-algorithm.jpg",
    country: "🇺🇸",
  },
  {
    title: "花园的影子",
    author: "Mei Lin",
    genre: "Драма",
    rating: "4.9",
    price: "$2.99",
    cover: "/covers/sad-tenei.jpg",
    country: "🇨🇳",
  },
  {
    title: "El Vuelo de Ícaro",
    author: "Carlos Rivas",
    genre: "Триллер",
    rating: "4.7",
    price: "$4.29",
    cover: "/covers/vuelo-de-icaro.jpg",
    country: "🇪🇸",
  },
  {
    title: "Die Stille Stadt",
    author: "Anna Weber",
    genre: "Детектив",
    rating: "4.5",
    price: "$3.49",
    cover: "/covers/stille-stadt.jpg",
    country: "🇩🇪",
  },
  {
    title: "Sakura no Yume",
    author: "Haruto Sato",
    genre: "Young Adult",
    rating: "4.8",
    price: "$2.49",
    cover: "/covers/sakura-no-yume.jpg",
    country: "🇯🇵",
  },
  {
    title: "Rhythm of the Nile",
    author: "Amara Diallo",
    genre: "Поэзия",
    rating: "4.9",
    price: "$1.99",
    cover: "/covers/rhythm-of-the-nile.jpg",
    country: "🇳🇬",
  },
  {
    title: "O Jardim Secreto",
    author: "Beatriz Costa",
    genre: "Романтика",
    rating: "4.7",
    price: "$3.29",
    cover: "/covers/jardim-secreto.jpg",
    country: "🇧🇷",
  },
];

export default function BooksShowcase() {
  return (
    <section id="books" className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Книги наших авторов
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Разные жанры, языки и страны — одна платформа для публикации и продаж.
            </p>
          </div>
          <a
            href="#catalog"
            className="whitespace-nowrap text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Весь каталог →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div key={book.title} className="group">
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl shadow-md transition group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={book.cover}
                  alt={`Обложка книги «${book.title}»`}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
                  className="object-cover"
                />
                <span className="absolute right-3 top-3 text-lg drop-shadow">{book.country}</span>
              </div>
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  ⭐ {book.rating}
                </span>
                <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                  {book.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
