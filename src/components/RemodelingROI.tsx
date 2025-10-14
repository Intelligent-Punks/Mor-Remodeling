import AnimatedParagraph from '@/components/AnimatedParagraph'
import { getAssetUrl } from '@/utils/asset'

interface ROIItem {
  id: string
  title: string
  value: string
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
    <section className="relative py-0 md:py-20 overflow-hidden mb-10 md:mb-0">
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

      <div className="relative z-10">
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A] mb-[150px] md:mb-[200px] container-custom">
          {title}
        </h2>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-[10px] pl-4">
            {items.map((item, index) => {
              // Parse value like "$27,500 --> $53,900 (+96%)"
              const match = item.value.match(/(.+?)\s*-->\s*(.+?)\s*\((.+?)\)/)
              const fromValue = match ? match[1].trim() : ''
              const toValue = match ? match[2].trim() : ''
              const percentage = match ? match[3].trim() : ''
              const isThird = index === 2

              return (
                <div
                  key={item.id}
                  className={`flex-shrink-0 w-[177px] h-[177px] p-3 flex flex-col justify-between rounded-[14px] border border-white/20 backdrop-blur-[10px] ${
                    isThird ? 'bg-[#F4C077]/10' : 'bg-white/10'
                  }`}
                >
                  <div>
                    <h3 className="text-[20px] font-medium leading-[1.4] text-[#2A2A2A]">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    {/* Price labels */}
                    <div className="flex items-end justify-between gap-[5px] mb-[10px]">
                      <div className="flex flex-col gap-[8px]">
                        <span className="text-[10px] font-medium leading-[1.5] text-[#2A2A2A]">
                          price before
                        </span>
                        <span className="text-[14px] font-medium leading-[1.5] text-[#2A2A2A]">
                          {fromValue}
                        </span>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="mb-[2px]">
                        <path
                          d="M4.67 15.91L27.33 15.91M27.33 15.91L19.24 7.82M27.33 15.91L19.24 24"
                          stroke="#2A2A2A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex flex-col gap-[8px]">
                        <span className="text-[10px] font-medium leading-[1.5] text-[#2A2A2A]">
                          price after
                        </span>
                        <span className="text-[14px] font-medium leading-[1.5] text-[#2A2A2A]">
                          {toValue}
                        </span>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1 px-2 py-2 rounded-full ${
                      isThird ? 'bg-[#FCCA84]' : 'bg-[#F2F1EF]'
                    }`}>
                      <img
                        src={getAssetUrl('/icons/price-up.svg')}
                        alt=""
                        className={`w-3 h-3.5 ${!isThird ? 'invert' : ''}`}
                      />
                      <span className={`text-base font-medium leading-[1.5] ${
                        isThird ? 'text-white' : 'text-[#2A2A2A]'
                      }`}>
                        {percentage}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* Spacer for right padding */}
            <div className="flex-shrink-0 w-4" />
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 container-custom">
          {items.map((item) => {
            // Parse value like "$27,500 --> $53,900 (+96%)"
            const match = item.value.match(/(.+?)\s*-->\s*(.+?)\s*\((.+?)\)/)
            const fromValue = match ? match[1].trim() : ''
            const toValue = match ? match[2].trim() : ''
            const percentage = match ? match[3].trim() : ''

            return (
              <div
                key={item.id}
                className="group w-[400px] h-[248px] p-[30px] flex flex-col justify-between rounded-[20px] transition-colors duration-300 bg-white/20 hover:bg-[#F4C077]/20 backdrop-blur-[5px]"
              >
                <div>
                  <AnimatedParagraph
                    text={item.title}
                    className="text-[28px] font-medium leading-[1.4] text-[#2A2A2A]"
                    lineDelay={60}
                    charDelay={8}
                  />
                </div>

                <div>
                  {/* Price labels */}
                  <div className="flex items-start gap-[9px] mb-[10px]">
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-base font-medium leading-[1.5] text-[#2A2A2A]">
                        price before
                      </span>
                      <span className="text-[28px] font-medium leading-[1.5] text-[#2A2A2A]">
                        {fromValue}
                      </span>
                    </div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mt-[31px]">
                      <path
                        d="M4.67 15.91L27.33 15.91M27.33 15.91L19.24 7.82M27.33 15.91L19.24 24"
                        stroke="#2A2A2A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-base font-medium leading-[1.5] text-[#2A2A2A]">
                        price after
                      </span>
                      <span className="text-[28px] font-medium leading-[1.5] text-[#2A2A2A]">
                        {toValue}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-[10px] px-[21px] py-2 rounded-full transition-colors duration-300 bg-[#2A2A2A] group-hover:bg-[#FCCA84]">
                    <img
                      src={getAssetUrl('/icons/price-up.svg')}
                      alt=""
                      className="w-[18px] h-5"
                    />
                    <span className="text-xl font-medium leading-[1.5] text-white group-hover:text-white transition-colors duration-300">
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
