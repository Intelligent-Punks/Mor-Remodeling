import { Link } from 'react-router-dom'
import thankYouPage from '@/content/thankYouPage'
import { getAssetUrl } from '@/utils/asset'

export default function ThankYouPage() {
  return (
    <div className="bg-[#F2F1EF]">
      {/* Sentinel is used by Header to switch style when hero leaves viewport */}
      <div id="hero-sentinel" className="absolute top-0 h-px w-px" />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[750px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={getAssetUrl(thankYouPage.hero.backgroundImage)}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom py-[80px]">
          {/* Main Content - Centered */}
          <div className="flex flex-col items-center text-center">
            {/* Home Page Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-[10px] mb-[72px] text-[16px] font-semibold text-white"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img
                  src={getAssetUrl('/icons/arrow-right.svg')}
                  alt=""
                  className="w-5 h-5 rotate-180"
                />
              </div>
              <span>Home page</span>
            </Link>

            {/* Title */}
            <h1 className="text-[64px] font-medium leading-[1.4] text-[#F2F1EF] mb-[40px] max-w-[911px]">
              {thankYouPage.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[20px] leading-[1.4] text-[#F2F1EF] max-w-[620px]">
              {thankYouPage.hero.subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
