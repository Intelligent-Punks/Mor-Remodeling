import { useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  externalHover?: boolean
}

export default function AnimatedText({ text, className = '', externalHover }: AnimatedTextProps) {
  const [internalHover, setInternalHover] = useState(false)
  const isHovered = externalHover !== undefined ? externalHover : internalHover

  return (
    <span
      className={`inline-flex h-[20px] ${className}`}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden relative align-bottom"
          style={{ verticalAlign: 'bottom' }}
        >
          <span
            className="inline-flex flex-col transition-all duration-500 ease-out"
            style={{
              transitionDelay: isHovered ? `${index * 50}ms` : `${(text.length - index - 1) * 50}ms`,
              transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
            }}
          >
            <span className="inline-block transition-opacity duration-500">
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span 
              className="inline-block transition-opacity duration-500"
              style={{
                opacity: isHovered ? 1 : 0,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  )
}


