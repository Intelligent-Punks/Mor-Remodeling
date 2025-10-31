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
    slug: 'living-room-renovation',
    hero: {
      title: 'Living Room Renovation \n– Manhattan, NY',
      subtitle:
        'This project reimagined a traditional living room into a serene, nature-inspired space featuring soft beige tones, muted greens, and organic textures. With custom-built shelving, ambient lighting, and minimalist decor, the room now feels open, balanced, and inviting — a perfect blend of elegance and comfort.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Living Room Renovation' },
      { label: 'Project date', value: 'June 2024' },
      { label: 'Location', value: 'Manhattan, New York' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Elegance in every corner, where modern comfort meets timeless design.',
      description: [
        'A refined palette of beige and green brings calm sophistication to the heart of the home.',
        'This 180 m² apartment renovation focused on creating a warm, cohesive living environment that connects style with relaxation. The design highlights natural light, layered textures, and soft contrasts between wood, fabric, and stone.',
        'Every detail — from the custom furniture to the subtle lighting scheme — was carefully curated by the MOR Remodeling team to achieve a timeless, tranquil atmosphere that enhances everyday living.',
        'Photos: MOR Remodeling Team',
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
    slug: 'green-kitchen-renovation',
    hero: {
      title: 'Classic Green Kitchen Renovation \n– Boston, MA',
      subtitle:
        'This project turned a dated kitchen into an elegant, timeless centerpiece featuring deep green cabinetry, brushed gold hardware, and natural marble surfaces. The design blends traditional craftsmanship with modern functionality, creating a warm and sophisticated cooking space that feels both classic and contemporary.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen renovation' },
      { label: 'Project date', value: 'April 2024' },
      { label: 'Location', value: 'Boston, Massachusetts' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Where timeless elegance meets everyday comfort.',
      description: [
        'This 200 m² home renovation focused on redefining the kitchen as a statement of refined taste and functional luxury. The rich green tones evoke calm and depth, while golden details and soft lighting add a sense of warmth and grandeur.',
        'Custom cabinetry, quartz countertops, and a balanced mix of traditional molding and modern appliances make this kitchen both inviting and enduring.',
        'Completed by the MOR Remodeling team in collaboration with skilled artisans, the result is a kitchen that celebrates beauty, precision, and the art of fine living.',
        'Photos: MOR Remodeling Team',
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
    slug: 'green-beige-kitchen-renovation',
    hero: {
      title: 'Green-Beige Kitchen Renovation \n– Chicago, IL',
      subtitle:
        'This project transformed a compact kitchen into a calm, elegant space defined by soft green-beige cabinetry, light stone countertops, and subtle brass accents. The design merges natural warmth with modern simplicity, creating a refined atmosphere that feels both timeless and inviting.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen renovation' },
      { label: 'Project date', value: 'May 2024' },
      { label: 'Location', value: 'Chicago, Illinois' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'A soothing palette where nature meets modern living.',
      description: [
        'This 190 m² apartment renovation focused on creating a harmonious kitchen that blends organic tones and smooth textures. The muted green-beige combination brings serenity and balance, while golden details and warm lighting highlight the room\'s architectural rhythm.',
        'Custom cabinetry, seamless storage solutions, and a spacious open layout make this kitchen ideal for both everyday comfort and stylish gatherings.',
        'Completed by the MOR Remodeling team, this project reflects the brand\'s signature approach — timeless design, quality materials, and craftsmanship in every detail.',
        'Photos: MOR Remodeling Team',
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
    slug: 'landscaping',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'room-home-additions',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'outdoor-kitchen',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'decks-patios-outdoor-covers',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'exterior-remodeling-siding',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
  {
    slug: 'roofing-siding-foundations',
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
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

