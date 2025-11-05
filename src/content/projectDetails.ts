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
      title: 'Modern White Kitchen Transformation – San Jose, CA',
      subtitle:
        'This project reimagined a dated kitchen in the heart of San Jose into a light filled, elegant, and highly functional gathering space. The design embraces a clean modern aesthetic with custom white cabinetry, quartz countertops, brushed nickel hardware, and a soft neutral palette that enhances natural light throughout the home. The result is a bright and timeless kitchen that feels both fresh and enduring.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen renovation' },
      { label: 'Project date', value: 'April 2024' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Where California comfort meets timeless craftsmanship.',
      description: [
        'This San Jose kitchen renovation reflects MOR Remodeling\’s signature blend of functionality, craftsmanship, and refined minimalism. Designed for a busy California family that values both style and practicality, the project focuses on creating an open, welcoming atmosphere where cooking, conversation, and daily living flow naturally together.',

        'The all white cabinetry brings a sense of clarity and spaciousness, while subtle metallic accents add modern sophistication. Wide plank flooring in warm oak tones grounds the space, balancing cool surfaces with natural warmth. A large central island serves as both a social hub and a culinary workstation, perfect for casual breakfasts, evening gatherings, or hosting friends.',

        'Every detail was considered: energy efficient LED lighting, soft close cabinetry, built in organizational features, and high end stainless steel appliances. The backsplash\’s geometric tile pattern introduces gentle texture without overwhelming the clean lines, reinforcing the kitchen\’s refined simplicity.',

        'Completed by the MOR Remodeling Team in collaboration with local artisans, this transformation demonstrates the power of thoughtful design, turning an ordinary kitchen into a space that elevates everyday living while enhancing the home\’s long term value.',

        'Photos: MOR Remodeling Team'
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
      title: 'Neutral Gray Kitchen and Dining Remodel – San Jose, CA',
      subtitle:
        'This project redefined a San Jose home with a modern kitchen and dining renovation that blends soft gray tones, warm light wood flooring, and refined minimalism. The goal was to create a seamless transition between the kitchen, dining, and living spaces while maintaining a calm, elegant atmosphere filled with natural light and functional design.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen renovation' },
      { label: 'Project date', value: 'May 2024' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'A modern neutral retreat with timeless balance.',
      description: [
        'This San Jose kitchen and dining remodel by MOR Remodeling was designed for homeowners who wanted to bring warmth, simplicity, and sophistication into their everyday living. The open layout connects the cooking, dining, and lounge areas, creating a sense of continuity and comfort throughout the main floor.',

        'The kitchen showcases custom soft gray cabinetry, white quartz countertops, and sleek stainless steel appliances that combine performance with style. The island serves as both a workspace and a casual dining spot, complemented by contemporary lighting and subtle brass hardware that adds a hint of luxury without overpowering the space.',

        'Natural light flows through large windows, highlighting the wood grain flooring and neutral palette that define the home\’s inviting tone. In the dining area, a glass table framed with gold metallic accents and plush white chairs anchors the space, creating a perfect setting for entertaining or family gatherings.',

        'Every detail, from the seamless cabinetry lines to the layered textures, reflects MOR Remodeling\’s commitment to quality craftsmanship and balanced design. The result is a kitchen and dining space that feels sophisticated yet approachable, perfectly attuned to the relaxed elegance of San Jose living.',

        'Photos: MOR Remodeling Team'
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
      title: 'Two Bathroom Remodels – San Jose, CA',
      subtitle:
        'This San Jose home underwent a dual bathroom renovation designed to bring modern comfort and timeless character into both private spaces. MOR Remodeling focused on craftsmanship, texture, and light, transforming each bathroom into a distinctive retreat that reflects the homeowner’s lifestyle while maintaining design harmony across the entire property.',
      image: 'hero.png',
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
      title: 'Kitchen and Dining Area Renovation – San Jose, CA',
      subtitle:
        'This project in San Jose transformed a dated kitchen and dining space into a bright, open, and contemporary interior that celebrates natural light and California living. The renovation introduced a sense of warmth and flow by connecting the kitchen and dining area seamlessly, creating a refined space perfect for both everyday comfort and entertaining.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Kitchen and Dining Renovation' },
      { label: 'Project date', value: 'October 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'A refined balance of warmth, light, and modern elegance.',
      description: [
        'MOR Remodeling completely reimagined the heart of this home with a focus on timeless materials, inviting tones, and open flow. The design pairs natural finishes with clean lines and subtle sophistication, turning the kitchen and dining area into a showcase of craftsmanship and thoughtful functionality.',

        'The kitchen features rich wood cabinetry that brings depth and texture to the space, paired with light quartz countertops and stainless steel appliances that deliver both style and performance. A custom ceiling recess enhances the sense of height, while recessed lighting ensures an even glow throughout the cooking and dining zones. Every element, from cabinet hardware to flooring alignment, was selected to complement the home\’s bright aesthetic and bring out the natural beauty of the materials.',

        'The dining area opens directly to the poolside patio through wide glass sliding doors, blending indoor comfort with outdoor living. A sleek glass dining table supported by sculpted wood bases becomes a central design statement, harmonizing perfectly with the surrounding greenery and daylight. Plush white dining chairs and minimal décor maintain an atmosphere of calm luxury.',

        'This renovation is a true reflection of MOR Remodeling\’s design philosophy — merging craftsmanship, comfort, and modern sensibility into spaces that feel effortlessly elegant and built to last.',

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
    slug: 'decks-patios-outdoor-covers',
    hero: {
      title: 'Full Home Renovation & ADU – San Jose, CA',
      subtitle:
        'A complete transformation that reimagines an existing home while adding a new Accessory Dwelling Unit for expanded living and rental potential. This project highlights the seamless integration of modern design, functionality, and comfort across every space.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Full Home Renovation & ADU' },
      { label: 'Project date', value: 'September 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Creating spaces that redefine modern living.',
      description: [
        'This project represents a complete home renovation combined with a new Accessory Dwelling Unit built to expand functionality and elevate property value. The work involved full interior remodeling, including kitchen and bathroom upgrades, new flooring, custom finishes, and optimized lighting that enhances the natural flow of the space. Every detail was designed to improve daily comfort while maintaining architectural integrity and aesthetic continuity throughout the property.',

        'The addition of the ADU brought a self-contained living space featuring a private entrance, kitchen, and bathroom—perfect for guests, extended family, or rental income. The layout was carefully planned to ensure privacy without compromising the overall harmony of the property. Sustainable materials and energy-efficient systems were integrated to minimize long-term maintenance and reduce utility costs.',

        'Our design approach focused on creating an open, airy environment that seamlessly connects indoor and outdoor living. Large windows, light neutral tones, and natural textures come together to bring warmth and timeless appeal. From structural upgrades to finishing touches, every stage of the project was executed with precision, craftsmanship, and a clear vision of modern comfort.',

        'All materials were selected for durability, quality, and long-lasting performance. This renovation reflects how thoughtful design and expert construction can turn a traditional home into a space that truly adapts to modern lifestyles.',
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
      title: 'Roofing and Foundation Work - San Jose, CA',
      subtitle:
        'A comprehensive roofing and structural project that resolved critical issues while improving the home\’s insulation and durability. This project included full roof replacement, foundation reinforcement, and long-term weather protection upgrades.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Roofing & Foundation Work' },
      { label: 'Project date', value: 'July 2023' },
      { label: 'Location', value: 'San Jose, California' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Protecting your investment with quality structural work.',
      description: [
        'This project focused on replacing the home\’s roofing system with high-performance, weather-resistant materials designed to maximize longevity and minimize maintenance. The new roof installation improved energy efficiency and provided superior protection against heat, wind, and moisture.',

        'Foundation reinforcement work was performed to correct structural settling and ensure long-term stability. Every repair was carried out with precision to meet modern safety and building standards.',

        'Additional insulation and sealing upgrades enhanced the home\’s energy performance, reducing heating and cooling costs year-round. The overall renovation not only restored structural integrity but also increased the property\’s market value and curb appeal.',

        'All work was completed to exceed current building codes and standards, ensuring durability and peace of mind for years to come.',

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
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

