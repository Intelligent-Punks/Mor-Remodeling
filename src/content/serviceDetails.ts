export interface ServiceDetail {
  slug: string
  hero: {
    title: string
    subtitle: string
    image: string // path relative to /images/services/{slug}/page/
  }
  features: {
    icon: string // path to icon in /icons/
    title: string
    description: string
  }[]
  description: string[]
  gallery: string[] // names of files in /images/services/{slug}/page/
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'kitchen-remodeling',
    hero: {
      title: 'Kitchen Remodelling',
      subtitle: 'Where functionality meets timeless design.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Custom Design Solutions',
        description:
          'Every kitchen is designed around your lifestyle, preferences, and home layout.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Premium Materials',
        description:
          'We work only with trusted suppliers to ensure lasting beauty and durability.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Full-Service Management',
        description:
          'From concept to completion, we handle design, permits, and installation.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Transparent Pricing',
        description: 'Clear, detailed estimates with no hidden costs.',
      },
    ],
    description: [
      "Your kitchen is more than just a place to cook — it's the heart of your home. At MOR Remodeling, we specialize in transforming outdated or inefficient kitchens into beautiful, practical spaces designed for how you live today. Whether you dream of a sleek modern layout or a cozy traditional style, our team blends craftsmanship, technology, and smart design to bring your vision to life.",
      'We handle every aspect of the renovation process — from initial layout planning and 3D visualization to cabinetry, countertops, lighting, and flooring installation. Our designers focus on maximizing space, improving workflow, and creating a seamless connection between style and comfort.',
      "With attention to every detail, we ensure the final result reflects your taste, enhances your home's value, and makes everyday life more enjoyable.",
      'MOR Remodeling — redefining the kitchen experience, one project at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug)
}

