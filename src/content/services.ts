export interface ServiceItem {
  id: string
  title: string
  image: string
}

const services = {
  title: 'Services',
  list: [
    { id: 's1', title: 'Full Home Renovation', image: '/images/services/Frame-12-1.png' },
    { id: 's2', title: 'Kitchen Remodeling', image: '/images/services/Frame-12-2.png' },
    { id: 's3', title: 'Bathroom Remodeling', image: '/images/services/Frame-12-3.png' },
    { id: 's4', title: 'Decks, Patios & Outdoor Covers', image: '/images/services/Frame-12-4.png' },
    { id: 's5', title: 'Room & Home Additions (including ADUs)', image: '/images/services/Frame-12-5.png' },
    { id: 's6', title: 'Roofing, Siding & Foundations', image: '/images/services/Frame-12-6.png' },
    { id: 's7', title: 'Interior Design & Custom Finishes', image: '/images/services/Frame-12-7.png' },
    { id: 's8', title: 'Flooring Installation & Refinishing', image: '/images/services/Frame-12-8.png' },
    { id: 's9', title: 'Exterior Remodeling & Siding', image: '/images/services/Frame-12-9.png' },
  ] as ServiceItem[],
}

export default services


