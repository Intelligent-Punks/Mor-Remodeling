export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
}

export const aboutPageData = {
  hero: {
    title: 'About Us',
    description:
      'At MOR Remodelling, we believe every home has the potential to be something truly special. With years of experience, our team transforms spaces with precision, creativity, and care — always focusing on quality craftsmanship and a customer-first approach.',
    image: '/images/about/hero/hero.png',
  },

  whoWeAre: {
    title: 'Who We Are',
    text: `MOR Remodelling is more than just a remodeling company — we are a team of designers, builders, and craftsmen united by a passion for creating exceptional living spaces. With roots in architectural design and years of hands-on construction experience, we bring a unique balance of creativity and technical expertise to every project.

We believe that remodeling isn't just about changing walls or finishes — it's about improving the way people experience their homes. That's why we approach each project as a partnership, ensuring open communication, transparency, and trust throughout the entire process.

Our mission is simple: to create homes that feel personal, timeless, and built to last. With MOR Remodelling, you're not just renovating a space — you're investing in a place where memories are made, comfort is felt, and life unfolds.`,
    gallery: [
      '/images/about/who-we-are/image-1.png',
      '/images/about/who-we-are/image-2.png',
      '/images/about/who-we-are/image-3.png',
      '/images/about/who-we-are/image-4.png',
      '/images/about/who-we-are/image-5.png',
      '/images/about/who-we-are/image-6.png',
    ],
  },

  quote: {
    text: `At MOR Remodelling, we believe every home has the potential to be extraordinary. Our approach is simple: listen carefully, design thoughtfully, and build with precision. 

Whether it's a single room or a full-scale renovation, we treat each project as if it were our own home. Quality, trust, and lasting craftsmanship are at the heart of everything we do.`,
    author: '• John M. Ortega, CEO of MOR Remodelling',
  },

  values: [
    {
      id: 'integrity',
      title: 'Integrity',
      description:
        'We build trust through honesty, transparency, and accountability in every project.',
      bgImage: '/images/stats/about/img-1.png',
    },
    {
      id: 'quality',
      title: 'Quality',
      description:
        'Every detail matters — we deliver craftsmanship that lasts for years to come.',
      bgImage: '/images/stats/about/img-2.png',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We combine modern design solutions with smart functionality to create better living spaces.',
      bgImage: '/images/stats/about/img-3.png',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description:
        'Working closely with our clients, we turn their vision into a home that feels truly personal.',
      bgImage: '/images/stats/about/img-4.png',
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
      '/images/about/certifications/cert-1.png',
      '/images/about/certifications/cert-2.png',
      '/images/about/certifications/cert-3.png',
      '/images/about/certifications/cert-4.png',
      '/images/about/certifications/cert-5.png',
      '/images/about/certifications/cert-6.png',
    ],
  },

  history: {
    title: 'Our history',
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

