import { motion } from 'framer-motion'
import { Compass, Target } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, viewportSoft } from '../../animations/variants'
import { about } from '../../content/content'

const { missionVision } = about
const panels = [
  { key: 'mission', icon: Target, ...missionVision.mission },
  { key: 'vision', icon: Compass, ...missionVision.vision },
]

/** About — mission and vision as two facing panels on a blush field. */
export default function MissionVisionSection() {
  return (
    <section className="section bg-shell/60" aria-label="Mission and vision">
      <div className="shell">
        <SectionHeading
          eyebrow={missionVision.eyebrow}
          title={missionVision.title}
          align="center"
        />

        <div className="mt-[clamp(3rem,5vw,5rem)] grid gap-7 lg:grid-cols-2 lg:gap-9">
          {panels.map((panel, index) => {
            const PanelIcon = panel.icon
            return (
              <motion.article
                key={panel.key}
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={viewportSoft}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-ink-line bg-cream p-9 transition-all duration-700 ease-luxe hover:border-rose-200 hover:shadow-[0_40px_90px_-60px_rgba(120,66,74,0.5)] lg:p-14"
              >
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-100/70 blur-3xl transition-opacity duration-700 group-hover:opacity-100 lg:opacity-60"
                  aria-hidden="true"
                />

                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink-line bg-white text-rose-500 transition-all duration-700 ease-luxe group-hover:-translate-y-1 group-hover:border-rose-300">
                  <PanelIcon className="h-5 w-5" strokeWidth={1.2} aria-hidden="true" />
                </span>

                <h3 className="relative mt-8 font-display text-[clamp(1.75rem,2.6vw,2.5rem)] font-light leading-tight text-ink">
                  {panel.title}
                </h3>

                <p className="relative mt-6 max-w-prose2 text-pretty leading-relaxed text-ink-soft">
                  {panel.text}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
