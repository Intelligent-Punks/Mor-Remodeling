import home from '@/content/home'
import projects from '@/content/projects'
import quote from '@/content/quote'
import services from '@/content/services'
import stats from '@/content/stats'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <div>
      {/* Sentinel is used by Header to switch style when hero leaves viewport */}
      <div id="hero-sentinel" className="absolute top-0 h-px w-px" />
      <section className="relative min-h-[750px]">
        <img
          aria-hidden
          src={home.hero.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 container-custom pb-16 pt-8 grid grid-cols-1 md:grid-cols-2 items-end gap-8 min-h-[750px] text-white">
          <h1 className="sr-only">{home.title}</h1>
          <div>
            <h2 className="max-w-[600px] font-medium leading-[1.4] text-[32px] md:text-[40px] text-[#F2F1EF]">{home.hero.heading}</h2>
          </div>
          <div>
            <p className="max-w-[620px] mt-2 text-[16px] md:text-[20px] leading-[1.4] text-[#F2F1EF]/95">{home.hero.subheading}</p>
          </div>
        </div>
      </section>

      <OurProjects
        title={projects.title}
        description={projects.description}
        projects={projects.items}
        showButton={true}
      />

      <Quote
        quoteSymbol={quote.quoteSymbol}
        text={quote.text}
        author={quote.author}
      />

      <Services title={services.title} services={services.list} />

      <Stats
        title={stats.title}
        description={stats.description}
        stats={stats.items}
      />

      <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />

      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}


