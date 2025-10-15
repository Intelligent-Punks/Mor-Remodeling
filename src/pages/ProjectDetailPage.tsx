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
import contactPage from '@/content/contactPage'
import ReviewsCarousel from '@/components/ReviewsCarousel'

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
      <section id="hero" className="relative h-[714px] md:h-[750px] overflow-hidden">
        <img
          src={projectImagePath(project.hero.image)}
          alt={project.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

        {/* Content on Hero */}
        <div className="container-custom relative h-full flex flex-col py-[54px]">
          {/* Breadcrumb */}
          <div className="[&_*]:!text-white mt-10 md:mt-20">
            <Breadcrumb customLabel={project.hero.title} />
          </div>

          {/* Content Grid */}
          <div className="flex flex-col justify-end md:grid md:grid-cols-2 gap-6 md:gap-[40px] flex-1">
            {/* Title - Left (centered vertically on desktop, bottom on mobile) */}
            <div className="flex items-end md:items-center">
              <h1 className="text-[32px] md:text-[40px] pb-0 md:pb-25 font-medium leading-[1.4] text-[#F2F1EF] whitespace-pre-line">
                {project.hero.title}
              </h1>
            </div>

            {/* Subtitle - Right (bottom aligned) */}
            <div className="flex items-end">
              <p className="text-sm md:text-xl leading-[1.4] text-[#F2F1EF]">
                {project.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container-custom py-12 md:py-[60px]">
        {/* Quote/Title on mobile */}
        <h2 className="md:hidden text-[20px] font-medium leading-[1.4] text-[#2A2A2A] mb-3">
          {project.details.title}
        </h2>

        {/* Description on mobile */}
        <div className="md:hidden text-sm leading-[1.5] text-[#868686] mb-10">
          {project.details.description.map((paragraph, idx) => (
            <p key={idx} className={idx < project.details.description.length - 1 ? '' : 'mt-7'}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Project Info Grid on mobile (2x2) */}
        {project.stats && (
          <div className="md:hidden grid grid-cols-2 gap-x-5">
            {project.stats.map((stat, idx) => (
              <div key={idx} className={`border-t border-[#868686] pt-5 pb-5 ${idx === 2 || idx === 3 ? 'border-b pb-5' : ''}`}>
                <p className="text-sm font-medium text-[#2A2A2A] mb-1">{stat.label}</p>
                <p className="text-sm font-normal text-[#868686]">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[290px_1fr] md:gap-[40px] md:pb-[20px]">
          {/* Left: Stats/Info */}
          {project.stats && (
            <div className="md:mt-[18px]">
              {project.stats.map((stat, idx, arr) => (
                <div
                  key={idx}
                  className={`py-3 border-t border-[#868686] ${
                    idx === arr.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <p className="text-base font-medium text-[#2A2A2A]">{stat.label}</p>
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
      <section className="container-custom pb-20 md:pb-[150px]">
        {/* Mobile Gallery: 2 small, 1 large pattern */}
        <div className="md:hidden grid grid-cols-2 gap-5">
          {project.gallery.map((image, idx) => {
            const isFullWidth = idx % 3 === 2
            return (
              <div
                key={idx}
                className={`${
                  isFullWidth ? 'col-span-2 h-[190px]' : 'col-span-1 h-[190px]'
                } rounded-[8px] overflow-hidden bg-white`}
              >
                <img src={projectImagePath(image)} alt="" className="w-full h-full object-cover" />
              </div>
            )
          })}
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:grid md:grid-cols-1 md:gap-[40px]">
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
                <img src={projectImagePath(image)} alt="" className="w-full h-full object-cover" />
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
      <section>
        <div className="container-custom">
          <h2 className="text-[32px] md:text-5xl font-semibold text-[#2A2A2A]">
            Discover other projects
          </h2>
        </div>
        <OurProjects projects={projects.items} showButton={false} />
      </section>

      <section className="pt-20 pb-[160px] bg-[#F2F1EF]">
        <div className="container-custom mb-4 md:mb-[64px]">
          <h2 className="md:text-[48px] text-[32px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-sm md:text-[20px] leading-[1.4] text-[#868686]">{contactPage.reviews.subtitle}</p>
        </div>

        <ReviewsCarousel reviews={contactPage.reviews.items} />
      </section>

      {/* FAQ */}
      <FAQ
        title={faq.title}
        subtitle={faq.subtitle}
        backgroundVideo={faq.backgroundVideo}
        videoPoster={faq.videoPoster}
        items={faq.items}
      />

      {/* Contact Form */}
      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}
