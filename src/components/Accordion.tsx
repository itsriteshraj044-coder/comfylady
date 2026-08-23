import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { LUXE_EASE } from '../animations/variants'
import { cx } from '../utils/motion'
import type { FAQItem } from '../types'

interface AccordionProps {
  items: FAQItem[]
  /** Index open on first paint; null leaves everything closed. */
  defaultOpen?: number | null
  tone?: 'dark' | 'light'
  showCategory?: boolean
}

/**
 * Single-open accordion with a height-animated panel and a plus mark that
 * rotates into a minus. Buttons carry the proper `aria-expanded`/`aria-controls`
 * wiring so the whole thing is operable from the keyboard.
 */
export default function Accordion({
  items,
  defaultOpen = 0,
  tone = 'dark',
  showCategory = false,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const baseId = useId()
  const light = tone === 'light'

  return (
    <div className={cx('divide-y', light ? 'divide-white/12' : 'divide-ink-line')}>
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.id} className="group">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cx(
                  'flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-500',
                  light
                    ? isOpen
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                    : isOpen
                      ? 'text-rose-700'
                      : 'text-ink hover:text-rose-600',
                )}
              >
                <span className="flex flex-col gap-2">
                  {showCategory && (
                    <span
                      className={cx(
                        'font-sans text-[0.55rem] uppercase tracking-luxe',
                        light ? 'text-white/40' : 'text-rose-500',
                      )}
                    >
                      {item.category}
                    </span>
                  )}
                  <span className="font-display text-[clamp(1.15rem,1.7vw,1.65rem)] font-light leading-snug">
                    {item.question}
                  </span>
                </span>

                <span
                  className={cx(
                    'mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-700 ease-luxe',
                    light ? 'border-white/25' : 'border-ink-line',
                    isOpen && (light ? 'bg-white text-ink' : 'border-rose-400 bg-rose-500 text-white'),
                  )}
                  aria-hidden="true"
                >
                  <Plus
                    className={cx(
                      'h-4 w-4 transition-transform duration-700 ease-luxe',
                      isOpen && 'rotate-[135deg]',
                    )}
                    strokeWidth={1.4}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: LUXE_EASE }}
                  className="overflow-hidden"
                >
                  <p
                    className={cx(
                      'max-w-prose2 pb-8 pr-12 text-pretty text-sm leading-relaxed sm:text-base',
                      light ? 'text-white/60' : 'text-ink-soft',
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
