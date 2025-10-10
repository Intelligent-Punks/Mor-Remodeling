import AnimatedParagraph from '@/components/AnimatedParagraph'
import { getAssetUrl } from '@/utils/asset'

interface QuoteProps {
  quoteSymbol?: string
  text: string
  author: string
  backgroundImage?: string
}

export default function Quote({ quoteSymbol = '"', text, author, backgroundImage }: QuoteProps) {
  return (
    <section className={`relative overflow-hidden ${!backgroundImage ? 'bg-white' : ''}`}>
      {backgroundImage && (
        <img
          src={getAssetUrl(backgroundImage)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="relative z-10 container-custom py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-[40px] items-start">
          <div>
            <img
              src={getAssetUrl('/icons/quote.svg')}
              alt="Quote"
              className={`w-12 h-12 md:w-14 md:h-14 ${backgroundImage ? 'brightness-0 invert' : ''}`}
            />
          </div>
          <div>
            <blockquote className="max-w-[960px]">
              <AnimatedParagraph
                text={text}
                className={`text-base md:text-[32px] font-medium leading-[1.4] ${backgroundImage ? 'text-white' : 'text-[#2A2A2A]'}`}
                lineDelay={80}
                charDelay={10}
              />
              <footer className={`mt-6 md:mt-[40px] text-sm md:text-[20px] font-medium leading-[1.4] ${backgroundImage ? 'text-white' : 'text-[#2A2A2A]'}`}>
                {author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

