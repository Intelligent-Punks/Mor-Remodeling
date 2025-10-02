import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import templateContent from '@/content/template'

export default function TemplatePage() {
  return (
    <div>
      <h1>{templateContent.title}</h1>
      {templateContent.items.map((section) => (
        <AnimatedSection key={section.id}>
          <motion.h2 layout>{section.title}</motion.h2>
          <p>{section.text}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}


