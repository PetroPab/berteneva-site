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
  'Бренды',
  '·',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden border-b border-b-rule py-6 bg-bg"
      style={{ borderTop: '2px solid #C2410C' }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-block font-mono text-sm uppercase tracking-widest mx-6 ${
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
