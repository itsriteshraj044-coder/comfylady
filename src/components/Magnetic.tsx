import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { prefersReducedMotion } from '../utils/motion'

interface MagneticProps {
  children: ReactNode
  className?: string
  /** How far the element follows the cursor, as a fraction of the offset. */
  strength?: number
}

/**
 * Pointer-following wrapper for buttons and small marks. Disabled on touch and
 * for reduced-motion users, where it silently renders a plain element.
 */
export default function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 })

  const active =
    typeof window !== 'undefined' &&
    !prefersReducedMotion() &&
    !window.matchMedia('(hover: none)').matches

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={active ? { x: springX, y: springY } : undefined}
    >
      {children}
    </motion.div>
  )
}
