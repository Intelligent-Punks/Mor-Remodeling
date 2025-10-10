import AnimatedParagraph from '@/components/AnimatedParagraph'
import { getAssetUrl } from '@/utils/asset'

interface ROIItem {
  id: string
  title: string
  subtitle?: string
  value: string
  bgColor?: 'white' | 'yellow'
}

interface RemodelingROIProps {
  title: string
  backgroundVideo: string
  videoPoster: string
  items: ROIItem[]
}

export default function RemodelingROI({
  title,
  backgroundVideo,
  videoPoster,
  items,
}: RemodelingROIProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={getAssetUrl(videoPoster)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={getAssetUrl(backgroundVideo)} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#E5E3DF]/50" />

      <div className="relative z-10 container-custom">
        <h2 className="text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[200px]">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => {
            // Parse value like "$27,500 --> $53,900 (+96%)"
            const match = item.value.match(/(.+?)\s*-->\s*(.+?)\s*\((.+?)\)/)
            const fromValue = match ? match[1].trim() : ''
            const toValue = match ? match[2].trim() : ''
            const percentage = match ? match[3].trim() : ''

            return (
              <div
                key={item.id}
                className="group min-h-[320px] p-[28px] flex flex-col justify-between transition-colors duration-300 bg-white hover:bg-[#F4C077]"
              >
                <div>
                  <AnimatedParagraph
                    text={item.title}
                    className="text-[36px] font-medium leading-[1.4] text-[#2A2A2A]"
                    lineDelay={60}
                    charDelay={8}
                  />
                  {item.subtitle && (
                    <p className="mt-[20px] text-[20px] font-medium leading-[1.5] text-[#2A2A2A]">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[32px] font-medium leading-[1.5] text-[#2A2A2A]">
                      {fromValue}
                    </span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M4.67 15.91L27.33 15.91M27.33 15.91L19.24 7.82M27.33 15.91L19.24 24"
                        stroke="#2A2A2A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[32px] font-medium leading-[1.5] text-[#2A2A2A]">
                      {toValue}
                    </span>
                  </div>

                  <div className="inline-flex items-center justify-center px-[18px] rounded-full self-start transition-colors duration-300 bg-[#F2F1EF] group-hover:bg-[#FCCA84] mt-[12px]">
                    <span className="text-[40px] font-medium leading-[1.5] text-[#2A2A2A] group-hover:text-white transition-colors duration-300">
                      {percentage}
                    </span>
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
