'use client'

import { useRef, useState, useEffect } from 'react'

type Tag = 'div' | 'li' | 'section' | 'article' | 'p' | 'h2' | 'h3'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: Tag
}

export function FadeUp({ children, className = '', delay = 0, as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<'ssr' | 'hidden' | 'visible'>('ssr')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setState('visible'); return }

    // Уже в viewport при загрузке — показываем без анимации
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 10) {
      setState('visible')
      return
    }

    // Ниже fold — скрываем и ждём скролла
    setState('hidden')
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setState('visible'); observer.disconnect() } },
      { rootMargin: '-10px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: React.CSSProperties =
    state === 'hidden'
      ? { opacity: 0, transform: 'translateY(24px)' }
      : state === 'visible'
      ? { opacity: 1, transform: 'none', transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s` }
      : {}

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  )
}
