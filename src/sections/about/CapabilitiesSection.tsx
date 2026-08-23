import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ParallaxImage from '../../components/ParallaxImage'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { about } from '../../content/content'

const { capabilities } = about

/** About — global capability, and the four audiences Comfylady supplies. */
export default function CapabilitiesSection() {
  return (
    <section className="section bg-cream" aria-label="Global capabilities">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} />
            <div className="mt-9 space-y-6">
              {capabilities.paragraphs.map((paragraph, index) => (
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

          <div className="lg:col-span-7">
            <ParallaxImage
              src={capabilities.image}
              alt={capabilities.imageAlt}
              label="Global capability"
              ratio="aspect-[16/10]"
              strength={9}
            />
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(3.5rem,6vw,6rem)]"
        >
          <p className="eyebrow">{capabilities.servingTitle}</p>
        </motion.div>

        <motion.ul
          variants={staggerParent(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-8 grid gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 xl:grid-cols-4"
        >
          {capabilities.serving.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="group flex flex-col bg-cream p-8 transition-colors duration-700 ease-luxe hover:bg-blush-100 lg:p-10"
            >
              <Icon
                name={item.icon}
                className="h-6 w-6 text-rose-500 transition-transform duration-700 ease-luxe group-hover:-translate-y-1"
                strokeWidth={1.2}
              />
              <h3 className="mt-7 font-display text-xl font-light leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
