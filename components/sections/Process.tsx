import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'
import { FadeUp } from '@/components/ui/FadeUp'

const steps = [
  {
    number: '01',
    title: 'Знакомство',
    description:
      'Обсуждаем задачу, сроки и бюджет. Без лишних вопросов — только то, что важно для старта.',
  },
  {
    number: '02',
    title: 'Концепт',
    description:
      'Показываем направление. Обсуждаем, корректируем, фиксируем — прежде чем идти дальше.',
  },
  {
    number: '03',
    title: 'Реализация',
    description:
      'Работаем и держим в курсе. Промежуточные показы по договорённости.',
  },
  {
    number: '04',
    title: 'Сдача',
    description:
      'Передаём файлы или запускаем сайт. Объясняем что и как, чтобы вы могли работать самостоятельно.',
  },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">

        <FadeUp>
          <SectionLabel number="04" title="Process" className="mb-12" />
        </FadeUp>

        <FadeUp delay={0.08} as="h2" className="font-serif text-display-sm text-ink leading-tight mb-14 max-w-lg">
          <span id="process-heading">Как устроена работа</span>
        </FadeUp>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0" role="list">
          {steps.map((step, i) => (
            <FadeUp
              key={step.number}
              as="li"
              delay={0.18 + i * 0.1}
              className={`relative overflow-hidden p-8 md:p-10 border-b border-rule md:border-b-0 md:border-r last:border-r-0 last:border-b-0 ${
                i === 0 ? 'md:border-l-0' : ''
              }`}
            >
              <span
                className="absolute -top-3 -right-1 font-serif leading-none select-none pointer-events-none text-ink"
                style={{ fontSize: '6.5rem', opacity: 0.05 }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="relative font-mono text-caption uppercase text-accent block mb-6">
                {step.number}
              </span>
              <h3 className="relative font-serif text-heading text-ink mb-4">{step.title}</h3>
              <p className="relative font-sans text-body text-ink-muted leading-relaxed">{step.description}</p>
            </FadeUp>
          ))}
        </ol>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
    </section>
  )
}
