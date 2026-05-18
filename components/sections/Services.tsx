import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'
import { FadeUp } from '@/components/ui/FadeUp'

const design = [
  'Логотипы и фирменный стиль',
  'Упаковка и этикетки',
  'Полиграфия: меню, брошюры, визитки',
  'Оформление соцсетей',
  'Иллюстрации',
]

const dev = [
  'Сайты под ключ',
  'Лендинги',
  'Доработка существующих сайтов',
  'Веб-приложения',
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">

        <FadeUp>
          <SectionLabel number="02" title="Services" className="mb-12" />
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2
            id="services-heading"
            className="font-serif text-display-sm text-ink leading-tight mb-14 max-w-lg"
          >
            Что мы делаем
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px bg-rule">

          {/* Дизайн */}
          <FadeUp delay={0.14} className="bg-bg">
            <div className="p-8 md:p-10">
              <h3 className="font-mono text-caption uppercase text-ink-muted mb-8 tracking-widest">
                Дизайн
              </h3>
              <ul className="space-y-5" role="list">
                {design.map((item) => (
                  <li
                    key={item}
                    className="group relative font-serif text-subheading text-ink border-b border-rule pb-5 last:border-0 last:pb-0 overflow-hidden"
                  >
                    <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2">
                      {item}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300 ease-out"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Разработка */}
          <FadeUp delay={0.22} className="bg-bg border-t border-rule md:border-0">
            <div className="p-8 md:p-10">
              <h3 className="font-mono text-caption uppercase text-ink-muted mb-8 tracking-widest">
                Разработка
              </h3>
              <ul className="space-y-5" role="list">
                {dev.map((item) => (
                  <li
                    key={item}
                    className="group relative font-serif text-subheading text-ink border-b border-rule pb-5 last:border-0 last:pb-0 overflow-hidden"
                  >
                    <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2">
                      {item}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300 ease-out"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>

              {/* Цитата-акцент */}
              <blockquote className="mt-12 bg-accent-soft px-6 py-5">
                <p className="font-serif text-lg italic text-ink leading-snug">
                  «Дизайн и разработка в одной студии — визуальная целостность
                  и чёткий процесс»
                </p>
              </blockquote>
            </div>
          </FadeUp>

        </div>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
    </section>
  )
}
