import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    let currentScroll = window.pageYOffset
    let targetScroll = window.pageYOffset
    let animationFrame: number | null = null

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4)
    }

    const animate = () => {
      const diff = targetScroll - currentScroll
      
      // Smooth interpolation with easing
      if (Math.abs(diff) > 0.5) {
        currentScroll += diff * 0.1 // Smooth lerp factor
        window.scrollTo(0, currentScroll)
        animationFrame = requestAnimationFrame(animate)
      } else {
        currentScroll = targetScroll
        window.scrollTo(0, currentScroll)
        animationFrame = null
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      const delta = e.deltaY
      const scrollAmount = delta * 0.5 // Balanced sensitivity
      
      targetScroll += scrollAmount
      
      // Constrain to page bounds
      targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight))
      
      // Start animation if not already running
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    // Handle scroll events to update current position
    const handleScroll = () => {
      if (!animationFrame) {
        currentScroll = window.pageYOffset
        targetScroll = window.pageYOffset
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])
}
