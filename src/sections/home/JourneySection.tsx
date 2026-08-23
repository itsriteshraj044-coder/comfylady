import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, viewportOnce } from '../../animations/variants'
import { home, journeySteps } from '../../content/content'

const { journey } = home

/**
 * SECTION 5 — Comfort & protection journey.
 * A vertical timeline whose spine draws itself as you scroll: the rule is a
 * scroll-linked scaleY, and each stage rises in as its marker is reached.
 */
export default function JourneySection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 })

  return (
    <section className="section relative overflow-hidden bg-ink text-cream" aria-label="The Comfylady journey">
      <div
        className="pointer-events-none absolute right-[-12%] top-1/4 h-[42rem] w-[42rem] rounded-full bg-rose-500/10 blur-[150px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          eyebrow={journey.eyebrow}
          title={journey.title}
          subtitle={journey.subtitle}
          tone="light"
          align="center"
        />

        <div ref={ref} className="relative mt-[clamp(3.5rem,6vw,6rem)]">
          {/* Spine */}
          <div
            className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-white/12 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.span
              style={{ scaleY: progress }}
              className="block h-full w-full origin-top bg-gradient-to-b from-rose-300 via-rose-400 to-nude-400"
            />
          </div>

          <ol className="space-y-14 md:space-y-0">
            {journeySteps.map((step, index) => {
              const alignRight = index % 2 === 1
              return (
                <li
                  key={step.id}
                  className="relative grid grid-cols-[3.5rem_1fr] items-start md:grid-cols-2 md:gap-16"
                >
                  {/* Marker */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink font-sans text-[0.65rem] tracking-wide2 text-rose-200 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    {step.step}
                  </motion.span>

                  {/* Content */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className={[
                      'pb-2 md:py-12',
                      alignRight
                        ? 'md:col-start-2 md:pl-16 md:text-left'
                        : 'md:col-start-1 md:pr-16 md:text-right',
                    ].join(' ')}
                  >
                    <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-tight text-white">
                      {step.title}
                    </h3>
                    <p
                      className={[
                        'mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base',
                        alignRight ? '' : 'md:ml-auto',
                      ].join(' ')}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
