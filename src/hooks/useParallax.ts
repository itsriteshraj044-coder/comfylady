import { useRef } from 'react'
import { useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { prefersReducedMotion } from '../utils/motion'

/**
 * Scroll-linked parallax for an element, expressed in percent of its own height.
 * `strength` of 12 moves the layer ±12% across its scroll window.
 */
export function useParallax(strength = 12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = prefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const amount = reduced ? 0 : strength

  const y: MotionValue<string> = useTransform(smooth, [0, 1], [`${amount}%`, `${-amount}%`])
  const scale = useTransform(smooth, [0, 0.5, 1], [1.1, 1.02, 1.1])

  return { ref, y, scale, progress: smooth }
}
