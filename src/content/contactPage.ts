export interface ReviewItem {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
}

const contactPageData = {
  hero: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us for any enquiries and questions',
  },
  socialLinks: [
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Linkedin', url: '#' },
    { name: 'Telegram', url: '#' },
  ],
  contactInfo: {
    details: [
      {
        id: 'general-inquiries',
        label: 'general inquiries',
        email: 'morremodinfo@gmail.com',
        phone: '(747) 279-8262',
      },
      {
        id: 'careers',
        label: 'careers',
        email: 'morremodhr@gmail.com',
      },
      {
        id: 'collaborations',
        label: 'collaborations',
        email: 'morremodwrk@gmail.com',
        phone: '(747) 279-8262',
      },
      {
        id: 'address',
        label: 'address',
        value: '1254 Evergreen Avenue, Suite 200.\nDallas, TX 75201',
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
      'Don\'t just take our word for it — hear directly from homeowners who trusted MOR Remodelling to transform their spaces. From concept to completion, we\'re committed to delivering results that exceed expectations.',
    items: [
      {
        id: 'review-1',
        name: 'Sarah Thompson',
        location: 'Brooklyn, NY',
        rating: 5,
        text: 'MOR Remodelling transformed our outdated kitchen into a modern masterpiece. The team was professional, communicative, and delivered exactly what we envisioned. Highly recommend!',
        date: 'March 2024',
      },
      {
        id: 'review-2',
        name: 'Michael Chen',
        location: 'San Francisco, CA',
        rating: 4.5,
        text: 'From start to finish, the process was seamless. They listened to our needs, offered smart design solutions, and completed the project on time. Our bathroom has never looked better.',
        date: 'February 2024',
      },
      {
        id: 'review-3',
        name: 'Jessica Martinez',
        location: 'Los Angeles, CA',
        rating: 5,
        text: 'We worked with MOR Remodelling on a full home renovation, and the results speak for themselves. Quality craftsmanship, attention to detail, and a team that truly cares about their work.',
        date: 'January 2024',
      },
      {
        id: 'review-4',
        name: 'David Johnson',
        location: 'Seattle, WA',
        rating: 4,
        text: 'Exceptional service and top-tier results. MOR Remodelling helped us add a home office that perfectly fits our lifestyle. The entire experience was stress-free and professional.',
        date: 'December 2023',
      },
      {
        id: 'review-5',
        name: 'Emily Rodriguez',
        location: 'Austin, TX',
        rating: 5,
        text: 'Our basement renovation exceeded all expectations. The team was respectful, clean, and delivered a space that feels like a natural extension of our home. Couldn\'t be happier!',
        date: 'November 2023',
      },
    ] as ReviewItem[],
  },
}

export default contactPageData

