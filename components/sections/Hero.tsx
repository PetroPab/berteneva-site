'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const NAME = 'Бетнева'
const STUDIO = 'Studio'
const words = ['Студия', 'дизайна', 'и', 'разработки', '—', 'от', 'идеи', 'до', 'запуска']

export function Hero() {
  const shouldReduce = useReducedMotion()

  const d = (base: number) => (shouldReduce ? 0 : base)

  return (
    <section id="hero" aria-label="Главный экран">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <div className="relative pt-16 pb-12 md:pt-24 md:pb-16">

          {/* Декоративная метка — верхний правый угол */}
          <motion.p
            className="absolute top-16 right-0 md:top-24 hidden md:block font-mono text-caption uppercase text-ink-muted tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: d(1.5) }}
          >
            Дизайн · Разработка · Ярославль
          </motion.p>

          {/* Имя — посимвольная анимация */}
          <h1
            className="font-serif text-display-lg md:text-display-xl text-ink leading-none tracking-tight"
            aria-label="Бетнева Studio"
          >
            <span aria-hidden="true">
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: d(0.08 + i * 0.05), ease: 'easeOut' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {' '}
            <em className="not-italic" style={{ fontStyle: 'italic' }}>
              <span aria-hidden="true">
                {STUDIO.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: shouldReduce ? 0 : 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: d(0.2 + NAME.length * 0.05 + i * 0.06),
                      ease: 'easeOut',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </em>
          </h1>

          {/* Разделитель — анимированный слева направо */}
          <motion.div
            className="my-8 md:my-10 h-px bg-rule"
            style={{ transformOrigin: 'left center' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: d(0.9), ease: 'easeOut' }}
          />

          {/* Позиционирование — пословная анимация */}
          <div
            className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-lead md:text-heading text-ink-muted max-w-2xl"
            aria-label="Студия дизайна и разработки — от идеи до запуска"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: d(1.1 + i * 0.07), ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-10 md:mt-12 flex items-center gap-6"
            initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: d(1.9), ease: 'easeOut' }}
          >
            <Button as="a" href="#contact" variant="primary">
              Написать
            </Button>
            <a
              href="#portfolio"
              className="font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
            >
              Смотреть работы ↓
            </a>
          </motion.div>
        </div>

        {/* Нижний разделитель */}
        <div className="border-t border-rule" />
      </div>
    </section>
  )
}
