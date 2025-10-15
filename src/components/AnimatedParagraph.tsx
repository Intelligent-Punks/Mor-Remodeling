import { useState, useEffect, useRef } from 'react'

interface AnimatedParagraphProps {
  text: string
  className?: string
  lineDelay?: number
  charDelay?: number
  style?: React.CSSProperties
}

export default function AnimatedParagraph({
  text,
  className = '',
  lineDelay = 100,
  charDelay = 20,
  style,
}: AnimatedParagraphProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const lines = text.split('\n').filter((line) => line.trim())

  return (
    <p ref={ref} className={className} style={style}>
      {lines.map((line, lineIndex) => {
        // Calculate cumulative delay: sum of all previous lines' characters
        const previousCharsCount = lines
          .slice(0, lineIndex)
          .reduce((sum, l) => sum + l.length, 0)
        const baseDelay = previousCharsCount * charDelay + lineIndex * lineDelay

        return (
          <span key={lineIndex} className="block mb-6 last:mb-0">
            {line.split(' ').map((word, wordIndex) => {
              const wordsBeforeCount = line
                .split(' ')
                .slice(0, wordIndex)
                .reduce((sum, w) => sum + w.length + 1, 0)
              const wordBaseDelay = baseDelay + wordsBeforeCount * charDelay

              return (
                <span key={wordIndex} className="inline-block mr-[0.25em]">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block overflow-hidden align-bottom"
                      style={{ verticalAlign: 'bottom' }}
                    >
                      <span
                        className="inline-block transition-all duration-700 ease-out"
                        style={{
                          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${wordBaseDelay + charIndex * charDelay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    </span>
                  ))}
                </span>
              )
            })}
          </span>
        )
      })}
    </p>
  )
}

