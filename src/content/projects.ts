export interface ProjectItem {
  id: string
  image: string
  alt?: string
  title: string
  date: string
  location: string
}

const projects = {
  title: 'Our Projects',
  description:
    "We've grouped our cabinetmaking, joinery and fittings activities into four Espaces. These unique creations reflect our teams' passion for their craft.",
  items: [
    { 
      id: 'kitchen-remodel', 
      image: '/images/our-projects/Frame-3.png', 
      alt: 'The Maple Residence',
      title: 'The Maple Residence',
      date: 'March 2024',
      location: 'Brooklyn, New York'
    },
    { 
      id: 'p2', 
      image: '/images/our-projects/Frame-4.png', 
      alt: 'Cedarwood Retreat',
      title: 'Cedarwood Retreat',
      date: 'February 2024',
      location: 'Manhattan, New York'
    },
    { 
      id: 'p3', 
      image: '/images/our-projects/Frame-5.png', 
      alt: 'Urban Harmony Loft',
      title: 'Urban Harmony Loft',
      date: 'January 2024',
      location: 'Queens, New York'
    },
    { 
      id: 'p6', 
      image: '/images/our-projects/Frame-8.png', 
      alt: 'The Horizon House',
      title: 'The Horizon House',
      date: 'December 2023',
      location: 'Staten Island, New York'
    },
    { 
      id: 'p5', 
      image: '/images/our-projects/Frame-7.png', 
      alt: 'Oakridge Remodel',
      title: 'Oakridge Remodel',
      date: 'November 2023',
      location: 'Bronx, New York'
    },
    { 
      id: 'p4', 
      image: '/images/our-projects/Frame-6.png', 
      alt: 'Sunset Haven',
      title: 'Sunset Haven',
      date: 'October 2023',
      location: 'Long Island, New York'
    },
    { 
      id: 'p7', 
      image: '/images/our-projects/Frame-9.png', 
      alt: 'The Willow Extension',
      title: 'The Willow Extension',
      date: 'September 2023',
      location: 'Yonkers, New York'
    },
    { 
      id: 'p8', 
      image: '/images/our-projects/Frame-10.png', 
      alt: 'Riverside Contemporary',
      title: 'Riverside Contemporary',
      date: 'August 2023',
      location: 'White Plains, New York'
    },
    { 
      id: 'p9', 
      image: '/images/our-projects/Frame-11.png', 
      alt: 'The Belmont Transformation',
      title: 'The Belmont Transformation',
      date: 'July 2023',
      location: 'New Rochelle, New York'
    },
  ] as ProjectItem[],
}

export default projects


