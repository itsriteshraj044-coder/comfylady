import { motion, useInView } from 'framer-motion'
import SmartImage from './SmartImage'
import { useParallax } from '../hooks/useParallax'
import { viewportSoft } from '../animations/variants'
import { cx } from '../utils/motion'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  /** Percent of travel across the scroll window. */
  strength?: number
  /** Aspect ratio utility, e.g. "aspect-[4/5]". */
  ratio?: string
  rounded?: string
  priority?: boolean
  label?: string
  /** Adds the mask-reveal entrance. */
  reveal?: boolean
}

/**
 * Image inside a clipped frame: the frame reveals with a clip-path wipe, the
 * picture inside drifts against the scroll. The two together are what makes the
 * page read as photographed rather than pasted.
 *
 * The observer watches the outer wrapper, never the clipped frame itself. That
 * distinction is the whole fix: the wipe clips the frame to zero height, and an
 * IntersectionObserver on a zero-height target reports a ratio of 0 forever, so
 * watching the frame deadlocks — it can never be told to open. Every image on
 * the site was invisible for exactly that reason.
 */
export default function ParallaxImage({
  src,
  alt,
  className,
  strength = 10,
  ratio = 'aspect-[4/5]',
  rounded = 'rounded-sm',
  priority = false,
  label,
  reveal = true,
}: ParallaxImageProps) {
  const { ref, y } = useParallax(strength)
  const inView = useInView(ref, viewportSoft)

  return (
    <div ref={ref} className={cx('relative', className)}>
      <div
        className={cx(
          'img-frame relative overflow-hidden bg-shell',
          ratio,
          rounded,
          reveal && 'reveal-frame',
          reveal && inView && 'is-revealed',
        )}
      >
        <motion.div style={{ y }} className="absolute -top-[12%] left-0 h-[124%] w-full">
          <SmartImage src={src} alt={alt} priority={priority} label={label} className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  )
}
