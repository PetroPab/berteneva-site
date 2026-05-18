import { Divider } from '@/components/ui/Divider'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer aria-label="Подвал сайта">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Юр. информация */}
          <div className="space-y-1">
            <p className="font-mono text-caption uppercase text-ink-muted">
              ИП Бетнева Галина Фёдоровна
            </p>
            <p className="font-mono text-caption uppercase text-ink-muted">
              ИНН 760300311780
            </p>
          </div>

          {/* Ссылки */}
          <nav aria-label="Юридические документы">
            <ul className="flex flex-wrap gap-6" role="list">
              <li>
                <a
                  href="/privacy"
                  className="font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </nav>

          {/* Копирайт */}
          <p className="font-mono text-caption uppercase text-ink-muted">
            © {year} Бетнева Г.Ф.
          </p>
        </div>
      </div>
    </footer>
  )
}
