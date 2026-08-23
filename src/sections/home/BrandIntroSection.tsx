import { motion } from 'framer-motion'
import ParallaxImage from '../../components/ParallaxImage'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import Marquee from '../../components/Marquee'
import { fadeUp, maskRevealX, viewportSoft } from '../../animations/variants'
import { home, marquee } from '../../content/content'

const { intro } = home

/**
 * SECTION 2 — Brand introduction.
 * Editorial split: a tall parallax portrait with an offset inset image and a
 * floating statistic, set against a generous column of type.
 */
export default function BrandIntroSection() {
  return (
    <section id="brand-intro" className="section relative bg-cream" aria-label="About Comfy Lady">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Imagery */}
          <div className="relative lg:col-span-6">
            <ParallaxImage
              src={intro.imagePrimary}
              alt={intro.imagePrimaryAlt}
              label="Brand story"
              ratio="aspect-[4/5]"
              strength={9}
              className="w-full"
            />

            <motion.div
              variants={maskRevealX}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="absolute -bottom-10 right-0 hidden w-[46%] max-w-[18rem] overflow-hidden rounded-sm border-[6px] border-cream shadow-[0_40px_80px_-56px_rgba(120,66,74,0.7)] sm:block lg:-right-8"
            >
              <ParallaxImage
                src={intro.imageSecondary}
                alt={intro.imageSecondaryAlt}
                label="Texture detail"
                ratio="aspect-square"
                strength={14}
                reveal={false}
                rounded="rounded-none"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="absolute -left-2 top-8 rounded-sm bg-ink px-6 py-5 text-cream shadow-[0_30px_60px_-40px_rgba(36,30,28,0.9)] sm:-left-8 sm:px-8 sm:py-6"
            >
              <p className="font-display text-3xl font-light leading-none sm:text-4xl">
                {intro.stat.value}
              </p>
              <p className="mt-2 max-w-[9rem] font-sans text-[0.6rem] uppercase leading-relaxed tracking-wide2 text-cream/60">
                {intro.stat.label}
              </p>
            </motion.div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:pl-6 xl:pl-14 lg:pt-10">
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
              className="mt-8 font-display text-[clamp(1.25rem,1.9vw,1.75rem)] font-light italic leading-snug text-ink/85"
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
                <p className="font-display text-2xl font-light italic text-ink">
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

      <div className="mt-[clamp(5rem,9vw,9rem)] border-y border-ink-line/70 bg-shell/60 py-7">
        <Marquee words={marquee.words} />
      </div>
    </section>
  )
}
