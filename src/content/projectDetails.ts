export interface ProjectDetail {
  slug: string
  hero: {
    title: string
    subtitle: string
    image: string // path relative to /images/projects/{slug}/
  }
  stats?: {
    label: string
    value: string
  }[]
  details: {
    title: string
    description: string[]
  }
  gallery: string[] // names of files in /images/projects/{slug}/
}

export interface ProjectSEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  schema: Record<string, any>
}

export function generateProjectSEO(project: ProjectDetail): ProjectSEO {
  const projectTitle = project.hero.title.replace(/\n/g, ' ')
  const location = project.stats?.find(s => s.label === 'Location')?.value || 'Bay Area'
  const date = project.stats?.find(s => s.label === 'Project date')?.value || ''
  
  return {
    title: `${projectTitle} | Mor Remodeling`,
    description: project.hero.subtitle,
    keywords: [
      'home remodeling project',
      'renovation case study',
      projectTitle.toLowerCase(),
      location.toLowerCase() + ' renovation',
      'completed remodeling project',
    ],
    ogImage: `/images/projects/${project.slug}/${project.hero.image}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Project',
      name: projectTitle,
      description: project.hero.subtitle,
      creator: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
      },
      ...(date && { dateCompleted: date }),
      location: {
        '@type': 'Place',
        name: location,
      },
    },
  }
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'kitchen-remodel',
    hero: {
      title: 'Modern Kitchen Renovation \n– Brooklyn, NY',
      subtitle:
        'This project transformed an outdated kitchen into a bright, open-concept space with custom cabinetry, quartz countertops, and energy-efficient appliances. The result is a modern design that blends functionality with timeless style.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Modern Kitchen Renovation' },
      { label: 'Project date', value: 'March 2024' },
      { label: 'Location', value: 'Brooklyn, New York' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Elegance in every corner, where modern comfort meets timeless design.',
      description: [
        'This 250 m² private residence renovation features a spacious living area, a contemporary kitchen, two master suites, and a terrace with panoramic views.',
        'The design blends natural stone and warm wood accents with soft lighting, creating an atmosphere of sophistication and comfort.',
        'This project was completed by the MOR Remodelling team in collaboration with local craftsmen and suppliers, delivering a space that is both functional and inspiring.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'p2',
    hero: {
      title: 'Luxury Bathroom Renovation \n– San Francisco, CA',
      subtitle:
        'A complete bathroom transformation featuring premium materials, custom vanities, and modern fixtures. This project showcases our attention to detail and commitment to creating beautiful, functional spaces.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Luxury Bathroom Renovation' },
      { label: 'Project date', value: 'February 2024' },
      { label: 'Location', value: 'San Francisco, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Where luxury meets functionality in every detail.',
      description: [
        'This bathroom renovation features premium materials including marble countertops, custom cabinetry, and high-end fixtures.',
        'The design emphasizes both aesthetics and functionality, creating a spa-like atmosphere for daily relaxation.',
        'Our team worked closely with the homeowners to ensure every detail met their vision and lifestyle needs.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p3',
    hero: {
      title: 'Complete Home Renovation \n– Los Angeles, CA',
      subtitle:
        'A comprehensive home renovation that transformed an outdated property into a modern, energy-efficient residence. This project included structural updates, new finishes, and smart home integration.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Complete Home Renovation' },
      { label: 'Project date', value: 'January 2024' },
      { label: 'Location', value: 'Los Angeles, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Transforming houses into dream homes, one project at a time.',
      description: [
        'This comprehensive renovation included structural updates, new electrical and plumbing systems, and modern finishes throughout.',
        'The project focused on creating an open, flowing layout that maximizes natural light and outdoor connections.',
        'Smart home technology was integrated throughout, providing modern convenience and energy efficiency.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
      'gallery-5.png',
    ],
  },
  {
    slug: 'p4',
    hero: {
      title: 'Outdoor Kitchen & Entertainment Area \n– San Diego, CA',
      subtitle:
        'An impressive outdoor kitchen and entertainment space that extends the living area into the backyard. This project features premium outdoor appliances, custom cabinetry, and weather-resistant materials.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Outdoor Kitchen & Entertainment' },
      { label: 'Project date', value: 'December 2023' },
      { label: 'Location', value: 'San Diego, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Creating outdoor spaces that bring families together.',
      description: [
        'This outdoor kitchen features premium stainless steel appliances, custom stone countertops, and weather-resistant cabinetry.',
        'The design includes a built-in grill, refrigerator, sink, and storage solutions for the ultimate outdoor cooking experience.',
        'LED lighting and a covered pergola ensure the space is usable year-round, day and night.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p5',
    hero: {
      title: 'Room Addition & ADU \n– Oakland, CA',
      subtitle:
        'A custom room addition and Accessory Dwelling Unit (ADU) that provides additional living space and rental income potential. This project showcases our expertise in structural additions and zoning compliance.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Room Addition & ADU' },
      { label: 'Project date', value: 'November 2023' },
      { label: 'Location', value: 'Oakland, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Maximizing property potential with thoughtful additions.',
      description: [
        'This project involved adding a new bedroom to the main house and constructing a separate ADU for rental income.',
        'The design ensures both units have private entrances, full kitchens, and comfortable living spaces.',
        'All work was completed in compliance with local zoning regulations and building codes.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p6',
    hero: {
      title: 'Landscaping & Outdoor Living \n– Berkeley, CA',
      subtitle:
        'A comprehensive landscaping project that transformed a basic backyard into a beautiful outdoor living space. This project included hardscaping, planting, irrigation, and outdoor lighting.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Landscaping & Outdoor Living' },
      { label: 'Project date', value: 'October 2023' },
      { label: 'Location', value: 'Berkeley, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Bringing nature and design together in perfect harmony.',
      description: [
        'This landscaping project included custom hardscaping, native plant selection, and automated irrigation systems.',
        'The design creates distinct zones for dining, relaxation, and gardening while maintaining a cohesive aesthetic.',
        'LED landscape lighting extends the usability of the space into the evening hours.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p7',
    hero: {
      title: 'Deck & Patio Construction \n– San Jose, CA',
      subtitle:
        'A custom deck and patio construction project that creates multiple outdoor living areas. This project features composite decking, stone patios, and integrated seating areas.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Deck & Patio Construction' },
      { label: 'Project date', value: 'September 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Creating outdoor spaces that enhance your lifestyle.',
      description: [
        'This project features a multi-level deck with composite decking and a stone patio with built-in seating.',
        'The design maximizes the use of the available space while creating distinct areas for dining and relaxation.',
        'All materials were selected for durability and low maintenance, ensuring years of enjoyment.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p8',
    hero: {
      title: 'Exterior Remodeling & Siding \n– Fremont, CA',
      subtitle:
        'A complete exterior remodeling project that updated the home\'s curb appeal and energy efficiency. This project included new siding, windows, doors, and exterior lighting.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Exterior Remodeling & Siding' },
      { label: 'Project date', value: 'August 2023' },
      { label: 'Location', value: 'Fremont, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Transforming exteriors to match your vision.',
      description: [
        'This exterior remodeling project included new fiber cement siding, energy-efficient windows, and updated entry doors.',
        'The design maintains the home\'s architectural character while improving energy efficiency and curb appeal.',
        'New exterior lighting enhances both security and aesthetics.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
  {
    slug: 'p9',
    hero: {
      title: 'Roofing & Foundation Work \n– Sacramento, CA',
      subtitle:
        'A comprehensive roofing and foundation project that addressed structural issues while improving the home\'s energy efficiency. This project included new roofing, foundation repairs, and insulation upgrades.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Roofing & Foundation Work' },
      { label: 'Project date', value: 'July 2023' },
      { label: 'Location', value: 'Sacramento, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Protecting your investment with quality structural work.',
      description: [
        'This project addressed critical structural issues including foundation repairs and complete roof replacement.',
        'Energy-efficient roofing materials and improved insulation significantly reduced heating and cooling costs.',
        'All work was completed to meet or exceed current building codes and energy standards.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
    ],
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

