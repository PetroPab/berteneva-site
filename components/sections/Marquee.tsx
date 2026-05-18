const items = [
  'Дизайн',
  '·',
  'Разработка',
  '·',
  'Айдентика',
  '·',
  'Упаковка',
  '·',
  'Сайты',
  '·',
  'Лендинги',
  '·',
  'Этикетки',
  '·',
  'Полиграфия',
  '·',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden border-y border-rule py-5 bg-bg"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-block font-mono text-caption uppercase tracking-widest mx-4 ${
              item === '·' ? 'text-accent' : 'text-ink-muted'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
