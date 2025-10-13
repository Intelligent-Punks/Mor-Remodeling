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
      alt: 'Modern Kitchen Renovation',
      title: 'Modern Kitchen Renovation',
      date: 'March 2024',
      location: 'Brooklyn, New York'
    },
    { 
      id: 'p2', 
      image: '/images/our-projects/Frame-4.png', 
      alt: 'Project 2',
      title: 'Bathroom Remodel',
      date: 'February 2024',
      location: 'Manhattan, New York'
    },
    { 
      id: 'p3', 
      image: '/images/our-projects/Frame-5.png', 
      alt: 'Project 3',
      title: 'Full House Renovation',
      date: 'January 2024',
      location: 'Queens, New York'
    },
    { 
      id: 'p6', 
      image: '/images/our-projects/Frame-8.png', 
      alt: 'Project 6',
      title: 'ADU Addition',
      date: 'December 2023',
      location: 'Staten Island, New York'
    },
    { 
      id: 'p5', 
      image: '/images/our-projects/Frame-7.png', 
      alt: 'Project 5',
      title: 'Master Suite Remodel',
      date: 'November 2023',
      location: 'Bronx, New York'
    },
    { 
      id: 'p4', 
      image: '/images/our-projects/Frame-6.png', 
      alt: 'Project 4',
      title: 'Deck & Patio Cover',
      date: 'October 2023',
      location: 'Long Island, New York'
    },
    { 
      id: 'p7', 
      image: '/images/our-projects/Frame-9.png', 
      alt: 'Project 7',
      title: 'Kitchen & Dining Expansion',
      date: 'September 2023',
      location: 'Yonkers, New York'
    },
    { 
      id: 'p8', 
      image: '/images/our-projects/Frame-10.png', 
      alt: 'Project 8',
      title: 'Basement Finishing',
      date: 'August 2023',
      location: 'White Plains, New York'
    },
    { 
      id: 'p9', 
      image: '/images/our-projects/Frame-11.png', 
      alt: 'Project 9',
      title: 'Home Office Build',
      date: 'July 2023',
      location: 'New Rochelle, New York'
    },
  ] as ProjectItem[],
}

export default projects


