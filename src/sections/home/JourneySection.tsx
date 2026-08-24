import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ParallaxImage from '../../components/ParallaxImage'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, viewportOnce } from '../../animations/variants'
import { home, journeySteps } from '../../content/content'
import { cx } from '../../utils/motion'

const { journey } = home

/**
 * SECTION 5 — Comfort & protection journey.
 *
 * An editorial zigzag timeline: a spine down the centre that draws itself as
 * the section is scrolled, with the five stages alternating either side of it,
 * each paired with a photograph of that part of the process. Alternating is
 * what makes a long sequence readable — the eye is handed across the spine at
 * every step instead of running down one column — and the imagery gives each
 * stage something to be rather than a paragraph to skim.
 *
 * Below `md` the spine moves to the left edge and everything stacks behind it,
 * which is the same timeline rather than a different layout: one column of
 * markers, image then copy, in order.
 */
export default function JourneySection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 78%', 'end 62%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 })

  return (
    <section
      className="relative overflow-hidden bg-ink py-[clamp(4.5rem,8vw,9rem)] text-cream"
      aria-label="The Comfylady journey"
    >
      <div
        className="pointer-events-none absolute right-[-14%] top-[10%] h-[42rem] w-[42rem] rounded-full bg-rose-500/12 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-[18%] bottom-[-22%] h-[36rem] w-[36rem] rounded-full bg-nude-500/12 blur-[150px]"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          eyebrow={journey.eyebrow}
          title={journey.title}
          subtitle={journey.subtitle}
          tone="light"
          align="center"
        />

        <div ref={ref} className="relative mt-[clamp(3.5rem,6vw,6.5rem)]">
          {/* The spine, drawing itself as the section passes. */}
          <div
            className="absolute left-[1.375rem] top-0 h-full w-px -translate-x-1/2 bg-white/12 md:left-1/2"
            aria-hidden="true"
          >
            <motion.span
              style={{ scaleY: progress }}
              className="block h-full w-full origin-top bg-gradient-to-b from-rose-300 via-rose-400 to-nude-400"
            />
          </div>

          <ol className="space-y-16 md:space-y-0">
            {journeySteps.map((step, index) => {
              /* Odd stages sit on the right of the spine, even on the left. */
              const right = index % 2 === 1
              return (
                <li
                  key={step.id}
                  className="relative grid grid-cols-[3.5rem_1fr] items-center md:grid-cols-2 md:gap-16 xl:gap-24"
                >
                  {/* Marker, riding the spine. The outer span does the
                      positioning and the inner one the animation: a motion
                      element writes its whole `transform`, so Tailwind's
                      `-translate-x-1/2` on the same node was being thrown away
                      and every marker sat half its own width off the line. */}
                  <span
                    className="absolute left-[1.375rem] top-[1.375rem] z-10 -translate-x-1/2 -translate-y-1/2 md:left-1/2 md:top-1/2"
                    aria-hidden="true"
                  >
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink font-nav text-[0.62rem] font-bold tracking-wide2 text-rose-200"
                    >
                      {step.step}
                    </motion.span>
                  </span>

                  {/* Photograph */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    /* One column-start class only. Emitting both lets Tailwind's
                       source order pick the winner instead of this code. */
                    className={cx(
                      'col-start-2 md:py-14',
                      right ? 'md:col-start-2' : 'md:col-start-1',
                    )}
                  >
                    <ParallaxImage
                      src={step.image}
                      alt={step.imageAlt}
                      label={step.title}
                      ratio="aspect-[4/3]"
                      strength={7}
                      className="overflow-hidden rounded-sm border border-white/10 shadow-[0_50px_100px_-60px_rgba(0,0,0,0.9)]"
                    />
                  </motion.div>

                  {/* Copy. On the left of the spine it is set flush right, so
                      both columns read towards the centre. */}
                  <motion.div
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className={cx(
                      'col-start-2 mt-6 md:mt-0 md:py-14',
                      right ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-2',
                    )}
                  >
                    <span
                      className="hidden font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-none text-white/[0.11] md:block"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.35rem)] font-normal leading-tight text-white">
                      {step.title}
                    </h3>
                    <p
                      className={cx(
                        'mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base',
                        right ? 'md:ml-auto' : '',
                      )}
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
