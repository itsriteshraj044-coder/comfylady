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
  const wordX = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  const featured = [products[0], products[4], products[5]]

  return (
    <section ref={ref} className="section relative overflow-hidden bg-shell/50" aria-label="Our products">
      <motion.p
        style={{ x: wordX }}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(6rem,20vw,20rem)] font-light leading-none text-ink/[0.035]"
      >
        Comfort
      </motion.p>

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
