import faq from '@/content/faq'
import FAQ from '@/components/FAQ'

export default function FAQPage() {
  return <FAQ title={faq.title} subtitle={faq.subtitle} items={faq.items} />
}

