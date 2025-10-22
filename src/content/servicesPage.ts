export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  images: [string, string, string] // Exactly 3 images
}

export const servicesPageData: ServiceItem[] = [
  {
    id: 'full-home-renovation',
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    shortDescription:
      'Complete transformations that refresh your entire living space, inside and out.',
    fullDescription:
      'A full home renovation is more than just updating a few rooms — it\'s about transforming your entire living space into a home that matches your lifestyle and vision. At MOR Remodelling, we handle every aspect of the process, from initial design and planning to the final finishes.',
    images: [
      '/images/services/full-home-renovation/image-1.png',
      '/images/services/full-home-renovation/image-2.png',
      '/images/services/full-home-renovation/image-3.png',
    ],
  },
  {
    id: 'kitchen-remodeling',
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    shortDescription:
      'Your kitchen is the heart of your home, and our remodeling services are designed to make it both functional and beautiful. From modern layouts to high-quality finishes, we create spaces that bring families together and make everyday cooking a pleasure.',
    fullDescription:
      'A kitchen remodel is one of the best ways to enhance your home\'s comfort, style, and value. At MOR Remodelling, we specialize in creating kitchens that combine functionality with timeless design. Whether you\'re dreaming of an open-concept layout, custom cabinetry, durable countertops, or energy-efficient appliances, we tailor every detail to fit your lifestyle.',
    images: [
      '/images/services/kitchen-remodeling/image-1.png',
      '/images/services/kitchen-remodeling/image-2.png',
      '/images/services/kitchen-remodeling/image-3.png',
    ],
  },
  {
    id: 'bathroom-remodeling',
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    shortDescription:
      'A well-designed bathroom should be both stylish and practical. Our remodeling services bring comfort, elegance, and smart solutions to create a space where you can truly relax.',
    fullDescription:
      'Bathroom remodeling is about more than just updating fixtures — it\'s about creating a personal retreat that blends beauty with function. At MOR Remodelling, we help transform outdated bathrooms into modern, comfortable spaces designed around your needs. From custom vanities and walk-in showers to premium tiles and lighting, we carefully select every element to match your style.',
    images: [
      '/images/services/bathroom-remodeling/image-1.png',
      '/images/services/bathroom-remodeling/image-2.png',
      '/images/services/bathroom-remodeling/image-3.png',
    ],
  },
  {
    id: 'decks-patios-outdoor-covers',
    slug: 'decks-patios-outdoor-covers',
    title: 'Decks, Patios & Outdoor Covers',
    shortDescription:
      'Your outdoor space should be an extension of your home. With custom decks, patios, and covers, we create inviting areas perfect for relaxing, entertaining, and enjoying the outdoors in comfort and style.',
    fullDescription:
      'Decks, patios, and outdoor covers add both beauty and functionality to your home\'s exterior. At MOR Remodelling, we specialize in designing and building outdoor spaces that feel like natural extensions of your living area. Whether you envision a spacious deck for family gatherings, a cozy patio for quiet evenings, or a stylish cover to protect you from the sun and rain, we tailor each project to your lifestyle.',
    images: [
      '/images/services/decks-patios-outdoor-covers/image-1.png',
      '/images/services/decks-patios-outdoor-covers/image-2.png',
      '/images/services/decks-patios-outdoor-covers/image-3.png',
    ],
  },
  {
    id: 'room-home-additions',
    slug: 'room-home-additions',
    title: 'Room & Home Additions',
    shortDescription:
      'Need more space? Our room and home additions are designed to seamlessly expand your living area while matching the style and structure of your existing home.',
    fullDescription:
      'Room and home additions are the perfect solution for growing families or homeowners who simply need more space. At MOR Remodelling, we specialize in designing and building additions that integrate seamlessly with your existing home, both inside and out. Whether you need an extra bedroom, a larger living room, or a full second-story addition, we customize every detail to fit your lifestyle and needs.',
    images: [
      '/images/services/room-home-additions/image-1.png',
      '/images/services/room-home-additions/image-2.png',
      '/images/services/room-home-additions/image-3.png',
    ],
  },
  {
    id: 'roofing-siding-foundations',
    slug: 'roofing-siding-foundations',
    title: 'Roofing, Siding & Foundations',
    shortDescription:
      'Strong roofs, durable siding, and reliable foundations are the backbone of every home. Our expert services protect your property, improve curb appeal, and ensure lasting safety and comfort.',
    fullDescription:
      'Roofing, siding, and foundations are critical to the strength, efficiency, and longevity of your home. At MOR Remodelling, we provide complete solutions to keep these essential elements in top condition. Our roofing services ensure durable protection against weather, while our siding upgrades improve insulation and add aesthetic appeal. We also specialize in foundation repair and reinforcement, securing the stability of your home for years to come.',
    images: [
      '/images/services/roofing-siding-foundations/image-1.png',
      '/images/services/roofing-siding-foundations/image-2.png',
      '/images/services/roofing-siding-foundations/image-3.png',
    ],
  },
  {
    id: 'outdoor-kitchen',
    slug: 'outdoor-kitchen',
    title: 'Outdoor Kitchen',
    shortDescription:
      'Transform your backyard into the ultimate entertaining space with a custom outdoor kitchen. Perfect for grilling, dining, and hosting memorable gatherings with family and friends.',
    fullDescription:
      'An outdoor kitchen extends your living space beyond the walls of your home, creating the perfect setting for entertaining and enjoying the great outdoors. At MOR Remodelling, we design and build custom outdoor kitchens that combine functionality with style, featuring premium grills, refrigerators, sinks, and storage solutions. Whether you envision a simple grilling station or a fully-equipped outdoor cooking area with seating and dining space, we create durable, weather-resistant installations that enhance your outdoor lifestyle.',
    images: [
      '/images/services/outdoor-kitchen/image-1.png',
      '/images/services/outdoor-kitchen/image-2.png',
      '/images/services/outdoor-kitchen/image-3.png',
    ],
  },
  {
    id: 'landscaping',
    slug: 'landscaping',
    title: 'Landscaping',
    shortDescription:
      'Transform your outdoor space into a beautiful, functional landscape that enhances your home\'s curb appeal and creates the perfect environment for relaxation and entertainment.',
    fullDescription:
      'Professional landscaping brings your outdoor vision to life, creating stunning gardens, pathways, and outdoor living areas that complement your home\'s architecture. At MOR Remodelling, we design and install complete landscape solutions including plant selection, irrigation systems, hardscaping, and outdoor lighting. Whether you want a low-maintenance garden, a vibrant flower display, or a complete outdoor living space, we create landscapes that thrive in your climate and reflect your personal style.',
    images: [
      '/images/services/landscaping/image-1.png',
      '/images/services/landscaping/image-2.png',
      '/images/services/landscaping/image-3.png',
    ],
  },
  {
    id: 'exterior-remodeling-siding',
    slug: 'exterior-remodeling-siding',
    title: 'Exterior Remodeling & Siding',
    shortDescription:
      'The exterior of your home is the first thing people see — and it deserves to make a lasting impression. Our exterior remodeling and siding services improve curb appeal, boost energy efficiency, and protect your home for years to come.',
    fullDescription:
      'Exterior remodeling and siding upgrades are essential for both the beauty and durability of your home. At MOR Remodelling, we specialize in transforming outdated exteriors into modern, welcoming façades that reflect your style. Our siding solutions not only refresh the look of your home but also improve insulation, weather resistance, and overall energy efficiency. From full façade redesigns to small upgrades, we use premium materials that combine aesthetic appeal with long-lasting performance.',
    images: [
      '/images/services/exterior-remodeling-siding/image-1.png',
      '/images/services/exterior-remodeling-siding/image-2.png',
      '/images/services/exterior-remodeling-siding/image-3.png',
    ],
  },
]

export default {
  title: 'Services',
  seo: {
    title: 'Our Services - Mor Remodeling',
    description:
      'Comprehensive remodeling services including full home renovations, kitchen and bathroom remodels, room additions, roofing, siding, interior design, and more. Expert craftsmanship for every project.',
    keywords: [
      'remodeling services',
      'home renovation services',
      'kitchen remodeling',
      'bathroom remodeling',
      'room additions',
      'roofing services',
      'siding installation',
      'interior design',
      'flooring installation',
      'exterior remodeling',
    ],
    ogImage: '/images/services/og-services.png',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Home Remodeling Services',
      provider: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
      },
      description:
        'Professional home remodeling services including full renovations, kitchen and bathroom remodels, room additions, roofing, siding, and custom finishes.',
      areaServed: {
        '@type': 'Place',
        name: 'Bay Area, California',
      },
      serviceType: [
        'Full Home Renovation',
        'Kitchen Remodeling',
        'Bathroom Remodeling',
        'Room & Home Additions',
        'Roofing & Siding',
        'Outdoor Kitchen',
        'Landscaping',
        'Exterior Remodeling',
      ],
    },
  },
  services: servicesPageData,
}

