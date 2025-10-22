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

export interface ServiceSEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  schema: Record<string, any>
}

export function generateServiceSEO(service: ServiceDetail): ServiceSEO {
  return {
    title: `${service.hero.title} | Mor Remodeling`,
    description: service.hero.subtitle + ' ' + service.description[0].substring(0, 100) + '...',
    keywords: [
      service.hero.title.toLowerCase(),
      'professional ' + service.hero.title.toLowerCase(),
      'Bay Area ' + service.hero.title.toLowerCase(),
      'home remodeling',
      'renovation services',
    ],
    ogImage: `/images/services/${service.slug}/page/${service.hero.image}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.hero.title,
      description: service.hero.subtitle,
      provider: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Bay Area, California',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
      },
    },
  }
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'kitchen-remodeling',
    hero: {
      title: 'Kitchen Remodeling',
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
  {
    slug: 'full-home-renovation',
    hero: {
      title: 'Full Home Renovation',
      subtitle: 'Complete home transformations that exceed expectations.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Comprehensive Planning',
        description: 'Complete project management from design to final walkthrough.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Structural Expertise',
        description: 'Safe, code-compliant structural modifications and improvements.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Energy Efficiency',
        description: 'Modern insulation, windows, and systems for optimal comfort.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Timeline Management',
        description: 'Detailed scheduling to minimize disruption to your life.',
      },
    ],
    description: [
      'A full home renovation is the ultimate way to transform your living space. At MOR Remodeling, we specialize in comprehensive home transformations that address every aspect of your property — from structural improvements to aesthetic updates.',
      'Our full renovation services include kitchen and bathroom remodels, flooring and lighting updates, electrical and plumbing upgrades, and exterior improvements. We work with you to create a cohesive design that flows throughout your entire home.',
      'Every project is managed with precision, ensuring quality craftsmanship and timely completion. We handle all permits, inspections, and coordination with subcontractors, so you can focus on the excitement of your new home.',
      'MOR Remodeling — creating dream homes, one renovation at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png'],
  },
  {
    slug: 'bathroom-remodeling',
    hero: {
      title: 'Bathroom Remodeling',
      subtitle: 'Creating spa-like retreats in your own home.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Luxury Materials',
        description: 'Premium fixtures, tiles, and finishes for lasting beauty.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Space Optimization',
        description: 'Smart layouts that maximize functionality in any size space.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Modern Fixtures',
        description: 'Energy-efficient fixtures and smart home integration.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Accessibility Options',
        description: 'Universal design features for aging in place.',
      },
    ],
    description: [
      'Transform your bathroom into a personal sanctuary with our comprehensive remodeling services. Whether you want a modern master suite or a functional family bathroom, we create spaces that combine beauty with practicality.',
      'Our bathroom renovations include custom vanities, premium tile work, luxury fixtures, and smart storage solutions. We focus on creating layouts that maximize space while maintaining the aesthetic you desire.',
      'From concept to completion, we handle every detail including plumbing, electrical work, and finishing touches. Our team ensures every project meets the highest standards of quality and craftsmanship.',
      'MOR Remodeling — where every bathroom becomes a retreat.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'decks-patios-outdoor-covers',
    hero: {
      title: 'Decks, Patios & Outdoor Covers',
      subtitle: 'Extending your living space into the great outdoors.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Custom Design',
        description: 'Tailored outdoor spaces that complement your home and lifestyle.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Durable Materials',
        description: 'Weather-resistant materials built to last for years.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Integrated Lighting',
        description: 'Ambient and task lighting for year-round enjoyment.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Maintenance-Free',
        description: 'Low-maintenance materials that look great year after year.',
      },
    ],
    description: [
      'Create the perfect outdoor living space with our deck, patio, and outdoor cover services. We design and build beautiful, functional outdoor areas that extend your home\'s living space into nature.',
      'Our outdoor construction services include custom decks, stone patios, pergolas, and covered outdoor kitchens. We use premium materials and construction techniques to ensure your outdoor space is both beautiful and durable.',
      'Every project is designed to maximize your outdoor enjoyment while complementing your home\'s architecture. We consider factors like sun exposure, privacy, and maintenance to create the perfect outdoor retreat.',
      'MOR Remodeling — bringing the indoors out, beautifully.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'room-home-additions',
    hero: {
      title: 'Room & Home Additions',
      subtitle: 'Expanding your home\'s potential with thoughtful additions.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Seamless Integration',
        description: 'Additions that look like they were always part of your home.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'ADU Expertise',
        description: 'Accessory Dwelling Units for rental income or family use.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Permit Management',
        description: 'Full permit and inspection coordination for legal compliance.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Structural Engineering',
        description: 'Safe, code-compliant structural modifications.',
      },
    ],
    description: [
      'Need more space? Our room and home addition services can transform your property with thoughtful, well-designed expansions. Whether you need an extra bedroom, home office, or complete ADU, we create additions that enhance your home\'s value and functionality.',
      'Our addition services include single room additions, multi-room expansions, and complete Accessory Dwelling Units (ADUs). We work with you to design additions that seamlessly integrate with your existing home while meeting all local zoning requirements.',
      'Every addition is built to the same high standards as new construction, with proper insulation, electrical, and plumbing systems. We handle all permits and inspections to ensure your addition is completely legal and safe.',
      'MOR Remodeling — expanding possibilities, one addition at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'roofing-siding-foundations',
    hero: {
      title: 'Roofing, Siding & Foundations',
      subtitle: 'Protecting your home with quality structural work.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Weather Protection',
        description: 'Durable materials that protect against all weather conditions.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Energy Efficiency',
        description: 'Insulation and materials that reduce heating and cooling costs.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Structural Integrity',
        description: 'Foundation work that ensures your home\'s long-term stability.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Warranty Coverage',
        description: 'Comprehensive warranties on all materials and workmanship.',
      },
    ],
    description: [
      'Protect your most valuable investment with our roofing, siding, and foundation services. These critical home components require expert installation and quality materials to ensure your home\'s long-term protection and value.',
      'Our structural services include complete roof replacement, siding installation, and foundation repair work. We use only premium materials and proven installation techniques to ensure maximum durability and performance.',
      'Every project includes proper insulation and ventilation to improve your home\'s energy efficiency. We work with you to select materials that enhance your home\'s curb appeal while providing maximum protection.',
      'MOR Remodeling — protecting what matters most, your home.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'outdoor-kitchen',
    hero: {
      title: 'Outdoor Kitchen',
      subtitle: 'Culinary excellence meets outdoor living.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Premium Appliances',
        description: 'High-end outdoor cooking equipment built to last.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Weather Resistance',
        description: 'Materials and finishes designed for outdoor conditions.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Custom Design',
        description: 'Tailored layouts that match your cooking style and space.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Entertainment Ready',
        description: 'Integrated seating and serving areas for hosting.',
      },
    ],
    description: [
      'Take your cooking outdoors with a custom outdoor kitchen that rivals any indoor setup. Our outdoor kitchen designs combine premium appliances, durable materials, and smart layouts to create the ultimate outdoor cooking experience.',
      'Our outdoor kitchens include built-in grills, refrigerators, sinks, and storage solutions. We use weather-resistant materials and professional-grade appliances to ensure your outdoor kitchen performs year after year.',
      'Every design is tailored to your cooking style and entertainment needs. Whether you\'re a casual griller or a serious chef, we create outdoor kitchens that enhance your outdoor living experience.',
      'MOR Remodeling — where outdoor cooking becomes an art form.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'landscaping',
    hero: {
      title: 'Landscaping',
      subtitle: 'Transforming outdoor spaces into natural masterpieces.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Native Plants',
        description: 'Drought-resistant, low-maintenance plant selections.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Irrigation Systems',
        description: 'Smart watering systems for healthy, beautiful landscapes.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Hardscaping',
        description: 'Patios, walkways, and retaining walls for structure.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Seasonal Interest',
        description: 'Year-round beauty with thoughtful plant combinations.',
      },
    ],
    description: [
      'Create a beautiful, sustainable landscape that enhances your home\'s curb appeal and provides year-round enjoyment. Our landscaping services combine artistic design with practical functionality to create outdoor spaces you\'ll love.',
      'Our landscape design services include plant selection, irrigation systems, hardscaping, and outdoor lighting. We focus on creating low-maintenance landscapes that thrive in your local climate while providing maximum visual impact.',
      'Every landscape design is tailored to your lifestyle and maintenance preferences. Whether you want a formal garden or a natural, low-maintenance landscape, we create designs that reflect your vision.',
      'MOR Remodeling — where nature meets design, beautifully.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
  {
    slug: 'exterior-remodeling-siding',
    hero: {
      title: 'Exterior Remodeling & Siding',
      subtitle: 'Enhancing curb appeal with beautiful, durable exteriors.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Curb Appeal',
        description: 'Transform your home\'s exterior with modern materials and design.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Energy Efficiency',
        description: 'Insulated siding and windows that reduce energy costs.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Low Maintenance',
        description: 'Materials that look great with minimal upkeep.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Weather Protection',
        description: 'Durable materials that protect against the elements.',
      },
    ],
    description: [
      'Give your home a fresh, modern look with our exterior remodeling and siding services. We transform outdated exteriors into beautiful, energy-efficient facades that enhance your home\'s value and curb appeal.',
      'Our exterior services include siding replacement, window and door updates, and exterior lighting. We use premium materials and modern installation techniques to ensure your home\'s exterior is both beautiful and durable.',
      'Every exterior project is designed to complement your home\'s architectural style while improving energy efficiency. We work with you to select materials and colors that enhance your home\'s character and value.',
      'MOR Remodeling — where first impressions last a lifetime.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png'],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug)
}

