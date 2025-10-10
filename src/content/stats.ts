export interface StatItem {
  id: string
  value: string
  label: string
  bgImage: string
}

const stats = {
  title: 'Stats',
  description:
    "At MOR Remodelling, numbers tell our story. With years of hands-on experience, we've built a reputation for quality, trust, and precision.",
  items: [
    { 
      id: 'st1', 
      value: '15+ Years', 
      label: 'of remodeling expertise',
      bgImage: '/images/stats/img-1.png'
    },
    { 
      id: 'st2', 
      value: '500+ Projects', 
      label: 'successfully completed',
      bgImage: '/images/stats/img-2.png'
    },
    { 
      id: 'st3', 
      value: '98%', 
      label: 'client satisfaction rate',
      bgImage: '/images/stats/img-3.png'
    },
    { 
      id: 'st4', 
      value: '50+', 
      label: 'skilled professionals and partners',
      bgImage: '/images/stats/img-4.png'
    },
  ] as StatItem[],
}

export default stats

