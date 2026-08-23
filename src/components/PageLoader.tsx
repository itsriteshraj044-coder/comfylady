import { motion } from 'framer-motion'
import { brand } from '../content/content'

/** Quiet, on-brand fallback while a lazily-loaded page arrives. */
export default function PageLoader() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cream"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          className="block h-10 w-10 rounded-full border border-rose-200 border-t-rose-500"
          aria-hidden="true"
        />
        <span className="eyebrow text-ink-muted">{brand.wordmark}</span>
      </div>
    </div>
  )
}
