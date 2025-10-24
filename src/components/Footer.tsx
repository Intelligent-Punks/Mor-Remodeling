import { useState } from 'react'
import { Link } from 'react-router-dom'
import common from '@/content/common'
import contactPage from '@/content/contactPage'
import AnimatedText from '@/components/AnimatedText'
import { getAssetUrl } from '@/utils/asset'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError('')

    if (!email.trim()) {
      setEmailError('Email is required')
      return
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email format')
      return
    }

    setIsSubmitting(true)
    console.log('Newsletter subscription:', email)

    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 500)
  }

  const navLinks = [
    { id: '01', label: 'Projects', path: '/projects' },
    { id: '02', label: 'Services', path: '/services' },
    { id: '03', label: 'About Us', path: '/about' },
    { id: '04', label: 'Contact Us', path: '/contact-us' },
  ]

  const socialLinks = [
    { name: 'X (Twitter)', icon: '/icons/x.svg', url: '#' },
    { name: 'Instagram', icon: '/icons/instagram.svg', url: '#' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: '#' },
    { name: 'WhatsApp', icon: '/icons/whatsapp.svg', url: '#' },
  ]

  return (
    <footer className="bg-[#F2F1EF] py-12 md:py-18">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-4 md:gap-16">
          <div>
            {/* Mobile: Logo and Social Links in one row */}
            <div className="flex items-center justify-between md:mt-3 mb-10 md:mb-0">
              <img
                src={getAssetUrl('/icons/Mor-remodeling-logo.png')}
                alt="Mor Remodeling"
                className="w-[120px] h-[52px] object-contain"
              />
              
              {/* Mobile Social Links */}
              <div className="flex md:hidden items-center gap-7">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                  >
                    <img src={getAssetUrl(social.icon)} alt={social.name} className="w-full h-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-3 md:mb-[20px] mt-15 md:mt-[30px]">
              <h3 className="text-[20px] font-medium leading-[1.4] uppercase text-[#2A2A2A]">
                Keep with us
              </h3>
              <p className="mt-2 md:mt-[13px] text-sm md:text-base leading-[1.4] text-[#2A2A2A]">
                Get news, coupons, events, and business updates
              </p>

              <div className="mt-3 md:mt-[30px] relative mb-2">
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 md:gap-[10px] bg-white rounded-full h-[70px] pl-6 md:pl-[30px] max-w-full md:max-w-[480px]">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    className="flex-1 bg-transparent text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 md:px-[30px] py-5 md:py-[13px] mr-2 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer overflow-hidden ${
                      isSubmitting 
                        ? 'bg-[#2A2A2A] text-white' 
                        : 'bg-[#F4C077] text-[#2A2A2A] active:bg-[#2A2A2A] active:text-white'
                    }`}
                  >
                    <AnimatedText text="Send request" staggered={false} />
                  </button>
                </form>

                {emailError && (
                  <p className="absolute left-[30px] -bottom-6 text-xs text-red-500">{emailError}</p>
                )}

                {showSuccess && (
                  <p className="absolute left-[30px] -bottom-6 text-sm text-green-600">Successfully subscribed!</p>
                )}
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex mb-[40px] items-center gap-[14px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-3 h-3 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label={social.name}
                >
                  <img src={getAssetUrl(social.icon)} alt={social.name} className="w-full h-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-3 gap-[40px]">
              {/* Working Hours */}
              <div>
                <p className="text-base font-normal leading-[1.4] text-[#868686] capitalize mb-[8px]">
                  Working Hours
                </p>
                <div className="text-base font-medium leading-[1.4] text-[#2A2A2A] space-y-1">
                  <p>Monday - Friday: 9 AM - 5 PM</p>
                  <p>Saturday: Day off</p>
                  <p>Sunday: 9 AM - 5 PM</p>
                </div>
              </div>
              {/* General Inquiries */}
              <div>
                <p className="text-base font-normal leading-[1.4] text-[#868686] capitalize mb-[8px]">
                  {contactPage.contactInfo.details[0].label}
                </p>
                <a 
                  href={`mailto:${contactPage.contactInfo.details[0].email}`}
                  className="text-base font-medium leading-[1.4] text-[#2A2A2A] hover:opacity-70 transition-opacity cursor-pointer inline-block"
                >
                  {contactPage.contactInfo.details[0].email}
                </a>
                <a 
                  href={`tel:${contactPage.contactInfo.details[0].phone}`}
                  className="text-base font-medium leading-[1.4] text-[#2A2A2A] hover:opacity-70 transition-opacity cursor-pointer block"
                >
                  {contactPage.contactInfo.details[0].phone}
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-base font-normal leading-[1.4] text-[#868686] capitalize mb-[8px]">
                  {contactPage.contactInfo.details[3].label}
                </p>
                <a 
                  href={`https://maps.app.goo.gl/axZossPtkqRGN9HM7`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium leading-[1.4] text-[#2A2A2A] whitespace-pre-line hover:opacity-70 transition-opacity cursor-pointer inline-block"
                >
                  {contactPage.contactInfo.details[3].value}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-2 md:space-y-[24px]">
              {navLinks.map((link) => (
                <div key={link.id} className="border-b border-black/40 pb-2 md:pb-[20px]">
                  <div className="flex items-center gap-4 md:gap-[14px]">
                    <span className="text-xs md:text-sm leading-[1.4] text-[#2A2A2A] font-bold">
                      {link.id}
                    </span>
                    <Link
                      to={link.path}
                      className="text-[20px] md:text-[26px] font-thin leading-[1.4] md:leading-[1.4] text-[#2A2A2A] hover:opacity-70 transition-opacity tracking-wider"
                    >
                      <AnimatedText text={link.label} staggered={false} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="md:hidden mt-[14px] space-y-[10px]">
              {/* Working Hours */}
              <div className="flex gap-5">
                <p className="text-sm font-normal leading-[1.4] text-[#868686] capitalize w-[111px]">
                  Working Hours
                </p>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">Monday - Friday: 9 AM - 5 PM</p>
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">Saturday: Day off</p>
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">Sunday: 9 AM - 5 PM</p>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="flex gap-5">
                <p className="text-sm font-normal leading-[1.4] text-[#868686] capitalize w-[111px]">
                  {contactPage.contactInfo.details[0].label}
                </p>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">
                    {contactPage.contactInfo.details[0].email}
                  </p>
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">
                    {contactPage.contactInfo.details[0].phone}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-5">
                <p className="text-sm font-normal leading-[1.4] text-[#868686] capitalize w-[111px]">
                  {contactPage.contactInfo.details[3].label}
                </p>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-[1.4] text-[#2A2A2A]">
                    {contactPage.contactInfo.details[3].value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

