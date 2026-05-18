import type { Metadata } from 'next'
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Галина Бетнева — дизайн и сайты',
  description:
    'Графический дизайн и веб-разработка для малого бизнеса. Логотипы, айдентика, упаковка, сайты под ключ.',
  metadataBase: new URL('https://betneva-site.ru'),
  openGraph: {
    title: 'Галина Бетнева — дизайн и сайты',
    description:
      'Графический дизайн и веб-разработка для малого бизнеса. Логотипы, айдентика, упаковка, сайты под ключ.',
    url: 'https://betneva-site.ru',
    siteName: 'Бетнева — дизайн и сайты',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  )
}
