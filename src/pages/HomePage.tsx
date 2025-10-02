import home from '@/content/home'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function HomePage() {
  return (
    <div>
      {/* Sentinel is used by Header to switch style when hero leaves viewport */}
      <div id="hero-sentinel" className="absolute top-0 h-px w-px" />
      <section className="relative min-h-[750px]">
        <img
          aria-hidden
          src="/images/hero/Hero-home.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 container-custom pb-16 pt-8 grid grid-cols-1 md:grid-cols-2 items-end gap-8 min-h-[750px] text-white">
          <h1 className="sr-only">{home.title}</h1>
          <AnimatedSection>
            <h2 className="max-w-[620px] font-medium leading-[1.4] text-[32px] md:text-[40px] text-[#F2F1EF]">{home.hero.heading}</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <p className="max-w-[620px] mt-2 text-[16px] md:text-[20px] leading-[1.4] text-[#F2F1EF]/95">{home.hero.subheading}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}


