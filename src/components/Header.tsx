import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import common from '@/content/common'
import contacts from '@/content/contacts'
import services from '@/content/services'
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
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [showMobileServicesSubmenu, setShowMobileServicesSubmenu] = useState(false)
  const servicesMenuTimeout = useRef<number | null>(null)
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
    setShowMobileServicesSubmenu(false)
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
          {common.nav.map((item) => {
            const isServices = item.path === '/services'
            
            if (isServices) {
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => {
                    if (servicesMenuTimeout.current) {
                      clearTimeout(servicesMenuTimeout.current)
                    }
                    setIsServicesMenuOpen(true)
                  }}
                  onMouseLeave={() => {
                    servicesMenuTimeout.current = setTimeout(() => {
                      setIsServicesMenuOpen(false)
                    }, 200)
                  }}
                >
                  <NavLink
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

                  {/* Services Submenu */}
                  <div className={`absolute left-0 top-full pt-6.5 transition-all duration-300 ease-out ${
                    isServicesMenuOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="bg-[#F2F1EF]/60 backdrop-blur-[20px] w-[750px] shadow-lg">
                        <div className="relative p-[30px]">
                          {/* 3x3 Grid with proper structure */}
                          <div className="grid grid-cols-3 gap-0">
                            {/* Column 1: services 0,1,2 */}
                            <div className="flex flex-col">
                              {services.list.slice(0, 3).map((service, idx) => (
                                <Link
                                  key={service.id}
                                  to={service.slug ? `/services/${service.slug}` : '/services'}
                                  onClick={() => setIsServicesMenuOpen(false)}
                                  className={`block w-[206px] h-[73px] mx-4 py-3 text-base font-normal leading-[1.4] text-[#2A2A2A] hover:bg-black/5 transition-colors ${
                                    idx < 2 ? 'border-b border-[#626261]' : ''
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>

                            {/* Column 2: services 6,7,8 */}
                            <div className="flex flex-col border-l border-r border-[#626261]">
                              {services.list.slice(6, 9).map((service, idx) => (
                                <Link
                                  key={service.id}
                                  to={service.slug ? `/services/${service.slug}` : '/services'}
                                  onClick={() => setIsServicesMenuOpen(false)}
                                  className={`block w-[206px] h-[73px] mx-3 py-3 text-base font-normal leading-[1.4] text-[#2A2A2A] hover:bg-black/5 transition-colors whitespace-pre-line ${
                                    idx < 2 ? 'border-b border-[#626261]' : ''
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>

                            {/* Column 3: services 3,4,5 */}
                            <div className="flex flex-col">
                              {services.list.slice(3, 6).map((service, idx) => (
                                <Link
                                  key={service.id}
                                  to={service.slug ? `/services/${service.slug}` : '/services'}
                                  onClick={() => setIsServicesMenuOpen(false)}
                                  className={`block w-[206px] h-[73px] mx-3 py-3 text-base font-normal leading-[1.4] text-[#2A2A2A] hover:bg-black/5 transition-colors whitespace-pre-line ${
                                    idx < 2 ? 'border-b border-[#626261]' : ''
                                  }`}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              )
            }

            return (
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
            )
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <img 
            src={getAssetUrl(isMobileMenuOpen ? '/icons/close-square.svg' : '/icons/burger-menu.svg')} 
            alt="" 
            className={`w-8 h-8 ${isPastHero ? '' : 'invert'}`}
          />
        </button>
        
        {/* Desktop Phone Button */}
        <div className="hidden md:block">
          <PhoneButton isPastHero={isPastHero} />
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed top-[78px] left-0 right-0 bottom-0 z-[100] bg-[#F2F1EF] md:hidden">
        <div className="h-full flex flex-col px-5 pt-5">
          {!showMobileServicesSubmenu ? (
            <>
              {/* Main Navigation Links */}
              <nav className="flex flex-col space-y-0">
                {/* Home Page Link (mobile only) */}
                <div className="relative">
                  <NavLink
                    to="/"
                    className="flex items-center py-3 border-b border-black/40"
                  >
                    <span className="text-sm font-normal leading-[1.4] text-[#2A2A2A] uppercase w-[17px]">
                      01
                    </span>
                    <span className="ml-6 text-[48px] font-normal leading-[1.4] text-[#2A2A2A] uppercase">
                      home page
                    </span>
                  </NavLink>
                </div>

                {common.nav.map((item, idx) => {
                  const isServices = item.path === '/services'
                  
                  if (isServices) {
                    return (
                      <div key={item.path} className="relative">
                        <button
                          onClick={() => setShowMobileServicesSubmenu(true)}
                          className="w-full flex items-center py-3 border-b border-black/40 text-left"
                        >
                          <span className="text-sm font-normal leading-[1.4] text-[#2A2A2A] uppercase w-[17px]">
                            {String(idx + 2).padStart(2, '0')}
                          </span>
                          <span className="ml-6 text-[48px] font-normal leading-[1.4] text-[#2A2A2A] uppercase">
                            {item.label}
                          </span>
                        </button>
                      </div>
                    )
                  }
                  
                  return (
                    <div key={item.path} className="relative">
                      <NavLink
                        to={item.path}
                        className="flex items-center py-3 border-b border-black/40"
                      >
                        <span className="text-sm font-normal leading-[1.4] text-[#2A2A2A] uppercase w-[17px]">
                          {String(idx + 2).padStart(2, '0')}
                        </span>
                        <span className="ml-6 text-[48px] font-normal leading-[1.4] text-[#2A2A2A] uppercase">
                          {item.label}
                        </span>
                      </NavLink>
                    </div>
                  )
                })}
              </nav>

              {/* Social Icons at Bottom */}
              <div className="mt-auto pb-10 flex gap-[50px]">
                <a href={contacts.instagram} aria-label="Instagram">
                  <img src={getAssetUrl('/icons/instagram.svg')} alt="" className="w-[34px] h-[30px]" />
                </a>
                <a href={contacts.twitter} aria-label="Twitter">
                  <img src={getAssetUrl('/icons/x.svg')} alt="" className="w-8 h-8" />
                </a>
                <a href={contacts.linkedin} aria-label="LinkedIn">
                  <img src={getAssetUrl('/icons/linkedin.svg')} alt="" className="w-[34px] h-[34px]" />
                </a>
                <a href={contacts.telegram} aria-label="Telegram">
                  <img src={getAssetUrl('/icons/telegram.svg')} alt="" className="w-8 h-8" />
                </a>
              </div>
            </>
          ) : (
            <>
              {/* Back Button */}
              <button
                onClick={() => setShowMobileServicesSubmenu(false)}
                className="flex items-center gap-3 mb-[10px]"
              >
                <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center">
                  <img 
                    src={getAssetUrl('/icons/arrow-right.svg')} 
                    alt="" 
                    className="w-5 h-5 rotate-180"
                  />
                </div>
                <span className="text-sm font-semibold leading-[1.4] text-[#2A2A2A] uppercase">
                  Back
                </span>
              </button>

              {/* Services Submenu */}
              <nav className="flex flex-col">
                {services.list.map((service, idx) => (
                  <div key={service.id}>
                    <Link
                      to={service.slug ? `/services/${service.slug}` : '/services'}
                      className="flex items-center justify-between py-4.5 border-b border-black/40"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-normal leading-[1.4] text-[#2A2A2A] uppercase">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[20px] font-normal leading-[1.4] text-[#2A2A2A] w-[349px]">
                          {service.title}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </nav>
            </>
          )}
        </div>
      </div>
    )}
    </>
  )
}

