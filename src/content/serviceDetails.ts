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
      subtitle: 'Transforming every corner into a cohesive masterpiece.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Comprehensive Design Planning',
        description:
          'We create a unified concept that connects every room while reflecting personal style and functional needs.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Quality Craftsmanship',
        description:
          'Our skilled team ensures precision in every detail, from structural updates to final finishes.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Seamless Project Coordination',
        description:
          "We manage the entire renovation process — design, permits, materials, and construction — so you don't have to.",
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'On-Time Delivery',
        description: 'We value your time and guarantee efficient project execution without compromising quality.',
      },
    ],
    description: [
      "A full home renovation is more than just an upgrade — it's an opportunity to reimagine the way you live. At MOR Remodeling, we specialize in complete home transformations that balance aesthetics, comfort, and functionality. Whether you've just purchased a fixer-upper or want to modernize your existing home, our experts bring your vision to life with care and precision.",
      'From reconfiguring layouts and upgrading infrastructure to crafting custom interiors, we handle every step with meticulous attention. Our integrated team of architects, designers, and builders works together to ensure harmony between structure, design, and everyday usability.',
      'With MOR Remodeling, you get more than a renovation — you get a home that truly reflects who you are, designed for the way you live today and tomorrow.',
      'MOR Remodeling — building better homes, one transformation at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  {
    slug: 'bathroom-remodeling',
    hero: {
      title: 'Bathroom Remodeling',
      subtitle: 'Where comfort meets modern sophistication.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Tailored Design Concepts',
        description:
          'Each bathroom is designed to fit your lifestyle, aesthetic preferences, and space requirements.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Premium Fixtures & Materials',
        description: 'We partner with trusted brands to deliver lasting quality, beauty, and performance.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Efficient Space Utilization',
        description:
          'Smart layouts and storage solutions that maximize functionality without sacrificing style.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Stress-Free Process',
        description: 'From design to installation, we manage every detail for a seamless renovation experience.',
      },
    ],
    description: [
      "Your bathroom should be more than a utilitarian space — it should be a personal retreat. At MOR Remodeling, we specialize in transforming outdated or inefficient bathrooms into stylish, comfortable sanctuaries that combine beauty and practicality.",
      'Whether you envision a spa-like atmosphere with elegant finishes or a minimalist modern design, our team creates spaces that elevate your daily routine. We handle everything — from plumbing upgrades and tile installation to lighting, cabinetry, and ventilation — ensuring both aesthetic harmony and long-term durability.',
      'With careful attention to detail and craftsmanship, we bring a sense of calm and sophistication to one of the most essential rooms in your home.',
      'MOR Remodeling — redefining relaxation, one bathroom at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  // {
  //   slug: 'decks-patios-outdoor-covers',
  //   hero: {
  //     title: 'Decks, Patios & Outdoor Covers',
  //     subtitle: 'Extending your living space into the outdoors.',
  //     image: 'hero.png',
  //   },
  //   features: [
  //     {
  //       icon: '/icons/Vector.svg',
  //       title: 'Custom Outdoor Design',
  //       description:
  //         "We design decks and patios that perfectly complement your home's architecture and natural surroundings.",
  //     },
  //     {
  //       icon: '/icons/Vector-1.svg',
  //       title: 'Durable, Weather-Resistant Materials',
  //       description: 'Built to withstand the elements while maintaining long-lasting beauty and comfort.',
  //     },
  //     {
  //       icon: '/icons/Vector-2.svg',
  //       title: 'Functional & Aesthetic Balance',
  //       description:
  //         "Every detail is considered — from layout and lighting to shade and seating — to create spaces you'll love year-round.",
  //     },
  //     {
  //       icon: '/icons/Vector-3.svg',
  //       title: 'End-to-End Project Management',
  //       description: 'From permits to construction, we handle it all with precision and care.',
  //     },
  //   ],
  //   description: [
  //     "Your outdoor space is more than an extension of your home — it's where relaxation, connection, and memories come to life. At MOR Remodeling, we design and build custom decks, patios, and covers that enhance your property's value and lifestyle.",
  //     'Whether you want a cozy covered patio for morning coffee, a spacious deck for entertaining, or a seamless indoor-outdoor transition, our team brings craftsmanship, creativity, and functionality together in every project.',
  //     'We work with high-quality, low-maintenance materials and thoughtful design solutions to ensure your outdoor area remains beautiful and durable through every season.',
  //     'MOR Remodeling — crafting outdoor spaces that invite you to live beyond the walls.',
  //   ],
  //   gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  // },
  {
    slug: 'room-home-additions',
    hero: {
      title: 'Room & Home Additions',
      subtitle: 'Expanding your space, enhancing your lifestyle.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Seamless Integration',
        description:
          'We design additions that feel like a natural extension of your home, both structurally and stylistically.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Customized Design Solutions',
        description: "Whether it's a new bedroom, office, or second story, every addition is tailored to your needs and vision.",
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Full-Service Coordination',
        description: 'From architectural plans and permits to construction and finishing, we manage the entire process.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Quality & Structural Integrity',
        description: 'Built with precision and premium materials to ensure long-term safety, durability, and comfort.',
      },
    ],
    description: [
      "Adding space to your home is more than a construction project — it's an investment in your comfort, functionality, and future. At MOR Remodeling, we specialize in designing and building thoughtful home additions that expand your possibilities without compromising your home's original charm.",
      'From open-plan living extensions and extra bedrooms to sunrooms, garages, and second stories, we blend architecture and craftsmanship to create seamless transitions between old and new. Our team ensures that every addition complements your existing design while meeting modern standards of efficiency and comfort.',
      'Whether your family is growing or your lifestyle is evolving, MOR Remodeling helps you make room for what matters most.',
      'MOR Remodeling — building beyond boundaries, one addition at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  {
    slug: 'roofing-siding-foundations',
    hero: {
      title: 'Roofing',
      subtitle: 'Protecting your home from the ground up.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Comprehensive Structural Care',
        description:
          'From roof repairs to foundation reinforcement, we ensure every layer of your home stands strong.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'High-Performance Materials',
        description: 'We use only trusted, weather-resistant materials for lasting durability and minimal maintenance.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Expert Installation',
        description:
          'Our skilled team delivers precise craftsmanship backed by modern techniques and safety standards.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Long-Term Value',
        description: "Quality work that enhances protection, efficiency, and your home's overall lifespan.",
      },
    ],
    description: [
      'A strong home begins with a solid structure. At MOR Remodeling, we provide complete exterior and structural renovation services — from roofing and siding replacement to foundation repair — ensuring your home is built to last.',
      "Our experts evaluate every aspect of your home's envelope to identify issues before they become costly problems. Whether you need a full roof replacement, upgraded siding for better insulation, or foundation stabilization for long-term safety, we deliver reliable, efficient solutions tailored to your property.",
      'With a focus on durability, performance, and design harmony, we protect your home while enhancing its beauty and value.',
      'MOR Remodeling — strengthening homes, one structure at a time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  {
    slug: 'exterior-remodeling-siding',
    hero: {
      title: 'Exterior Remodeling & Siding',
      subtitle: 'Enhancing curb appeal with strength and style.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Custom Exterior Design',
        description: 'We create cohesive, modern exteriors that complement your home\'s architecture and surroundings.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Durable, Low-Maintenance Materials',
        description: 'Our siding and exterior solutions are built to withstand the elements while retaining their beauty.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Energy Efficiency & Protection',
        description: 'Improve insulation, reduce maintenance, and protect your home from weather and wear.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Seamless Project Execution',
        description: 'From design and planning to installation and finishing, we manage every detail with precision.',
      },
    ],
    description: [
      'Your home\'s exterior is more than its first impression — it\'s the shield that protects everything within. At MOR Remodeling, we specialize in exterior transformations that combine architectural harmony, durability, and performance.',
      'Whether you\'re updating outdated siding, refreshing your facade, or undertaking a full-scale exterior renovation, our team blends design expertise with high-quality craftsmanship to deliver lasting results.',
      'We work with trusted materials — from fiber cement and natural wood to modern composites — to ensure a perfect balance between beauty, strength, and energy efficiency. Every project is tailored to your home\'s character and your personal vision.',
      'MOR Remodeling — transforming exteriors that stand the test of time.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  {
    slug: 'interior-design-custom-finishes',
    hero: {
      title: 'Interior Design & Custom Finishes',
      subtitle: 'Crafting interiors that reflect your story.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Personalized Design Concepts',
        description:
          'Every space begins with your lifestyle, taste, and vision — transformed into a cohesive design plan.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Premium Materials & Finishes',
        description: 'From custom millwork to luxury textures and lighting, we curate details that elevate your interior.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Functional Aesthetics',
        description: 'We balance beauty and practicality to create environments that inspire and endure.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Turnkey Execution',
        description: 'From design development to final styling, we manage every step to ensure a flawless result.',
      },
    ],
    description: [
      "True interior design goes beyond decoration — it's about creating spaces that feel authentic, balanced, and timeless. At MOR Remodeling, we bring together creativity, craftsmanship, and technical expertise to shape interiors that tell your story.",
      "Whether it's a single room or an entire home, our designers work closely with you to understand your needs, refine your vision, and translate it into a space that feels both intentional and inviting.",
      'From custom cabinetry and built-ins to wall treatments, lighting design, and finish selections, we focus on every detail that defines your home\'s atmosphere and character.',
      'MOR Remodeling — elevating interiors through design, detail, and distinction.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
  {
    slug: 'flooring-installation-refinishing',
    hero: {
      title: 'Flooring Installation & Refinishing',
      subtitle: 'Laying the foundation for timeless interiors.',
      image: 'hero.png',
    },
    features: [
      {
        icon: '/icons/Vector.svg',
        title: 'Wide Range of Materials',
        description:
          'From hardwood and tile to vinyl and engineered options, we help you choose the perfect flooring for your home.',
      },
      {
        icon: '/icons/Vector-1.svg',
        title: 'Expert Installation',
        description: 'Precision craftsmanship ensures a flawless fit, smooth finish, and long-lasting performance.',
      },
      {
        icon: '/icons/Vector-2.svg',
        title: 'Refinishing & Restoration',
        description: 'We bring life back to worn or aged floors through sanding, staining, and protective finishing.',
      },
      {
        icon: '/icons/Vector-3.svg',
        title: 'Seamless Project Coordination',
        description: 'From material selection to cleanup, we handle every step with care and efficiency.',
      },
    ],
    description: [
      'Your floors do more than support your home — they define its character, comfort, and flow. At MOR Remodeling, we specialize in professional flooring installation and refinishing services that combine technical excellence with refined aesthetics.',
      "Whether you're updating a single room or renovating your entire home, our team ensures perfect alignment, durable finishes, and materials that stand the test of time. We work with top suppliers to offer a curated selection of styles and textures that complement your interior design.",
      'From contemporary hardwood to classic stone, every project is guided by precision, quality, and attention to detail — so your floors feel as good as they look.',
      'MOR Remodeling — redefining spaces from the ground up.',
    ],
    gallery: ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png'],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug)
}

