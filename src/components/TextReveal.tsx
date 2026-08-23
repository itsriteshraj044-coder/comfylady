import { motion } from 'framer-motion'
import type { ElementType } from 'react'
import { wordChild, wordParent } from '../animations/variants'
import { motionTag } from '../animations/motionTag'
import { cx } from '../utils/motion'

interface TextRevealProps {
  /** A single string, or several strings rendered as forced line breaks. */
  text: string | string[]
  className?: string
  as?: ElementType
  delay?: number
  /** Reveal whole lines rather than individual words. */
  byLine?: boolean
  once?: boolean
}

/**
 * Masked word-by-word (or line-by-line) reveal. Each word sits in an
 * `overflow-hidden` sleeve and rises into place — the editorial move that makes
 * large display type feel deliberate. The full string stays in the accessibility
 * tree via `aria-label`, and the animated fragments are hidden from it.
 */
export default function TextReveal({
  text,
  className,
  as = 'span',
  delay = 0,
  byLine = false,
  once = true,
}: TextRevealProps) {
  const lines = Array.isArray(text) ? text : [text]
  const label = lines.join(' ')
  const MotionTag = motionTag(as)

  return (
    <MotionTag
      className={cx('block', className)}
      aria-label={label}
      variants={wordParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      transition={{ delayChildren: delay }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden pb-[0.12em]" aria-hidden="true">
          {byLine ? (
            <motion.span className="block will-change-transform" variants={wordChild}>
              {line}
            </motion.span>
          ) : (
            line.split(' ').map((word, wordIndex, words) => (
              <span
                key={wordIndex}
                className={cx(
                  'inline-block overflow-hidden align-bottom',
                  wordIndex < words.length - 1 ? 'mr-[0.26em]' : '',
                )}
              >
                <motion.span className="inline-block will-change-transform" variants={wordChild}>
                  {word}
                </motion.span>
              </span>
            ))
          )}
        </span>
      ))}
    </MotionTag>
  )
}
