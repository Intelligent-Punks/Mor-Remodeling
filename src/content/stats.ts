export interface StatItem {
  id: string
  value: string
  label: string
}

const stats = {
  title: 'Stats',
  description:
    "At MOR Remodelling, numbers tell our story. With years of hands-on experience, we've built a reputation for quality, trust, and precision.",
  items: [
    { id: 'st1', value: '15+ Years', label: 'of remodeling expertise' },
    { id: 'st2', value: '500+ Projects', label: 'successfully completed' },
    { id: 'st3', value: '98%', label: 'client satisfaction rate' },
    { id: 'st4', value: '50+', label: 'skilled professionals and partners' },
  ] as StatItem[],
}

export default stats

