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
        telephone: '(408) 583-8365',
        contactType: 'Customer Service',
        email: 'office@morremodeling.com',
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
    heading: 'Bay Area’s Premier Home Remodeling & Construction Family',
    subheading:
      'At MOR Remodeling, we treat every project and every client like part of our own family. From custom kitchens and luxury bathrooms to ADU construction and full-scale home transformations, we deliver meticulous craftsmanship, thoughtful design, and uncompromising attention to detail. Every space we create is tailored to your vision, your lifestyle, and your unique needs. Our mission is not only to create spaces that are beautiful and functional, but to ensure you enjoy the entire process as we build with care, integrity, and your complete satisfaction at the heart of everything we do.',
    backgroundImage: '/images/hero/Hero-home.png',
    backgroundVideo: '/images/media/hero-home.mp4',
    videoPoster: '/images/hero/Hero-home.png',
  },
}

export default home


