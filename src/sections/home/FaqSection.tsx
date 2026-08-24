import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import Accordion from '../../components/Accordion'
import { fadeUp, viewportSoft } from '../../animations/variants'
import { faqs, home } from '../../content/content'

const { faq } = home

/** SECTION 8 — FAQ. A short, curated selection; the full set lives on /faq. */
export default function FaqSection() {
  return (
    <section className="section relative field-cream" aria-label="Frequently asked questions">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-12"
            >
              <ButtonLink to={faq.cta.href} variant="outline" size="sm">
                {faq.cta.label}
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="lg:col-span-7"
          >
            <Accordion items={faqs.slice(0, 6)} defaultOpen={0} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
