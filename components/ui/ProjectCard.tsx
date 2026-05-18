'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  index: number
  size?: 'full' | 'half'
  placeholderColor?: string
  imageSrc?: string
}

export function ProjectCard({
  title,
  description,
  index,
  size = 'half',
  placeholderColor = '#D9D5CB',
  imageSrc,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: size === 'full' ? '16/7' : '4/3',
          transition: 'box-shadow 300ms ease-out',
          boxShadow: hovered ? '0 8px 32px rgba(26,26,26,0.08)' : 'none',
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes={size === 'full' ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
            className="object-cover"
            style={{
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 500ms ease-out',
            }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end p-6"
            style={{
              backgroundColor: placeholderColor,
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 500ms ease-out',
            }}
          >
            <span className="font-mono text-caption uppercase text-ink-muted opacity-60">
              {String(index).padStart(2, '0')} / фото скоро
            </span>
          </div>
        )}

        {/* Индекс — оверлей левый верхний угол */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="font-mono text-caption uppercase tracking-widest text-white px-2 py-1 transition-colors duration-200"
            style={{
              backgroundColor: hovered ? '#C2410C' : 'rgba(26,26,26,0.45)',
              letterSpacing: '0.08em',
            }}
          >
            {String(index).padStart(2, '0')}
          </span>
        </div>

        {/* Акцент-полоса снизу — въезжает на hover */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-accent z-10"
          style={{
            width: hovered ? '100%' : '0%',
            transition: 'width 450ms ease-out',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Подпись */}
      <div
        className="mt-4"
        style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 200ms ease-out',
        }}
      >
        <h3 className="font-serif text-subheading text-ink leading-tight">{title}</h3>
        <p className="mt-1 font-sans text-sm text-ink-muted">{description}</p>
      </div>
    </article>
  )
}
