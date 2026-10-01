export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-black dark:to-black">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
        {kicker && (
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
            {kicker}
          </span>
        )}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
