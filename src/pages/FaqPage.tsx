import { useDeferredValue, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import Accordion from '../components/Accordion'
import ButtonLink from '../components/ButtonLink'
import CtaSection from '../sections/shared/CtaSection'
import { LUXE_EASE, fadeUp, viewportSoft } from '../animations/variants'
import { faqCategories, faqPage, faqs, seo } from '../content/content'
import { breadcrumbSchema, faqSchema, organisationSchema } from '../utils/schema'
import { cx } from '../utils/motion'

export default function FaqPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(faqCategories[0])
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase()
    return faqs.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      if (!matchesCategory) return false
      if (!needle) return true
      return (
        item.question.toLowerCase().includes(needle) ||
        item.answer.toLowerCase().includes(needle) ||
        item.category.toLowerCase().includes(needle)
      )
    })
  }, [deferredQuery, category])

  return (
    <>
      <Seo
        meta={seo.faq}
        schema={[
          organisationSchema,
          faqSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
        subtitle={faqPage.hero.subtitle}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ', path: '/faq' },
        ]}
      />

      <section className="section field-cream" aria-label="Frequently asked questions">
        <div className="shell-narrow">
          {/* Search */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
          >
            <label htmlFor="faq-search" className="sr-only">
              {faqPage.searchPlaceholder}
            </label>
            <div className="flex items-center gap-4 border-b border-ink-line pb-4 transition-colors duration-500 focus-within:border-rose-400">
              <Search className="h-5 w-5 shrink-0 text-ink-muted" strokeWidth={1.4} aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={faqPage.searchPlaceholder}
                className="w-full bg-transparent py-1 font-display text-xl font-light text-ink placeholder:text-ink-muted/70 focus:outline-none sm:text-2xl"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-line text-ink-soft transition-colors duration-500 hover:border-rose-400 hover:text-rose-600"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category filter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter questions by category"
          >
            {faqCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={cx(
                  'rounded-full border px-5 py-2.5 font-sans text-[0.62rem] uppercase tracking-wide2 transition-all duration-500',
                  category === item
                    ? 'border-ink bg-ink text-cream'
                    : 'border-ink-line text-ink-soft hover:border-rose-300 hover:text-rose-600',
                )}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Results */}
          <p className="sr-only" aria-live="polite">
            {results.length} question{results.length === 1 ? '' : 's'} shown
          </p>

          <div className="mt-12 min-h-[20rem]">
            <AnimatePresence mode="wait">
              {results.length > 0 ? (
                <motion.div
                  key={`${category}-${deferredQuery}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: LUXE_EASE }}
                >
                  <Accordion items={results} defaultOpen={null} showCategory />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: LUXE_EASE }}
                  className="rounded-sm border border-ink-line bg-blush-100/50 px-8 py-16 text-center"
                >
                  <h2 className="font-display text-2xl font-light text-ink">
                    {faqPage.emptyState.title}
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
                    {faqPage.emptyState.text}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <ButtonLink to={faqPage.emptyState.cta.href} variant="primary" size="sm">
                      {faqPage.emptyState.cta.label}
                    </ButtonLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={faqPage.cta.eyebrow}
        title={faqPage.cta.title}
        subtitle={faqPage.cta.subtitle}
        primaryCta={faqPage.cta.primaryCta}
        secondaryCta={faqPage.cta.secondaryCta}
      />
    </>
  )
}
