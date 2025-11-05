export interface ROIItem {
  id: string
  title: string
  value: string
}

const remodelingROI = {
  title: 'Every renovation is an investment in the future of your home',
  subtitle: `A carefully planned remodel is one of the most effective ways to enhance both the beauty and long-term value of your home. Beyond aesthetics, it improves comfort, functionality, and the overall living experience.

Each project, from a reimagined kitchen or bathroom to a complete ADU addition, contributes to lasting quality and increased property value. With thoughtful design, precise construction, and premium materials, every improvement becomes a strategic step toward building equity and timeless appeal.

At MOR Remodeling, every detail is guided by craftsmanship and care, ensuring that your home not only looks exceptional but performs beautifully for many years to come.`,
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

