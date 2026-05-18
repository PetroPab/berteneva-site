import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">
        <SectionLabel number="01" title="About" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Фото — заглушка */}
          <div className="md:col-span-4 lg:col-span-3">
            <div
              className="w-full aspect-[3/4] bg-rule flex items-end p-4"
              aria-label="Фото Галины Бетневой — заменить"
            >
              <span className="font-mono text-caption uppercase text-ink-muted opacity-60">
                Фото / заменить
              </span>
            </div>
          </div>

          {/* Текст */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
            <h2
              id="about-heading"
              className="font-serif text-display-sm text-ink leading-tight mb-8"
            >
              Делаю дизайн
              {' '}
              <em>и сайты</em>
              {' '}
              — от идеи до запуска
            </h2>

            <div className="space-y-5 font-sans text-body text-ink max-w-xl">
              <p>
                Занимаюсь графическим дизайном и веб-разработкой. Работаю с малым
                бизнесом — ресторанами, кафе, локальными брендами — теми, кому
                важна визуальная история, а не просто «сделать что-нибудь».
              </p>
              <p>
                Моя особенность в том, что я делаю всё сама: от логотипа до готового
                сайта. Айдентика, упаковка и интерфейс говорят одним языком.
                Никакого испорченного телефона между дизайнером и разработчиком.
              </p>
              <p>
                Работаю с нуля или улучшаю то, что уже есть. Начинается всё
                с разговора — чтобы понять задачу так, как понимаете её вы.
              </p>
            </div>

            {/* Мета */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block">Направления</span>
                <span className="font-sans text-body text-ink mt-1 block">Дизайн · Разработка</span>
              </div>
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block">Клиенты</span>
                <span className="font-sans text-body text-ink mt-1 block">Малый бизнес, рестораны, бренды</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
    </section>
  )
}
