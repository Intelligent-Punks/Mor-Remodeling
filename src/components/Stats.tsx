import AnimatedParagraph from '@/components/AnimatedParagraph'

interface Stat {
  id: string
  value: string
  label: string
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
              className="w-full md:w-[290px] h-[177px] md:h-[290px] bg-[#F2F1EF] rounded-[14px] p-5 md:p-[24px] flex flex-col justify-between"
            >
              <AnimatedParagraph
                text={stat.value}
                className="text-[32px] md:text-[34px] font-medium leading-[1.4] text-[#2A2A2A]"
                lineDelay={60}
                charDelay={8}
              />
              <p className="text-sm md:text-[20px] font-normal leading-[1.5] text-[#2A2A2A]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

