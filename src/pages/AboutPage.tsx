import { useState, useRef, useEffect } from 'react'
import aboutPage from '@/content/aboutPage'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import services from '@/content/services'
import FAQ from '@/components/FAQ'
import ContactFormSection from '@/components/ContactFormSection'
import Breadcrumb from '@/components/Breadcrumb'
import Stats from '@/components/Stats'
import Quote from '@/components/Quote'
import ImageCarousel from '@/components/ImageCarousel'
import TimelineCarousel from '@/components/TimelineCarousel'
import AnimatedParagraph from '@/components/AnimatedParagraph'
import SEOHead from '@/components/SEOHead'
import { getAssetUrl } from '@/utils/asset'
import contactPage from '@/content/contactPage'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export default function AboutPage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // Update content height when timeline index changes
  useEffect(() => {
    if (contentRef.current) {
      const newHeight = contentRef.current.scrollHeight
      setContentHeight(newHeight)
    }
  }, [activeTimelineIndex])

  return (
    <div className="bg-[#F2F1EF]">
      <SEOHead seo={aboutPage.seo} />
      {/* Hero Section */}
      <section className="container-custom pt-[54px]">
        <div className="mt-9 md:mt-[80px] mb-12 md:mb-16">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[660px_1fr] gap-5 md:gap-[64px] items-start mb-6 md:mb-[64px]">
          <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.2] text-[#2A2A2A]">
            {aboutPage.hero.title}
          </h1>
          <div className="md:max-w-[620px] md:ml-auto">
            <p className="text-xs md:text-[20px] font-medium leading-[1.5] text-[#2A2A2A] whitespace-pre-line">
              {aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image - Full width */}
      <section className="mb-11 md:mb-18">
        <div className="h-[320px] md:h-[500px]">
          <img
            src={getAssetUrl(aboutPage.hero.imageMobile)}
            alt="About MOR Remodelling"
            className="md:hidden w-full h-full object-cover"
          />
          <img
            src={getAssetUrl(aboutPage.hero.image)}
            alt="About MOR Remodelling"
            className="hidden md:block w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pb-12 md:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-3 md:gap-[80px]">
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.3] text-[#2A2A2A]">
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
        <div className="mt-10 md:mt-[40px]">
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
          bgImage: value.bgImage,
        }))}
      />

      {/* Our History Section - Yellow background */}
      <section className="py-12 md:py-18 bg-[#F4C077]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-6 md:gap-[64px] items-start mb-10 md:mb-[64px]">
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {aboutPage.history.title}
            </h2>
            <div className="md:max-w-[620px] md:ml-auto md:mt-[120px]">
              {/* Timeline Description */}
              <div
                className="mb-6 md:mb-[70px] transition-all duration-500 ease-out overflow-hidden"
                style={{ height: contentHeight > 0 ? `${contentHeight}px` : 'auto' }}
              >
                <div ref={contentRef} key={activeTimelineIndex}>
                  <AnimatedParagraph
                    text={aboutPage.history.timeline[activeTimelineIndex].description}
                    className="text-sm md:text-[20px] leading-[1.5] text-[#2A2A2A]"
                    lineDelay={50}
                    charDelay={5}
                  />
                </div>
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
      <FAQ
        title={faq.title}
        subtitle={faq.subtitle}
        backgroundVideo={faq.backgroundVideo}
        videoPoster={faq.videoPoster}
        items={faq.items}
      />

      <section className="pt-11 pb-[80px] bg-[#F2F1EF]">
        <div className="container-custom mb-4 md:mb-[64px]">
          <h2 className="md:text-[48px] text-[32px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-sm md:text-[20px] leading-[1.4] text-[#868686]">
            {contactPage.reviews.subtitle}
          </p>
        </div>

        <ReviewsCarousel reviews={contactPage.reviews.items} />
      </section>

      {/* Contact Form */}
      <ContactFormSection />
    </div>
  )
}
