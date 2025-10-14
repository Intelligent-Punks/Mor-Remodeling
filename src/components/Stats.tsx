import AnimatedParagraph from '@/components/AnimatedParagraph'
import { getAssetUrl } from '@/utils/asset'

interface Stat {
  id: string
  value: string
  label: string
  bgImage: string
}

interface StatsProps {
  title: string
  description: string
  stats: Stat[]
}

export default function Stats({ title, description, stats }: StatsProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6 md:gap-10 items-start md:items-center">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
              {title}
            </h2>
          </div>
          <div className="md:flex md:justify-end">
            <p className="max-w-[620px] text-sm md:text-base leading-[1.5] text-[#2A2A2A]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-[115px] grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative w-full md:w-[290px] h-[177px] md:h-[290px] p-5 md:p-[20px] flex flex-col justify-between overflow-hidden bg-[#F2F1EF]"
            >
              <img
                src={getAssetUrl(stat.bgImage)}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="relative z-10">
                <AnimatedParagraph
                  text={stat.value}
                  className="text-[20px] md:text-[36px] font-medium leading-[1.4] text-white"
                  lineDelay={60}
                  charDelay={8}
                />
              </div>
              <p className="relative z-10 text-xs md:text-[20px] font-normal leading-[1.5] text-white whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

