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
    id: 'interior-design-custom-finishes',
    slug: 'interior-design-custom-finishes',
    title: 'Interior Design & Custom Finishes',
    shortDescription:
      'Every detail matters when it comes to creating a home you love. Our interior design and custom finishes bring personality, elegance, and comfort to your space, tailored to reflect your unique style.',
    fullDescription:
      'Interior design and custom finishes are what truly make a house feel like home. At MOR Remodelling, we specialize in creating interiors that are both functional and inspiring, with every element carefully chosen to match your taste and lifestyle. From color palettes and lighting concepts to custom millwork, cabinetry, and decorative details, we bring harmony and character to every room. Our designers work closely with you to balance aesthetics with practicality, ensuring that your space not only looks stunning but also feels comfortable and efficient.',
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
      'Beautiful floors set the tone for your entire home. Our installation and refinishing services bring out the best in hardwood, tile, laminate, and more — combining durability with timeless style.',
    fullDescription:
      'Flooring is one of the most impactful elements of any home, shaping both its look and its feel. At MOR Remodelling, we provide expert installation and refinishing services that enhance comfort, durability, and design. Whether you\'re choosing hardwood for warmth, tile for elegance, or laminate for practicality, we help you find the perfect solution to match your lifestyle. Our refinishing services restore existing floors, removing years of wear and bringing back their natural beauty.',
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
  title: 'Services',
  services: servicesPageData,
}

