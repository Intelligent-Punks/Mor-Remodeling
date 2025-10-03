export interface ProjectItem {
  id: string
  image: string
  alt?: string
}

const projects = {
  title: 'Our Projects',
  description:
    "We've grouped our cabinetmaking, joinery and fittings activities into four Espaces. These unique creations reflect our teams' passion for their craft.",
  items: [
    { id: 'kitchen-remodel', image: '/images/our-projects/Frame-3.png', alt: 'Modern Kitchen Renovation' },
    { id: 'p2', image: '/images/our-projects/Frame-4.png', alt: 'Project 2' },
    { id: 'p3', image: '/images/our-projects/Frame-5.png', alt: 'Project 3' },
    { id: 'p6', image: '/images/our-projects/Frame-8.png', alt: 'Project 6' },
    { id: 'p5', image: '/images/our-projects/Frame-7.png', alt: 'Project 5' },
    { id: 'p4', image: '/images/our-projects/Frame-6.png', alt: 'Project 4' },
    { id: 'p7', image: '/images/our-projects/Frame-9.png', alt: 'Project 7' },
    { id: 'p8', image: '/images/our-projects/Frame-10.png', alt: 'Project 8' },
    { id: 'p9', image: '/images/our-projects/Frame-11.png', alt: 'Project 9' },
  ] as ProjectItem[],
}

export default projects


