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
      <section className="container-custom pt-[54px] pb-[80px]">
        {/* Breadcrumb */}
        <div className="mt-20 mb-16">
          <Breadcrumb />
        </div>

        {/* Page Title */}
        <h1 className="text-5xl font-semibold text-[#2A2A2A] mb-[66px]">{projectsPage.title}</h1>

        {/* Info Blocks */}
        <div className="max-w-[950px] ml-auto space-y-[40px]">
          {projectsPage.infoBlocks.map((block) => (
            <div key={block.id} className="border-t border-[#868686] pt-[40px]">
              <div className="grid grid-cols-[290px_1fr] gap-[40px]">
                <h2 className="text-xl font-medium text-[#2A2A2A]">{block.title}</h2>
                <p className="text-base font-medium leading-[1.5] text-[#2A2A2A]">{block.description}</p>
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


