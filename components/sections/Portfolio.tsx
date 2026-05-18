import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Divider } from '@/components/ui/Divider'
import { projects } from '@/lib/projects'

function coverSrc(slug: string, main: string, hasImages: boolean) {
  return hasImages ? `/images/projects/${slug}/${main}` : undefined
}

export function Portfolio() {
  const [p1, p2, p3, p4, p5] = projects

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12 py-20 md:py-28">
        <SectionLabel number="03" title="Portfolio" className="mb-12" />

        <h2
          id="portfolio-heading"
          className="font-serif text-display-sm text-ink leading-tight mb-14"
        >
          Работы
        </h2>

        {/* Лента: full → 2 рядом → full → full */}
        <div className="space-y-8">

          {/* 1: Полная ширина */}
          <Link href={`/projects/${p1.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            <ProjectCard
              title={p1.title}
              description={p1.tagline}
              index={p1.index}
              size="full"
              placeholderColor={p1.placeholderColor}
              imageSrc={coverSrc(p1.slug, p1.main, p1.hasImages)}
            />
          </Link>

          {/* 2+3: Два рядом */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href={`/projects/${p2.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              <ProjectCard
                title={p2.title}
                description={p2.tagline}
                index={p2.index}
                size="half"
                placeholderColor={p2.placeholderColor}
                imageSrc={coverSrc(p2.slug, p2.main, p2.hasImages)}
              />
            </Link>
            <Link href={`/projects/${p3.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              <ProjectCard
                title={p3.title}
                description={p3.tagline}
                index={p3.index}
                size="half"
                placeholderColor={p3.placeholderColor}
                imageSrc={coverSrc(p3.slug, p3.main, p3.hasImages)}
              />
            </Link>
          </div>

          {/* 4: Полная ширина */}
          <Link href={`/projects/${p4.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            <ProjectCard
              title={p4.title}
              description={p4.tagline}
              index={p4.index}
              size="full"
              placeholderColor={p4.placeholderColor}
              imageSrc={coverSrc(p4.slug, p4.main, p4.hasImages)}
            />
          </Link>

          {/* 5: Полная ширина (последний всегда на всю ширину) */}
          <Link href={`/projects/${p5.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            <ProjectCard
              title={p5.title}
              description={p5.tagline}
              index={p5.index}
              size="full"
              placeholderColor={p5.placeholderColor}
              imageSrc={coverSrc(p5.slug, p5.main, p5.hasImages)}
            />
          </Link>

        </div>
      </div>

      <div className="mx-auto max-w-site px-5 md:px-8 xl:px-12">
        <Divider />
      </div>
    </section>
  )
}
