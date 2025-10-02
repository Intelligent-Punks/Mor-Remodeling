import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import common from '@/content/common'
import contacts from '@/content/contacts'
import AnimatedText from '@/components/AnimatedText'

function PhoneButton({ isPastHero }: { isPastHero: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`tel:${contacts.phone}`}
      aria-label={`Call ${contacts.phone}`}
      className={`inline-flex items-center rounded-full w-[193px] h-[54px] ${
        isPastHero ? 'bg-white shadow-sm' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`text-base font-medium leading-[1.4] pl-5 ${isPastHero ? 'text-[#2A2A2A]' : 'text-[#2A2A2A]'}`}>
        <AnimatedText text={contacts.phone} externalHover={isHovered} />
      </span>
      <span className="ml-auto mr-1 inline-grid place-items-center w-[46px] h-[46px] rounded-full bg-[#2A2A2A]">
        <img src="/icons/call.svg" alt="Call" className="w-5 h-5" />
      </span>
    </a>
  )
}

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false)
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

  return (
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
            src={isPastHero ? '/icons/Mor-remodeling-logo.png' : '/icons/Mor-remodeling-white-logo.png'}
            alt="Mor Remodeling"
            className="w-[110px] h-12 object-contain select-none"
          />
        </Link>
        <nav className="flex gap-10 items-center">
          {common.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isPastHero
                    ? isActive
                      ? 'text-[var(--link-active)] underline underline-offset-4'
                      : 'text-[#2A2A2A]'
                    : isActive
                      ? 'text-[#F2F1EF] underline underline-offset-4'
                      : 'text-[#F2F1EF]/90'
                } transition-colors duration-0 text-base font-normal leading-[1.4] px-5`
              }
            >
              <AnimatedText text={item.label} />
            </NavLink>
          ))}
        </nav>
        <PhoneButton isPastHero={isPastHero} />
      </div>
    </header>
  )
}

