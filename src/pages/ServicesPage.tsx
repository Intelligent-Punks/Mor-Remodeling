import services from '@/content/services'
import Services from '@/components/Services'

export default function ServicesPage() {
  return <Services title={services.title} services={services.list} />
}


