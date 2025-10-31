import { useLocation, Link } from 'react-router-dom'
import { getAssetUrl } from '@/utils/asset'

const routeNames: Record<string, string> = {
  home: 'Main',
  projects: 'Our Projects',
  services: 'Services',
  about: 'About Us',
  'contact-us': 'Contact Us',
  'thank-you': 'Thank You',
  'privacy-policy': 'Privacy Policy',
  'living-room-renovation': 'Living Room Renovation',
  'green-kitchen-renovation': 'Classic Green Kitchen Renovation',
  'green-beige-kitchen-renovation': 'Green-Beige Kitchen Renovation',
  'landscaping': 'Landscaping',
  'room-home-additions': 'Room & Home Additions',
  'outdoor-kitchen': 'Outdoor Kitchen',
  'decks-patios-outdoor-covers': 'Decks, Patios & Outdoor Covers',
  'exterior-remodeling-siding': 'Exterior Remodeling & Siding',
  'roofing-siding-foundations': 'Roofing, Siding & Foundations',
}

interface BreadcrumbProps {
  customLabel?: string
}

export default function Breadcrumb({ customLabel }: BreadcrumbProps = {}) {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <div className="flex items-center gap-[10px]">
      <Link to="/" className="flex items-center gap-[10px] hover:opacity-80 transition-opacity">
        <div className="min-w-[32px] min-h-[32px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-[20px] h-[20px] rotate-180"
          />
        </div>
        <span className="text-base text-[#000000] font-semibold">
          {routeNames.home}
        </span>
      </Link>
      <div className="text-base text-[#000000]">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const displayName = isLast && customLabel ? customLabel : (routeNames[name] || name)

          return (
            <span key={routeTo}>
              <span className="font-semibold"> / </span>
              {isLast ? (
                <span className="font-normal">{displayName}</span>
              ) : (
                <Link to={routeTo} className="font-normal hover:underline">
                  {displayName}
                </Link>
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}

