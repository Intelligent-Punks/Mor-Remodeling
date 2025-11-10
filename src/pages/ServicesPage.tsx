import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import servicesPage, { ServiceItem } from '@/content/servicesPage'
import { serviceDetails } from '@/content/serviceDetails'
import projects from '@/content/projects'
import faq from '@/content/faq'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactFormSection from '@/components/ContactFormSection'
import Breadcrumb from '@/components/Breadcrumb'
import SEOHead from '@/components/SEOHead'
import { getAssetUrl } from '@/utils/asset'
import contactPage from '@/content/contactPage'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<string>(servicesPage.services[0].id)
  const [isNavSticky, setIsNavSticky] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const navPlaceholderRef = useRef<HTMLDivElement>(null)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = servicesPage.services.map((service) => document.getElementById(service.id))

      // Header = 80px
      // Nav when sticky = ~80px
      // Buffer = 80px (to activate when section title is clearly visible)
      // Total threshold = 240px
      const threshold = 240
      let activeIndex = 0

      // Find which section is currently in the "active zone"
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          // Section is active if its top has passed the threshold
          if (rect.top <= threshold) {
            activeIndex = i
            break
          }
        }
      }

      setActiveSection(servicesPage.services[activeIndex].id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sticky nav observer
  useEffect(() => {
    if (!navPlaceholderRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavSticky(!entry.isIntersecting)
      },
      { root: null, threshold: 0 },
    )

    observer.observe(navPlaceholderRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId)
    if (element) {
      // Mobile: Header 72px + Nav ~80px + buffer 20px = 172px
      // Desktop: Header 80px + Nav ~80px + buffer 60px = 220px
      const isMobile = window.innerWidth < 768
      const offset = isMobile ? 170 : 220
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="bg-[#F2F1EF]">
      <SEOHead seo={servicesPage.seo} />
      {/* Hero Sentinel for Header Transparency */}
      <div id="hero-sentinel" className="absolute top-0 left-0 w-full h-px pointer-events-none" />
      {/* Hero Section */}
      <section id="hero" className="relative h-[714px] md:h-[750px] overflow-hidden">
        <img
          src={getAssetUrl(servicesPage.backgroundImage)}
          alt={servicesPage.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

        {/* Content on Hero */}
        <div className="container-custom relative h-full flex flex-col py-[54px]">
          {/* Breadcrumb */}
          <div className="[&_*]:!text-white mt-10 md:mt-20">
            <Breadcrumb customLabel={servicesPage.hero.title} />
          </div>

          {/* Content Grid */}
          <div className="flex flex-col justify-end gap-6 flex-1">
            {/* Title - Left (centered vertically on desktop, bottom on mobile) */}
            <div className="flex items-end md:items-center">
              <h1 className="text-[32px] md:text-[40px] pb-0 md:pb-25 font-medium leading-[1.4] text-[#F2F1EF] whitespace-pre-line">
                {servicesPage.hero.title}
              </h1>
            </div>

            {/* Subtitle - Right (bottom aligned) */}
            <div className="flex items-end max-w-[640px] md:self-end md:ml-auto">
              <p className="text-sm md:text-xl leading-[1.4] text-[#F2F1EF]">
                {servicesPage.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="container-custom pt-[34px] mt-4 md:mt-[50px] mb-10 md:mb-18">
        <h1 className="text-[32px] md:text-5xl font-semibold text-[#2A2A2A]">
          {servicesPage.title}
        </h1>
      </section>

      {/* Sentinel for detecting when nav becomes sticky */}
      <div ref={navPlaceholderRef} className="h-px w-full" />

      {/* Sticky Navigation */}
      <div
        ref={navRef}
        className={`sticky top-[71px] md:top-[79px] z-40 transition-[background,backdrop-filter,box-shadow] duration-500 ease-in-out ${
          isNavSticky
            ? 'bg-[rgba(242,241,239,0.8)] backdrop-blur-[10px] shadow-[0_4px_20px_rgba(42,42,42,0.05)]'
            : 'bg-[#F2F1EF] backdrop-blur-0 shadow-none'
        }`}
      >
        <div className="container-custom transition-all duration-500 ease-in-out">
          <div
            className="md:hidden py-[10px]"
          >
            {/* Mobile: Horizontal scroll */}
            <div className="overflow-x-auto -mx-5 px-5 scrollbar-hide">
              <div className="flex gap-3 items-center min-w-max">
                {servicesPage.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className={`px-[14px] h-[48px] rounded-full text-xs font-medium leading-[1.4] transition-all cursor-pointer whitespace-nowrap ${
                      activeSection === service.id
                        ? 'bg-[#F4C077] text-[#2A2A2A]'
                        : 'bg-transparent text-[#2A2A2A] border border-[#868686]'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`hidden md:block transition-all duration-500 ease-in-out ${
              isNavSticky ? 'py-[10px]' : 'pt-[30px] pb-[40px]'
            }`}
          >
            {/* Desktop: Wrap */}
            <div className="flex flex-wrap gap-[20px] items-center">
              {servicesPage.services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`px-[18px] h-[48px] rounded-full text-sm font-medium leading-[1.4] transition-all cursor-pointer ${
                    activeSection === service.id
                      ? 'bg-[#F4C077] text-[#2A2A2A]'
                      : 'bg-transparent text-[#2A2A2A] border border-[#868686] hover:bg-[#F4C077] hover:border-[#F4C077] hover:shadow-md'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        {!isNavSticky && <div className="w-full h-[2px] bg-white" />}
      </div>

      {/* Services Sections */}
      <div>
        {servicesPage.services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            isLast={index === servicesPage.services.length - 1}
          />
        ))}
      </div>

      {/* See What We’ve Built for Others */}
      <OurProjects
        title="See What We’ve Built for Others"
        projects={projects.items.slice(0, 9)}
        showButton={false}
      />
      {/* Reviews Carousel */}
      <section className="pt-20 pb-12 md:pb-[80px] bg-[#F2F1EF]">
        <div className="container-custom mb-6 md:mb-[64px]">
          <h2 className="md:text-[48px] text-[32px] font-semibold leading-[1.4] text-[#2A2A2A] mb-2 md:mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-sm md:text-[20px] leading-[1.4] text-[#868686]">
            {contactPage.reviews.subtitle}
          </p>
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
      <ContactFormSection />
    </div>
  )
}

interface ServiceSectionProps {
  service: ServiceItem
  isLast: boolean
}

function ServiceSection({ service, isLast }: ServiceSectionProps) {
  // Check if service has detail page by looking up in serviceDetails
  const hasDetailPage = serviceDetails.some((detail) => detail.slug === service.slug)

  return (
    <section id={service.id} className="pt-4 md:pt-[70px]">
      <div className="container-custom">
        {/* Title & Short Description */}
        <div className="grid grid-cols-1 md:grid-cols-[440px_1fr] gap-5 md:gap-[80px]">
          <h2 className="text-[20px] md:text-[36px] md:mt-[-5px] font-semibold leading-[1.4] text-[#2A2A2A]">
            {hasDetailPage ? (
              <Link
                to={`/services/${service.slug}`}
                className="inline-block border-b-2 border-transparent transition-colors duration-300 hover:border-[#2A2A2A]"
              >
                {service.title}
              </Link>
            ) : (
              service.title
            )}
          </h2>
          <p className="text-xs md:text-[20px] leading-[1.5] md:leading-[1.4] text-[#868686]">
            {service.shortDescription}
          </p>
        </div>

        {/* Images Grid */}
        {/* Mobile: horizontal scroll */}
        <div className="mt-1 md:hidden overflow-x-auto -mx-5 px-5 scrollbar-hide">
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {service.images.map((image, idx) => (
              <div
                key={idx}
                className="rounded-[8px] overflow-hidden bg-white h-[177px] w-[177px] flex-shrink-0"
              >
                <img
                  src={getAssetUrl(image)}
                  alt={`${service.title} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-[40px] md:mt-[72px]">
          {service.images.map((image, idx) => (
            <div key={idx} className="rounded-[14px] overflow-hidden bg-white h-[320px]">
              <img
                src={getAssetUrl(image)}
                alt={`${service.title} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="md:mt-[40px] grid grid-cols-1 md:grid-cols-[440px_1fr] gap-5 md:gap-[80px]">
          <div />
          <p className="text-xs md:text-[20px] leading-[1.5] md:leading-[1.4] text-[#868686]">
            {service.fullDescription}
          </p>
        </div>
      </div>

      {/* Divider */}
      {!isLast && <div className="mt-3 md:mt-[78px] w-full h-px bg-white" />}
    </section>
  )
}
