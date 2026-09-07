import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ButtonLink from '../../components/ButtonLink'
import ProductCard from '../../components/ProductCard'
import { fadeUp, viewportSoft } from '../../animations/variants'
import { home, products } from '../../content/content'

const { products: copy } = home

/**
 * SECTION 3 — Product showcase.
 * Three signature variants presented as tilting, depth-aware cards over a
 * slow-drifting oversized word.
 */
export default function ProductShowcaseSection() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const wordX = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  /* Vertical drift. The word starts in the open band beside the heading and
     travels down as the section passes, so it stays on screen far longer than
     a fixed position would — and it is never parked behind the card grid,
     where the cards are opaque and hide it completely. */
  const wordY = useTransform(scrollYProgress, [0, 1], ['-6vh', '46vh'])

  const featured = [products[0], products[2], products[3]]

  return (
    <section ref={ref} className="section relative overflow-hidden field-shell" aria-label="Our products">
      {/* The oversized ghost word.

          Centring is done by the flex wrapper, not by `-translate-x-1/2`: a
          motion transform writes the element's whole `transform`, so Tailwind's
          translate was being overwritten and the word started at the middle of
          the section and ran off the right edge — only "Com" was ever visible.

          It sits in the open band above the cards and drifts downwards with the
          scroll rather than being pinned. Pinned at the top it left the screen
          with the heading; centred in the section it ended up behind the opaque
          card grid. (Sticky is not an option: the section clips its own
          overflow, and an `overflow: hidden` ancestor becomes the sticky
          element's scroll box, which has nowhere to scroll.)

          The ramp keeps the whole word on screen at every width: "Comfort" is
          3.873em in the display font, and the drift moves it ±8% of its own width, so
          it needs 3.873 × 1.16 = 4.49em of room. At 20vw that is 0.9 of the
          viewport, and the 3rem floor keeps it inside a 240px phone. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="flex w-full justify-center pt-[3%]">
          <motion.p
            style={{ x: wordX, y: wordY }}
            aria-hidden="true"
            className="select-none whitespace-nowrap font-display text-[clamp(3rem,20vw,20rem)] font-light leading-none text-ink/[0.055]"
          >
            Comfort
          </motion.p>
        </div>
      </div>

      <div className="shell relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            subtitle={copy.subtitle}
            className="lg:max-w-3xl"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="shrink-0 lg:pb-2"
          >
            <ButtonLink to={copy.cta.href} variant="outline" size="sm">
              {copy.cta.label}
            </ButtonLink>
          </motion.div>
        </div>

        <div className="mt-[clamp(3rem,5vw,5rem)] grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:gap-9">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
