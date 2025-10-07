import { useState } from 'react'
import { getAssetUrl } from '@/utils/asset'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = images.length

  const next = () => {
    if (currentIndex < totalImages - 3) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <div className="relative pb-[98px]">
      {/* Images Container - starts from container edge, overflows right */}
      <div className="overflow-hidden carousel-container">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 440}px)`,
          }}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[400px] h-[260px] rounded-[14px] overflow-hidden bg-white mr-[40px]"
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
      <div className="absolute bottom-0 flex gap-[20px] carousel-buttons-right">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Previous image"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-8 h-8 rotate-180"
          />
        </button>
        <button
          onClick={next}
          disabled={currentIndex >= totalImages - 3}
          className={`w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex >= totalImages - 3
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Next image"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  )
}

