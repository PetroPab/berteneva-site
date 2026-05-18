import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Marquee } from '@/components/sections/Marquee'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Marquee />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
