const plans = [
  {
    name: "Starter",
    price: "Бесплатно",
    description: "Для начинающих авторов, готовых опубликовать первую книгу.",
    features: ["1 книга в публикации", "Роялти 50%", "Базовая аналитика", "E-book дистрибуция"],
    highlighted: false,
  },
  {
    name: "Author Pro",
    price: "$19/мес",
    description: "Для авторов, которые пишут и издают регулярно.",
    features: [
      "Неограниченное число книг",
      "Роялти до 70%",
      "AI-озвучка аудиокниг",
      "Print-on-demand",
      "Расширенная аналитика",
    ],
    highlighted: true,
  },
  {
    name: "Publisher",
    price: "Индивидуально",
    description: "Для издательств и литературных агентств.",
    features: [
      "Управление командой авторов",
      "Персональный менеджер",
      "API для интеграций",
      "Приоритетная модерация",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Тарифы для любого этапа карьеры
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Начните бесплатно и растите вместе с аудиторией.
          </p>
        </div>

        <div id="monetization" className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-indigo-600 bg-white shadow-xl dark:bg-zinc-900"
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Популярный
                </span>
              )}
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-0.5 text-indigo-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-zinc-300 text-zinc-800 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
                }`}
              >
                Выбрать план
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
