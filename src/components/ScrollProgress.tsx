import { motion, useScroll, useSpring } from 'framer-motion'

/** Hairline reading-progress indicator pinned under the header. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-gradient-to-r from-rose-400 via-rose-500 to-nude-400"
      aria-hidden="true"
    />
  )
}
