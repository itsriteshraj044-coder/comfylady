import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { productsPage } from '../../content/content'

const { highlights } = productsPage

/** Products — the three signature top-sheet constructions. */
export default function HighlightsSection() {
  return (
    <section className="section field-cream" aria-label="Signature features">
      <div className="shell">
        <SectionHeading
          eyebrow={highlights.eyebrow}
          title={highlights.title}
          subtitle={highlights.subtitle}
          align="center"
        />

        <motion.ul
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3rem,5vw,5rem)] grid gap-7 lg:grid-cols-3 lg:gap-9"
        >
          {highlights.items.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-ink-line bg-cream p-9 transition-all duration-700 ease-luxe hover:-translate-y-2 hover:border-rose-200 hover:shadow-[0_40px_90px_-60px_rgba(120,66,74,0.5)] lg:p-11"
            >
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-blush-200/60 to-transparent transition-[height] duration-700 ease-luxe group-hover:h-32"
                aria-hidden="true"
              />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-blush-200 text-rose-700 transition-all duration-700 ease-luxe group-hover:bg-rose-500 group-hover:text-white">
                <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.2} />
              </span>

              <h3 className="relative mt-8 font-display text-[clamp(1.5rem,2.2vw,2rem)] font-light leading-tight text-ink">
                {item.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
