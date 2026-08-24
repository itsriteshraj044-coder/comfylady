import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import ParallaxImage from '../../components/ParallaxImage'
import TextReveal from '../../components/TextReveal'
import { fadeUp, lineGrow, viewportSoft } from '../../animations/variants'
import { about } from '../../content/content'

const { founder } = about

/** About — the founder's message, set as a full-bleed dark editorial spread. */
export default function FounderSection() {
  return (
    <section className="section relative overflow-hidden bg-ink text-cream" aria-label="Message from our founder">
      <div
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-rose-500/12 blur-[150px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ParallaxImage
              src={founder.image}
              alt={founder.imageAlt}
              label="Founder portrait"
              ratio="aspect-[4/5]"
              strength={9}
            />
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="flex items-center gap-4"
            >
              <motion.span variants={lineGrow} className="block h-px w-12 origin-left bg-white/40" />
              <span className="eyebrow text-white/70">{founder.eyebrow}</span>
            </motion.div>

            <TextReveal
              as="h2"
              text={founder.title}
              delay={0.08}
              className="display-lg mt-6 text-white"
            />

            <Quote className="mt-10 h-9 w-9 text-rose-300/80" strokeWidth={1} aria-hidden="true" />

            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-6 max-w-3xl text-pretty font-sans text-[clamp(1.25rem,2.1vw,1.9rem)] font-light italic leading-snug text-white/90"
            >
              {founder.quote}
            </motion.blockquote>

            <motion.footer
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-10 flex items-center gap-5 border-t border-white/12 pt-8"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-400/20 font-display text-xl font-light text-rose-200"
                aria-hidden="true"
              >
                {founder.name.charAt(0)}
              </span>
              <span className="flex flex-col">
                <cite className="font-display text-xl font-light not-italic text-white">
                  {founder.name}
                </cite>
                <span className="mt-1 font-sans text-[0.6rem] uppercase tracking-wide2 text-white/50">
                  {founder.role}
                </span>
              </span>
            </motion.footer>
          </div>
        </div>
      </div>
    </section>
  )
}
