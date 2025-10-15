import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '@/components/AnimatedText'
import { getAssetUrl } from '@/utils/asset'

interface Project {
  id: string
  image: string
  alt?: string
  title: string
  date: string
  location: string
}

interface OurProjectsProps {
  title?: string
  description?: string
  projects: Project[]
  showButton?: boolean
}

export default function OurProjects({
  title,
  description,
  projects,
  showButton = true,
}: OurProjectsProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <section className="py-13 md:py-20">
      <div className="container-custom">
        {(title || description) && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:gap-10">
              {title && (
                <div className={`${description ? 'md:w-[295px]' : 'w-full'}`}>
                  <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
                    {title}
                  </h2>
                </div>
              )}
              {description && (
                <div className="md:flex-1">
                  <p className="max-w-[620px] text-sm md:text-base leading-[1.5] text-[#2A2A2A]">
                    {description}
                  </p>
                </div>
              )}
            </div>
            
            {/* Desktop "See all projects" button - shown next to title */}
            {showButton && (
              <div className="hidden md:block">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-base font-medium text-[#2A2A2A] group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatedText text="See all projects" externalHover={isHovered} />
                  <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-white transition-colors">
                    <img
                      src={getAssetUrl('/icons/arrow-right.svg')}
                      alt=""
                      className="w-5 h-5 transition-all"
                    />
                  </span>
                </Link>
              </div>
            )}
          </div>
        )}

        <div className={`${title || description ? 'mt-10 md:mt-[64px]' : ''} grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10`}>
          {projects.map((project, idx) => {
            // Desktop: row1 (1col, 1col, 2col), row2 (2col, 1col, 1col), row3 (1col, 1col, 2col)
            const rowIndex = Math.floor(idx / 3)
            const colIndex = idx % 3
            const isWideDesktop =
              (rowIndex % 2 === 0 && colIndex === 2) || // row 0,2,4... → wide at position 2
              (rowIndex % 2 === 1 && colIndex === 0) // row 1,3,5... → wide at position 0

            // Mobile: pattern repeats every 3 items
            // 0,1 = small (col-span-1), 2 = big (col-span-2)
            // 3,4 = small (col-span-1), 5 = big (col-span-2)
            const positionInGroup = idx % 3
            const isFullWidthMobile = positionInGroup === 2

            return (
              <div
                key={project.id}
                className={`${
                  isFullWidthMobile ? 'col-span-2' : 'col-span-1'
                } ${isWideDesktop ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group relative block rounded-[8px] md:rounded-[14px] overflow-hidden bg-[#2A2A2A] h-[190px] md:h-[360px]"
                >
                  <img
                    src={getAssetUrl(project.image)}
                    alt={project.alt || ''}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Hover info block with project details - desktop only */}
                  <div className="hidden md:block absolute left-[30px] top-[30px] w-[197px] bg-white rounded-[10px] p-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-[14px] font-medium leading-[1.4] text-[#2A2A2A] mb-[10px]">
                      {project.title}
                    </h3>
                    <p className="text-[14px] leading-[1.4] text-[#868686]">
                      {project.date}
                    </p>
                    <p className="text-[14px] leading-[1.4] text-[#868686]">
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center overflow-hidden z-10">
                    <img
                      src={getAssetUrl('/icons/arrow-right.svg')}
                      alt=""
                      className="w-5 h-5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    />
                  </div>
                </Link>
                
                {/* Mobile: project title below image */}
                <p className="md:hidden mt-[10px] text-[14px] font-medium leading-[1.4] text-[#2A2A2A]">
                  {project.title}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Mobile "See all projects" button - shown below grid */}
        {showButton && (
          <div className="mt-10 md:hidden flex justify-end">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-base font-medium text-[#2A2A2A] group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatedText text="See all projects" externalHover={isHovered} />
              <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white transition-colors">
                <img
                  src={getAssetUrl('/icons/arrow-right.svg')}
                  alt=""
                  className="w-5 h-5 transition-all"
                />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

