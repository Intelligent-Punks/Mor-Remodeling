export interface ReviewItem {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  avatar?: string
}

const contactPageData = {
  hero: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us for any enquiries and questions',
  },
  socialLinks: [
    { name: 'Instagram', url: '#', icon: '/icons/instagram.svg' },
    { name: 'Twitter', url: '#', icon: '/icons/x.svg' },
    { name: 'Linkedin', url: '#', icon: '/icons/linkedin.svg' },
    { name: 'Telegram', url: '#', icon: '/icons/telegram.svg' },
  ],
  contactInfo: {
    details: [
      {
        id: 'general-inquiries',
        label: 'General inquiries',
        email: 'morremodinfo@gmail.com',
        phone: '(747) 279 8262',
      },
      {
        id: 'careers',
        label: 'Careers',
        email: 'morremodhr@gmail.com',
      },
      {
        id: 'collaborations',
        label: 'Collaborations',
        email: 'morremodwrk@gmail.com',
        phone: '(747) 279 8262',
      },
      {
        id: 'address',
        label: 'Address',
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
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Mor Remodeling completely transformed our outdated kitchen into a beautiful, functional space. The team was professional, on time, and paid attention to every detail. Highly recommend!',
        date: '22.03.2025',
        avatar: '/images/reviews/sarah-thompson.png',
      },
      {
        id: 'review-2',
        name: 'David and Melissa Carter',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'From the first consultation to the final walkthrough, everything was smooth and transparent. We felt truly listened to, and the result exceeded our expectations.',
        date: '12.04.2025',
        avatar: '/images/reviews/david-melissa-carter.png',
      },
      {
        id: 'review-3',
        name: 'Michael Rivera',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'We hired Mor Remodeling for a full bathroom remodel, and the quality of work is outstanding. Every fixture and tile was perfectly installed. We couldn\'t be happier with the result.',
        date: '03.05.2025',
        avatar: '/images/reviews/michael-rivera.png',
      },
      {
        id: 'review-4',
        name: 'Emily Nguyen',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Our home addition project went flawlessly. The crew was respectful, efficient, and kept the site clean. Mor Remodeling made the whole experience stress-free and rewarding.',
        date: '17.06.2025',
        avatar: '/images/reviews/emily-nguyen.png',
      },
      {
        id: 'review-5',
        name: 'Robert Adams',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'The team built our new deck and patio cover beautifully. Great craftsmanship, fair pricing, and they finished ahead of schedule. Highly satisfied with their professionalism and precision.',
        date: '29.07.2025',
        avatar: '/images/reviews/robert-adams.png',
      },
      {
        id: 'review-6',
        name: 'Lisa and Kevin Morgan',
        location: 'Bay Area, CA',
        rating: 5,
        text: 'Mor Remodeling gave our entire home a fresh new life. Communication was clear, timelines were met, and the results were beyond what we imagined. Truly five-star service!',
        date: '08.09.2025',
        avatar: '/images/reviews/lisa-kevin-morgan.png',
      },
    ] as ReviewItem[],
  },
}

export default contactPageData

