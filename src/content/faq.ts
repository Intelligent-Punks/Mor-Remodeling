export type FaqItem = { id: string; question: string; answer: string }

const faq = {
  title: 'Frequently Asked Questions',
  subtitle: "If you can't find an answer that you're looking for, feel free to drop us a line.",
  backgroundVideo: '/images/media/bg-faq.mp4',
  videoPoster: '/images/3d-rendering-wood-classic-living-room-with-marble-tile-bookshelf-sofa.png',
  items: [
    {
      id: 'f1',
      question: 'What types of remodeling services do you provide?',
      answer:
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
    {
      id: 'f2',
      question: 'Do you only serve the Bay Area?',
      answer:
        'Yes, our company proudly focuses on serving homeowners throughout the Bay Area, California. By staying local, we ensure faster response times, personalized service, and a strong understanding of regional design styles and construction codes.',
    },
    {
      id: 'f3',
      question: 'How long have you been in business?',
      answer:
        "Mor Remodeling was founded in 2019 and has steadily built a reputation for high-quality work. Over the years, we've completed numerous projects and earned the trust of Bay Area homeowners.",
    },
    {
      id: 'f4',
      question: 'What are your working hours?',
      answer:
        "We're open Monday to Friday from 9 AM to 5 PM and Sundays from 9 AM to 5 PM. Saturdays are our day off, ensuring our team stays refreshed for projects.",
    },
    {
      id: 'f5',
      question: 'Can you help with both small upgrades and full home renovations?',
      answer:
        'Absolutely. Our team handles projects of all sizes, from a simple kitchen upgrade to complete home remodeling. We approach every project with the same attention to detail and quality craftsmanship.',
    },
    {
      id: 'f6',
      question: 'Do you provide free estimates?',
      answer:
        'Yes, we offer free consultations and estimates. This allows homeowners to discuss their vision, explore options, and receive a clear project plan before committing to their remodeling investment in the Bay Area.',
    },
  ] as FaqItem[],
}

export default faq

