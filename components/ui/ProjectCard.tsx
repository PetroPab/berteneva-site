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
              transition: 'transform 400ms ease-out',
            }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end p-6"
            style={{
              backgroundColor: placeholderColor,
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 400ms ease-out',
            }}
          >
            <span className="font-mono text-caption uppercase text-ink-muted opacity-60">
              {String(index).padStart(2, '0')} / фото скоро
            </span>
          </div>
        )}
      </div>

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
