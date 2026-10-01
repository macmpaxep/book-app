import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Мобильное приложение — xread",
  description: "Читайте и управляйте публикациями xread с телефона.",
};

const features = [
  { icon: "📖", title: "Читалка офлайн", description: "Скачивайте книги и читайте без интернета." },
  { icon: "📊", title: "Аналитика в кармане", description: "Следите за продажами и роялти в реальном времени." },
  { icon: "🔔", title: "Push-уведомления", description: "Узнавайте о новых отзывах и продажах мгновенно." },
  { icon: "🎧", title: "Аудиокниги", description: "Слушайте и переключайтесь между текстом и аудио." },
];

export default function MobileAppPage() {
  return (
    <>
      <PageHero
        kicker="📱 iOS и Android"
        title="xread у вас в кармане"
        description="Публикуйте, отслеживайте доход и читайте книги авторов xread в одном приложении."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <span className="text-3xl">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
          >
             Скачать в App Store
          </a>
          <a
            href="#"
            className="rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
          >
            ▶ Скачать в Google Play
          </a>
        </div>
      </section>
    </>
  );
}
