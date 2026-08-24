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
        <span
          key={lineIndex}
          /* In line mode this span IS the mask, so it carries the descender
             allowance. In word mode the per-word sleeves below are the masks
             and carry it themselves — doubling it up here would just add a
             second gap under every heading. */
          className={cx('block overflow-hidden', byLine && 'pb-[0.14em]')}
          aria-hidden="true"
        >
          {byLine ? (
            <motion.span className="block will-change-transform" variants={wordChild}>
              {line}
            </motion.span>
          ) : (
            line.split(' ').map((word, wordIndex, words) => (
              <span
                key={wordIndex}
                className={cx(
                  /* The sleeve clips at its own content box, whose height is
                     the line-height — and every display size sets one tighter
                     than the font's ascent+descent. That leaves only
                     (line-height - 0.831)/2 below the baseline: 0.11em at
                     display-xl, against a deepest descender of 0.188em. The
                     g, y and Q of headings were being cut off. 0.14em clears
                     the worst case with room to spare. */
                  'inline-block overflow-hidden align-bottom pb-[0.14em]',
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
