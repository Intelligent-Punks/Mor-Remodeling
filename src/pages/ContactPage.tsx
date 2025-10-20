import { useState } from 'react'
import contactPage from '@/content/contactPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import AnimatedText from '@/components/AnimatedText'
import { getAssetUrl } from '@/utils/asset'

export default function ContactPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="bg-[#F2F1EF]">
      {/* Breadcrumb */}
      <div className="container-custom pt-[20px] md:pt-[54px]">
        <div className="mt-[88px] md:mt-[100px] mb-[46px] md:mb-10">
          <Breadcrumb />
        </div>
      </div>

      {/* Contact Details */}
      <section className="container-custom pb-[50px] md:pb-20">
        <div className="md:grid md:grid-cols-2 md:gap-[80px]">
          {/* Desktop Left Column - Social Links */}
          <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pb-[18px]">
              <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.1] text-[#2A2A2A] mb-[8px] md:mb-[20px]">
                {contactPage.hero.title}
              </h1>
              <p className="text-[20px] leading-[1.5] md:leading-[1.4] text-[#2A2A2A] mb-[20px] md:mb-0">
                {contactPage.hero.subtitle}
              </p>
            </section>
            <div className="hidden md:flex gap-[20px] mt-auto">
              {contactPage.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-[10px] text-[20px] font-medium text-[#2A2A2A]"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <img src={link.icon} alt={link.name} className="w-6 h-6" />
                  <AnimatedText text={link.name} externalHover={hoveredLink === link.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Grid */}
          <div>
            <div className="flex flex-col gap-[16px] md:gap-[40px] md:grid md:grid-cols-2 md:mb-[40px]">
              {contactPage.contactInfo.details.map((detail) => (
                <div key={detail.id} className="md:block">
                  {/* Mobile: horizontal layout */}
                  <div className="flex md:block">
                    <p className="text-[14px] md:text-[20px] font-normal text-[#868686] md:text-[#2A2A2A] md:mb-[10px] capitalize w-[131px] md:w-auto pr-6 md:pr-0">
                      {detail.label}
                    </p>
                    <div className="flex-1 md:flex-none">
                      {detail.email && (
                        <p className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A] md:mb-[5px]">
                          {detail.email}
                        </p>
                      )}
                      {detail.phone && (
                        <p className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A]">
                          {detail.phone}
                        </p>
                      )}
                      {detail.value && (
                        <p className="text-[14px] md:text-[20px] font-medium text-[#2A2A2A] whitespace-pre-line">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interior Image - Desktop only */}
            <div className="hidden md:block w-full h-[400px] overflow-hidden">
              <img
                src={getAssetUrl(contactPage.interiorImage)}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Image - Mobile */}
      <section className="md:hidden container-custom pb-[25px]">
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={getAssetUrl(contactPage.interiorImage)}
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Social Links - Mobile */}
      <section className="md:hidden container-custom pb-[50px]">
        <div className="flex gap-[50px]">
          {contactPage.socialLinks.map((link) => (
            <a key={link.name} href={link.url} className="flex items-center">
              <img src={link.icon} alt={link.name} className="w-[33px] h-[33px]" />
            </a>
          ))}
        </div>
      </section>

      {/* Google Map Section - Desktop */}
      <div className="hidden md:block w-full h-[620px] overflow-hidden pb-[80px]">
        <iframe
          src={contactPage.map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MOR Remodelling Office Location"
        />
      </div>

      {/* Map Section - Mobile */}
      <section className="md:hidden pb-[40px]">
        <div className="w-full h-[500px] overflow-hidden">
          <iframe
            src={contactPage.map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MOR Remodelling Office Location"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="pb-[60px] md:pb-[60px]">
        <div className="container-custom mb-[30px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-[14px] md:text-[20px] leading-[1.4] text-[#868686]">
            {contactPage.reviews.subtitle}
          </p>
        </div>

        <ReviewsCarousel reviews={contactPage.reviews.items} />
      </section>

      {/* FAQ */}
      <FAQ
        title={faq.title}
        subtitle={faq.subtitle}
        backgroundVideo={faq.backgroundVideo}
        videoPoster={faq.videoPoster}
        items={faq.items}
      />

      {/* Contact Form */}
      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}
