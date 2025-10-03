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
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-[93px]">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
            {title}
          </h2>
          <p className="mt-[40px] text-[20px] font-medium leading-[1.4] text-[#2A2A2A]">
            {subtitle}
          </p>
        </div>

        <div className="max-w-[620px] mx-auto space-y-[20px]">
          {items.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="bg-white rounded-[14px] overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between px-5 py-[26px] text-left"
                >
                  <span className="text-[20px] font-semibold leading-[1.4] text-[#2A2A2A] pr-4">
                    {item.question}
                  </span>
                  <img
                    src={getAssetUrl('/icons/arrow-down.svg')}
                    alt=""
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-[26px] text-base leading-[1.4] text-[#2A2A2A]">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

