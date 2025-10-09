import { Link } from 'react-router-dom'
import privacyPolicyPage from '@/content/privacyPolicyPage'
import { getAssetUrl } from '@/utils/asset'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F2F1EF]">
      {/* Sentinel for header style switching */}
      <div id="hero-sentinel" className="absolute top-0 h-px w-px" />

      {/* Hero Section */}
      <section className="relative min-h-[750px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={getAssetUrl(privacyPolicyPage.hero.backgroundImage)}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom py-[80px]">
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
              <span>{privacyPolicyPage.hero.homeButton}</span>
            </Link>

            {/* Title */}
            <h1 className="text-[64px] font-medium leading-[1.4] text-[#F2F1EF] mb-[40px]">
              {privacyPolicyPage.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[20px] font-normal leading-[1.4] text-[#F2F1EF] max-w-[620px]">
              {privacyPolicyPage.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container-custom py-[80px]">
        <div className="flex flex-col gap-[40px]">
          {privacyPolicyPage.sections.map((section, index) => (
            <div key={section.id}>
              <div className="flex gap-[40px]">
                {/* Title Column */}
                <div className="w-[400px]">
                  <h2 className="text-[36px] font-semibold leading-[1.4] text-[#2A2A2A] whitespace-pre-line">
                    {section.id}. {section.title}
                  </h2>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <p className="text-[20px] font-normal leading-[1.4] text-[#868686] whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              {index < privacyPolicyPage.sections.length - 1 && (
                <div className="w-full h-[2px] bg-white mt-[40px]" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

