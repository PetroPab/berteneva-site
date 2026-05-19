'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'

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

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <li
      className={`relative overflow-hidden p-8 md:p-10 border-b border-rule md:border-b-0 md:border-r last:border-r-0 last:border-b-0 ${
        index === 0 ? 'md:border-l-0' : ''
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
    </li>
  )
}

export function Process() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const shouldReduce = useReducedMotion()

  useEffect(() => { setMounted(true) }, [])

  // SSR — рендерим видимо без анимации
  if (!mounted) {
    return (
      <section id="process" aria-labelledby="process-heading">
        <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">
          <SectionLabel number="04" title="Process" className="mb-12" />
          <h2 id="process-heading" className="font-serif text-display-sm text-ink leading-tight mb-14 max-w-lg">
            Как устроена работа
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0" role="list">
            {steps.map((step, i) => <StepItem key={step.number} step={step} index={i} />)}
          </ol>
        </div>
        <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12"><Divider /></div>
      </section>
    )
  }

  return (
    <section id="process" aria-labelledby="process-heading">
      <div ref={ref} className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel number="04" title="Process" className="mb-12" />
        </motion.div>

        <motion.h2
          id="process-heading"
          className="font-serif text-display-sm text-ink leading-tight mb-14 max-w-lg"
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: shouldReduce ? 0 : 0.08 }}
        >
          Как устроена работа
        </motion.h2>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0" role="list">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              className={`relative overflow-hidden p-8 md:p-10 border-b border-rule md:border-b-0 md:border-r last:border-r-0 last:border-b-0 ${
                i === 0 ? 'md:border-l-0' : ''
              }`}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: shouldReduce ? 0 : 0.18 + i * 0.1 }}
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
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
    </section>
  )
}
