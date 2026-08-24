import { motion } from 'framer-motion'
import PageHero from './PageHero'
import { fadeUp, viewportSoft } from '../../animations/variants'

interface LegalSection {
  id: string
  title: string
  body: string[]
}

interface LegalPageProps {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
  crumbLabel: string
  crumbPath: string
}

/**
 * Shared layout for Privacy Policy and Terms & Conditions: a quiet typographic
 * header, a sticky contents rail on large screens, and generously set body copy.
 */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  crumbLabel,
  crumbPath,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={intro}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: crumbLabel, path: crumbPath },
        ]}
      />

      <section className="section field-cream" aria-label={title}>
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Contents */}
            <nav aria-label="On this page" className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow">Contents</p>
                <ol className="mt-6 space-y-2.5 border-l border-ink-line pl-6">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-ink-soft transition-colors duration-500 hover:text-rose-600"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 font-sans text-[0.6rem] uppercase tracking-wide2 text-ink-muted">
                  {updated}
                </p>
              </div>
            </nav>

            {/* Body */}
            <div className="lg:col-span-8">
              {sections.map((section, index) => (
                <motion.article
                  key={section.id}
                  id={section.id}
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportSoft}
                  className="scroll-mt-32 border-b border-ink-line py-9 first:pt-0 last:border-b-0"
                >
                  <h2 className="font-display text-[clamp(1.35rem,2vw,1.85rem)] font-light leading-snug text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((paragraph, bodyIndex) => (
                      <p
                        key={bodyIndex}
                        className="max-w-prose2 text-pretty text-sm leading-relaxed text-ink-soft sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
