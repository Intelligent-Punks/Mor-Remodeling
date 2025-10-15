import { Link } from 'react-router-dom'
import { getAssetUrl } from '@/utils/asset'

interface Service {
  id: string
  title: string
  image: string
  slug?: string
}

interface ServicesProps {
  title: string
  services: Service[]
}

export default function Services({ title, services }: ServicesProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 md:gap-10">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#2A2A2A] md:mt-[-15px]">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, idx) => {
              // Last item on mobile (if odd number) should span full width
              const isLastOdd = idx === services.length - 1 && services.length % 2 === 1
              const hasDetailPage = !!service.slug
              
              const content = (
                <>
                  <div className="relative rounded-[8px] md:rounded-[14px] overflow-hidden w-full h-[190px] md:h-[290px]">
                    <img
                      src={getAssetUrl(service.image)}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                      <img
                        src={getAssetUrl('/icons/arrow-right.svg')}
                        alt=""
                        className="w-5 h-5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="mt-3 md:mt-4 text-sm md:text-[20px] font-medium leading-[1.4] text-[#2A2A2A]">
                    {service.title}
                  </h3>
                </>
              )
              
              return hasDetailPage ? (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className={`group block ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={service.id}
                  className={`group ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

