import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'
import { FadeUp } from '@/components/ui/FadeUp'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">

        <FadeUp>
          <SectionLabel number="01" title="About" className="mb-12" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          <FadeUp delay={0.1} className="md:col-span-4 lg:col-span-3">
            <div className="relative border-l-2 border-accent pl-5 py-1">
              <p className="font-serif text-xl italic text-ink leading-snug">
                «Дизайн и разработка под одной крышей»
              </p>
            </div>
            <div className="mt-10 space-y-6">
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block">Направления</span>
                <span className="font-sans text-body text-ink mt-1 block">Дизайн</span>
                <span className="font-sans text-body text-ink block">Разработка</span>
              </div>
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block">Клиенты</span>
                <span className="font-sans text-body text-ink mt-1 block">Малый бизнес</span>
                <span className="font-sans text-body text-ink block">Рестораны · Бренды</span>
              </div>
            </div>
          </FadeUp>

          <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
            <FadeUp
              delay={0.15}
              as="h2"
              className="font-serif text-display-sm text-ink leading-tight mb-8"
            >
              <span id="about-heading">Создаём дизайн <em>и сайты</em> — от идеи до запуска</span>
            </FadeUp>

            <div className="space-y-5 font-sans text-body text-ink max-w-xl">
              <FadeUp delay={0.22} as="p">
                Студия графического дизайна и веб-разработки. Работаем с малым
                бизнесом — ресторанами, кафе, локальными брендами — теми, кому
                важна визуальная история, а не просто «сделать что-нибудь».
              </FadeUp>
              <FadeUp delay={0.3} as="p">
                Наша сила — в том, что дизайн и разработка живут под одной крышей.
                Айдентика, упаковка и интерфейс говорят одним языком.
                Никакого испорченного телефона между дизайнером и разработчиком.
              </FadeUp>
              <FadeUp delay={0.38} as="p">
                Работаем с нуля или улучшаем то, что уже есть. Начинается всё
                с разговора — чтобы понять задачу так, как понимаете её вы.
              </FadeUp>
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
