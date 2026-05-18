'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'

const words = ['Дизайн', 'и', 'сайты', 'для', 'тех,', 'кому', 'важно', 'как']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const spans = containerRef.current?.querySelectorAll<HTMLSpanElement>('[data-word]')
    if (!spans) return

    spans.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(12px)'
      setTimeout(
        () => {
          el.style.transition = 'opacity 400ms ease-out, transform 400ms ease-out'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        },
        300 + i * 60
      )
    })
  }, [])

  return (
    <section id="hero" aria-label="Главный экран">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <div className="pt-16 pb-12 md:pt-24 md:pb-16">
          {/* Имя */}
          <h1 className="font-serif text-display-lg md:text-display-xl text-ink leading-none tracking-tight">
            Галина{' '}
            <em className="not-italic" style={{ fontStyle: 'italic' }}>
              Бетнева
            </em>
          </h1>

          <Divider className="my-8 md:my-10" />

          {/* Позиционирование */}
          <div
            ref={containerRef}
            className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-lead md:text-heading text-ink-muted max-w-2xl"
            aria-label="Дизайн и сайты для тех, кому важно как"
          >
            {words.map((word, i) => (
              <span key={i} data-word className="inline-block will-change-transform">
                {word}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex items-center gap-6">
            <Button as="a" href="#contact" variant="primary">
              Написать
            </Button>
            <a
              href="#portfolio"
              className="font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
            >
              Смотреть работы ↓
            </a>
          </div>
        </div>

        <Divider />
      </div>
    </section>
  )
}
