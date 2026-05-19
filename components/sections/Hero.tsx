'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'

const NAME = 'Бетнева'
const STUDIO = 'Studio'
const words = ['Студия', 'дизайна', 'и', 'разработки', '—', 'от', 'идеи', 'до', 'запуска']

export function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null)
  const studioRef = useRef<HTMLSpanElement>(null)
  const wordsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animateEl = (el: HTMLElement, delay: number, props: { opacity: string; transform?: string }) => {
      el.style.opacity = '0'
      if (props.transform) el.style.transform = props.transform
      setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease-out, transform 0.45s ease-out'
        el.style.opacity = '1'
        if (props.transform) el.style.transform = 'translateY(0) scaleX(1)'
      }, reduced ? 0 : delay)
    }

    // Посимвольная анимация имени
    nameRef.current?.querySelectorAll<HTMLSpanElement>('[data-c]').forEach((el, i) => {
      el.style.opacity = '0'
      if (!reduced) el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease-out, transform 0.45s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, reduced ? 0 : 80 + i * 50)
    })

    // Посимвольная анимация Studio
    const studioBase = 80 + NAME.length * 50 + 100
    studioRef.current?.querySelectorAll<HTMLSpanElement>('[data-c]').forEach((el, i) => {
      el.style.opacity = '0'
      if (!reduced) el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease-out, transform 0.45s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, reduced ? 0 : studioBase + i * 60)
    })

    // Анимация разделителя (scaleX 0 → 1)
    if (dividerRef.current) {
      const el = dividerRef.current
      el.style.transform = 'scaleX(0)'
      el.style.transformOrigin = 'left center'
      setTimeout(() => {
        el.style.transition = 'transform 0.7s ease-out'
        el.style.transform = 'scaleX(1)'
      }, reduced ? 0 : 900)
    }

    // Пословная анимация тэглайна
    wordsRef.current?.querySelectorAll<HTMLSpanElement>('[data-w]').forEach((el, i) => {
      el.style.opacity = '0'
      if (!reduced) el.style.transform = 'translateY(12px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, reduced ? 0 : 1100 + i * 70)
    })

    // CTA
    if (ctaRef.current) {
      const el = ctaRef.current
      el.style.opacity = '0'
      if (!reduced) el.style.transform = 'translateY(12px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, reduced ? 0 : 1900)
    }

    // Декоративная метка
    if (labelRef.current) {
      const el = labelRef.current
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease-out'
        el.style.opacity = '1'
      }, reduced ? 0 : 1600)
    }
  }, [])

  return (
    <section id="hero" aria-label="Главный экран">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <div className="relative pt-16 pb-12 md:pt-24 md:pb-16">

          {/* Декоративная метка — верхний правый угол (только десктоп) */}
          <p
            ref={labelRef}
            className="absolute top-16 right-0 md:top-24 hidden md:block font-mono text-caption uppercase text-ink-muted tracking-widest"
          >
            Дизайн · Разработка · Ярославль
          </p>

          {/* Имя — посимвольная анимация через useEffect */}
          <h1
            className="font-serif text-display-lg md:text-display-xl text-ink leading-none tracking-tight"
            aria-label="Бетнева Studio"
          >
            <span ref={nameRef} aria-hidden="true">
              {NAME.split('').map((char, i) => (
                <span key={i} data-c="" className="inline-block">{char}</span>
              ))}
            </span>
            {' '}
            <em className="not-italic" style={{ fontStyle: 'italic' }}>
              <span ref={studioRef} aria-hidden="true">
                {STUDIO.split('').map((char, i) => (
                  <span key={i} data-c="" className="inline-block">{char}</span>
                ))}
              </span>
            </em>
          </h1>

          {/* Разделитель — анимируется scaleX через useEffect */}
          <div ref={dividerRef} className="my-8 md:my-10 h-px bg-rule" />

          {/* Тэглайн — пословная анимация */}
          <div
            ref={wordsRef}
            className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-lead md:text-heading text-ink-muted max-w-2xl"
            aria-label="Студия дизайна и разработки — от идеи до запуска"
          >
            {words.map((word, i) => (
              <span key={i} data-w="" className="inline-block will-change-transform">
                {word}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="mt-10 md:mt-12 flex items-center gap-6">
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

        {/* Нижний разделитель секции */}
        <div className="border-t border-rule" />
      </div>
    </section>
  )
}
