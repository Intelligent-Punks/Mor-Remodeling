export interface ProjectDetail {
  slug: string
  hero: {
    title: string
    subtitle: string
    image: string // path relative to /images/projects/{slug}/
  }
  stats?: {
    label: string
    value: string
  }[]
  details: {
    title: string
    description: string[]
  }
  gallery: string[] // names of files in /images/projects/{slug}/
}

export interface ProjectSEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  schema: Record<string, any>
}

export function generateProjectSEO(project: ProjectDetail): ProjectSEO {
  const projectTitle = project.hero.title.replace(/\n/g, ' ')
  const location = project.stats?.find(s => s.label === 'Location')?.value || 'Bay Area'
  const date = project.stats?.find(s => s.label === 'Project date')?.value || ''
  
  return {
    title: `${projectTitle} | Mor Remodeling`,
    description: project.hero.subtitle,
    keywords: [
      'home remodeling project',
      'renovation case study',
      projectTitle.toLowerCase(),
      location.toLowerCase() + ' renovation',
      'completed remodeling project',
    ],
    ogImage: `/images/projects/${project.slug}/${project.hero.image}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Project',
      name: projectTitle,
      description: project.hero.subtitle,
      creator: {
        '@type': 'Organization',
        name: 'Mor Remodeling',
      },
      ...(date && { dateCompleted: date }),
      location: {
        '@type': 'Place',
        name: location,
      },
    },
  }
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'kitchen-remodel',
    hero: {
      title: 'Modern Kitchen Renovation \n– Brooklyn, NY',
      subtitle:
        'This project transformed an outdated kitchen into a bright, open-concept space with custom cabinetry, quartz countertops, and energy-efficient appliances. The result is a modern design that blends functionality with timeless style.',
      image: 'hero.png',
    },
    stats: [
      { label: 'Concept', value: 'Modern Kitchen Renovation' },
      { label: 'Project date', value: 'March 2024' },
      { label: 'Location', value: 'Brooklyn, New York' },
      { label: 'Architects', value: 'MOR Remodelling Design Team' },
    ],
    details: {
      title: 'Elegance in every corner, where modern comfort meets timeless design.',
      description: [
        'This 250 m² private residence renovation features a spacious living area, a contemporary kitchen, two master suites, and a terrace with panoramic views.',
        'The design blends natural stone and warm wood accents with soft lighting, creating an atmosphere of sophistication and comfort.',
        'This project was completed by the MOR Remodelling team in collaboration with local craftsmen and suppliers, delivering a space that is both functional and inspiring.',
        'Photos: MOR Remodelling Team',
      ],
    },
    gallery: [
      'gallery-1.png',
      'gallery-2.png',
      'gallery-3.png',
      'gallery-4.png',
      'gallery-5.png',
      'gallery-6.png',
    ],
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

