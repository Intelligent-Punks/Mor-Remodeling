export interface ReviewItem {
  id: string
  name: string
  services?: string
  location: string
  rating: number
  text: string
  date: string
  avatar?: string
}

const contactPageData = {
  seo: {
    title: 'Contact Us - Mor Remodeling',
    description:
      'Get in touch with MOR Remodeling for any enquiries and questions. Contact us for general inquiries, career opportunities, or collaboration proposals. We\'re here to help transform your home.',
    keywords: [
      'contact MOR remodeling',
      'remodeling consultation',
      'get a quote',
      'remodeling inquiry',
      'Bay Area remodeling contact',
      'home renovation consultation',
    ],
    ogImage: '/images/contact/og-contact.png',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact MOR Remodeling',
      description:
        'Contact MOR Remodeling for professional home remodeling services. Reach out for consultations, quotes, or any questions about your next project.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
        telephone: '(408) 583-8365',
        email: 'morremodinfo@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1254 Evergreen Avenue, Suite 200',
          addressLocality: 'Dallas',
          addressRegion: 'TX',
          postalCode: '75201',
          addressCountry: 'US',
        },
      },
    },
  },
  hero: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us for any enquiries and questions',
  },
  socialLinks: [
    { name: 'Instagram', url: 'https://www.instagram.com/mor_remodeling_bay/', icon: '/icons/instagram.svg' },
    // { name: 'Twitter', url: '#', icon: '/icons/x.svg' },
    { name: 'Whatsapp', url: 'https://wa.me/4085838365', icon: '/icons/whatsapp.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61584296697207&sk=photos_by', icon: '/icons/facebook.png' },
  ],
  contactInfo: {
    details: [
      {
        id: 'general-inquiries',
        label: 'General Inquiries',
        email: 'office@morremodeling.com',
        phone: '(408) 583-8365',
      },
      {
        id: 'working-hours',
        label: 'Working Hours',
        value: 'Monday - Friday: 9 AM - 5 PM\nSaturday: Day off\nSunday: 9 AM - 5 PM',
      },
      {
        id: 'collaborations',
        label: 'Collaborations',
        email: 'office@morremodeling.com',
        phone: '(408) 583-8365',
      },
      {
        id: 'address',
        label: 'Address',
        value: '1254 Evergreen Avenue, Suite 200. Dallas, TX 75201',
      },
      {
        id: 'careers',
        label: 'Careers',
        email: 'office@morremodeling.com',
      },
    ],
  },
  interiorImage: '/images/contact/interior.png',
  map: {
    title: 'Visit Our Office',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977558438406!2d-122.41941508468205!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  },
  reviews: {
    title: 'What Our Clients Say',
    subtitle:
      'Hear directly from homeowners who trusted MOR Remodeling to transform their spaces. From thoughtful design to flawless execution, our clients share how we bring their dreams to life with care, precision, and unmatched craftsmanship and how many of them have become friends along the way.',
    items: [
      {
        id: 'review-1',
        name: 'Sarah Thompson',
        services: 'Kitchen Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Ilay was professional and attentive during our kitchen remodel. He guided our choices and kept us updated on the schedule. The kitchen looks great, and overall the process was smooth. I appreciated how he made sure we felt informed without overwhelming us.',
        date: '22.03.2025',
        avatar: '/images/reviews/sarah-thompson.png',
      },
      {
        id: 'review-2',
        name: 'David and Melissa Carter',
        services: 'Kitchen Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Daniel managed our kitchen renovation well. There were a few minor delays, but he communicated clearly and made sure everything was finished to a high standard. We’re happy with the result and felt he genuinely cared about getting it right.',
        date: '12.04.2025',
        avatar: '/images/reviews/david-melissa-carter.png',
      },
      {
        id: 'review-3',
        name: 'Michael Rivera',
        services: 'Full House Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Adam managed our full-home renovation. From planning to execution, he was organized, communicative, and attentive to our needs. Every room shows their attention to detail and quality craftsmanship. The process had a few bumps, but Adam’s approach kept it stress-free. We feel like our home is brand new!',
        date: '03.05.2025',
        avatar: '/images/reviews/michael-rivera.png',
      },
      {
        id: 'review-4',
        name: 'Emily Nguyen',
        services: 'Kitchen + 2 Bathrooms + Flooring',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'We worked with Ilay and designer Alexandra on a major remodel: kitchen, two bathrooms, and new flooring. Alexandra helped us visualize the design beautifully, and Ilay ensured construction stayed on track. They were always responsive even after hours. It was a big project, but they made it feel manageable and the results are stunning.',
        date: '17.06.2025',
        avatar: '/images/reviews/emily-nguyen.png',
      },
      {
        id: 'review-5',
        name: 'Robert Adams',
        services: 'Full House Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Daniel oversaw our home remodel competently. The team worked hard and paid attention to detail. Some parts of the timeline ran longer than expected, but Daniel kept us informed. Overall, we’re satisfied with the quality and the outcome.',
        date: '29.07.2025',
        avatar: '/images/reviews/robert-adams.png',
      },
      {
        id: 'review-6',
        name: 'Lisa and Kevin Morgan',
        services: 'Full House + Addition',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Ilay coordinated our remodel plus an addition. He was professional, accessible, and patient with all our questions. The addition blends seamlessly with the house, and while the process had its challenges, the workmanship is excellent. We’re very happy with the results.',
        date: '08.09.2025',
        avatar: '/images/reviews/lisa-kevin-morgan.png',
      },
      {
        id: 'review-7',
        name: 'Carol Paisaty',
        services: 'Bathroom Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Adam managed our bathroom remodel. He was patient, answered every question, and helped with design choices that really elevated the space. The bathroom looks modern, elegant, and exactly as we hoped. We appreciated his steady guidance throughout the project.',
        date: '12.10.2025',
        avatar: '/images/reviews/carol-paisaty.png',
      },
      {
        id: 'review-8',
        name: 'Richard Mealword',
        services: 'Bathroom Remodel',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Daniel handled our bathroom renovation. He paid close attention to detail and was always available when we had questions. The finished bathroom is functional and beautiful, and we’ve received so many compliments from friends and family. Daniel made the process straightforward and enjoyable.',
        date: '22.11.2025',
        avatar: '/images/reviews/richard-mealword.png',
      },
    ] as ReviewItem[],
  },
}

export default contactPageData

