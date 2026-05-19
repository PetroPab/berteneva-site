'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

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
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10px 0px' })
  const shouldReduce = useReducedMotion()

  useEffect(() => { setMounted(true) }, [])

  const Component = motionComponents[as] as typeof motion.div

  if (!mounted) {
    const Tag = as as keyof JSX.IntrinsicElements
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0.01 : 0.5, ease: 'easeOut', delay: shouldReduce ? 0 : delay }}
    >
      {children}
    </Component>
  )
}
