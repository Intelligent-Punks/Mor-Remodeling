import { useState, useEffect, useRef } from 'react'
import { getAssetUrl } from '@/utils/asset'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalImages = images.length
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate how many images are visible and offset
  const visibleCount = isMobile ? 1 : 3
  const imageWidth = isMobile ? 177 : 400
  const imageGap = isMobile ? 10 : 40
  const slideDistance = imageWidth + imageGap

  const next = () => {
    if (currentIndex < totalImages - visibleCount) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Sync scroll position with currentIndex
  useEffect(() => {
    if (containerRef.current) {
      const scrollPosition = currentIndex * slideDistance
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex, slideDistance])

  // Add mouse drag to scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      container.classList.add('cursor-grabbing')
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      e.preventDefault()
    }

    const handleMouseLeave = () => {
      isDown = false
      container.classList.remove('cursor-grabbing')
    }

    const handleMouseUp = () => {
      isDown = false
      container.classList.remove('cursor-grabbing')
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    const handleDragStart = (e: Event) => {
      e.preventDefault()
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('dragstart', handleDragStart)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  return (
    <div className="relative pb-20 md:pb-[98px]">
      {/* Images Container - starts from container edge, overflows right */}
      <div 
        ref={containerRef}
        className="overflow-x-auto carousel-container cursor-grab scrollbar-hide select-none"
      >
        <div className="flex gap-[10px] md:gap-[40px]">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[177px] h-[177px] md:w-[400px] md:h-[260px] rounded-[8px] md:rounded-[14px] overflow-hidden bg-white"
            >
              <img
                src={getAssetUrl(image)}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - aligned with container right edge */}
      <div className="absolute bottom-0 flex gap-[10px] md:gap-[20px] carousel-buttons-right">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Previous image"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-6 h-6 md:w-8 md:h-8 rotate-180"
          />
        </button>
        <button
          onClick={next}
          disabled={currentIndex >= totalImages - visibleCount}
          className={`w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex >= totalImages - visibleCount
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Next image"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </button>
      </div>
    </div>
  )
}

