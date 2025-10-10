import projects from '@/content/projects'
import projectsPage from '@/content/projectsPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import { getAssetUrl } from '@/utils/asset'

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
          <div className="mt-10 md:mt-20 mb-10 md:mb-16">
            <Breadcrumb />
          </div>

          {/* Page Title */}
          <h1 className="text-[32px] md:text-5xl font-semibold text-white mb-10 md:mb-[66px]">{projectsPage.title}</h1>

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

      {/* FAQ */}
      <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />

      {/* Contact Form */}
      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}


