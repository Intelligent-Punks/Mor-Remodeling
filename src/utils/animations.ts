// Animation helpers only. Keep JSX clean.
export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as any },
}


