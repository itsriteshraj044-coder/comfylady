import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import TextReveal from './TextReveal'
import { fadeUp, lineGrow, viewportSoft } from '../animations/variants'
import { cx } from '../utils/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string | string[]
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
  titleClassName?: string
  children?: ReactNode
}

/**
 * The recurring section header: a lettered eyebrow with a growing rule,
 * a masked display headline, and an optional lead paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className,
  titleClassName = 'display-lg',
  children,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={cx(
        'flex flex-col',
        centered ? 'items-center text-center mx-auto max-w-4xl' : 'items-start',
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className={cx('flex items-center gap-4', centered && 'justify-center')}
        >
          <motion.span
            variants={lineGrow}
            className={cx(
              'block h-px w-10 origin-left md:w-14',
              tone === 'light' ? 'bg-white/45' : 'bg-rose-400',
            )}
          />
          <span className={cx('eyebrow', tone === 'light' && 'text-white/75')}>{eyebrow}</span>
        </motion.div>
      )}

      <TextReveal
        as="h2"
        text={title}
        delay={0.08}
        className={cx(
          titleClassName,
          'mt-6 text-balance',
          tone === 'light' ? 'text-white' : 'text-ink',
        )}
      />

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          transition={{ delay: 0.16 }}
          className={cx(
            'lead mt-7 text-pretty',
            centered ? 'max-w-2xl' : 'max-w-2xl',
            tone === 'light' && 'text-white/70',
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {children}
    </div>
  )
}
