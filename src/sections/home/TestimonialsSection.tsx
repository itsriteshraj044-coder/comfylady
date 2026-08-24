import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, viewportSoft } from '../../animations/variants'
import { home, testimonials } from '../../content/content'
import { cx } from '../../utils/motion'
import type { Testimonial } from '../../types'

const { testimonials: copy } = home

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="card-luxe flex w-[85vw] shrink-0 flex-col justify-between p-8 sm:w-[26rem] lg:w-[30rem] lg:p-10">
      <Quote className="h-7 w-7 text-rose-300" strokeWidth={1.1} aria-hidden="true" />
      <blockquote className="mt-7 font-sans text-[clamp(1.15rem,1.55vw,1.5rem)] font-light italic leading-snug text-ink">
        {item.quote}
      </blockquote>
      <figcaption className="mt-9 flex items-center gap-4 border-t border-ink-line pt-6">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-200 font-display text-lg font-light text-rose-700"
          aria-hidden="true"
        >
          {item.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="font-sans text-sm text-ink">{item.name}</span>
          <span className="font-sans text-[0.62rem] uppercase tracking-wide2 text-ink-muted">
            {item.role} · {item.location}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * SECTION 7 — Testimonials.
 * A continuously auto-scrolling rail of quotes. It pauses on hover and on
 * keyboard focus so a reader is never chasing a moving target, and stops
 * entirely under reduced-motion preferences.
 */
export default function TestimonialsSection() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="section relative overflow-hidden field-shell" aria-label="Testimonials">
      <div className="shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
          align="center"
        />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportSoft}
        className="relative mt-[clamp(3rem,5vw,5rem)] w-full overflow-hidden mask-fade-x"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          className={cx(
            'flex w-max animate-marquee will-change-transform motion-reduce:animate-none',
            paused && '[animation-play-state:paused]',
          )}
          style={{ animationDuration: '64s' }}
        >
          <div className="flex gap-7 pr-7">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex gap-7 pr-7" aria-hidden="true">
            {testimonials.map((item) => (
              <TestimonialCard key={`${item.id}-clone`} item={item} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
