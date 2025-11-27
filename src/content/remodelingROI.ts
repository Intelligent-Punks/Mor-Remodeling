export interface ROIItem {
  id: string
  title: string
  value: string
}

const remodelingROI = {
  title: 'Every renovation is an investment in the future of your home',
  subtitle: `At MOR Remodeling, we understand that remodeling is not only an incredible way to enhance your lifestyle, comfort, and the functionality of your home, but when done right, it’s also a smart financial investment. 

With Bay Area home prices steadily increasing, thoughtful renovations deliver an immediate return on investment through increased home equity. 

From reimagined kitchens and bathrooms to full ADU and house additions, each project is carefully planned and executed with precision, premium materials, and thoughtful design ensuring your home is not only more beautiful and functional, but also more valuable.`,
  backgroundVideo: '/images/media/bg-remodeling.mp4',
  videoPoster: '/images/3d-rendering-wood-classic-living-room-with-marble-tile-bookshelf-sofa.png',
  items: [
    {
      id: 'roi1',
      title: 'Kitchen',
      value: 'up to 85% from project investment ',
    },
    {
      id: 'roi2',
      title: 'Bathroom',
      value: 'up to 70% from project investment',
    },
    {
      id: 'roi3',
      title: 'Flooring & Paint ',
      value: 'Up to 130% from project investment',
    },
    {
      id: 'roi4',
      title: 'House addition & ADU',
      value: 'Up to 300% from project investment',
    },
  ] as ROIItem[],
}

export default remodelingROI

