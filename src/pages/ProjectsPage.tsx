import projects from '@/content/projects'
import projectsPage from '@/content/projectsPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProjectsPage() {
  return (
    <div className="bg-[#F2F1EF]">
      {/* Hero Section */}
      <section className="container-custom pt-[54px] pb-2 md:pb-[80px]">
        {/* Breadcrumb */}
        <div className="mt-10 md:mt-20 mb-10 md:mb-16">
          <Breadcrumb />
        </div>

        {/* Page Title */}
        <h1 className="text-[32px] md:text-5xl font-semibold text-[#2A2A2A] mb-10 md:mb-[66px]">{projectsPage.title}</h1>

        {/* Info Blocks */}
        <div className="max-w-full md:max-w-[950px] md:ml-auto space-y-8 md:space-y-[40px]">
          {projectsPage.infoBlocks.map((block) => (
            <div key={block.id} className="border-t border-[#868686] pt-6 md:pt-[40px]">
              <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-4 md:gap-[40px]">
                <h2 className="text-[20px] md:text-xl font-medium text-[#2A2A2A]">{block.title}</h2>
                <p className="text-sm md:text-base font-medium leading-[1.5] text-[#2A2A2A]">{block.description}</p>
              </div>
            </div>
          ))}
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


