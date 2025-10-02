import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'
import { PropsWithChildren } from 'react'

export function AnimatedSection({ children }: PropsWithChildren) {
  return (
    <motion.section {...fadeInUp}>
      {children}
    </motion.section>
  )
}


