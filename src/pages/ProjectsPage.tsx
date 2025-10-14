import projects from '@/content/projects'
import projectsPage from '@/content/projectsPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import contactPage from '@/content/contactPage'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import { getAssetUrl } from '@/utils/asset'
import LazySection from '@/components/LazySection'

export default function ProjectsPage() {
  return (
    <div className="bg-[#F2F1EF]">
      {/* Hero Sentinel for Header Transparency */}
      <div id="hero-sentinel" className="absolute top-0 left-0 w-full h-px pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-[750px] pt-[54px] pb-2 md:pb-[80px]">
        {/* Background Image */}
        {projectsPage.backgroundImage && (
          <>
            <img
              src={getAssetUrl(projectsPage.backgroundImage)}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        )}

        <div className="relative z-10 container-custom">
          {/* Breadcrumb */}
          <div className="mt-10 md:mt-20 mb-10 md:mb-16 [&_*]:text-white [&_*]:!text-whitee">
            <Breadcrumb />
          </div>

          {/* Page Title */}
          <h1 className="text-[32px] md:text-5xl font-semibold text-white mb-10 md:mb-[66px] md:max-w-[460px] leading-[1.4]">{projectsPage.title}</h1>

          {/* Info Blocks */}
          <div className="max-w-full md:max-w-[950px] md:ml-auto space-y-8 md:space-y-[40px]">
            {projectsPage.infoBlocks.map((block) => (
              <div key={block.id} className="border-t border-white/40 pt-6 md:pt-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-4 md:gap-[40px]">
                  <h2 className="text-[20px] md:text-xl font-medium text-white">{block.title}</h2>
                  <p className="text-sm md:text-base font-medium leading-[1.5] text-white">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <OurProjects projects={projects.items} showButton={false} />

      {/* Reviews Carousel */}
      <LazySection rootMargin="200px">
        <section className="pt-20 pb-[120px] bg-[#F2F1EF]">
          <div className="container-custom mb-[80px]">
            <h2 className="md:text-[48px] text-[32px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
              {contactPage.reviews.title}
            </h2>
            <p className="text-[20px] leading-[1.4] text-[#868686]">
              {contactPage.reviews.subtitle}
            </p>
          </div>

          <ReviewsCarousel reviews={contactPage.reviews.items} />
        </section>
      </LazySection>

      {/* FAQ */}
      <LazySection rootMargin="200px">
        <FAQ 
          title={faq.title} 
          subtitle={faq.subtitle} 
          backgroundVideo={faq.backgroundVideo}
          videoPoster={faq.videoPoster}
          items={faq.items} 
        />
      </LazySection>

      {/* Contact Form */}
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
