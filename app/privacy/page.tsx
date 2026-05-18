import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Divider } from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Бетнева Studio',
  description: 'Политика обработки персональных данных ИП Бетнева Галина Фёдоровна',
  robots: { index: false },
}

const UPDATED = '17 мая 2025 г.'

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
      {/* Назад */}
      <div className="pt-10 pb-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px]"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          На главную
        </Link>
      </div>

      {/* Шапка */}
      <div className="pt-10 pb-12">
        <p className="font-mono text-caption uppercase text-ink-muted mb-4">
          Редакция от {UPDATED}
        </p>
        <h1 className="font-serif text-display-sm text-ink leading-tight">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 font-sans text-body text-ink-muted max-w-xl">
          Настоящая Политика определяет порядок обработки персональных данных,
          собираемых через сайт betneva-site.ru.
        </p>
      </div>

      <Divider />

      {/* Контент */}
      <div className="py-12 max-w-2xl space-y-12">

        {/* 1 */}
        <section aria-labelledby="s1">
          <h2 id="s1" className="font-serif text-heading text-ink mb-5">
            1. Оператор персональных данных
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Оператором персональных данных является индивидуальный предприниматель
              Бетнева Галина Фёдоровна (ИНН&nbsp;760300311780), далее — «Оператор».
            </p>
            <p>
              Контактный телефон: <a href="tel:+79109745521" className="underline hover:text-accent transition-colors">+7&nbsp;910&nbsp;974-55-21</a><br />
              Электронная почта: <a href="mailto:hello@betneva-site.ru" className="underline hover:text-accent transition-colors">hello@betneva-site.ru</a>
            </p>
          </div>
        </section>

        <Divider />

        {/* 2 */}
        <section aria-labelledby="s2">
          <h2 id="s2" className="font-serif text-heading text-ink mb-5">
            2. Правовое основание обработки
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-muted">
              <li>
                Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»;
              </li>
              <li>
                согласия субъекта персональных данных, выраженного путём проставления
                отметки в форме обратной связи на сайте.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* 3 */}
        <section aria-labelledby="s3">
          <h2 id="s3" className="font-serif text-heading text-ink mb-5">
            3. Состав персональных данных
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Через форму обратной связи Оператор собирает следующие данные:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-muted">
              <li>имя (имя и/или фамилия);</li>
              <li>адрес электронной почты;</li>
              <li>текст сообщения, оставленного пользователем.</li>
            </ul>
            <p>
              Иные персональные данные (номер телефона, адрес и пр.) Оператор
              не запрашивает через формы на сайте.
            </p>
          </div>
        </section>

        <Divider />

        {/* 4 */}
        <section aria-labelledby="s4">
          <h2 id="s4" className="font-serif text-heading text-ink mb-5">
            4. Цели обработки персональных данных
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>Персональные данные обрабатываются исключительно в целях:</p>
            <ul className="list-disc pl-6 space-y-2 text-ink-muted">
              <li>ответа на обращение пользователя;</li>
              <li>обсуждения условий возможного сотрудничества;</li>
              <li>направления коммерческого предложения по запросу пользователя.</li>
            </ul>
            <p>
              Оператор не использует персональные данные для маркетинговых рассылок
              без отдельного согласия пользователя.
            </p>
          </div>
        </section>

        <Divider />

        {/* 5 */}
        <section aria-labelledby="s5">
          <h2 id="s5" className="font-serif text-heading text-ink mb-5">
            5. Порядок и условия обработки
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Оператор обрабатывает персональные данные с использованием средств
              автоматизации. Данные передаются по защищённому протоколу HTTPS.
            </p>
            <p>
              Для доставки писем от формы обратной связи Оператор использует
              сервис Resend (Resend Inc., США). Передача данных третьим лицам
              в иных целях не осуществляется. Персональные данные не продаются,
              не обмениваются и не раскрываются публично.
            </p>
            <p>
              Срок хранения данных — до достижения цели обработки либо до отзыва
              согласия субъектом персональных данных, но не более <strong>3 лет</strong> с момента
              последнего обращения.
            </p>
          </div>
        </section>

        <Divider />

        {/* 6 */}
        <section aria-labelledby="s6">
          <h2 id="s6" className="font-serif text-heading text-ink mb-5">
            6. Права субъекта персональных данных
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              В соответствии со ст.&nbsp;14–17 Федерального закона № 152-ФЗ
              вы имеете право:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-muted">
              <li>получить сведения об обработке ваших персональных данных;</li>
              <li>потребовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку в любой момент;</li>
              <li>
                обжаловать действия Оператора в Роскомнадзор ({' '}
                <a
                  href="https://rkn.gov.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent transition-colors"
                >
                  rkn.gov.ru
                </a>
                ).
              </li>
            </ul>
            <p>
              Для реализации прав направьте запрос по электронной почте:{' '}
              <a href="mailto:hello@betneva-site.ru" className="underline hover:text-accent transition-colors">
                hello@betneva-site.ru
              </a>
              . Оператор рассматривает запросы в течение 10 рабочих дней.
            </p>
          </div>
        </section>

        <Divider />

        {/* 7 */}
        <section aria-labelledby="s7">
          <h2 id="s7" className="font-serif text-heading text-ink mb-5">
            7. Cookies и счётчики
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Сайт не использует аналитические сервисы третьих сторон (Google
              Analytics, Яндекс.Метрика и аналогичные) и не устанавливает
              маркетинговые cookies.
            </p>
            <p>
              Технические cookies, необходимые для работы сайта (сессионные, csrf),
              могут сохраняться в браузере пользователя и удаляются по окончании
              сеанса.
            </p>
          </div>
        </section>

        <Divider />

        {/* 8 */}
        <section aria-labelledby="s8">
          <h2 id="s8" className="font-serif text-heading text-ink mb-5">
            8. Защита персональных данных
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Оператор принимает необходимые организационные и технические меры
              для защиты персональных данных от неправомерного или случайного
              доступа, уничтожения, изменения, блокирования, копирования и
              распространения:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-muted">
              <li>передача данных по протоколу HTTPS с TLS-шифрованием;</li>
              <li>ограничение доступа к данным кругом уполномоченных лиц;</li>
              <li>
                использование сервисов, соответствующих требованиям безопасности.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* 9 */}
        <section aria-labelledby="s9">
          <h2 id="s9" className="font-serif text-heading text-ink mb-5">
            9. Изменение политики
          </h2>
          <div className="font-sans text-body text-ink space-y-3">
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Актуальная
              редакция всегда размещена на странице{' '}
              <strong>betneva-site.ru/privacy</strong>. Дата последнего обновления
              указана в начале документа.
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Divider />
      <div className="py-8">
        <p className="font-mono text-caption uppercase text-ink-muted">
          © {new Date().getFullYear()} ИП Бетнева Галина Фёдоровна · ИНН 760300311780
        </p>
      </div>
    </main>
  )
}
