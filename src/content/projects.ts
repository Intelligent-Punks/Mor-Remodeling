export interface ProjectItem {
  id: string
  image: string
  alt?: string
  title: string
  date: string
  location: string
  serviceTag: string
  slug?: string
}

const projects = {
  title: 'Our Projects',
  description:
    "We've grouped our cabinetmaking, joinery and fittings activities into four Espaces. These unique creations reflect our teams' passion for their craft.",
  items: [
    { 
      id: '1', 
      image: '/images/our-projects/Frame-3.png', 
      alt: 'The Maple Residence',
      title: 'The Maple Residence',
      date: 'June 2024',
      location: 'Manhattan, New York',
      serviceTag: 'Living Room Renovation',
      slug: 'living-room-renovation'
    },
    { 
      id: '2', 
      image: '/images/our-projects/Frame-4.png', 
      alt: 'Cedarwood Retreat',
      title: 'Cedarwood Retreat',
      date: 'April 2024',
      location: 'Boston, Massachusetts',
      serviceTag: 'Kitchen renovation',
      slug: 'green-kitchen-renovation'
    },
    { 
      id: '3', 
      image: '/images/our-projects/Frame-5.png', 
      alt: 'Urban Harmony Loft',
      title: 'Urban Harmony Loft',
      date: 'May 2024',
      location: 'Chicago, Illinois',
      serviceTag: 'Kitchen renovation',
      slug: 'green-beige-kitchen-renovation'
    },
    { 
      id: '4', 
      image: '/images/our-projects/Frame-8.png', 
      alt: 'The Horizon House',
      title: 'The Horizon House',
      date: 'December 2023',
      location: 'Staten Island, New York',
      serviceTag: 'Outdoor Kitchen',
      slug: 'outdoor-kitchen'
    },
    { 
      id: '5', 
      image: '/images/our-projects/Frame-7.png', 
      alt: 'Oakridge Remodel',
      title: 'Oakridge Remodel',
      date: 'November 2023',
      location: 'Bronx, New York',
      serviceTag: 'Room & Home Additions',
      slug: 'room-home-additions'
    },
    { 
      id: '6', 
      image: '/images/our-projects/Frame-6.png', 
      alt: 'Sunset Haven',
      title: 'Sunset Haven',
      date: 'October 2023',
      location: 'Long Island, New York',
      serviceTag: 'Landscaping',
      slug: 'landscaping'
    },
    { 
      id: '7', 
      image: '/images/our-projects/Frame-9.png', 
      alt: 'The Willow Extension',
      title: 'The Willow Extension',
      date: 'September 2023',
      location: 'Yonkers, New York',
      serviceTag: 'Decks, Patios & Outdoor Covers',
      slug: 'decks-patios-outdoor-covers'
    },
    { 
      id: '8', 
      image: '/images/our-projects/Frame-10.png', 
      alt: 'Riverside Contemporary',
      title: 'Riverside Contemporary',
      date: 'August 2023',
      location: 'White Plains, New York',
      serviceTag: 'Exterior Remodeling & Siding',
      slug: 'exterior-remodeling-siding'
    },
    { 
      id: '9', 
      image: '/images/our-projects/Frame-11.png', 
      alt: 'The Belmont Transformation',
      title: 'The Belmont Transformation',
      date: 'July 2023',
      location: 'New Rochelle, New York',
      serviceTag: 'Roofing, Siding & Foundations',
      slug: 'roofing-siding-foundations'
    },
  ] as ProjectItem[],
}

export default projects


