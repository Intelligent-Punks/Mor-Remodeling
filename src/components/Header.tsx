import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import common from '@/content/common'
import contacts from '@/content/contacts'
import AnimatedText from '@/components/AnimatedText'
import { getAssetUrl } from '@/utils/asset'

function PhoneButton({ isPastHero, isMobile = false }: { isPastHero: boolean; isMobile?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`tel:${contacts.phone}`}
      aria-label={`Call ${contacts.phone}`}
      className={`inline-flex items-center rounded-full bg-white ${
        isMobile ? 'w-full h-[70px]' : 'w-[193px] h-[54px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`${isMobile ? 'text-[26px]' : 'text-base'} font-medium leading-[1.4] pl-5 ${isPastHero ? 'text-[#2A2A2A]' : 'text-[#2A2A2A]'}`}>
        <AnimatedText text={contacts.phone} externalHover={isHovered} />
      </span>
            <span className={`ml-auto mr-1 inline-grid place-items-center rounded-full bg-[#2A2A2A] ${
              isMobile ? 'w-[58px] h-[58px]' : 'w-[46px] h-[46px]'
            }`}>
              <img src={getAssetUrl('/icons/call.svg')} alt="Call" className={isMobile ? 'w-6 h-6' : 'w-5 h-5'} />
            </span>
    </a>
  )
}

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) {
      setIsPastHero(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsPastHero(!entry.isIntersecting)
      },
      { root: null, threshold: 0 }
    )
    observer.observe(sentinel)

    return () => observer.disconnect()
  }, [location.pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
    <header
      className={
        `fixed inset-x-0 top-0 z-50 h-[80px] header-bg-transition border-b w-full transition-colors duration-500 ${
          isPastHero
            ? 'is-solid border-[var(--header-border)]'
            : 'border-transparent'
        }`
      }
    >
      <div className="h-full container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={getAssetUrl(isPastHero ? '/icons/Mor-remodeling-logo.png' : '/icons/Mor-remodeling-white-logo.png')}
            alt="Mor Remodeling"
            className="w-[115px] h-[50px] md:w-[115px] md:h-[50px] object-contain select-none"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          {common.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isPastHero
                    ? isActive
                      ? 'text-[var(--link-active)] font-medium underline underline-offset-4'
                      : 'text-[#2A2A2A] font-normal'
                    : isActive
                      ? 'text-[#F2F1EF] font-medium underline underline-offset-4'
                      : 'text-[#F2F1EF]/90 font-normal'
                } transition-colors duration-0 text-base leading-[1.4] px-5`
              }
            >
              <AnimatedText text={item.label} />
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-sm font-medium ${isPastHero ? 'text-[#2A2A2A]' : 'text-[#F2F1EF]'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>
        
        {/* Desktop Phone Button */}
        <div className="hidden md:block">
          <PhoneButton isPastHero={isPastHero} />
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-[100] bg-[#F2F1EF] md:hidden">
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-9 h-9 text-[#2A2A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-8 pt-20 space-y-8">
            {common.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[32px] font-medium leading-[1.4] uppercase ${
                    isActive ? 'text-[#2A2A2A] underline underline-offset-4' : 'text-[#2A2A2A]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone Button at Bottom */}
          <div className="mt-auto p-8">
            <PhoneButton isPastHero={true} isMobile={true} />
          </div>
        </div>
      </div>
    )}
    </>
  )
}

