'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Divider } from '@/components/ui/Divider'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const shouldReduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: shouldReduce ? 0.01 : 0.5, ease: 'easeOut', delay: shouldReduce ? 0 : delay },
  })

  return (
    <section id="about" aria-labelledby="about-heading">
      <div ref={ref} className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">

        <motion.div {...fade(0)}>
          <SectionLabel number="01" title="About" className="mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Акцент-колонка */}
          <motion.div className="md:col-span-4 lg:col-span-3" {...fade(0.1)}>
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
          </motion.div>

          {/* Текст */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
            <motion.h2
              id="about-heading"
              className="font-serif text-display-sm text-ink leading-tight mb-8"
              {...fade(0.15)}
            >
              Создаём дизайн
              {' '}
              <em>и сайты</em>
              {' '}
              — от идеи до запуска
            </motion.h2>

            <div className="space-y-5 font-sans text-body text-ink max-w-xl">
              <motion.p {...fade(0.22)}>
                Студия графического дизайна и веб-разработки. Работаем с малым
                бизнесом — ресторанами, кафе, локальными брендами — теми, кому
                важна визуальная история, а не просто «сделать что-нибудь».
              </motion.p>
              <motion.p {...fade(0.3)}>
                Наша сила — в том, что дизайн и разработка живут под одной крышей.
                Айдентика, упаковка и интерфейс говорят одним языком.
                Никакого испорченного телефона между дизайнером и разработчиком.
              </motion.p>
              <motion.p {...fade(0.38)}>
                Работаем с нуля или улучшаем то, что уже есть. Начинается всё
                с разговора — чтобы понять задачу так, как понимаете её вы.
              </motion.p>
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
