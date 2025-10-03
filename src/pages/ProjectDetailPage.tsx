import { useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '@/content/projectDetails'
import { getAssetUrl } from '@/utils/asset'
import Breadcrumb from '@/components/Breadcrumb'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import projects from '@/content/projects'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const projectImagePath = (fileName: string) =>
    getAssetUrl(`/images/projects/${project.slug}/${fileName}`)

  return (
    <div className="bg-[#F2F1EF]">
      {/* Hero Sentinel for header tracking */}
      <div id="hero-sentinel" className="absolute top-[5vh] pointer-events-none" />

      {/* Hero Section */}
      <section id="hero" className="relative h-[750px] overflow-hidden">
        <img
          src={projectImagePath(project.hero.image)}
          alt={project.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" />

        {/* Content on Hero */}
        <div className="container-custom relative h-full flex flex-col py-[54px]">
          {/* Breadcrumb */}
          <div className="[&_*]:text-white [&_*]:!text-white mt-15">
            <Breadcrumb />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-[40px] flex-1">
            {/* Title - Left (centered vertically) */}
            <div className="flex items-center">
              <h1 className="text-[40px] pb-25 font-medium leading-[1.4] text-[#F2F1EF] whitespace-pre-line">
                {project.hero.title}
              </h1>
            </div>

            {/* Subtitle - Right (bottom aligned) */}
            <div className="flex items-end">
              <p className="text-xl leading-[1.4] text-[#F2F1EF]">
                {project.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container-custom py-[80px]">

        <div className="grid grid-cols-[290px_1fr] gap-[40px]">
          {/* Left: Stats/Info */}
          {project.stats && (
            <div>
              {project.stats.map((stat, idx) => (
                <div key={idx} className="py-5 border-t border-[#868686]">
                  <p className="text-base font-medium text-[#2A2A2A] mb-[6px]">{stat.label}</p>
                  <p className="text-base font-normal text-[#868686]">{stat.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Right: Title + Description */}
          <div>
            <h1 className="text-5xl font-medium leading-[1.4] text-[#000000] mb-[40px]">
              {project.details.title}
            </h1>
            <div className="space-y-6 text-xl leading-[1.4] text-[#868686]">
              {project.details.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container-custom pb-[120px]">
        <div className="grid grid-cols-1 gap-[40px]">
          {/* First row: full width */}
          <div className="w-full h-[500px] rounded-[14px] overflow-hidden bg-white">
            <img
              src={projectImagePath(project.gallery[0])}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second row: 3 columns */}
          <div className="grid grid-cols-3 gap-[40px]">
            {project.gallery.slice(1, 4).map((image, idx) => (
              <div key={idx} className="h-[320px] rounded-[14px] overflow-hidden bg-white">
                <img
                  src={projectImagePath(image)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Third row: 2 columns */}
          {project.gallery.length > 4 && (
            <div className="grid grid-cols-2 gap-[40px]">
              {project.gallery.slice(4, 6).map((image, idx) => (
                <div key={idx} className="h-[400px] rounded-[14px] overflow-hidden bg-white">
                  <img
                    src={projectImagePath(image)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Discover Other Projects */}
      <section className="pb-[120px]">
        <div className="container-custom">
          <h2 className="text-5xl font-semibold text-[#2A2A2A] mb-[115px]">
            Discover other projects
          </h2>
        </div>
        <OurProjects projects={projects.items} showButton={false} />
      </section>

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

