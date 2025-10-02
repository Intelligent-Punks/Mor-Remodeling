export type FaqItem = { id: string; question: string; answer: string }

const faq = {
  title: 'Frequently Asked Questions',
  subtitle: "If you can't find an answer that you're looking for, feel free to drop us a line.",
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
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
    {
      id: 'f3',
      question: 'How long have you been in business?',
      answer:
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
    {
      id: 'f4',
      question: 'What are your working hours?',
      answer:
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
    {
      id: 'f5',
      question: 'Can you help with both small upgrades and full home renovations?',
      answer:
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
    {
      id: 'f6',
      question: 'Do you provide free estimates?',
      answer:
        'We offer complete remodeling solutions including kitchens, bathrooms, home and room additions (with ADUs), full house remodels, outdoor decks and patio covers, plus roofing, siding, and foundation services for Bay Area homeowners.',
    },
  ] as FaqItem[],
}

export default faq

