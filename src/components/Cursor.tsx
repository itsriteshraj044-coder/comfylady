import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { prefersReducedMotion } from '../utils/motion'

/** Elements that should make the ring expand and, optionally, carry a label. */
const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, [data-cursor]'

/**
 * Custom pointer for the site.
 *
 * The dot and the ring are drawn inside a single element positioned at the
 * pointer, so the dot is always exactly concentric with the ring — no trailing
 * or lag. Reaction comes from the ring itself: it expands over interactive
 * elements, collapses on press, and grows to carry a short label when one is
 * declared with `data-cursor="Label"`.
 *
 * It never replaces the real cursor where that would be wrong — no touch or
 * coarse pointers, and nothing at all under `prefers-reduced-motion`.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [label, setLabel] = useState<string | null>(null)
  const rafRef = useRef<number | null>(null)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (prefersReducedMotion()) return
    /* Fine pointer only: never hijack the cursor on touch or stylus devices. */
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    setEnabled(true)

    const move = (event: MouseEvent) => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        x.set(event.clientX)
        y.set(event.clientY)
        rafRef.current = null
      })
      setHidden(false)
    }

    const over = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest?.(INTERACTIVE)
      setHovering(Boolean(target))
      setLabel(target?.getAttribute('data-cursor') ?? null)
    }

    const down = () => setPressed(true)
    const up = () => setPressed(false)
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [x, y])

  /* Hide the native cursor only once ours is actually running. */
  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')
    return () => document.documentElement.classList.remove('has-custom-cursor')
  }, [enabled])

  if (!enabled) return null

  const ringSize = label ? 76 : hovering ? 48 : 32

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden="true">
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-0"
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.22 }}
      >
        {/* One wrapper holds both layers, so they cannot drift apart. */}
        <div className="relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <motion.div
            animate={{
              width: ringSize,
              height: ringSize,
              scale: pressed ? 0.78 : 1,
              borderColor: hovering ? 'rgb(201 123 135)' : 'rgba(36, 30, 28, 0.32)',
              backgroundColor: hovering ? 'rgba(201, 123, 135, 0.10)' : 'rgba(201, 123, 135, 0)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 26, mass: 0.4 }}
            className="flex items-center justify-center rounded-full border"
          >
            <AnimatePresence>
              {label && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="select-none whitespace-nowrap font-nav text-[0.5rem] font-semibold uppercase tracking-wide2 text-rose-700"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Centred dot — absolute within the same wrapper, so it sits exactly
              at the ring's centre at every ring size. */}
          <motion.span
            animate={{ scale: label ? 0 : pressed ? 1.4 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="absolute block h-[5px] w-[5px] rounded-full bg-rose-500"
          />
        </div>
      </motion.div>
    </div>
  )
}
