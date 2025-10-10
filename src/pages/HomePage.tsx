import home from '@/content/home'
import projects from '@/content/projects'
import quote from '@/content/quote'
import services from '@/content/services'
import stats from '@/content/stats'
import remodelingROI from '@/content/remodelingROI'
import contactPage from '@/content/contactPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import RemodelingROI from '@/components/RemodelingROI'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import LazySection from '@/components/LazySection'
import { getAssetUrl } from '@/utils/asset'

export default function HomePage() {
  return (
    <div>
      {/* Sentinel is used by Header to switch style when hero leaves viewport */}
      <div id="hero-sentinel" className="absolute top-0 h-px w-px" />
      <section className="relative min-h-[750px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={getAssetUrl(home.hero.videoPoster)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getAssetUrl(home.hero.backgroundVideo)} type="video/mp4" />
        </video>
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

      <LazySection rootMargin="200px">
        <OurProjects
          title={projects.title}
          description={projects.description}
          projects={projects.items}
          showButton={true}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <RemodelingROI
          title={remodelingROI.title}
          backgroundVideo={remodelingROI.backgroundVideo}
          videoPoster={remodelingROI.videoPoster}
          items={remodelingROI.items}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <Quote
          quoteSymbol={quote.quoteSymbol}
          text={quote.text}
          author={quote.author}
          backgroundImage={quote.backgroundImage}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <Services title={services.title} services={services.list} />
      </LazySection>

      <LazySection rootMargin="200px">
        <Stats
          title={stats.title}
          description={stats.description}
          stats={stats.items}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <section className="pt-20 pb-[120px] bg-[#F2F1EF]">
          <div className="container-custom mb-[80px]">
            <h2 className="text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
              {contactPage.reviews.title}
            </h2>
            <p className="text-[20px] leading-[1.4] text-[#868686]">
              {contactPage.reviews.subtitle}
            </p>
          </div>

          <ReviewsCarousel reviews={contactPage.reviews.items} />
        </section>
      </LazySection>

      <LazySection rootMargin="200px">
        <FAQ 
          title={faq.title} 
          subtitle={faq.subtitle} 
          backgroundVideo={faq.backgroundVideo}
          videoPoster={faq.videoPoster}
          items={faq.items} 
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <ContactForm
          title={contactForm.title}
          subtitle={contactForm.subtitle}
          backgroundImage={contactForm.backgroundImage}
        />
      </LazySection>
    </div>
  )
}


