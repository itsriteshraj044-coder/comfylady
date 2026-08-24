import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Info, X } from 'lucide-react'
import SmartImage from './SmartImage'
import ButtonLink from './ButtonLink'
import { LUXE_EASE } from '../animations/variants'
import { getLenis } from '../hooks/useSmoothScroll'
import type { Product } from '../types'

interface ProductDetailProps {
  product: Product | null
  onClose: () => void
}

/**
 * Slide-over product detail. Informational only — features, benefits, usage and
 * specifications, with an enquiry link rather than any purchase action. Locks
 * page scroll, traps Escape, and returns focus to the close control on open.
 */
export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const open = Boolean(product)

  useEffect(() => {
    const lenis = getLenis()
    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
      window.setTimeout(() => closeRef.current?.focus(), 80)
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
      {product && (
        <>
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="fixed inset-0 z-[85] bg-ink/45 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.75, ease: LUXE_EASE }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-2xl flex-col overflow-y-auto bg-cream shadow-[-40px_0_90px_-60px_rgba(36,30,28,0.8)]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-ink-line bg-cream/90 px-6 py-4 backdrop-blur-md lg:px-10">
              <p className="eyebrow">{product.bestFor}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close product details"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:border-rose-400 hover:text-rose-600"
              >
                <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            <div className="img-frame aspect-[16/11] w-full shrink-0">
              <SmartImage src={product.image} alt={product.imageAlt} label={product.name} />
            </div>

            <div className="px-6 py-10 lg:px-10 lg:py-14">
              <p className="font-sans text-[0.6rem] uppercase tracking-luxe text-rose-500">
                {product.size}
              </p>
              <h2
                id="product-detail-title"
                className="display-md mt-4 font-display font-light text-ink"
              >
                {product.name}
              </h2>
              <p className="mt-3 font-sans text-xl font-light italic text-ink/75">
                {product.tagline}
              </p>
              <p className="body-muted mt-6 max-w-prose2 text-pretty">{product.description}</p>

              {/* Specifications */}
              <div className="mt-10">
                <p className="eyebrow">Specifications</p>
                <dl className="mt-5 divide-y divide-ink-line border-y border-ink-line">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="font-sans text-[0.65rem] uppercase tracking-wide2 text-ink-muted">
                        {spec.label}
                      </dt>
                      <dd className="font-display text-lg font-light text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Features & benefits */}
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Features</p>
                  <ul className="mt-5 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <Check
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-rose-500"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow">Benefits</p>
                  <ul className="mt-5 space-y-3">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <Check
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-rose-500"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Usage */}
              <div className="mt-12 rounded-sm border border-ink-line bg-blush-100/60 p-7">
                <p className="flex items-center gap-2 eyebrow">
                  <Info className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  Usage information
                </p>
                <ul className="mt-5 space-y-3">
                  {product.usage.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-ink-soft">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary">
                  Enquire about this product
                </ButtonLink>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
