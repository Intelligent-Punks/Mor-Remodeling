export interface ROIItem {
  id: string
  title: string
  value: string
}

const remodelingROI = {
  title: 'Every renovation is an investment in the future of your house',
  subtitle: `A well-planned remodel changes a home's market potential in addition to how it looks.

Every improvement increases daily comfort and creates long-term equity by enhancing structure, flow, and materials.

From updated bathrooms and redesigned kitchens to complete ADU additions, the correct design decisions can double the value of your home and draw in future purchasers who value skilful construction and strategic planning.`,
  backgroundVideo: '/images/media/bg-remodeling.mp4',
  videoPoster: '/images/3d-rendering-wood-classic-living-room-with-marble-tile-bookshelf-sofa.png',
  items: [
    {
      id: 'roi1',
      title: 'Kitchen Remodel',
      value: '$27,500 --> $53,900 (+96%)',
    },
    {
      id: 'roi2',
      title: 'Bathroom Remodel',
      value: '$25,250 --> $43,850 (+74%)',
    },
    {
      id: 'roi3',
      title: 'ADU Addition',
      value: '$150,000 --> $300,000 (+100%)',
    },
  ] as ROIItem[],
}

export default remodelingROI

