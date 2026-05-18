interface SectionLabelProps {
  number: string
  title: string
  className?: string
}

export function SectionLabel({ number, title, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-mono text-caption uppercase text-ink-muted ${className}`}>
      <span>{number}</span>
      <span className="block w-6 h-px bg-ink-muted" aria-hidden="true" />
      <span>{title}</span>
    </div>
  )
}
