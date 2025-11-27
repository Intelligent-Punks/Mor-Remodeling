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
      'We provide comprehensive remodeling solutions tailored to your needs, including kitchens, bathrooms, home additions, detached ADUs, and full-home remodels, as well as roofing and siding services all designed to enhance the beauty, functionality, and value of Bay Area homes.',
    },
    {
      id: 'f2',
      question: 'Do you only serve the Bay Area?',
      answer:
        'Yes, we proudly serve homeowners throughout the Bay Area, California. Focusing locally allows us to provide faster, personalized service, a deep understanding of regional styles and codes, and strong relationships with city and county officials helping us minimize timelines and deliver the best results for our clients.',
    },
    {
      id: 'f3',
      question: 'How long have you been in business?',
      answer:
        "Our team has been renovating homes together since 2016, bringing years of combined experience to every project. We’ve built a reputation for high-quality craftsmanship, meticulous attention to detail, and earning the trust of Bay Area homeowners through countless successful renovations.",
    },
    {
      id: 'f4',
      question: 'What are your working hours?',
      answer:
        "Our office is open Monday to Friday from 9 AM to 5 PM and on Sundays from 9 AM to 5 PM. Saturdays are our day off, allowing our team to stay refreshed and ready for every project. However, each project is assigned a dedicated project manager who is available seven days a week, always responsive, and happy to assist even outside of regular working hours.",
    },
    {
      id: 'f5',
      question: 'Can you help with both small upgrades and full home renovations?',
      answer:
        'Absolutely. Our team handles projects of all sizes, from a simple kitchen or bathroom upgrade to a full-home renovation. Every project is approached with the same care, love, meticulous attention to detail, and high-quality craftsmanship creating spaces tailored to your vision and needs.',
    },
    {
      id: 'f6',
      question: 'Do you provide free estimates?',
      answer:
        'Yes, we offer free consultations and estimates. Your dedicated project manager will visit your home to discuss your needs, provide professional advice, and brainstorm together to explore the best ways to transform your space and bring your dreams to life. This process gives homeowners a clear plan and understanding of their remodeling project and process before committing to their investment.',
    },
  ] as FaqItem[],
}

export default faq

