import { motion } from 'framer-motion'
import SmartImage from '../../components/SmartImage'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import Marquee from '../../components/Marquee'
import { fadeUp, viewportSoft } from '../../animations/variants'
import { home, marquee } from '../../content/content'

const { intro } = home

/**
 * SECTION 2 — Brand introduction.
 * Editorial split: a tall parallax portrait with an offset inset image and a
 * floating statistic, set against a generous column of type.
 */
export default function BrandIntroSection() {
  return (
    /* `pt-0` overrides the section rhythm on purpose: this is the first
       section under the hero and it butts straight against it, with no band of
       empty ground between the two. */
    <section
      id="brand-intro"
      className="section relative field-cream pt-0"
      aria-label="About Comfy Lady"
    >
      {/* The ticker opens the section, butted straight against the hero above
          it — no top border, because the hero's own bottom edge is the line. */}
      <div className="border-b border-ink-line/70 bg-shell/60 py-7">
        <Marquee words={marquee.words} />
      </div>

      <div className="shell pt-[clamp(5rem,9vw,11rem)]">
        {/* `items-start` matters: a stretched grid item fills the row and has
            no slack to travel in, so the sticky copy column would never stick. */}
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Imagery. Shown whole at its own ratio — no aspect box, no cover
              crop and no scroll drift. ParallaxImage would give it the site's
              usual treatment, but that works by oversizing the picture to 124%
              and sliding it, which on this portrait cropped her and read as a
              zoom. The statistic sits underneath rather than floated over her. */}
          <div className="lg:col-span-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="overflow-hidden rounded-sm border-[6px] border-cream shadow-[0_50px_100px_-60px_rgba(120,66,74,0.75)]"
            >
              <SmartImage
                src={intro.portrait.src}
                alt={intro.portrait.alt}
                label="Brand story"
                sizes="(max-width: 1023px) 92vw, 46vw"
                className="block w-full"
                imgClassName="h-auto w-full"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-8 inline-flex items-center gap-5 rounded-sm bg-ink px-7 py-5 text-cream shadow-[0_30px_60px_-40px_rgba(36,30,28,0.9)]"
            >
              <p className="font-display text-3xl font-light leading-none sm:text-4xl">
                {intro.stat.value}
              </p>
              <p className="max-w-[9rem] font-sans text-[0.6rem] uppercase leading-relaxed tracking-wide2 text-cream/60">
                {intro.stat.label}
              </p>
            </motion.div>
          </div>

          {/* Copy */}
          {/* The copy holds its place while the taller portrait scrolls past,
              then releases and travels with the page once the image column
              runs out. Offset by the header so it never slides under it. */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-6 lg:pl-6 lg:pt-10 xl:pl-14">
            <SectionHeading
              eyebrow={intro.eyebrow}
              title={intro.title}
              titleClassName="display-lg"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-8 font-sans text-[clamp(1.25rem,1.9vw,1.75rem)] font-light italic leading-snug text-ink/85"
            >
              {intro.lead}
            </motion.p>

            <div className="mt-8 space-y-6">
              {intro.body.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportSoft}
                  className="body-muted max-w-prose2 text-pretty"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t border-ink-line pt-8"
            >
              <div>
                <p className="font-sans text-2xl font-light italic text-ink">
                  {intro.signature}
                </p>
                <p className="mt-1 font-sans text-[0.6rem] uppercase tracking-wide2 text-ink-muted">
                  {intro.signatureRole}
                </p>
              </div>
              <ButtonLink to={intro.cta.href} variant="outline" size="sm">
                {intro.cta.label}
              </ButtonLink>
            </motion.div>
          </div>
        </div>

      </div>

    </section>
  )
}
