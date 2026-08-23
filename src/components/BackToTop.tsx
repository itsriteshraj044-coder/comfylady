import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { scrollToTarget } from '../hooks/useSmoothScroll'
import { LUXE_EASE } from '../animations/variants'

/** Appears once the reader is well down the page. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (value) => setVisible(value > 900))
    return () => unsubscribe()
  }, [scrollY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToTarget(0)}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.5, ease: LUXE_EASE }}
          className="fixed bottom-6 right-6 z-[65] inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-[0_20px_40px_-24px_rgba(36,30,28,0.9)] transition-colors duration-500 hover:bg-rose-500 lg:bottom-10 lg:right-10"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
