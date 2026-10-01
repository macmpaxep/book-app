import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Условия использования — xread",
  description: "Условия использования платформы xread.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="📄 Документы" title="Условия использования" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-7 text-zinc-700 dark:text-zinc-300 lg:px-8">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">Последнее обновление: 1 октября 2026</p>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">1. Общие положения</h2>
          <p className="mt-2">
            Используя платформу xread, вы соглашаетесь с настоящими условиями. Если вы не согласны с
            каким-либо пунктом, пожалуйста, не используйте сервис.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">2. Авторские права</h2>
          <p className="mt-2">
            Автор сохраняет все права на опубликованные произведения. xread получает неисключительную
            лицензию на дистрибуцию книги в рамках выбранных автором каналов продаж.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">3. Роялти и выплаты</h2>
          <p className="mt-2">
            Ставки роялти зависят от тарифного плана автора и описаны в разделе «Гайд по роялти».
            Выплаты производятся ежемесячно при достижении минимального порога вывода.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">4. Запрещённый контент</h2>
          <p className="mt-2">
            Запрещена публикация материалов, нарушающих законодательство, пропагандирующих насилие,
            дискриминацию, а также материалов, нарушающих права третьих лиц.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">5. Ограничение ответственности</h2>
          <p className="mt-2">
            xread предоставляет платформу «как есть» и не несёт ответственности за содержание книг,
            опубликованных авторами.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">6. Изменение условий</h2>
          <p className="mt-2">
            Мы можем обновлять эти условия. О существенных изменениях авторы уведомляются по email не
            менее чем за 14 дней.
          </p>
        </div>
      </section>
    </>
  );
}
