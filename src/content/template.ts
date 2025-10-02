type TemplateItem = {
  id: string
  title: string
  text: string
}

const template = {
  title: 'Template Page',
  items: [
    { id: 't1', title: 'Section 1', text: 'Description of section 1' },
    { id: 't2', title: 'Section 2', text: 'Description of section 2' },
    { id: 't3', title: 'Section 3', text: 'Description of section 3' },
  ] as TemplateItem[],
}

export default template


