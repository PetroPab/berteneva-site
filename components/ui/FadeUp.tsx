'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const motionComponents = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const

type Tag = keyof typeof motionComponents

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: Tag
}

export function FadeUp({ children, className = '', delay = 0, as = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })
  const shouldReduce = useReducedMotion()

  const Component = motionComponents[as] as typeof motion.div

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : (shouldReduce ? 0 : 24) }}
      transition={{ duration: shouldReduce ? 0.01 : 0.5, ease: 'easeOut', delay: shouldReduce ? 0 : delay }}
    >
      {children}
    </Component>
  )
}
