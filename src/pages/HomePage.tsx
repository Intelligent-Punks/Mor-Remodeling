import home from '@/content/home'
import projects from '@/content/projects'
import quote from '@/content/quote'
import services from '@/content/services'
import stats from '@/content/stats'
import remodelingROI from '@/content/remodelingROI'
import contactPage from '@/content/contactPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import OurProjects from '@/components/OurProjects'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import RemodelingROI from '@/components/RemodelingROI'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQ from '@/components/FAQ'
import ContactFormSection from '@/components/ContactFormSection'
import LazySection from '@/components/LazySection'
import SEOHead from '@/components/SEOHead'
import { getAssetUrl } from '@/utils/asset'
import ContactForm from '@/components/ContactForm'
import { useState } from 'react'

export default function HomePage() {
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
  return (
    <div>
      <SEOHead seo={home.seo} />
      {/* Sentinel is used by Header to switch style when hero leaves viewport */}
      <div className="absolute top-0 h-px w-px" />
      <section className="relative min-h-[750px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={getAssetUrl(home.hero.videoPoster)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getAssetUrl(home.hero.backgroundVideo)} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent" />

        <div className="relative z-10 container-custom pb-16 pt-28 md:pt-48 flex flex-col md:grid md:grid-cols-1 gap-8 min-h-[750px] text-white">
          <h1 className="sr-only">{home.title}</h1>
          <div>
            <h2 className="font-medium leading-[1.4] text-[32px] md:text-[48px] text-[#F2F1EF] mt-6">{home.hero.heading}</h2>
            <p className="mt-8 md:mt-18 text-[16px] md:text-[20px] leading-[1.4] text-[#F2F1EF]/95">{home.hero.subheading}</p>
          </div>
          {/* <div className="bg-[#F2F1EF] rounded-[14px] p-8 md:p-10">
          <p className="text-[24px] md:text-[36px] font-semibold leading-[1.1] text-[#2A2A2A] mb-[8px] md:mb-[20px]">Contact Us</p>
          <ContactFormWrapper />
          </div> */}
        </div>
      </section>

      <LazySection rootMargin="200px">
        <OurProjects
          title={projects.title}
          description={projects.description}
          projects={projects.items}
          showButton={true}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <RemodelingROI
          title={remodelingROI.title}
          subtitle={remodelingROI.subtitle}
          backgroundVideo={remodelingROI.backgroundVideo}
          videoPoster={remodelingROI.videoPoster}
          items={remodelingROI.items}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <Services title={services.title} services={services.list} />
      </LazySection>

      <LazySection rootMargin="200px">
        <Quote
          quoteSymbol={quote.quoteSymbol}
          text={quote.text}
          author={quote.author}
          backgroundImage={quote.backgroundImage}
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <Stats
          title={stats.title}
          description={stats.description}
          subTitle={stats.subTitle}
          stats={stats.items}
          valueFontSize={32}
        />
      </LazySection>
      
      <LazySection rootMargin="200px">
        <FAQ 
          title={faq.title} 
          subtitle={faq.subtitle} 
          backgroundVideo={faq.backgroundVideo}
          videoPoster={faq.videoPoster}
          items={faq.items} 
        />
      </LazySection>

      <LazySection rootMargin="200px">
        <section className="pt-20 md:pt-16 pb-[80px] bg-[#F2F1EF]">
          <div className="container-custom mb-4 md:mb-[64px]">
            <h2 className="md:text-[48px] text-[32px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
              {contactPage.reviews.title}
            </h2>
            <p className="text-sm md:text-[20px] leading-[1.4] text-[#868686]">
              {contactPage.reviews.subtitle}
            </p>
          </div>

          <ReviewsCarousel reviews={contactPage.reviews.items} />
        </section>
      </LazySection>

      <LazySection rootMargin="200px">
        <ContactFormSection />
      </LazySection>
    </div>
  )
}


