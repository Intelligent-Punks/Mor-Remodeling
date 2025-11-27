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
      title: 'Flooring Renovation and Living Space Refresh – San Jose, CA',
      subtitle:
        'This project reimagined a San Jose residence through a complete flooring renovation that seamlessly connects the living, dining, and bedroom areas. With rich hardwood floors and a refined natural finish, the design enhances light, depth, and continuity across the home, creating a balanced flow between comfort and sophistication.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Flooring Installation and Refinishing' },
      { label: 'Project date', value: 'June 2024' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Where craftsmanship and warmth meet underfoot.',
      description: [
        'MOR Remodeling transformed this San Jose home by replacing dated flooring with premium hardwood planks chosen for their durability, texture, and timeless appearance. The renovation unified multiple rooms including the living area, kitchen, and bedrooms using one continuous finish to visually expand the interiors and bring a cohesive luxurious feel.',

        'The new floors showcase a deep honey tone that complements natural light and neutral wall colors. Subtle sheen and clean lines highlight the grain of the wood introducing warmth and depth without overpowering the minimalist design. In the living area the polished floors reflect soft lighting enhancing the cozy atmosphere near the fireplace and connecting the indoors to the scenic backyard view.',

        'Each plank was expertly installed sanded and refinished on site by MOR Remodeling\’s flooring specialists ensuring smooth transitions between spaces and long lasting performance. The result is a modern yet inviting environment that embodies the balance between craftsmanship and California comfort.',

        'Photos: MOR Remodeling Team'
      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
      'gallery-4.jpg',
    ],
  },
  {
    slug: 'green-kitchen-renovation',
    hero: {
      title: 'Modern White Kitchen Transformation – San Jose, CA',
      subtitle:
        'This project reimagined a dated kitchen in the heart of San Jose into a light filled, elegant, and highly functional gathering space. The design embraces a clean modern aesthetic with custom white cabinetry, quartz countertops, brushed nickel hardware, and a soft neutral palette that enhances natural light throughout the home. The result is a bright and timeless kitchen that feels both fresh and enduring.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen Renovation' },
      { label: 'Project date', value: 'April 2024' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodeling Team' },
    ],
    details: {
      title: 'Where California comfort meets timeless craftsmanship.',
      description: [
        'This San Jose kitchen renovation transformed a dated space into a bright, elegant, and highly functional gathering area.', 

        'Working closely with the family, our team focused on understanding their lifestyle and needs creating a layout that encourages cooking, conversation, and everyday living.',

        'The design features custom white cabinetry, quartz countertops, brushed nickel hardware, and wide plank oak flooring, balancing modern sophistication with natural warmth.', 

        'A central island serves as both a culinary workspace and social hub, while built-in organization, energy-efficient lighting, and high-end appliances ensure practicality meets style.',

        'Every detail was considered in collaboration with the clients, resulting in a timeless kitchen that reflects their vision and enhances the home’s functionality and long-term value.',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
    ],
  },
  {
    slug: 'green-beige-kitchen-renovation',
    hero: {
      title: 'Neutral Gray Kitchen and Dining Remodel – Palo Alto, CA',
      subtitle:
        'This project redefined a Palo Alto home with a modern kitchen and dining renovation that blends soft gray tones, warm light wood flooring, and refined minimalism. The goal was to create a seamless transition between the kitchen, dining, and living spaces while maintaining a calm, elegant atmosphere filled with natural light and functional design.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen & Dining Renovation' },
      { label: 'Project date', value: 'May 2024' },
      { label: 'Location', value: 'California' },
      { label: 'Architects', value: 'MOR Remodeling Team' },
    ],
    details: {
      title: 'A modern neutral retreat with timeless balance.',
      description: [
        'This Palo Alto kitchen and dining renovation transformed the home into a calm, modern retreat.', 

'Working closely with the homeowners, our team focused on understanding their lifestyle and how they wanted to use the space, creating an open layout that seamlessly connects cooking, dining, and living areas.',

'The design features soft gray cabinetry, white quartz countertops, and stainless steel appliances, with a central island serving as both workspace and casual dining spot.',

'Warm light wood flooring, contemporary lighting, and subtle metallic accents add sophistication while keeping the space approachable and inviting.',

'Every choice from layout to finishes was made in collaboration with the clients, resulting in a balanced, functional, and elegant space that reflects their vision and enhances daily living.',
      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
      'gallery-4.jpg',
      'gallery-5.jpg',
    ],
  },
  {
    slug: 'landscaping',
    hero: {
      title: 'Outdoor Kitchen & Entertainment Area – San Jose, CA',
      subtitle:
        'This project revitalized a San Jose home with a complete transformation of the kitchen and living areas into a bright, modern, and cohesive space. The renovation focused on creating an open flow between the cooking, dining, and relaxation zones, blending functionality with timeless California comfort. With soft neutral tones, natural light, and warm textures, the home now feels both sophisticated and welcoming.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Outdoor Kitchen & Entertainment' },
      { label: 'Project date', value: 'December 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Where modern design meets the heart of San Jose living.',
      description: [
        'Located in one of San Jose\’s quiet residential neighborhoods, this remodel redefines everyday comfort through thoughtful design and craftsmanship. The MOR Remodeling team opened the floor plan to maximize natural light and create seamless movement between the kitchen, dining, and living spaces.',

        'The kitchen showcases a large central island with granite countertops, soft beige cabinetry accented with brushed brass handles, and built-in stainless steel appliances. Light wood flooring brings a sense of warmth and continuity, while the soft gray and white palette enhances the home\’s airy feel. A touch of local personality appears in the bold orange dining chairs, adding a vibrant contrast that reflects San Jose\’s energetic style.',

        'In the adjoining living area, the design balances relaxation and refinement. Neutral furnishings, layered lighting, and subtle decor pieces create a calm environment ideal for both family life and entertaining guests. Large windows overlook the garden, filling the space with sunlight and connecting the interior to the natural surroundings typical of South Bay homes.',

        'Every finish and fixture was chosen for longevity, comfort, and elegance. This San Jose renovation captures what MOR Remodeling is known for — turning everyday spaces into timeless expressions of beauty, precision, and functional living.',

        'Photos: MOR Remodeling Team'
      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
    ],
  },
  {
    slug: 'room-home-additions',
    hero: {
      title: 'Two Bathroom Remodels – San Jose, CA',
      subtitle:
        'This San Jose home underwent a dual bathroom renovation designed to bring modern comfort and timeless character into both private spaces. MOR Remodeling focused on craftsmanship, texture, and light, transforming each bathroom into a distinctive retreat that reflects the homeowner’s lifestyle while maintaining design harmony across the entire property.',
      image: 'hero.jpg',
    },
    stats: [
      { label: 'Concept', value: 'Bathroom Remodeling' },
      { label: 'Project date', value: 'November 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'A tale of two designs where elegance and function meet.',
      description: [
        'In this project, MOR Remodeling reimagined two bathrooms with unique personalities that complement one another through consistent material choices and refined finishes. Each space was crafted with the same attention to detail and balance of warmth and luxury that defines every MOR project.',

        'The primary bathroom showcases a serene spa atmosphere with soft earth tones and natural stone textures. A freestanding soaking tub stands as the focal point of the space, paired with a glass enclosed shower that creates an airy, open feel. Custom tile work lines the walls and floors, blending subtle color variations to produce depth and visual calm. The sleek vanity with granite countertops completes the space with sophistication and practicality, offering generous storage and a seamless daily experience.',

        'The secondary bathroom carries a more classic tone, featuring warm beige walls, dark wood cabinetry, and intricate mosaic backsplash detailing. Double vanities with square sinks and contemporary fixtures enhance functionality while maintaining the home\’s cohesive aesthetic. Layered lighting and framed mirrors create an inviting glow that softens the ambiance and provides clarity without harshness.',

        'Together, these two renovations embody MOR Remodeling\’s philosophy — merging form and function with artistry and comfort. Every corner, finish, and fixture was selected to elevate daily routines into moments of calm and beauty.',

        'Photos: MOR Remodeling Team',
      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
      'gallery-4.jpg',
      'gallery-5.jpg',
      'gallery-6.jpg',
    ],
  },
  {
    slug: 'outdoor-kitchen',
    hero: {
      title: 'Kitchen and Dining Area Renovation – Mountain view, CA',
      subtitle:
        'This project in Mountain View transformed a dated kitchen and dining space into a bright, open, and contemporary interior that celebrates natural light and California living. The renovation introduced a sense of warmth and flow by connecting the kitchen and dining area seamlessly, creating a refined space perfect for both everyday comfort and entertaining.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen and Dining Renovation' },
      { label: 'Project date', value: 'October 2023' },
      { label: 'Location', value: 'California' },
      { label: 'Architects', value: 'MOR Remodeling Team' },
    ],
    details: {
      title: 'A refined balance of warmth, light, and modern elegance.',
      description: [
        'This Mountain view project transformed a dated kitchen and dining area into a bright, open space designed for everyday living and entertaining.', 

        'Working closely with the homeowners, our team focused on their lifestyle needs, creating a layout that seamlessly connects the kitchen and dining areas while maximizing natural light and flow.',

        'The design features rich wood cabinetry, light quartz countertops, and stainless steel appliances, paired with thoughtful details like recessed lighting and custom ceiling accents. Wide glass doors connect the dining area to the patio, blending indoor and outdoor living.', 

        'Every choice was made in collaboration with the clients, ensuring the result is both functional and elegant.',

      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
      'gallery-4.jpg',
    ],
  },
  {
    slug: 'decks-patios-outdoor-covers',
    hero: {
      title: 'Full Home Renovation – Redwood city, CA',
      subtitle:
        'A complete transformation that reimagines an existing home while adding a new Accessory Dwelling Unit for expanded living and rental potential. This project highlights the seamless integration of modern design, functionality, and comfort across every space.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Full Home Renovation' },
      { label: 'Project date', value: 'September 2023' },
      { label: 'Location', value: 'Redwood city, California' },
      { label: 'Design', value: 'MOR Remodeling Team' },
    ],
    details: {
      title: 'Creating spaces that redefine modern living.',
      description: [
        'This Redwood city home underwent a complete transformation, reimagining every space to enhance comfort, functionality, and modern living. From the initial design discussions, our team focused on understanding the family’s lifestyle and how they wanted to use their home, ensuring each room supports daily life while reflecting their personal style.',

        'The renovation included a full interior remodel with kitchen and bathroom upgrades, new flooring, custom finishes, and optimized lighting that improves flow and highlights architectural features. Neutral tones, natural textures, and thoughtful layouts create an open, airy environment that feels both inviting and timeless.',

        'Every stage of the project from structural improvements to finishing touches was executed with care, precision, and high-quality craftsmanship. By selecting durable materials and energy-efficient systems, the result is a home that looks beautiful today and will perform for years to come.',

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
      title: 'Interior Design and Custom Finishes - San Jose, CA',
      subtitle:
        'A full interior design and finishing project focused on elevating comfort, style, and natural light throughout the living areas. This home reflects a balance of clean lines, layered textures, and thoughtful details that create a calm yet character-rich atmosphere.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Interior Design & Custom Finishes' },
      { label: 'Project date', value: 'August 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Transforming interiors into timeless living spaces.',
      description: [
        'This project centered on a complete interior transformation emphasizing comfort, natural light, and modern design balance. Every detail was carefully chosen to create a cohesive aesthetic—from warm wood flooring and custom cabinetry to minimalist lighting and natural fabrics.',

        'The living room now serves as the focal point of the home, blending elegance and practicality. Built-in shelving, soft neutral wall colors, and curated decor elements provide both functionality and visual harmony. The custom fireplace design adds depth and warmth, turning the space into a refined yet inviting environment.',

        'Throughout the home, custom finishes and accent details define each room without overwhelming the open concept. Materials were selected for their durability and tactile appeal, ensuring longevity while maintaining a light, sophisticated feel.',

        'This renovation highlights how intentional design and craftsmanship can completely transform the atmosphere of a home, creating spaces that feel effortless, authentic, and deeply personal.',

        'Photos: MOR Remodeling Design Team',
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
      title: 'Roof Replacement & Plywood Redeck – Los gatos, CA',
      subtitle:
        'A comprehensive roofing and structural project that resolved critical issues while improving the home\’s insulation and durability. This project included full roof replacement, foundation reinforcement, and long-term weather protection upgrades.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Roof Replacement & Redeck' },
      { label: 'Project date', value: 'July 2023' },
      { label: 'Location', value: 'Los Gatos, California' },
      { label: 'Architects', value: 'MOR Remodeling Team' },
    ],
    details: {
      title: 'Protecting your investment with quality structural work.',
      description: [
        'This Los Gatos home received a full roof upgrade, including new shingles and a plywood redeck to improve durability and long-term performance.', 

        'Our team worked with the homeowners to understand their priorities—protection from the elements, energy efficiency, and aesthetic appeal before creating a plan tailored to their needs.',

        'The project involved removing the old roof, installing a new plywood deck, and carefully laying high-quality shingles for a clean, weather-resistant finish.', 

        'Every step was executed with precision to ensure longevity, structural integrity, and a polished look.',

        'By keeping the homeowners informed throughout the process and addressing questions promptly, our team made the project smooth and stress-free. The result is a stronger, more resilient roof that enhances both the home’s function and curb appeal.',

      ],
    },
    gallery: [
      'gallery-1.jpg',
      'gallery-2.jpg',
      'gallery-3.jpg',
      'gallery-4.jpg',
    ],
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

