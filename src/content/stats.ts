export interface StatItem {
  id: string
  value: string
  label: string
  bgImage: string
}

const stats = {
  title: 'Stats',
  subTitle: 'At MOR Remodeling, the numbers tell our story.',
  description:
    "With years of hands-on experience, hundreds of completed projects, countless satisfied clients, and a dedicated team of skilled craftsmen, we’ve built a reputation for quality, trust, and precision turning every home we touch into a space our clients truly love.",
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
      bgImage: '/images/stats/img-3.jpg'
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

