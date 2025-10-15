import { useState, useEffect, useRef } from 'react'
import { TimelineItem } from '@/content/aboutPage'
import { getAssetUrl } from '@/utils/asset'

interface TimelineCarouselProps {
  items: TimelineItem[]
  onIndexChange: (index: number) => void
  showButtons?: boolean
  activeIndex?: number
}

export default function TimelineCarousel({ items, onIndexChange, showButtons = true, activeIndex: externalActiveIndex }: TimelineCarouselProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(330) // Dynamic item width
  const [visibleItems, setVisibleItems] = useState(4.3) // Show 4 full + partial 5th item
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = items.length

  // Use external activeIndex if provided, otherwise use internal
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex

  // Calculate dynamic item width based on container width
  useEffect(() => {
    const calculateItemWidth = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        
        // Get padding-left from computed styles
        const computedStyle = window.getComputedStyle(containerRef.current)
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0
        
        // Available width for items
        const availableWidth = containerWidth - paddingLeft
        
        // Desired visible items: 2.3 on mobile, 4.3 on desktop
        const desiredVisibleItems = mobile ? 2.3 : 4.3
        setVisibleItems(desiredVisibleItems)
        
        // Calculate dynamic item width
        const calculatedItemWidth = availableWidth / desiredVisibleItems
        setItemWidth(Math.floor(calculatedItemWidth))
      }
    }

    calculateItemWidth()
    window.addEventListener('resize', calculateItemWidth)
    return () => window.removeEventListener('resize', calculateItemWidth)
  }, [])

  // Sync offset with activeIndex changes
  useEffect(() => {
    // Scrolling logic:
    // - Mobile: index 0 static, from index 1 onwards scroll (but cap at maxScroll)
    // - Desktop: index 0,1,2,3 static, from index 4 onwards scroll (but cap at maxScroll)
    
    if (isMobile) {
      // Mobile: scroll starts from index 1
      if (activeIndex === 0) {
        setOffset(0)
      } else {
        const currentOffset = activeIndex * itemWidth
        // Stop scrolling when last item is visible
        const maxScroll = Math.max(0, (total - visibleItems) * itemWidth)
        setOffset(Math.min(currentOffset, maxScroll))
      }
    } else {
      // Desktop: scroll starts from index 4 (keep first 4 visible)
      if (activeIndex <= 3) {
        setOffset(0)
      } else {
        const scrollAmount = activeIndex - 3
        const currentOffset = scrollAmount * itemWidth
        // Stop when last item is visible
        const maxScroll = Math.max(0, (total - visibleItems) * itemWidth)
        setOffset(Math.min(currentOffset, maxScroll))
      }
    }
  }, [activeIndex, total, visibleItems, isMobile, itemWidth])

  const next = () => {
    if (activeIndex < total - 1) {
      const newIndex = activeIndex + 1
      if (externalActiveIndex === undefined) {
        setInternalActiveIndex(newIndex)
      }
      onIndexChange(newIndex)
    }
  }

  const prev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1
      if (externalActiveIndex === undefined) {
        setInternalActiveIndex(newIndex)
      }
      onIndexChange(newIndex)
    }
  }

  const selectItem = (idx: number) => {
    if (externalActiveIndex === undefined) {
      setInternalActiveIndex(idx)
    }
    onIndexChange(idx)
  }

  return (
    <div ref={containerRef} className="relative timeline-container overflow-hidden">
      {/* Timeline Line - Moves with dots */}
      <div 
        className="absolute h-px bg-[#C99E63] timeline-line"
        style={{ 
          top: isMobile ? '59px' : '73px',
          width: `${(total - 1) * itemWidth}px` // Line spans from first to last dot
        }} 
      />

      {/* Timeline Items Container with scroll */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => selectItem(idx)}
              className="relative flex flex-col items-start cursor-pointer group flex-shrink-0"
              style={{
                width: idx === items.length - 1 ? 'auto' : `${itemWidth}px`,
              }}
            >
              {/* Year - Above line, aligned to dot */}
              <p
                className={`text-[28px] md:text-[32px] font-medium leading-[1.5] mb-3 md:mb-[20px] transition-colors duration-300 ${
                  activeIndex === idx ? 'text-[#2A2A2A]' : 'text-[#C99E63]'
                }`}
              >
                {item.year}
              </p>

              {/* Dot - On line */}
              <div
                className={`w-4 h-4 rounded-full transition-colors duration-300 relative z-10 ${
                  activeIndex === idx ? 'bg-[#2A2A2A]' : 'bg-[#C99E63]'
                }`}
                style={{ marginTop: '-2px' }}
              />

              {/* Title - Below line, aligned to dot */}
              <p
                className={`text-xs md:text-base leading-[1.4] mt-3 md:mt-[20px] transition-colors duration-300 ${
                  activeIndex === idx ? 'text-[#2A2A2A]' : 'text-[#C99E63]'
                }`}
              >
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show if showButtons is true */}
      {showButtons && (
        <div className="absolute bottom-0 flex gap-3 md:gap-[20px] timeline-buttons-right">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className={`w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
              activeIndex === 0
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:opacity-80 cursor-pointer'
            }`}
            aria-label="Previous period"
          >
            <img
              src={getAssetUrl('/icons/arrow-right.svg')}
              alt=""
              className="w-6 h-6 md:w-8 md:h-8 rotate-180"
            />
          </button>
          <button
            onClick={next}
            disabled={activeIndex === total - 1}
            className={`w-12 h-12 md:w-[58px] md:h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
              activeIndex === total - 1
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:opacity-80 cursor-pointer'
            }`}
            aria-label="Next period"
          >
            <img
              src={getAssetUrl('/icons/arrow-right.svg')}
              alt=""
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </button>
        </div>
      )}
    </div>
  )
}

