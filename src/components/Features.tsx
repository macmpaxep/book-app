const features = [
  {
    icon: "📚",
    title: "Публикация за минуты",
    description:
      "Загрузите рукопись в любом формате — мы автоматически подготовим e-book, аудио- и print-on-demand версии.",
  },
  {
    icon: "🌍",
    title: "Глобальная дистрибуция",
    description:
      "Книги мгновенно попадают в 80+ стран и на все крупные площадки: Amazon, Apple Books, Google Play и другие.",
  },
  {
    icon: "💰",
    title: "До 70% роялти",
    description:
      "Прозрачная система выплат без скрытых комиссий. Получайте доход на карту или в криптовалюте каждый месяц.",
  },
  {
    icon: "🎧",
    title: "AI-озвучка книг",
    description:
      "Превратите текст в профессиональную аудиокнигу на 30+ языках с помощью встроенного AI-синтеза речи.",
  },
  {
    icon: "📊",
    title: "Аналитика в реальном времени",
    description:
      "Отслеживайте продажи, читательскую активность и выручку по странам в едином дашборде.",
  },
  {
    icon: "🤝",
    title: "Сообщество авторов",
    description:
      "Находите соавторов, редакторов и иллюстраторов, участвуйте в конкурсах и литературных резиденциях.",
  },
];

export default function Features() {
  return (
    <section id="how-it-works" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Всё, что нужно независимому автору
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            От черновика до международных продаж — на одной платформе.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 p-8 transition hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-indigo-800"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
