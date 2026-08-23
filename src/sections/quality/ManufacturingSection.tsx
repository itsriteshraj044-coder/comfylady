import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import ParallaxImage from '../../components/ParallaxImage'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { qualityPage } from '../../content/content'

const { manufacturing } = qualityPage

/** Quality — how the product is made. */
export default function ManufacturingSection() {
  return (
    <section className="section bg-cream" aria-label="Manufacturing quality">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <ParallaxImage
              src={manufacturing.image}
              alt={manufacturing.imageAlt}
              label="Manufacturing"
              ratio="aspect-[4/5]"
              strength={10}
            />
          </div>

          <div className="lg:col-span-6 lg:pl-6 lg:pt-8">
            <SectionHeading eyebrow={manufacturing.eyebrow} title={manufacturing.title} />

            <div className="mt-9 space-y-6">
              {manufacturing.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportSoft}
                  className="body-muted max-w-prose2 text-pretty"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.ul
              variants={staggerParent(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-10 space-y-4 border-t border-ink-line pt-8"
            >
              {manufacturing.points.map((point, index) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  custom={index}
                  className="flex gap-4 text-sm leading-relaxed text-ink-soft"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-rose-500"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
