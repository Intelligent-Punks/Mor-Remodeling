import services from '@/content/services'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function ServicesPage() {
  return (
    <div>
      <h1>{services.title}</h1>
      {services.list.map((s) => (
        <AnimatedSection key={s.id}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}


