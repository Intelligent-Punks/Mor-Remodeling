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
      '/images/services/full-home-renovation/image-1.jpg',
      '/images/services/full-home-renovation/image-2.jpg',
      '/images/services/full-home-renovation/image-3.jpg',
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
  // {
  //   id: 'decks-patios-outdoor-covers',
  //   slug: 'decks-patios-outdoor-covers',
  //   title: 'Decks, Patios & Outdoor Covers',
  //   shortDescription:
  //     'Your outdoor space should be an extension of your home. With custom decks, patios, and covers, we create inviting areas perfect for relaxing, entertaining, and enjoying the outdoors in comfort and style.',
  //   fullDescription:
  //     'Decks, patios, and outdoor covers add both beauty and functionality to your home\'s exterior. At MOR Remodelling, we specialize in designing and building outdoor spaces that feel like natural extensions of your living area. Whether you envision a spacious deck for family gatherings, a cozy patio for quiet evenings, or a stylish cover to protect you from the sun and rain, we tailor each project to your lifestyle.',
  //   images: [
  //     '/images/services/decks-patios-outdoor-covers/image-1.png',
  //     '/images/services/decks-patios-outdoor-covers/image-2.png',
  //     '/images/services/decks-patios-outdoor-covers/image-3.png',
  //   ],
  // },
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
    title: 'Roofing',
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
    id: 'interior-design-custom-finishes',
    slug: 'interior-design-custom-finishes',
    title: 'Interior Design & Custom Finishes',
    shortDescription:
      'True interior design goes beyond decoration — it\'s about creating spaces that feel authentic, balanced, and timeless. From custom cabinetry to lighting design, we focus on every detail.',
    fullDescription:
      'At MOR Remodelling, we bring together creativity, craftsmanship, and technical expertise to shape interiors that tell your story. Whether it\'s a single room or an entire home, our designers work closely with you to understand your needs, refine your vision, and translate it into a space that feels both intentional and inviting. From custom cabinetry and built-ins to wall treatments, lighting design, and finish selections, we focus on every detail that defines your home\'s atmosphere and character.',
    images: [
      '/images/services/interior-design-custom-finishes/image-1.png',
      '/images/services/interior-design-custom-finishes/image-2.png',
      '/images/services/interior-design-custom-finishes/image-3.png',
    ],
  },
  {
    id: 'flooring-installation-refinishing',
    slug: 'flooring-installation-refinishing',
    title: 'Flooring Installation & Refinishing',
    shortDescription:
      'Your floors do more than support your home — they define its character, comfort, and flow. Professional flooring installation and refinishing services that combine technical excellence with refined aesthetics.',
    fullDescription:
      'At MOR Remodelling, we specialize in professional flooring installation and refinishing services that combine technical excellence with refined aesthetics. Whether you\'re updating a single room or renovating your entire home, our team ensures perfect alignment, durable finishes, and materials that stand the test of time. We work with top suppliers to offer a curated selection of styles and textures that complement your interior design. From contemporary hardwood to classic stone, every project is guided by precision, quality, and attention to detail.',
    images: [
      '/images/services/flooring-installation-refinishing/image-1.png',
      '/images/services/flooring-installation-refinishing/image-2.png',
      '/images/services/flooring-installation-refinishing/image-3.png',
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
  title: 'Our Core Services',
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
        'Interior Design & Custom Finishes',
        'Flooring Installation & Refinishing',
        'Exterior Remodeling',
      ],
    },
  },
  backgroundImage: '/images/services/bg-hero.jpg',
  hero: {
    title: 'Comprehensive Remodeling and Construction Services',
    subtitle:
      `At MOR Remodeling, every project is a balance of design, craftsmanship, and trust. From kitchen and bathroom remodels to full home transformations, we provide complete design and build solutions that redefine comfort and beauty.
      We approach every service with the same care and commitment as if we were working on our own family home.`,
    image: 'hero.png',
  },
  services: servicesPageData,
  bgImgContactForm: '/images/services/bg-contact-form.jpg',
}

