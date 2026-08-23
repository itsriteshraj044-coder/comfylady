import type { Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'
import { fadeUp, viewportSoft } from '../animations/variants'
import { motionTag } from '../animations/motionTag'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger index — multiplies the built-in delay step. */
  index?: number
  delay?: number
  variants?: Variants
  as?: ElementType
  amount?: number
}

/**
 * The site's default scroll-reveal wrapper. One consistent easing and trigger
 * point everywhere keeps the page feeling composed rather than busy.
 */
export default function Reveal({
  children,
  className,
  index = 0,
  delay = 0,
  variants = fadeUp,
  as = 'div',
  amount,
}: RevealProps) {
  const MotionTag = motionTag(as)

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={amount ? { once: true, amount } : viewportSoft}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
