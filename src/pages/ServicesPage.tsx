import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import servicesPage, { ServiceItem } from '@/content/servicesPage'
import { serviceDetails } from '@/content/serviceDetails'
import projects from '@/content/projects'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import { getAssetUrl } from '@/utils/asset'

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<string>(
    servicesPage.services[0].id
  )
  const [isNavSticky, setIsNavSticky] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const navPlaceholderRef = useRef<HTMLDivElement>(null)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = servicesPage.services.map((service) =>
        document.getElementById(service.id)
      )

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
      { root: null, threshold: 0 }
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
      {/* Hero Section */}
      <section className="container-custom pt-[54px]">
        <div className="mt-10 md:mt-[100px] mb-10">
          <Breadcrumb />
        </div>
        <h1 className="text-[32px] md:text-5xl font-semibold text-[#2A2A2A]">
          {servicesPage.title}
        </h1>
      </section>

      {/* Sentinel for detecting when nav becomes sticky */}
      <div ref={navPlaceholderRef} className="h-px w-full" />

      {/* Sticky Navigation */}
      <div
        ref={navRef}
        className="sticky top-[71px] md:top-[79px] z-40 transition-all duration-300"
        style={{
          background: isNavSticky ? 'rgba(242, 241, 239, 0.8)' : '#F2F1EF',
          backdropFilter: isNavSticky ? 'blur(10px)' : 'none',
          boxShadow: isNavSticky ? '0 4px 20px rgba(42, 42, 42, 0.05)' : 'none',
        }}
      >
        <div 
          className="container-custom transition-all duration-300"
          style={{
            paddingTop: isNavSticky ? '10px' : '16px',
            paddingBottom: isNavSticky ? '10px' : '40px',
          }}
        >
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto -mx-5 px-5 scrollbar-hide">
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

          {/* Desktop: Wrap */}
          <div className="hidden md:flex flex-wrap gap-[20px] items-center">
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

      {/* Discover Other Projects */}
      <OurProjects
        title="Discover other projects"
        projects={projects.items.slice(0, 9)}
        showButton={false}
      />

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

interface ServiceSectionProps {
  service: ServiceItem
  isLast: boolean
}

function ServiceSection({ service, isLast }: ServiceSectionProps) {
  // Check if service has detail page by looking up in serviceDetails
  const hasDetailPage = serviceDetails.some(detail => detail.slug === service.slug)
  
  return (
    <section id={service.id} className="py-3 md:py-[80px]">
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
        <div className="mt-5 md:mt-[140px] grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-[40px]">
          {service.images.map((image, idx) => (
            <div
              key={idx}
              className={`rounded-[8px] md:rounded-[14px] overflow-hidden bg-white h-[177px] md:h-[320px] ${
                idx >= 2 ? 'hidden md:block' : ''
              }`}
            >
              <img
                src={getAssetUrl(image)}
                alt={`${service.title} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="mt-5 md:mt-[40px] grid grid-cols-1 md:grid-cols-[440px_1fr] gap-5 md:gap-[80px]">
          <div />
          <p className="text-xs md:text-[20px] leading-[1.5] md:leading-[1.4] text-[#868686]">
            {service.fullDescription}
          </p>
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <div className="mt-6 md:mt-[80px] w-full h-px bg-white" />
      )}
    </section>
  )
}
