import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import ParallaxImage from '../../components/ParallaxImage'
import StatCounter from '../../components/StatCounter'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { home, qualityStats, trustBadges } from '../../content/content'

const { quality } = home

/**
 * SECTION 6 — Quality standards.
 * Statistics counting up beside a parallax manufacturing frame, closed by a
 * ruled band of trust marks.
 */
export default function QualityStandardsSection() {
  return (
    <section className="section relative bg-cream" aria-label="Quality standards">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={quality.eyebrow}
              title={quality.title}
              subtitle={quality.subtitle}
            />

            <motion.div
              variants={staggerParent(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12"
            >
              {qualityStats.map((stat, index) => (
                <StatCounter key={stat.id} stat={stat} index={index} />
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-14"
            >
              <ButtonLink to={quality.cta.href} variant="primary">
                {quality.cta.label}
              </ButtonLink>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <ParallaxImage
              src={quality.image}
              alt={quality.imageAlt}
              label="Manufacturing"
              ratio="aspect-[4/5] lg:aspect-[3/4]"
              strength={11}
            />
          </div>
        </div>

        {/* Trust badges */}
        <motion.ul
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(4rem,7vw,7rem)] grid gap-px overflow-hidden rounded-sm border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {trustBadges.map((badge, index) => (
            <motion.li
              key={badge.id}
              variants={fadeUp}
              custom={index}
              className="group flex flex-col items-center gap-4 bg-cream px-6 py-9 text-center transition-colors duration-700 ease-luxe hover:bg-blush-100"
            >
              <Icon
                name={badge.icon}
                className="h-6 w-6 text-rose-500 transition-transform duration-700 ease-luxe group-hover:-translate-y-1"
                strokeWidth={1.2}
              />
              <span className="font-sans text-[0.62rem] uppercase leading-relaxed tracking-wide2 text-ink-soft">
                {badge.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
