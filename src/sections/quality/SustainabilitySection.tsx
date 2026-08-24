import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ParallaxImage from '../../components/ParallaxImage'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { qualityPage } from '../../content/content'

const { sustainability } = qualityPage

/** Quality — the sustainability commitment, environmental and social. */
export default function SustainabilitySection() {
  return (
    <section className="section field-cream" aria-label="Sustainability commitment">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:pt-8">
            <SectionHeading eyebrow={sustainability.eyebrow} title={sustainability.title} />

            <div className="mt-9 space-y-6">
              {sustainability.paragraphs.map((paragraph, index) => (
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
          </div>

          <div className="lg:col-span-6">
            <ParallaxImage
              src={sustainability.image}
              alt={sustainability.imageAlt}
              label="Sustainability"
              ratio="aspect-[4/3]"
              strength={10}
            />
          </div>
        </div>

        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3rem,5vw,5rem)] grid gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 xl:grid-cols-4"
        >
          {sustainability.points.map((point, index) => (
            <motion.li
              key={point.id}
              variants={fadeUp}
              custom={index}
              className="group flex flex-col bg-cream p-8 transition-colors duration-700 ease-luxe hover:bg-blush-100 lg:p-10"
            >
              <Icon
                name={point.icon}
                className="h-6 w-6 text-rose-500 transition-transform duration-700 ease-luxe group-hover:-translate-y-1"
                strokeWidth={1.2}
              />
              <h3 className="mt-7 font-display text-xl font-light leading-tight text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{point.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
