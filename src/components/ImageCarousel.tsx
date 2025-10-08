import { useState, useEffect } from 'react'
import { getAssetUrl } from '@/utils/asset'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalImages = images.length

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

  return (
    <div className="relative pb-20 md:pb-[98px]">
      {/* Images Container - starts from container edge, overflows right */}
      <div className="overflow-hidden carousel-container">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * slideDistance}px)`,
          }}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[177px] h-[177px] md:w-[400px] md:h-[260px] rounded-[8px] md:rounded-[14px] overflow-hidden bg-white mr-[10px] md:mr-[40px]"
            >
              <img
                src={getAssetUrl(image)}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover"
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

