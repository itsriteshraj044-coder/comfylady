import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import Magnetic from '../../components/Magnetic'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { productsPage } from '../../content/content'

const { b2b } = productsPage

/** Products — OEM, wholesale and customisation services for business partners. */
export default function B2bSection() {
  return (
    <section className="section relative overflow-hidden bg-ink text-cream" aria-label="B2B services and partnerships">
      <div
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-rose-500/12 blur-[150px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          eyebrow={b2b.eyebrow}
          title={b2b.title}
          subtitle={b2b.subtitle}
          tone="light"
        />

        <motion.ul
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3rem,5vw,5rem)] grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-3"
        >
          {b2b.items.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="group flex flex-col bg-ink p-9 transition-colors duration-700 ease-luxe hover:bg-white/[0.04] lg:p-12"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-rose-300 transition-all duration-700 ease-luxe group-hover:-translate-y-1 group-hover:border-rose-300/60">
                <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.2} />
              </span>
              <h3 className="mt-8 font-display text-[clamp(1.4rem,2vw,1.85rem)] font-light leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-14"
        >
          <Magnetic className="inline-block">
            <ButtonLink to={b2b.cta.href} variant="rose">
              {b2b.cta.label}
            </ButtonLink>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  )
}
