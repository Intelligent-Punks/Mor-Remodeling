import { useParams, Navigate } from 'react-router-dom'
import { getServiceBySlug } from '@/content/serviceDetails'
import { getAssetUrl } from '@/utils/asset'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import faq from '@/content/faq'
import contactForm from '@/content/contactForm'
import contactPage from '@/content/contactPage'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const serviceImagePath = (fileName: string) =>
    getAssetUrl(`/images/services/${service.slug}/page/${fileName}`)

  return (
    <div className="bg-[#F2F1EF]">
      {/* Hero Sentinel for header tracking */}
      <div id="hero-sentinel" className="absolute top-[5vh] pointer-events-none" />

      {/* Hero Section */}
      <section id="hero" className="relative h-[714px] md:h-[750px] overflow-hidden">
        <img
          src={serviceImagePath(service.hero.image)}
          alt={service.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

        {/* Content on Hero */}
        <div className="container-custom relative h-full flex flex-col py-[54px]">
          {/* Breadcrumb */}
          <div className="[&_*]:!text-white mt-10 md:mt-15">
            <Breadcrumb />
          </div>

          {/* Content Grid */}
          <div className="pt-25 pb-10 md:pb-25 font-medium leading-[1.4] text-[#F2F1EF]">
            {/* Title - Left (centered vertically on desktop, bottom on mobile) */}
            <h1 className="text-[32px] md:text-[40px]">
              {service.hero.title}
            </h1>
            <p className="text-sm md:text-xl font-normal leading-[1.4] text-[#F2F1EF] pt-6">
              {service.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Description Section */}
      <section className="py-12 md:py-[80px] container-custom">
        <div className="px-4 md:px-0 md:container-custom grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[40px]">
          {/* Features */}
          <div className="grid grid-cols-2 gap-5 md:gap-[30px]">
            {service.features.map((feature, idx) => (
              <div key={idx} className="relative">
                {/* Icon */}
                <div className="w-[60px] h-[60px] md:w-[99px] md:h-[99px] mb-[30px] md:mb-0 absolute left-[-30px] md:left-[-45px] top-[-18px] md:top-0 flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt="" 
                    className="w-[60px] h-[60px] md:w-[99px] md:h-[99px] object-contain" 
                  />
                </div>

                {/* Content */}
                <div className="md:pt-[15px] relative">
                  <h3 className="text-[20px] md:text-[24px] font-medium md:font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px] md:mb-[30px] md:max-w-[210px]">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-base leading-[1.5] md:leading-[1.4] text-[#868686]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4 md:space-y-6 text-base md:text-[20px] leading-[1.4] text-[#868686]">
            {service.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container-custom pb-12 md:pb-[120px]">
        {/* Mobile Gallery: 2 small, 1 large pattern */}
        <div className="md:hidden grid grid-cols-2 gap-5">
          {service.gallery.map((image, idx) => {
            const isFullWidth = idx % 3 === 2
            return (
              <div
                key={idx}
                className={`${
                  isFullWidth ? 'col-span-2 h-[190px]' : 'col-span-1 h-[190px]'
                } rounded-[8px] overflow-hidden bg-white`}
              >
                <img src={serviceImagePath(image)} alt="" className="w-full h-full object-cover" />
              </div>
            )
          })}
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:grid md:grid-cols-1 md:gap-[40px]">
          {/* First row: full width */}
          <div className="w-full h-[500px] rounded-[14px] overflow-hidden bg-white">
            <img
              src={serviceImagePath(service.gallery[0])}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second row: 3 columns */}
          <div className="grid grid-cols-3 gap-[40px]">
            {service.gallery.slice(1, 4).map((image, idx) => (
              <div key={idx} className="h-[320px] rounded-[14px] overflow-hidden bg-white">
                <img src={serviceImagePath(image)} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Third row: 2 columns */}
          {service.gallery.length > 4 && (
            <div className="grid grid-cols-2 gap-[40px]">
              {service.gallery.slice(4, 6).map((image, idx) => (
                <div key={idx} className="h-[400px] rounded-[14px] overflow-hidden bg-white">
                  <img
                    src={serviceImagePath(image)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-[120px] pt-20">
        <div className="container-custom mb-[80px]">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[20px]">
            {contactPage.reviews.title}
          </h2>
          <p className="text-base md:text-[20px] leading-[1.4] text-[#868686]">
            {contactPage.reviews.subtitle}
          </p>
        </div>

        <ReviewsCarousel reviews={contactPage.reviews.items} />
      </section>

      {/* FAQ Section */}
      <FAQ
        title={faq.title}
        subtitle={faq.subtitle}
        items={faq.items}
        backgroundVideo={faq.backgroundVideo}
        videoPoster={faq.videoPoster}
      />

      {/* Contact Form Section */}
      <ContactForm
        title={contactForm.title}
        subtitle={contactForm.subtitle}
        backgroundImage={contactForm.backgroundImage}
      />
    </div>
  )
}
