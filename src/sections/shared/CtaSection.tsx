import { useRef } from 'react'
import { motion } from 'framer-motion'
import ButtonLink from '../../components/ButtonLink'
import Magnetic from '../../components/Magnetic'
import TextReveal from '../../components/TextReveal'
import { fadeUp, lineGrow, viewportSoft } from '../../animations/variants'
import { useMousePosition } from '../../hooks/useMousePosition'
import type { CTA } from '../../types'

interface CtaSectionProps {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: CTA
  secondaryCta?: CTA
}

/**
 * The recurring closing call to action. Two soft light fields drift with the
 * pointer and a third layer scrubs with scroll, so the panel keeps breathing
 * without anything literally moving on the page.
 */
export default function CtaSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CtaSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const pointer = useMousePosition()


  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink py-[clamp(5.5rem,10vw,12rem)] text-cream"
      aria-label="Contact Comfylady"
    >
      <motion.div
        animate={{ x: pointer.x * 80, y: pointer.y * 60 }}
        transition={{ type: 'spring', stiffness: 40, damping: 22, mass: 1.2 }}
        className="pointer-events-none absolute left-[8%] top-[-18%] h-[42rem] w-[42rem] rounded-full bg-rose-500/18 blur-[150px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{ x: pointer.x * -60, y: pointer.y * -45 }}
        transition={{ type: 'spring', stiffness: 34, damping: 24, mass: 1.4 }}
        className="pointer-events-none absolute bottom-[-24%] right-[4%] h-[38rem] w-[38rem] rounded-full bg-nude-400/16 blur-[140px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="flex items-center gap-4"
          >
            <motion.span variants={lineGrow} className="block h-px w-12 origin-left bg-white/35" />
            <span className="eyebrow text-white/70">{eyebrow}</span>
            <motion.span variants={lineGrow} className="block h-px w-12 origin-right bg-white/35" />
          </motion.div>

          <TextReveal
            as="h2"
            text={title}
            delay={0.08}
            className="display-xl mt-8 text-balance text-white"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            transition={{ delay: 0.18 }}
            className="mt-8 max-w-2xl text-pretty text-white/60"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            transition={{ delay: 0.26 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic>
              <ButtonLink to={primaryCta.href} variant="rose">
                {primaryCta.label}
              </ButtonLink>
            </Magnetic>
            {secondaryCta && (
              <Magnetic>
                <ButtonLink to={secondaryCta.href} variant="light">
                  {secondaryCta.label}
                </ButtonLink>
              </Magnetic>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
