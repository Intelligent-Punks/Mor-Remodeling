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
  const [visibleItems, setVisibleItems] = useState(4) // Default: assume 4 items visible
  const containerRef = useRef<HTMLDivElement>(null)
  const total = items.length

  // Use external activeIndex if provided, otherwise use internal
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex

  // Calculate how many items are visible based on container width
  useEffect(() => {
    const calculateVisibleItems = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        // Each item is 330px wide, calculate how many fit
        const itemsCount = Math.floor(containerWidth / 330)
        setVisibleItems(Math.max(3, itemsCount)) // Minimum 3 items
      }
    }

    calculateVisibleItems()
    window.addEventListener('resize', calculateVisibleItems)
    return () => window.removeEventListener('resize', calculateVisibleItems)
  }, [])

  // Sync offset with activeIndex changes
  useEffect(() => {
    // Timeline scrolling logic:
    // - First 3 items (0,1,2) stay static (offset = 0)
    // - From 4th item onwards, scroll to reveal next items
    // - Stop scrolling when last item becomes visible
    // - visibleItems is calculated dynamically based on container width
    
    if (total <= 3) {
      // If 3 or fewer items, no scrolling needed
      setOffset(0)
    } else if (activeIndex <= 2) {
      // First 3 items: no scroll
      setOffset(0)
    } else {
      // Scroll to reveal items, but stop when last item becomes visible
      const currentOffset = (activeIndex - 2) * 330
      // Stop scrolling when last item appears in visible area
      // Adjust based on how many items are visible:
      // - If 4 visible: stop earlier (total - visibleItems - 1)
      // - If 5+ visible: allow more scroll (total - visibleItems)
      const adjustment = visibleItems >= 5 ? 0 : 1
      const maxScroll = Math.max(0, (total - visibleItems - adjustment) * 330)
      setOffset(Math.min(currentOffset, maxScroll))
    }
  }, [activeIndex, total, visibleItems])

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
      <div className="absolute top-[73px] h-px bg-[#C99E63] timeline-line" 
           style={{ 
             width: `${(total - 1) * 330}px` // Line spans from first to last dot
           }} />

      {/* Timeline Items Container with scroll */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${offset}px)`,
            // width: 'fit-content',
          }}
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => selectItem(idx)}
              className="relative flex flex-col items-start cursor-pointer group"
              style={{
                width: idx === items.length - 1 ? 'auto' : '50%',
                minWidth: idx === items.length - 1 ? 'auto' : '330px',
              }}
            >
              {/* Year - Above line, aligned to dot */}
              <p
                className={`text-[32px] font-medium leading-[1.5] mb-[20px] transition-colors duration-300 ${
                  activeIndex === idx ? 'text-[#2A2A2A]' : 'text-[#C99E63]'
                }`}
              >
                {item.year}
              </p>

              {/* Dot - On line */}
              <div
                className={`w-4 h-4 rounded-full transition-colors duration-300 relative z-10 -mt-2 ${
                  activeIndex === idx ? 'bg-[#2A2A2A]' : 'bg-[#C99E63]'
                }`}
                style={{ marginTop: '-2px' }}
              />

              {/* Title - Below line, aligned to dot */}
              <p
                className={`text-base leading-[1.4] mt-[20px] transition-colors duration-300 ${
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
        <div className="absolute bottom-0 flex gap-[20px] timeline-buttons-right">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className={`w-[58px] h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
              activeIndex === 0
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:opacity-80 cursor-pointer'
            }`}
            aria-label="Previous period"
          >
            <img
              src={getAssetUrl('/icons/arrow-right.svg')}
              alt=""
              className="w-8 h-8 rotate-180"
            />
          </button>
          <button
            onClick={next}
            disabled={activeIndex === total - 1}
            className={`w-[58px] h-[58px] rounded-full bg-[#FFE2BA] flex items-center justify-center transition-opacity ${
              activeIndex === total - 1
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:opacity-80 cursor-pointer'
            }`}
            aria-label="Next period"
          >
            <img
              src={getAssetUrl('/icons/arrow-right.svg')}
              alt=""
              className="w-8 h-8"
            />
          </button>
        </div>
      )}
    </div>
  )
}

