import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Mail } from 'lucide-react'
import { getProject, getAllSlugs } from '@/lib/projects'
import { Divider } from '@/components/ui/Divider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectContactForm } from '@/components/ui/ProjectContactForm'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Бетнева Studio`,
    description: project.intro,
  }
}

function Placeholder({
  label,
  aspect,
  color,
  filename,
}: {
  label: string
  aspect: string
  color: string
  filename: string
}) {
  return (
    <figure>
      <div
        className="w-full flex items-end p-5"
        style={{ aspectRatio: aspect, backgroundColor: color }}
        role="img"
        aria-label={`${label} — заменить файлом ${filename}`}
      >
        <span className="font-mono text-xs uppercase tracking-widest opacity-50"
          style={{ color: color === '#C2410C' ? '#fff' : '#1A1A1A' }}>
          {filename}
        </span>
      </div>
      <figcaption className="mt-2 font-mono text-caption uppercase text-ink-muted">
        {label}
      </figcaption>
    </figure>
  )
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const imgBase = `/images/projects/${project.slug}`

  return (
    <main id="main">
      {/* Навигация назад */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 pt-10">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px]"
          aria-label="Вернуться к портфолио"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Все работы
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 pt-10 pb-12 md:pb-16">
        <SectionLabel
          number={String(project.index).padStart(2, '0')}
          title={project.category}
          className="mb-8"
        />
        <h1 className="font-serif text-display-md md:text-display-lg text-ink leading-none tracking-tight">
          {project.title}
        </h1>
        <div className="mt-8 flex flex-wrap gap-6 items-center">
          <span className="font-mono text-caption uppercase text-ink-muted">{project.year}</span>
          <span className="w-px h-4 bg-rule" aria-hidden="true" />
          <span className="font-mono text-caption uppercase text-ink-muted">{project.category}</span>
        </div>
      </div>

      <Divider />

      {/* Главное изображение */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-12">
        {project.hasImages ? (
          <figure>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src={`${imgBase}/${project.main}`}
                alt={`${project.title} — главный скриншот`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </figure>
        ) : (
          <Placeholder
            label={`Главное изображение — ${project.title}`}
            aspect="16/9"
            color={project.placeholderColor}
            filename={project.main}
          />
        )}
      </div>

      <Divider />

      {/* Текст + мета */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Боковая мета */}
          <aside className="md:col-span-3" aria-label="Информация о проекте">
            <div className="space-y-8 md:sticky md:top-10">
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block mb-2">Год</span>
                <span className="font-sans text-body text-ink">{project.year}</span>
              </div>
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block mb-2">Категория</span>
                <span className="font-sans text-body text-ink">{project.category}</span>
              </div>
              <div>
                <span className="font-mono text-caption uppercase text-ink-muted block mb-3">Что сделано</span>
                <ul className="space-y-2" role="list">
                  {project.services.map((s) => (
                    <li key={s} className="font-sans text-sm text-ink">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Текст */}
          <div className="md:col-span-8 md:col-start-5">
            <p className="font-serif text-subheading text-ink leading-snug mb-8 italic">
              {project.intro}
            </p>
            <div className="space-y-5 font-sans text-body text-ink">
              {project.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Дополнительные изображения */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.extra.map((filename, i) => (
            project.hasImages ? (
              <figure key={filename}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={`${imgBase}/${filename}`}
                    alt={project.extraAlt[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 font-mono text-caption uppercase text-ink-muted">
                  {project.extraAlt[i]}
                </figcaption>
              </figure>
            ) : (
              <Placeholder
                key={filename}
                label={project.extraAlt[i]}
                aspect="3/2"
                color={`${project.placeholderColor}${i === 0 ? '' : i === 1 ? 'CC' : '99'}`}
                filename={filename}
              />
            )
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-caption uppercase text-ink-muted block mb-6">
              Хотите похожий проект?
            </span>
            <h2 className="font-serif text-display-sm text-ink leading-tight mb-6">
              Обсудим задачу
            </h2>
            <p className="font-sans text-body text-ink-muted">
              Расскажите что нужно — отвечу в течение дня.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Mail size={16} className="text-ink-muted" aria-hidden="true" />
              <a
                href="mailto:hello@betneva-site.ru"
                className="font-sans text-sm text-ink hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
              >
                hello@betneva-site.ru
              </a>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ProjectContactForm projectTitle={project.title} />
          </div>
        </div>
      </div>

      {/* Mini footer */}
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-caption uppercase text-ink-muted">
            © {new Date().getFullYear()} ИП Бетнева Галина Фёдоровна
          </p>
          <Link
            href="/"
            className="font-mono text-caption uppercase text-ink-muted hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </main>
  )
}
