export interface ROIItem {
  id: string
  title: string
  value: string
}

const remodelingROI = {
  title: 'Remodeling That Pays Off',
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

