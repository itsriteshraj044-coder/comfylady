import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { home, whyChooseUs } from '../../content/content'

const { why } = home

/**
 * SECTION 4 — Why women choose Comfylady.
 * A ruled feature grid where each cell fills with blush on hover and the icon
 * lifts — restrained motion, high polish.
 */
export default function WhyChooseSection() {
  return (
    <section className="section relative bg-cream" aria-label="Why choose Comfylady">
      <div className="shell">
        <SectionHeading
          eyebrow={why.eyebrow}
          title={why.title}
          subtitle={why.subtitle}
          align="center"
        />

        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3rem,5vw,5.5rem)] grid gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((feature, index) => (
            <motion.li
              key={feature.id}
              variants={fadeUp}
              custom={index}
              className="group relative flex flex-col bg-cream p-8 transition-colors duration-700 ease-luxe hover:bg-blush-100 lg:p-10"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-rose-400 transition-transform duration-700 ease-luxe group-hover:scale-x-100"
                aria-hidden="true"
              />

              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink-line bg-white text-rose-500 transition-all duration-700 ease-luxe group-hover:-translate-y-1 group-hover:border-rose-300 group-hover:bg-rose-500 group-hover:text-white">
                <Icon name={feature.icon} className="h-5 w-5" strokeWidth={1.3} />
              </span>

              <span className="mt-7 block font-sans text-[0.6rem] uppercase tracking-luxe text-ink-muted">
                0{index + 1}
              </span>

              <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ink">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-14 flex justify-center"
        >
          <ButtonLink to={why.cta.href} variant="primary">
            {why.cta.label}
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  )
}
