import AnimatedParagraph from '@/components/AnimatedParagraph'

interface QuoteProps {
  quoteSymbol?: string
  text: string
  author: string
}

export default function Quote({ quoteSymbol = '"', text, author }: QuoteProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-[320px_1fr] gap-[40px] items-start">
          <div>
            <img
              src="/icons/quote.svg"
              alt="Quote"
              className="w-16 h-16"
            />
          </div>
          <div>
            <blockquote className="max-w-[960px]">
              <AnimatedParagraph
                text={text}
                className="text-[24px] md:text-[32px] font-medium leading-[1.4] text-[#2A2A2A]"
                lineDelay={80}
                charDelay={10}
              />
              <footer className="mt-[40px] text-[20px] font-medium leading-[1.4] text-[#2A2A2A]">
                {author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

