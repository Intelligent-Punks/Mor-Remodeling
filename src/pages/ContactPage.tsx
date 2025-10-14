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
      {/* Hero Section */}
      <section className="container-custom pt-[54px] pb-[80px]">
        <div className="mt-[100px] mb-10">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-2 gap-[80px]">
          {/* Left Column */}
          <div className="flex flex-col">
            <h1 className="text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
              {contactPage.hero.title}
            </h1>
            <p className="text-[20px] leading-[1.4] text-[#2A2A2A] mb-[60px]">
              {contactPage.hero.subtitle}
            </p>

            {/* Social Links */}
            <div className="flex gap-[20px] mt-auto">
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

          {/* Right Column */}
          <div>
            {/* Contact Details Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-[40px] mb-[40px]">
              {contactPage.contactInfo.details.map((detail) => (
                <div key={detail.id}>
                  <p className="text-[20px] font-normal text-[#2A2A2A] mb-[10px]">{detail.label}</p>
                  {detail.email && (
                    <p className="text-[20px] font-medium text-[#2A2A2A] mb-[5px]">
                      {detail.email}
                    </p>
                  )}
                  {detail.phone && (
                    <p className="text-[20px] font-medium text-[#2A2A2A] mb-[5px]">
                      {detail.phone}
                    </p>
                  )}
                  {detail.value && (
                    <p className="text-[20px] font-medium text-[#2A2A2A] whitespace-pre-line">
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Interior Image */}
            <div className="w-full h-[400px] overflow-hidden">
              <img
                src={getAssetUrl(contactPage.interiorImage)}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="container-custom">
        <h2 className="text-[36px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[40px]">
          {contactPage.map.title}
        </h2>
      </section>
      <div className="w-full h-[620px] overflow-hidden pb-[80px]">
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

      {/* Reviews Section */}
      <section className="pb-[60px]">
        <div className="container-custom mb-[80px]">
          <h2 className="text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-[20px] leading-[1.4] text-[#868686]">{contactPage.reviews.subtitle}</p>
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
