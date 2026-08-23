import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion'

export interface NormalisedPointer {
  /** -0.5 … 0.5 relative to the viewport centre. */
  x: number
  y: number
}

/**
 * Viewport-normalised pointer position, throttled to animation frames.
 * Returns a static centre value on touch devices and for reduced-motion users.
 */
export function useMousePosition(enabled = true): NormalisedPointer {
  const [pointer, setPointer] = useState<NormalisedPointer>({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return
    if (window.matchMedia('(hover: none)').matches) return

    const handle = (event: MouseEvent) => {
      if (frame.current !== null) return
      frame.current = requestAnimationFrame(() => {
        setPointer({
          x: event.clientX / window.innerWidth - 0.5,
          y: event.clientY / window.innerHeight - 0.5,
        })
        frame.current = null
      })
    }

    window.addEventListener('mousemove', handle, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handle)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [enabled])

  return pointer
}
