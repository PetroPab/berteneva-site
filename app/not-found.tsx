import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Галина Бетнева',
}

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-dvh bg-bg flex flex-col"
      aria-labelledby="nf-heading"
    >
      {/* Верхняя линия */}
      <div className="mx-auto w-full max-w-site px-5 md:px-8 xl:px-12 pt-10">
        <div className="border-t border-rule" />
      </div>

      {/* Центральный блок */}
      <div className="flex-1 flex flex-col justify-center mx-auto w-full max-w-site px-5 md:px-8 xl:px-12">

        {/* Большое 404 */}
        <div className="relative select-none" aria-hidden="true">
          <span
            className="font-serif text-ink leading-none"
            style={{ fontSize: 'clamp(8rem, 30vw, 22rem)', opacity: 0.06 }}
          >
            404
          </span>
        </div>

        {/* Текст поверх */}
        <div className="-mt-[clamp(5rem,15vw,12rem)] relative z-10 pb-16">
          <p className="font-mono text-caption uppercase text-ink-muted mb-6">
            Ошибка 404
          </p>
          <h1
            id="nf-heading"
            className="font-serif text-display-sm md:text-display-md text-ink leading-tight mb-6 max-w-lg"
          >
            Страница ушла
            {' '}
            <em>на объект</em>
          </h1>
          <p className="font-sans text-body text-ink-muted max-w-md mb-10">
            Возможно, адрес изменился или страница была удалена.
            Всё остальное — на месте.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 font-mono text-caption uppercase text-ink hover:text-accent transition-colors duration-150 min-h-[44px] group"
          >
            <span
              className="block w-8 h-px bg-ink group-hover:bg-accent group-hover:w-12 transition-all duration-300"
              aria-hidden="true"
            />
            На главную
          </Link>
        </div>
      </div>

      {/* Нижняя линия + реквизиты */}
      <div className="mx-auto w-full max-w-site px-5 md:px-8 xl:px-12 pb-8">
        <div className="border-t border-rule mb-6" />
        <p className="font-mono text-caption uppercase text-ink-muted">
          betneva-site.ru
        </p>
      </div>
    </main>
  )
}
