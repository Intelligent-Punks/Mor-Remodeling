import { useState } from 'react'
import contactPage from '@/content/contactPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import services from '@/content/services'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import AnimatedText from '@/components/AnimatedText'
import SEOHead from '@/components/SEOHead'
import { getAssetUrl } from '@/utils/asset'

// ContactForm wrapper for ContactPage
function ContactFormWrapper() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    } else if (formData.address.length < 5) {
      newErrors.address = 'Address must be at least 5 characters'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Project type is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectType: '',
        message: ''
      })
      
      alert('Thank you for your message! We will get back to you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactForm
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      services={services.list}
    />
  )
}

export default function ContactPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="bg-[#F2F1EF]">
      <SEOHead seo={contactPage.seo} />
      {/* Breadcrumb */}
      <div className="container-custom pt-[20px] md:pt-[54px]">
        <div className="mt-[88px] md:mt-[100px] mb-[46px] md:mb-10">
          <Breadcrumb />
        </div>
      </div>

      {/* Contact Details */}
      <section className="container-custom pb-[50px] md:pb-20">
        <div className="md:grid md:grid-cols-2 md:gap-[80px]">
          {/* Desktop Left Column - Social Links */}
          <div className="flex flex-col">
            {/* Hero Section */}
            <section className="">
              <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.1] text-[#2A2A2A] mb-[8px] md:mb-[20px]">
                {contactPage.hero.title}
              </h1>
              <p className="text-[20px] leading-[1.5] md:leading-[1.4] text-[#2A2A2A]">
                {contactPage.hero.subtitle}
              </p>
            </section>

            {/* Contact Form */}
            <div className="max-w-[590px] mb-12">
              <ContactFormWrapper />
            </div>

            <div className="hidden md:flex gap-[20px] mt-auto">
              {contactPage.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-[10px] text-[20px] font-medium text-[#2A2A2A]"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <img src={link.icon} alt={link.name} className="w-6 h-6" />
                  <AnimatedText text={link.name} externalHover={hoveredLink === link.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Grid */}
          <div>
            <div className="flex flex-col gap-[16px] md:gap-[40px] md:grid md:grid-cols-2 md:mb-[40px]">
              {contactPage.contactInfo.details.map((detail) => (
                <div key={detail.id} className="md:block">
                  {/* Mobile: horizontal layout */}
                  <div className="flex md:block">
                    <p className="text-[14px] md:text-[20px] font-normal text-[#868686] md:text-[#2A2A2A] md:mb-[10px] capitalize w-[131px] md:w-auto pr-6 md:pr-0">
                      {detail.label}
                    </p>
                    <div className="flex-1 md:flex-none">
                      {detail.email && (
                        <a
                          href={`mailto:${detail.email}`}
                          className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A] md:mb-[5px] hover:opacity-70 transition-opacity cursor-pointer inline-block"
                        >
                          {detail.email}
                        </a>
                      )}
                      {detail.phone && (
                        <a
                          href={`tel:${detail.phone}`}
                          className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A] hover:opacity-70 transition-opacity cursor-pointer inline-block"
                        >
                          {detail.phone}
                        </a>
                      )}
                      {detail.value && (
                        <a
                          href={`https://maps.app.goo.gl/axZossPtkqRGN9HM7`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A] whitespace-pre-line hover:opacity-70 transition-opacity cursor-pointer inline-block"
                        >
                          {detail.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interior Image - Desktop only */}
            <div className="hidden md:block w-full h-[400px] overflow-hidden">
              <img
                src={getAssetUrl(contactPage.interiorImage)}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Image - Mobile */}
      <section className="md:hidden container-custom pb-[25px]">
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={getAssetUrl(contactPage.interiorImage)}
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Social Links - Mobile */}
      <section className="md:hidden container-custom pb-[50px]">
        <div className="flex gap-[50px]">
          {contactPage.socialLinks.map((link) => (
            <a key={link.name} href={link.url} className="flex items-center">
              <img src={link.icon} alt={link.name} className="w-[33px] h-[33px]" />
            </a>
          ))}
        </div>
      </section>

      {/* Google Map Section */}
      <div className="w-full h-[500px] md:h-[620px] overflow-hidden">
        <iframe
          src={contactPage.map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MOR Remodelling Office Location"
        />
      </div>
    </div>
  )
}
