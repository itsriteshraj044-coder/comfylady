import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { prefersReducedMotion } from '../utils/motion'

/**
 * Counts from 0 to `target` the first time the element scrolls into view.
 * Non-numeric targets (or reduced motion) resolve instantly to the final value.
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion() || !Number.isFinite(target)) {
      setValue(target)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return { ref, value }
}
