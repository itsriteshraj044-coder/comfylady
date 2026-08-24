import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ParallaxImage from '../../components/ParallaxImage'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { whyPage } from '../../content/content'

const { lifestyle } = whyPage

/** Why Comfylady — four everyday moments, matched to the right variant. */
export default function LifestyleSection() {
  return (
    <section className="section field-cream" aria-label="Everyday freedom">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={lifestyle.eyebrow}
              title={lifestyle.title}
              subtitle={lifestyle.subtitle}
            />

            <motion.ul
              variants={staggerParent(0.09)}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-12 divide-y divide-ink-line border-y border-ink-line"
            >
              {lifestyle.items.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={fadeUp}
                  custom={index}
                  className="group flex items-start gap-5 py-6 transition-colors duration-500"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-line text-rose-500 transition-all duration-700 ease-luxe group-hover:-translate-y-1 group-hover:border-rose-300 group-hover:bg-rose-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.3} />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-light text-ink">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={lifestyle.image}
              alt={lifestyle.imageAlt}
              label="Lifestyle"
              ratio="aspect-[4/5] lg:aspect-[3/4]"
              strength={11}
              className="lg:sticky lg:top-32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
