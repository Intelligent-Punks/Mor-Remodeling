export type FaqItem = { id: string; q: string; a: string }

const faq = {
  title: 'FAQ',
  items: [
    { id: 'f1', q: 'Do you provide free estimates?', a: 'Yes, contact us to schedule a free estimate.' },
    { id: 'f2', q: 'Are you licensed and insured?', a: 'Yes, we are fully licensed and insured.' },
  ] as FaqItem[],
}

export default faq

