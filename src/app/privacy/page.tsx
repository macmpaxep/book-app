import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — xread",
  description: "Как xread собирает, использует и защищает ваши данные.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="🔒 Документы" title="Политика конфиденциальности" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-7 text-zinc-700 dark:text-zinc-300 lg:px-8">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">Последнее обновление: 1 октября 2026</p>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">1. Какие данные мы собираем</h2>
          <p className="mt-2">
            Мы собираем email, имя, платёжные реквизиты для выплат роялти, а также обезличенную
            аналитику использования сайта (посещения, устройство, страна).
          </p>
          <p className="mt-2">
            Если вы оставляете заявку на книгу на странице автора, мы получаем ваше имя и номер
            телефона и используем их только для связи по заказу: согласования оплаты и доставки.
            Заявка сохраняется в защищённой базе данных и пересылается владельцу страницы в Telegram.
            Удалить свои данные можно, написав на{" "}
            <a href="mailto:authors@xread.me" className="font-semibold text-indigo-600 hover:text-indigo-500">
              authors@xread.me
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">2. Как мы используем данные</h2>
          <p className="mt-2">
            Данные используются для предоставления сервиса, расчёта и выплаты роялти, технической
            поддержки и улучшения платформы. Мы не продаём персональные данные третьим лицам.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">3. Аналитика</h2>
          <p className="mt-2">
            Для аналитики посещаемости мы используем собственную систему без сторонних cookie-трекеров.
            Данные хранятся на наших серверах.
          </p>
          <p className="mt-2">
            На отдельных рекламных страницах (например, страницах книг авторов) мы дополнительно
            используем пиксель Meta (Facebook и Instagram). Он передаёт в Meta обезличенные данные о
            посещении страницы и нажатии на кнопки заказа, чтобы показывать рекламу тем, кому она может
            быть интересна. Управлять показом рекламы можно в настройках вашего аккаунта Meta.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">4. Хранение и защита</h2>
          <p className="mt-2">
            Данные хранятся на защищённых серверах с шифрованием при передаче. Доступ к персональным
            данным имеют только уполномоченные сотрудники.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">5. Ваши права</h2>
          <p className="mt-2">
            Вы можете запросить копию, исправление или удаление своих данных, написав на{" "}
            <a href="mailto:authors@xread.me" className="font-semibold text-indigo-600 hover:text-indigo-500">
              authors@xread.me
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
