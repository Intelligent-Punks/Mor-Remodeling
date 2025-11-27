import { useEffect, useRef, useState } from 'react'
import ContactForm from './ContactForm'
import contactForm from '@/content/contactForm'
import services from '@/content/services'
import { getAssetUrl } from '@/utils/asset'

interface ContactFormSectionProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export default function ContactFormSection({
  title = contactForm.title,
  subtitle = contactForm.subtitle,
  backgroundImage = contactForm.backgroundImage,
  className = ''
}: ContactFormSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    address: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\d+\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format'
    } else if (formData.phone.replace(/[\s()-]/g, '').length < 10) {
      newErrors.phone = 'Phone must be at least 10 digits'
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Address must be at least 5 characters'
    }
    
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', phone: '', email: '', projectType: '', address: '', message: '' })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 4000)
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return
          const rect = sectionRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          // Calculate parallax: move background slower than scroll
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
          const parallaxOffset = scrollProgress * -500 // Negative for upward movement
          setOffset(parallaxOffset)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className={`relative h-[800px] overflow-hidden ${className}`}>
      <div
        className="absolute -top-[-5%] left-0 right-0 w-full h-[160%]"
        style={{
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={getAssetUrl(backgroundImage)}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#232323]/45" />
      </div>

      {showSuccess && (
        <div className="fixed top-24 right-8 z-50 bg-white rounded-[14px] shadow-lg p-6 max-w-sm animate-slide-in">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2A2A2A]">Request sent!</h3>
              <p className="mt-1 text-sm text-[#2A2A2A]/70">We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center h-full">
        <div className="container-custom flex justify-center md:justify-end">
          <div className="w-full max-w-[620px] bg-[#F2F1EF] rounded-[14px] p-8 md:p-10">
            <h2 className="text-[20px] md:text-[32px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {title}
            </h2>
            <p className="mt-6 md:mt-[20px] text-sm md:text-[20px] font-normal leading-[1.4] text-[#2A2A2A]">
              {subtitle}
            </p>

            <ContactForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              services={services.list}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
