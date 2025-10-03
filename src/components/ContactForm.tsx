import { useEffect, useRef, useState } from 'react'
import AnimatedText from '@/components/AnimatedText'
import { getAssetUrl } from '@/utils/asset'

interface ContactFormProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function ContactForm({ title, subtitle, backgroundImage }: ContactFormProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
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
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
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
    <section ref={sectionRef} className="relative min-h-[800px] overflow-hidden">
      <div
        className="absolute -top-[10%] left-0 right-0 w-full h-[160%]"
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

      <div className="relative z-10 py-20">
        <div className="container-custom flex justify-end">
          <div className="w-full max-w-[620px] bg-[#F2F1EF] rounded-[14px] p-10">
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {title}
            </h2>
            <p className="mt-[40px] text-[20px] font-normal leading-[1.4] text-[#2A2A2A]">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-[60px] space-y-[40px]">
              <div className="grid grid-cols-2 gap-[20px]">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b pb-2 text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
                      errors.name ? 'border-red-500' : 'border-[#2A2A2A]/40'
                    }`}
                  />
                  {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b pb-2 text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
                      errors.phone ? 'border-red-500' : 'border-[#2A2A2A]/40'
                    }`}
                  />
                  {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.phone}</span>}
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b pb-2 text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
                    errors.email ? 'border-red-500' : 'border-[#2A2A2A]/40'
                  }`}
                />
                {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email}</span>}
              </div>

              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b pb-2 text-base focus:outline-none focus:border-[#2A2A2A] appearance-none cursor-pointer ${
                    formData.projectType ? 'text-[#2A2A2A]' : 'text-[#2A2A2A]/40'
                  } ${errors.projectType ? 'border-red-500' : 'border-[#2A2A2A]/40'}`}
                >
                  <option value="">Project Type</option>
                  <option value="renovation">Full Home Renovation</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="other">Other</option>
                </select>
                <img
                  src={getAssetUrl('/icons/arrow-down.svg')}
                  alt=""
                  className="absolute right-0 top-0 w-6 h-6 pointer-events-none"
                />
                {errors.projectType && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.projectType}</span>}
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={1}
                  className={`w-full bg-transparent border-b pb-2 text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] resize-none ${
                    errors.message ? 'border-red-500' : 'border-[#2A2A2A]/40'
                  }`}
                />
                {errors.message && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-[30px] py-[23px] bg-[#F4C077] rounded-full text-base font-medium text-[#2A2A2A] transition-all overflow-hidden cursor-pointer hover:opacity-90 active:bg-[#2A2A2A] active:text-white"
              >
                <AnimatedText text="Send request" staggered={false} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

