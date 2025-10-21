const home = {
  title: 'Home',
  seo: {
    title: 'Mor Remodeling - Transforming Homes, Elevating Living',
    description:
      'From complete home renovations to individual room makeovers and roofing, MOR Remodeling delivers reliable, high-quality solutions tailored to your lifestyle. Expert remodeling services in the Bay Area.',
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
    heading: 'Transforming Homes, Elevating Living',
    subheading:
      'From complete home renovations to individual room makeovers and roofing, MOR Remodeling delivers reliable, high-quality solutions tailored to your lifestyle',
    backgroundImage: '/images/hero/Hero-home.png',
    backgroundVideo: '/images/media/hero-home.mp4',
    videoPoster: '/images/hero/Hero-home.png',
  },
}

export default home


