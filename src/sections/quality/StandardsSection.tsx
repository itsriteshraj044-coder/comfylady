import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import StatCounter from '../../components/StatCounter'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { qualityPage, qualityStats, trustBadges } from '../../content/content'

/** Quality — the range in numbers, plus the standards Comfylady holds itself to. */
export default function StandardsSection() {
  return (
    <section className="section relative overflow-hidden bg-ink text-cream" aria-label="Standards and figures">
      <div
        className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[40rem] w-[40rem] rounded-full bg-nude-400/12 blur-[150px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          eyebrow={qualityPage.stats.eyebrow}
          title={qualityPage.stats.title}
          tone="light"
        />

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4"
        >
          {qualityStats.map((stat, index) => (
            <StatCounter key={stat.id} stat={stat} index={index} tone="light" />
          ))}
        </motion.div>

        <div className="mt-[clamp(4rem,7vw,7rem)] border-t border-white/10 pt-[clamp(3rem,5vw,5rem)]">
          <SectionHeading
            eyebrow={qualityPage.badges.eyebrow}
            title={qualityPage.badges.title}
            tone="light"
            titleClassName="display-md"
          />

          <motion.ul
            variants={staggerParent(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.li
                key={badge.id}
                variants={fadeUp}
                custom={index}
                className="group flex flex-col items-center gap-4 bg-ink px-6 py-9 text-center transition-colors duration-700 ease-luxe hover:bg-white/[0.04]"
              >
                <Icon
                  name={badge.icon}
                  className="h-6 w-6 text-rose-300 transition-transform duration-700 ease-luxe group-hover:-translate-y-1"
                  strokeWidth={1.2}
                />
                <span className="font-sans text-[0.62rem] uppercase leading-relaxed tracking-wide2 text-white/60">
                  {badge.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="mt-8 max-w-2xl text-sm leading-relaxed text-white/45"
          >
            {qualityPage.badges.note}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
