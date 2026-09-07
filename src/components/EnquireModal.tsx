import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { LUXE_EASE } from '../animations/variants'
import { contactPage } from '../content/content'
import { getLenis } from '../hooks/useSmoothScroll'
import ContactForm from './ContactForm'

interface EnquireModalProps {
  open: boolean
  onClose: () => void
}

/**
 * Lightweight popup that surfaces the same enquiry form used on the Contact
 * page, without navigating away. Smooth scrolling is paused and the body is
 * locked while it is open; Escape and a backdrop click both dismiss it.
 */
export default function EnquireModal({ open, onClose }: EnquireModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const lenis = getLenis()
    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enquire"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: LUXE_EASE }}
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-ink/45 px-4 py-[clamp(1.5rem,6vh,5rem)] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={contactPage.form.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.5, ease: LUXE_EASE }}
            className="relative w-full max-w-2xl rounded-sm border border-ink-line bg-cream p-6 shadow-[0_50px_120px_-40px_rgba(90,50,56,0.55)] sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow">{contactPage.form.eyebrow}</p>
                <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)] font-light leading-tight text-ink">
                  {contactPage.form.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:border-rose-400 hover:text-rose-600"
              >
                <X className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
