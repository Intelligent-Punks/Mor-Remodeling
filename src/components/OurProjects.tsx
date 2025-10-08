import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '@/components/AnimatedText'

import { getAssetUrl } from '@/utils/asset'

interface Project {
  id: string
  image: string
  alt?: string
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
    <section className="py-20">
      <div className="container-custom">
        {(title || description || showButton) && (
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-10">
              {title && (
                <div className={`${description ? 'w-[290px]' : 'w-full'}`}>
                  <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.4] text-[#2A2A2A]">
                    {title}
                  </h2>
                </div>
              )}
              {description && (
                <div className="flex-1">
                  <p className="max-w-[620px] text-base leading-[1.5] text-[#2A2A2A]">
                    {description}
                  </p>
                </div>
              )}
            </div>
            {showButton && (
              <div className="flex-shrink-0">
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
        )}

        <div className={`${title || description || showButton ? 'mt-[115px]' : ''} grid grid-cols-4 gap-10`}>
          {projects.map((project, idx) => {
            // Pattern: row1 (1col, 1col, 2col), row2 (2col, 1col, 1col), row3 (1col, 1col, 2col)
            const rowIndex = Math.floor(idx / 3)
            const colIndex = idx % 3
            const isWide =
              (rowIndex % 2 === 0 && colIndex === 2) || // row 0,2,4... → wide at position 2
              (rowIndex % 2 === 1 && colIndex === 0) // row 1,3,5... → wide at position 0

            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`group relative rounded-[14px] overflow-hidden bg-[#2A2A2A] h-[360px] ${
                  isWide ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <img
                  src={getAssetUrl(project.image)}
                  alt={project.alt || ''}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={getAssetUrl('/icons/arrow-right.svg')}
                    alt=""
                    className="w-5 h-5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

