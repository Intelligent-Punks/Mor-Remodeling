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
      value: '15+ years', 
      label: 'delivering remodeling excellence',
      bgImage: '/images/stats/img-1.png'
    },
    { 
      id: 'st2', 
      value: '500+ projects', 
      label: 'completed with \n precision',
      bgImage: '/images/stats/img-2.png'
    },
    { 
      id: 'st3', 
      value: '98% rating', 
      label: 'from happy \n homeowners',
      bgImage: '/images/stats/img-3.png'
    },
    { 
      id: 'st4', 
      value: '50+ experts', 
      label: 'dedicated \n to quality',
      bgImage: '/images/stats/img-4.png'
    },
  ] as StatItem[],
}

export default stats

