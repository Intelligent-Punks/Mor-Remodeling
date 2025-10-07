import { useState, useEffect } from 'react'
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
  const total = items.length

  // Use external activeIndex if provided, otherwise use internal
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex

  // Sync offset with activeIndex changes
  useEffect(() => {
    // Calculate offset based on visible items (3 items visible)
    // Gradually scroll one item at a time, but stop when last item is visible
    if (activeIndex > 2) {
      // Start scrolling when activeIndex > 2, but stop when reaching the last visible position
      const maxOffset = (total - 3) * 330
      const currentOffset = (activeIndex - 2) * 330
      setOffset(Math.min(currentOffset, maxOffset))
    } else {
      setOffset(0)
    }
  }, [activeIndex, total])

  const next = () => {
    if (activeIndex < total - 1) {
      const newIndex = activeIndex + 1
      if (externalActiveIndex === undefined) {
        setInternalActiveIndex(newIndex)
      }
      onIndexChange(newIndex)
      // Scroll timeline gradually, one item at a time, but stop when last item is visible
      if (newIndex > 2) {
        const maxOffset = (total - 3) * 330
        const currentOffset = (newIndex - 2) * 330
        setOffset(Math.min(currentOffset, maxOffset))
      } else {
        setOffset(0)
      }
    }
  }

  const prev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1
      if (externalActiveIndex === undefined) {
        setInternalActiveIndex(newIndex)
      }
      onIndexChange(newIndex)
      // Scroll back if needed
      if (newIndex <= 2) {
        setOffset(0)
      } else {
        setOffset((newIndex - 2) * 330)
      }
    }
  }

  const selectItem = (idx: number) => {
    if (externalActiveIndex === undefined) {
      setInternalActiveIndex(idx)
    }
    onIndexChange(idx)
    // Adjust scroll to keep selected item visible, but stop when last item is visible
    if (idx > 2) {
      const maxOffset = (total - 3) * 330
      const currentOffset = (idx - 2) * 330
      setOffset(Math.min(currentOffset, maxOffset))
    } else {
      setOffset(0)
    }
  }

  return (
    <div className="relative timeline-container overflow-hidden">
      {/* Timeline Line - Moves with dots */}
      <div className="absolute top-[73px] h-px bg-[#C99E63] timeline-line" 
           style={{ 
             width: 'calc(100% - calc((100vw - 1280px) / 2 + 16px))' // Full width minus left offset
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

