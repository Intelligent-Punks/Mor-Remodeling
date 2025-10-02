interface Service {
  id: string
  title: string
  image: string
}

interface ServicesProps {
  title: string
  services: Service[]
}

export default function Services({ title, services }: ServicesProps) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-10">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
            <a
              key={service.id}
              href={`/services/${service.id}`}
              className="group block"
            >
              <div className="relative rounded-[14px] overflow-hidden bg-[#2A2A2A] w-full h-[290px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                  <img
                    src="/icons/arrow-right.svg"
                    alt=""
                    className="w-5 h-5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="mt-5 text-[20px] font-medium leading-[1.4] text-[#2A2A2A] max-w-[290px]">
                {service.title}
              </h3>
            </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

