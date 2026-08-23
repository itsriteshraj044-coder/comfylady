import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'
import { LUXE_EASE, fadeUp, viewportSoft } from '../../animations/variants'
import { whyPage } from '../../content/content'
import { cx } from '../../utils/motion'

const { pillars } = whyPage

/**
 * Why Comfylady — the six pillars as an interactive explorer. On large screens
 * it behaves as a tab list (arrow keys included); below that every panel is
 * simply stacked, because a tab strip of six is unusable on a phone.
 */
export default function PillarsSection() {
  const [active, setActive] = useState(0)
  const current = pillars.items[active]

  const handleKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    const next =
      event.key === 'ArrowDown'
        ? (index + 1) % pillars.items.length
        : (index - 1 + pillars.items.length) % pillars.items.length
    setActive(next)
    document.getElementById(`pillar-tab-${next}`)?.focus()
  }

  return (
    <section className="section bg-cream" aria-label="The six pillars">
      <div className="shell">
        <SectionHeading
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          subtitle={pillars.subtitle}
        />

        {/* Explorer — lg and up */}
        <div className="mt-[clamp(3rem,5vw,5rem)] hidden gap-12 lg:grid lg:grid-cols-12">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Comfylady pillars"
            className="lg:col-span-5"
          >
            {pillars.items.map((item, index) => {
              const selected = index === active
              return (
                <button
                  key={item.id}
                  id={`pillar-tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`pillar-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => handleKey(event, index)}
                  className={cx(
                    'group relative flex w-full items-center gap-6 border-b border-ink-line py-7 text-left transition-colors duration-500',
                    selected ? 'text-rose-700' : 'text-ink hover:text-rose-600',
                  )}
                >
                  <span
                    className={cx(
                      'absolute inset-y-0 left-0 w-px origin-top bg-rose-500 transition-transform duration-700 ease-luxe',
                      selected ? 'scale-y-100' : 'scale-y-0',
                    )}
                    aria-hidden="true"
                  />
                  <span className="pl-6 font-sans text-[0.6rem] tracking-luxe text-ink-muted">
                    0{index + 1}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,2.3vw,2.15rem)] font-light leading-none">
                    {item.title}
                  </span>
                  <Icon
                    name={item.icon}
                    className={cx(
                      'ml-auto h-5 w-5 transition-all duration-700 ease-luxe',
                      selected ? 'text-rose-500 opacity-100' : 'text-ink-muted opacity-40',
                    )}
                    strokeWidth={1.2}
                  />
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                id={`pillar-panel-${active}`}
                role="tabpanel"
                aria-labelledby={`pillar-tab-${active}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: LUXE_EASE }}
                className="relative flex h-full flex-col justify-center overflow-hidden rounded-sm border border-ink-line bg-blush-100/40 p-12 xl:p-16"
              >
                <span
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-200/45 blur-3xl"
                  aria-hidden="true"
                />
                <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-rose-500 shadow-[0_20px_40px_-30px_rgba(120,66,74,0.6)]">
                  <Icon name={current.icon} className="h-6 w-6" strokeWidth={1.2} />
                </span>
                <h3 className="relative mt-9 font-display text-[clamp(2rem,3.2vw,3rem)] font-light leading-tight text-ink">
                  {current.title}
                </h3>
                <p className="relative mt-6 max-w-prose2 text-pretty leading-relaxed text-ink-soft">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stacked — below lg */}
        <ul className="mt-12 space-y-4 lg:hidden">
          {pillars.items.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="rounded-sm border border-ink-line bg-cream p-7"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-200 text-rose-700">
                  <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.3} />
                </span>
                <h3 className="font-display text-2xl font-light text-ink">{item.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
