import { useState } from 'react'
import { getAssetUrl } from '@/utils/asset'

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  title: string
  subtitle: string
  items: FaqItem[]
}

export default function FAQ({ title, subtitle, items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-left md:text-center mb-10 md:mb-[93px]">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
            {title}
          </h2>
          <p className="mt-4 md:mt-[40px] text-sm md:text-[20px] font-medium leading-[1.4] text-[#2A2A2A]">
            {subtitle}
          </p>
        </div>

        <div className="md:max-w-[620px] md:mx-auto space-y-4 md:space-y-[20px]">
          {items.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="bg-white rounded-[14px] overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between px-5 py-5 md:py-[26px] text-left cursor-pointer"
                >
                  <span className="text-sm md:text-[20px] font-semibold leading-[1.4] text-[#2A2A2A] pr-4">
                    {item.question}
                  </span>
                  <img
                    src={getAssetUrl('/icons/arrow-down.svg')}
                    alt=""
                    className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-500 ease-in-out ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 md:pb-[26px] text-sm md:text-base leading-[1.4] text-[#2A2A2A]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

