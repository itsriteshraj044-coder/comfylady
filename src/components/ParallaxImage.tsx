import { motion } from 'framer-motion'
import SmartImage from './SmartImage'
import { useParallax } from '../hooks/useParallax'
import { maskReveal, viewportSoft } from '../animations/variants'
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

  return (
    <motion.div
      ref={ref}
      variants={reveal ? maskReveal : undefined}
      initial={reveal ? 'hidden' : undefined}
      whileInView={reveal ? 'show' : undefined}
      viewport={viewportSoft}
      className={cx('img-frame relative overflow-hidden bg-shell', ratio, rounded, className)}
    >
      <motion.div style={{ y }} className="absolute -top-[12%] left-0 h-[124%] w-full">
        <SmartImage src={src} alt={alt} priority={priority} label={label} className="h-full w-full" />
      </motion.div>
    </motion.div>
  )
}
