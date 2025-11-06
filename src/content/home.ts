const home = {
  title: 'Home',
  seo: {
    title: 'Mor Remodeling - San Jose’s Trusted Home Remodeling Experts',
    description:
      'From kitchen and bathroom remodels to ADU construction and full home renovations, MOR Remodeling helps San Jose homeowners transform their properties with lasting beauty, function, and value.',
    keywords: [
      'home remodeling',
      'home renovation',
      'kitchen remodeling',
      'bathroom remodeling',
      'full home renovation',
      'Bay Area remodeling',
      'house renovation',
      'remodeling services',
    ],
    ogImage: '/images/hero/Hero-home.png',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mor Remodeling',
      description:
        'Professional home remodeling and renovation services in the Bay Area. From kitchen and bathroom remodels to full home renovations.',
      url: 'https://mor-remodeling.com',
      logo: '/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '(747) 279 8262',
        contactType: 'Customer Service',
        email: 'info@mor-remodeling.com',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bay Area',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.instagram.com/mor-remodeling',
        'https://www.facebook.com/mor-remodeling',
        'https://www.linkedin.com/company/mor-remodeling',
      ],
    },
  },
  hero: {
    heading: 'San Jose’s Trusted Home Remodeling Experts',
    subheading:
      'From kitchen and bathroom remodels to ADU construction and full home renovations, MOR Remodeling helps San Jose homeowners transform their properties with lasting beauty, function, and value.',
    backgroundImage: '/images/hero/Hero-home.png',
    backgroundVideo: '/images/media/hero-home.mp4',
    videoPoster: '/images/hero/Hero-home.png',
  },
}

export default home


