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
  'kitchen-remodel': 'Kitchen Remodel',
}

export default function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
        <img
          src={getAssetUrl('/icons/arrow-right.svg')}
          alt=""
          className="w-[20px] h-[20px] rotate-180"
        />
      </div>
      <div className="text-base text-[#000000]">
        <Link to="/" className="font-semibold hover:underline">
          {routeNames.home}
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const displayName = routeNames[name] || name

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

