export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
}

export const aboutPageData = {
  seo: {
    title: 'About Us - Mor Remodeling',
    description:
      'At MOR Remodelling, we believe every home has the potential to be something truly special. With years of experience, our team transforms spaces with precision, creativity, and care — always focusing on quality craftsmanship and a customer-first approach.',
    keywords: [
      'about MOR remodeling',
      'remodeling company',
      'Bay Area contractors',
      'home renovation experts',
      'certified remodeling',
      'quality craftsmanship',
      'sustainable building',
    ],
    ogImage: '/images/about/hero/hero.jpg',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About MOR Remodeling',
      description:
        'Learn about MOR Remodeling - a team of designers, builders, and craftsmen united by a passion for creating exceptional living spaces. With roots in architectural design and years of hands-on construction experience.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
        foundingDate: '2015',
        description:
          'MOR Remodelling is more than just a remodeling company — we are a team of designers, builders, and craftsmen united by a passion for creating exceptional living spaces.',
        award: [
          'Certified Remodeling Professional (CRP)',
          'Green Building & Sustainability Certificate (GBSC)',
          'Quality Craftsmanship Accreditation (QCA)',
        ],
      },
    },
  },
  hero: {
    title: 'Our Story of Craft and Care',
    description:
    `At MOR Remodeling, we believe every home holds the potential to become something extraordinary. With years of experience and a passion for craftsmanship, our team transforms living spaces with precision, creativity, and heart. \n
    We treat every client as part of our family, ensuring each project is handled with honesty, care, and open communication. Our goal is simple to create homes that reflect comfort, value, and lasting beauty while making the remodeling journey smooth and enjoyable.`,
    image: '/images/about/hero/hero.png',
    imageMobile: '/images/about/hero/hero-mobile.png',
  },

  whoWeAre: {
    title: 'Driven by Design, Defined by Detail',
    text: `MOR Remodeling is more than a construction company we are a family-driven team of designers, builders, and craftsmen dedicated to bringing your vision to life. Guided by integrity and fueled by passion, we specialize in creating spaces that blend design, function, and warmth.

With a foundation built on trust, creativity, and skill, we approach every project as a partnership. From concept to completion, we provide transparent communication, quality materials, and meticulous attention to detail.

We believe that remodeling is not only about improving a property it is about enhancing the way people experience their homes. That is why every MOR project is completed with care, precision, and respect for the families we serve.`,
    gallery: [
      '/images/about/who-we-are/image-1.jpg',
      '/images/about/who-we-are/image-2.jpg',
      '/images/about/who-we-are/image-3.jpg',
      '/images/about/who-we-are/image-4.jpg',
      '/images/about/who-we-are/image-5.jpg',
      '/images/about/who-we-are/image-6.jpg',
      '/images/about/who-we-are/image-7.jpg',
    ],
  },

  quote: {
    text: `At MOR Remodelling, we believe every home has the potential to be extraordinary. Our approach is simple: listen carefully, design thoughtfully, and build with precision. 

Whether it's a single room or a full-scale renovation, we treat each project as if it were our own home. Quality, trust, and lasting craftsmanship are at the heart of everything we do.`,
    author: '• Ilay Mor, CEO of MOR Remodelling',
  },

  values: [
    {
      id: 'integrity',
      title: 'Integrity',
      description:
        'We build trust through honesty, transparency, and accountability in every project.',
      bgImage: '/images/stats/about/img-1.jpg',
    },
    {
      id: 'quality',
      title: 'Quality',
      description:
        'Every detail matters — we deliver craftsmanship that lasts for years to come.',
      bgImage: '/images/stats/about/img-2.jpg',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We combine modern design solutions with smart functionality to create better living spaces.',
      bgImage: '/images/stats/about/img-3.jpg',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description:
        'Working closely with our clients, we turn their vision into a home that feels truly personal.',
      bgImage: '/images/stats/about/img-4.jpg',
    },
  ],

  certifications: {
    title: 'Certifications\n& Sustainability',
    items: [
      {
        id: 'crp',
        title: 'Certified Remodeling Professional (CRP)',
        description:
          'This certification recognizes our expertise in handling complex renovation projects from start to finish. It ensures that our team follows industry best practices, adheres to strict safety standards, and delivers results with precision and reliability. Holding the CRP means our clients can trust us with projects of any scale.',
      },
      {
        id: 'gbsc',
        title: 'Green Building & Sustainability Certificate (GBSC)',
        description:
          'The GBSC highlights our commitment to eco-friendly construction and energy efficiency. It demonstrates that we integrate sustainable materials, environmentally responsible methods, and smart design solutions into our projects. This certification assures clients that their remodel will be both beautiful and environmentally conscious.',
      },
      {
        id: 'qca',
        title: 'Quality Craftsmanship Accreditation (QCA)',
        description:
          'The QCA is awarded to remodeling companies that consistently deliver superior workmanship and attention to detail. It emphasizes our dedication to using high-quality materials and advanced techniques that stand the test of time. With this accreditation, our clients know that every detail of their home is built with care and excellence.',
      },
    ],
    logos: [
      '/images/about/certifications/cert-1.jpg',
      '/images/about/certifications/cert-2.jpg',
      '/images/about/certifications/cert-3.jpg',
      '/images/about/certifications/cert-4.jpg',
      '/images/about/certifications/cert-5.jpg',
      '/images/about/certifications/cert-6.jpg',
    ],
  },

  history: {
    title: 'The Story Behind MOR Remodeling',
    subtitle:
      'MOR Remodeling was founded as a small team of craftsmen, focusing on essential home repairs and siding replacements.',
    timeline: [
      {
        id: '2015',
        year: '2015',
        title: 'Foundations',
        description:
          'MOR Remodeling was founded as a small team of craftsmen, focusing on essential home repairs and siding replacements.',
      },
      {
        id: '2016',
        year: '2016',
        title: 'First Milestones',
        description:
          'We completed our first major residential projects and began building lasting relationships with homeowners who valued quality and attention to detail.',
      },
      {
        id: '2017',
        year: '2017',
        title: 'Expanding Expertise',
        description:
          'We expanded our services to include full kitchen and bathroom remodels, quickly earning a reputation for quality work and reliable timelines.',
      },
      {
        id: '2020',
        year: '2020',
        title: 'Trusted Name',
        description:
          'With hundreds of completed projects, MOR Remodeling became a trusted name in the Bay Area, known for transparent pricing and skilled craftsmanship.',
      },
      {
        id: '2023',
        year: '2023',
        title: 'Innovation & Growth',
        description:
          'We introduced eco-friendly building practices and expanded into full home renovations, room additions, and architectural design services.',
      },
      {
        id: 'today',
        year: 'Today',
        title: 'Shaping the Future',
        description:
          'Today, MOR Remodeling continues to transform homes across the region, blending modern innovation with timeless craftsmanship — one project at a time.',
      },
    ] as TimelineItem[],
  },
}

export default aboutPageData

