import faq from '@/content/faq'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function FAQPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold">{faq.title}</h1>
      <div className="mt-4 space-y-4">
        {faq.items.map((item) => (
          <AnimatedSection key={item.id}>
            <h2 className="text-lg font-medium">{item.q}</h2>
            <p className="opacity-80">{item.a}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

