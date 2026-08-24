import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { about, brandValues } from '../../content/content'

const { values } = about

/**
 * About — the four core values, laid out as numbered editorial rows so the
 * longer descriptions stay readable rather than being squeezed into cards.
 */
export default function ValuesSection() {
  return (
    <section className="section field-cream" aria-label="Core values">
      <div className="shell">
        <SectionHeading eyebrow={values.eyebrow} title={values.title} subtitle={values.subtitle} />

        <motion.ol
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3rem,5vw,5rem)] border-t border-ink-line"
        >
          {brandValues.map((value, index) => (
            <motion.li
              key={value.id}
              variants={fadeUp}
              custom={index}
              className="group grid gap-6 border-b border-ink-line py-10 transition-colors duration-700 ease-luxe hover:bg-blush-100/60 md:grid-cols-12 md:items-start md:gap-8 md:px-6 lg:py-14"
            >
              <div className="flex items-center gap-5 md:col-span-1">
                <span className="font-sans text-[0.6rem] tracking-luxe text-rose-500">
                  0{index + 1}
                </span>
              </div>

              <div className="md:col-span-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-line bg-white text-rose-500 transition-all duration-700 ease-luxe group-hover:-translate-y-1 group-hover:border-rose-300 group-hover:bg-rose-500 group-hover:text-white">
                  <Icon name={value.icon} className="h-5 w-5" strokeWidth={1.2} />
                </span>
              </div>

              <h3 className="font-display text-[clamp(1.5rem,2.3vw,2.15rem)] font-light leading-tight text-ink md:col-span-4">
                {value.title}
              </h3>

              <p className="body-muted max-w-prose2 text-pretty md:col-span-6">
                {value.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
