import { useState, useRef, useEffect } from 'react'
import { ReviewItem } from '@/content/contactPage'
import { getAssetUrl } from '@/utils/asset'

interface ReviewsCarouselProps {
  reviews: ReviewItem[]
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const total = reviews.length
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const visibleCount = isMobile ? 1 : 2

  const next = () => {
    if (currentIndex < total - visibleCount) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Sync scroll position with currentIndex
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        // Mobile: card width + gap
        const cardWidth = window.innerWidth - 80 // calc(100vw-80px)
        const gap = 20
        const scrollPosition = currentIndex * (cardWidth + gap)
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      } else {
        // Desktop: scroll to show current card fully with proper spacing
        const cardWidth = 620
        const gap = 40
        const scrollPosition = currentIndex * (cardWidth + gap)
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex])

  // Add mouse drag to scroll for desktop
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      container.classList.add('cursor-grabbing')
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
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
      const walk = (x - startX) * 2 // Scroll speed multiplier
      container.scrollLeft = scrollLeft - walk
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Render stars with half-star support
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#F4C077"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#E5E5E5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F4C077"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#E5E5E5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )
    }

    return stars
  }

  return (
    <div className="relative">
      {/* Reviews Container with swipe support */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide cursor-grab select-none"
      >
        <div className="flex gap-5 md:gap-[40px] pl-4 carousel-reviews-container">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[calc(100vw-80px)] md:w-[620px] bg-white rounded-[14px] p-[30px] md:p-[40px]"
            >
              {/* Avatar and Name - same line */}
              <div className="flex items-center gap-[12px] mb-[20px]">
                {review.avatar ? (
                  <img
                    src={getAssetUrl(review.avatar)}
                    alt={review.name}
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                ) : (
                  <div className="w-[40px] h-[40px] bg-[#2A2A2A] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <p className="text-[18px] font-semibold text-[#2A2A2A]">{review.name}</p>
              </div>

              {/* Review Text */}
              <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#2A2A2A] mb-[20px]">
                "{review.text}"
              </p>

              {/* Stars and Date - same line */}
              <div className="flex justify-between items-center">
                <div className="flex gap-[4px]">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-[#868686]">{review.date}</p>
              </div>
            </div>
          ))}
          {/* Spacer for right padding */}
          <div className="flex-shrink-0 w-4 md:w-[20px)]" />
        </div>
      </div>

      {/* Navigation Buttons - aligned with content right edge */}
      <div className="flex gap-[20px] mt-[40px] container-custom justify-end">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Previous review"
        >
          <img
            src={getAssetUrl('/icons/arrow-right.svg')}
            alt=""
            className="w-8 h-8 rotate-180"
          />
        </button>
        <button
          onClick={next}
          disabled={currentIndex >= total - visibleCount}
          className={`w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center transition-opacity ${
            currentIndex >= total - visibleCount
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:opacity-80 cursor-pointer'
          }`}
          aria-label="Next review"
        >
          <img src={getAssetUrl('/icons/arrow-right.svg')} alt="" className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}

