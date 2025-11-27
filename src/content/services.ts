export interface ServiceItem {
  id: string
  title: string
  image: string
  slug?: string // Optional slug for linking to detail page
}

const services = {
  title: 'Services',
  list: [
    { id: 's1', title: 'Full Home Renovation', image: '/images/services/Frame-12-1.png', slug: 'full-home-renovation' },
    { id: 's2', title: 'Kitchen Remodeling', image: '/images/services/Frame-12-2.png', slug: 'kitchen-remodeling' },
    { id: 's3', title: 'Bathroom Remodeling', image: '/images/services/Frame-12-3.png', slug: 'bathroom-remodeling' },
    // { id: 's4', title: 'Decks, Patios & Outdoor Covers', image: '/images/services/Frame-12-4.png', slug: 'decks-patios-outdoor-covers' },
    { id: 's5', title: 'Room & Home Additions (including ADUs)', image: '/images/services/Frame-12-5.png', slug: 'room-home-additions' },
    { id: 's6', title: 'Roofing', image: '/images/services/Frame-12-6.png', slug: 'roofing-siding-foundations' },
    { id: 's7', title: 'Interior Design & Custom Finishes', image: '/images/services/Frame-12-7.png', slug: 'interior-design-custom-finishes' },
    { id: 's8', title: 'Flooring Installation & Refinishing', image: '/images/services/Frame-12-8.png', slug: 'flooring-installation-refinishing' },
    { id: 's9', title: 'Exterior Remodeling & Siding', image: '/images/services/Frame-12-9.png', slug: 'exterior-remodeling-siding' },
  ] as ServiceItem[],
}

export default services


