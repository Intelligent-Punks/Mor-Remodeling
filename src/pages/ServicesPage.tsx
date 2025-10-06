import { useEffect, useRef, useState } from 'react'
import servicesPage, { ServiceItem } from '@/content/servicesPage'
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
      // Header = 80px
      // Nav sticky = ~80px (10px + content + 10px when sticky)
      // Extra buffer = 60px for better visibility
      // Total offset = 220px
      const offset = 220
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
        <div className="mt-[100px] mb-10">
          <Breadcrumb />
        </div>
        <h1 className="text-5xl font-semibold text-[#2A2A2A]">
          {servicesPage.title}
        </h1>
      </section>

      {/* Sentinel for detecting when nav becomes sticky */}
      <div ref={navPlaceholderRef} className="h-px w-full" />

      {/* Sticky Navigation */}
      <div
        ref={navRef}
        className="sticky top-[79px] z-40 bg-[#F2F1EF] transition-all duration-300"
        style={{
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
        <div className="w-full h-[2px] bg-white" />
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
  return (
    <section id={service.id} className="py-[80px]">
      <div className="container-custom">
        <div className="grid grid-cols-[400px_1fr] gap-[80px]">
          {/* Left: Title */}
          <div>
            <h2 className="text-[36px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {service.title}
            </h2>
          </div>

          {/* Right: Short Description */}
          <div>
            <p className="text-[20px] leading-[1.4] text-[#868686]">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="mt-[140px] grid grid-cols-3 gap-[40px]">
          {service.images.map((image, idx) => (
            <div
              key={idx}
              className="rounded-[14px] overflow-hidden bg-white h-[320px]"
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
        <div className="mt-[40px] grid grid-cols-[400px_1fr] gap-[80px]">
          <div />
          <div>
            <p className="text-[20px] leading-[1.4] text-[#868686]">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <div className="mt-[80px] w-full h-[2px] bg-white" />
      )}
    </section>
  )
}
