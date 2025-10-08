import { useState } from 'react'
import aboutPage from '@/content/aboutPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'
import Stats from '@/components/Stats'
import Quote from '@/components/Quote'
import ImageCarousel from '@/components/ImageCarousel'
import TimelineCarousel from '@/components/TimelineCarousel'
import AnimatedParagraph from '@/components/AnimatedParagraph'
import { getAssetUrl } from '@/utils/asset'

export default function AboutPage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0)
  return (
    <div className="bg-[#F2F1EF]">
      {/* Hero Section */}
      <section className="container-custom pt-[54px]">
        <div className="mt-20 md:mt-[100px] mb-10">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 md:gap-[80px] items-start mb-10 md:mb-[80px]">
          <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
            {aboutPage.hero.title}
          </h1>
          <div className="md:max-w-[620px] md:ml-auto">
            <p className="text-xs md:text-[20px] font-medium leading-[1.5] text-[#2A2A2A]">
              {aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image - Full width */}
      <section className="mb-12 md:mb-20">
        <div className="h-[320px] md:h-[500px] bg-[#762D2D]">
          <img
            src={getAssetUrl(aboutPage.hero.image)}
            alt="About MOR Remodelling"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 md:gap-[80px]">
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {aboutPage.whoWeAre.title}
            </h2>
            <div className="md:max-w-[620px] md:ml-auto">
              <p className="text-xs md:text-[20px] font-medium leading-[1.5] text-[#2A2A2A] whitespace-pre-line">
                {aboutPage.whoWeAre.text}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Carousel - Full width, overflow to right */}
        <div className="mt-10 md:mt-[80px]">
          <ImageCarousel images={aboutPage.whoWeAre.gallery} />
        </div>
      </section>

      {/* Quote Section - White background */}
      <Quote text={aboutPage.quote.text} author={aboutPage.quote.author} />

      {/* Values Section - White background */}
      <Stats
        title="Stats"
        description="At MOR Remodelling, numbers tell our story. With years of hands-on experience, we've built a reputation for quality, trust, and precision."
        stats={aboutPage.values.map((value) => ({
          id: value.id,
          value: value.title,
          label: value.description,
        }))}
      />

      {/* Certifications Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] whitespace-pre-line mb-8 md:mb-18">
                {aboutPage.certifications.title}
              </h2>
              {/* Certification Logos Grid - 3x2 on mobile, 2x3 on desktop */}
              <div className="grid grid-cols-3 gap-3 md:gap-x-[20px] md:gap-y-[20px] md:max-w-[475px]">
                {aboutPage.certifications.logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="w-full aspect-square md:w-[138px] md:h-[138px] rounded-[12px] md:rounded-[14px] border border-[#DCDCDA] md:border-2 bg-white flex items-center justify-center"
                  >
                    <img
                      src={getAssetUrl(logo)}
                      alt={`Certification ${idx + 1}`}
                      className="max-w-[60%] md:max-w-[88px] max-h-[60%] md:max-h-[88px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="space-y-8 md:space-y-[60px]">
              {aboutPage.certifications.items.map((item) => (
                <div key={item.id}>
                  <h3 className="text-base md:text-[22px] font-medium leading-[1.4] text-[#2A2A2A] mb-2 md:mb-[10px]">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-base leading-[1.5] text-[#868686]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section - Yellow background */}
      <section className="py-12 md:py-20 bg-[#F4C077]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 md:gap-[80px] items-start mb-10 md:mb-[80px]">
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {aboutPage.history.title}
            </h2>
            <div className="md:max-w-[620px] md:ml-auto md:mt-[67px]">
              {/* Timeline Description */}
              <div key={activeTimelineIndex} className="mb-6 md:mb-[40px]">
                <AnimatedParagraph
                  text={aboutPage.history.timeline[activeTimelineIndex].description}
                  className="text-sm md:text-[20px] leading-[1.5] text-[#2A2A2A]"
                  lineDelay={50}
                  charDelay={5}
                />
              </div>
              {/* Navigation Buttons - Under text */}
              <div className="flex justify-end gap-[20px]">
                <button
                  onClick={() => {
                    if (activeTimelineIndex > 0) {
                      setActiveTimelineIndex(activeTimelineIndex - 1)
                    }
                  }}
                  disabled={activeTimelineIndex === 0}
                  className={`w-[58px] h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
                    activeTimelineIndex === 0
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:opacity-80 cursor-pointer'
                  }`}
                  aria-label="Previous period"
                >
                  <img
                    src={getAssetUrl('/icons/arrow-right.svg')}
                    alt=""
                    className="w-8 h-8 rotate-180"
                  />
                </button>
                <button
                  onClick={() => {
                    if (activeTimelineIndex < aboutPage.history.timeline.length - 1) {
                      setActiveTimelineIndex(activeTimelineIndex + 1)
                    }
                  }}
                  disabled={activeTimelineIndex === aboutPage.history.timeline.length - 1}
                  className={`w-[58px] h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
                    activeTimelineIndex === aboutPage.history.timeline.length - 1
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:opacity-80 cursor-pointer'
                  }`}
                  aria-label="Next period"
                >
                  <img src={getAssetUrl('/icons/arrow-right.svg')} alt="" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Carousel - Full width, aligned to right edge */}
        <div className="relative">
          <TimelineCarousel
            items={aboutPage.history.timeline}
            onIndexChange={setActiveTimelineIndex}
            showButtons={false}
            activeIndex={activeTimelineIndex}
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />

      {/* Contact Form */}
      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}
