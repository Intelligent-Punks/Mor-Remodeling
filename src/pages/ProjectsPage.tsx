import projects from '@/content/projects'
import OurProjects from '@/components/OurProjects'

export default function ProjectsPage() {
  return (
    <OurProjects
      title={projects.title}
      description={projects.description}
      projects={projects.items}
      showButton={false}
    />
  )
}


