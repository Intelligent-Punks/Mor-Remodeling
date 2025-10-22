import { useState, useEffect, useRef } from 'react'
import { getAssetUrl } from '@/utils/asset'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalImages = images.length
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<number | null>(null)

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
    } else {
      // Loop back to start
      setCurrentIndex(0)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      // Loop to end
      setCurrentIndex(totalImages - visibleCount)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && totalImages > visibleCount) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < totalImages - visibleCount) {
            return prev + 1
          } else {
            return 0 // Loop back to start
          }
        })
      }, 3000) // Change slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, totalImages, visibleCount])

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
      setIsAutoPlaying(false) // Pause auto-play on interaction
      e.preventDefault()
    }

    const handleMouseLeave = () => {
      isDown = false
      container.classList.remove('cursor-grabbing')
      // Re-enable smooth scrolling if mouse leaves during drag
      container.style.scrollBehavior = 'smooth'
    }

    const handleMouseUp = () => {
      isDown = false
      container.classList.remove('cursor-grabbing')
      // Re-enable smooth scrolling after drag
      container.style.scrollBehavior = 'smooth'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 2
      // Disable smooth scrolling during drag for immediate response
      container.style.scrollBehavior = 'auto'
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
        className="overflow-x-auto carousel-container cursor-grab scrollbar-hide select-none scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
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
          onClick={() => {
            prev()
            setIsAutoPlaying(false) // Pause auto-play on manual navigation
          }}
          className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-white flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity"
          aria-label="Previous image"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-6 h-6 md:w-8 md:h-8 rotate-180"
          />
        </button>
        <button
          onClick={() => {
            next()
            setIsAutoPlaying(false) // Pause auto-play on manual navigation
          }}
          className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-white flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity"
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

