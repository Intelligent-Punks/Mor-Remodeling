import { useState } from 'react'
import { Link } from 'react-router-dom'
import common from '@/content/common'
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
    { id: '01', label: 'PROJECTS', path: '/projects' },
    { id: '02', label: 'SERVICES', path: '/services' },
    { id: '03', label: 'ABOUT US', path: '/about' },
    { id: '04', label: 'CONTACT US', path: '/contact-us' },
  ]

  const socialLinks = [
    { name: 'X (Twitter)', icon: '/icons/x.svg', url: '#' },
    { name: 'Instagram', icon: '/icons/instagram.svg', url: '#' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: '#' },
    { name: 'WhatsApp', icon: '/icons/whatsapp.svg', url: '#' },
  ]

  return (
    <footer className="bg-[#F2F1EF] py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_620px] gap-10">
          <div>
            <img
              src={getAssetUrl('/icons/Mor-remodeling-logo.png')}
              alt="Mor Remodeling"
              className="w-[120px] h-[52px] object-contain mb-[92px]"
            />

            <div className="mb-[40px]">
              <h3 className="text-[20px] font-medium leading-[1.4] uppercase text-[#2A2A2A]">
                Keep with us.
              </h3>
              <p className="mt-[13px] text-base leading-[1.4] text-[#2A2A2A]">
                Get news, coupons, events, and business updates
              </p>

              <div className="mt-[40px] relative mb-4">
                <form onSubmit={handleSubscribe} className="flex items-center gap-[10px] bg-white rounded-full h-[70px] pl-[30px] max-w-[480px]">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    className="flex-1 bg-transparent text-base text-[#2A2A2A] placeholder:text-[#2A2A2A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-[30px] py-[23px] rounded-full text-base font-medium transition-all cursor-pointer overflow-hidden ${
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

            <div className="mb-[90px] flex items-center gap-[14px]">
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

            <div>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-base font-medium text-[#2A2A2A] group"
              >
                <AnimatedText text="Contact Us" staggered={true} />
                <span className="inline-grid place-items-center w-8 h-8 rounded-full transition-all group-active:bg-[#2A2A2A]">
                  <img
                    src={getAssetUrl('/icons/arrow-right.svg')}
                    alt=""
                    className="w-5 h-5 group-active:invert"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="space-y-[30px]">
            {navLinks.map((link) => (
              <div key={link.id} className="border-b border-black/40 pb-[30px]">
                <div className="flex items-center gap-[20px]">
                  <span className="text-[20px] leading-[1.4] uppercase text-[#2A2A2A]">
                    {link.id}
                  </span>
                  <Link
                    to={link.path}
                    className="text-[48px] md:text-[64px] font-normal leading-[1.4] uppercase text-[#2A2A2A] hover:opacity-70 transition-opacity"
                  >
                    <AnimatedText text={link.label} staggered={false} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

