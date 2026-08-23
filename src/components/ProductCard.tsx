import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SmartImage from './SmartImage'
import { fadeUp, viewportSoft } from '../animations/variants'
import { prefersReducedMotion, cx } from '../utils/motion'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
  index?: number
  /** Opens the detail panel on the Products page. */
  onSelect?: (product: Product) => void
  className?: string
}

/**
 * Product card with a real 3D tilt: the pointer drives rotateX/rotateY on a
 * perspective wrapper while the artwork and label lift on independent Z planes,
 * so the card gains depth rather than simply scaling.
 */
export default function ProductCard({ product, index = 0, onSelect, className }: ProductCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = useState(false)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), {
    stiffness: 140,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  })

  const interactive = typeof window !== 'undefined' && !prefersReducedMotion()

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    px.set(0)
    py.set(0)
    setHovered(false)
  }

  const Wrapper = onSelect ? 'button' : 'div'

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={viewportSoft}
      className={cx('group [perspective:1400px]', className)}
    >
      <Wrapper
        {...(onSelect
          ? {
              type: 'button' as const,
              onClick: () => onSelect(product),
              'aria-label': `View details for ${product.name}`,
            }
          : {})}
        className="block w-full text-left"
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={reset}
          style={interactive ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
          className="card-luxe flex h-full flex-col"
        >
          {/* Artwork */}
          <div className="img-frame relative aspect-[4/5] w-full overflow-hidden bg-shell">
            <motion.div
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <SmartImage
                src={product.image}
                alt={product.imageAlt}
                label={product.name}
                sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 30vw"
              />
            </motion.div>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100"
              aria-hidden="true"
            />

            <span
              className="absolute left-4 top-4 rounded-full bg-cream/90 px-4 py-1.5 font-sans text-[0.58rem] uppercase tracking-wide2 text-ink backdrop-blur-sm"
              style={{ transform: 'translateZ(40px)' }}
            >
              {product.size}
            </span>

            <span
              className="absolute bottom-4 right-4 inline-flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-cream text-ink opacity-0 transition-all duration-700 ease-luxe group-hover:translate-y-0 group-hover:opacity-100"
              style={{ transform: 'translateZ(50px)' }}
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>

          {/* Label */}
          <div
            className="flex flex-1 flex-col p-6 lg:p-7"
            style={interactive ? { transform: 'translateZ(30px)' } : undefined}
          >
            <p className="eyebrow text-rose-500">{product.bestFor}</p>
            <h3 className="display-sm mt-3 font-display font-light text-ink">{product.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.tagline}</p>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-ink-line pt-5">
              {product.specs.slice(2, 5).map((spec) => (
                <div key={spec.label}>
                  <dt className="font-sans text-[0.55rem] uppercase tracking-wide2 text-ink-muted">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-light text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </Wrapper>
    </motion.div>
  )
}
