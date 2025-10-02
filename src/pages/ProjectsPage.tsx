import projects from '@/content/projects'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function ProjectsPage() {
  return (
    <div>
      <h1>{projects.title}</h1>
      {projects.items.map((p) => (
        <AnimatedSection key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.text}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}


