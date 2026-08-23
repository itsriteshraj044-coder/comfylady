import { Asterisk } from 'lucide-react'
import { cx } from '../utils/motion'

interface MarqueeProps {
  words: string[]
  className?: string
  tone?: 'dark' | 'light'
  /** 'sm' is the compact strip used along the bottom of the hero. */
  size?: 'lg' | 'sm'
  /** 'nav' renders in Montserrat — used by the hero, which is scoped to it. */
  font?: 'display' | 'nav'
}

/**
 * One pass of the ticker. Declared at module scope so it is not re-created on
 * every render of Marquee (which would remount the whole track).
 */
function Track({
  words,
  tone,
  hidden,
  size,
  font,
}: {
  words: string[]
  tone: 'dark' | 'light'
  hidden: boolean
  size: 'lg' | 'sm'
  font: 'display' | 'nav'
}) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="flex shrink-0 items-center">
          <span
            className={cx(
              font === 'nav' ? 'font-nav' : 'font-display',
              'font-light tracking-tight',
              size === 'sm'
                ? 'text-[clamp(0.9rem,1.5vw,1.25rem)]'
                : 'text-[clamp(1.5rem,3.2vw,3.25rem)]',
              tone === 'light' ? 'text-white' : 'text-ink',
            )}
          >
            {word}
          </span>
          <Asterisk
            className={cx(
              'shrink-0',
              size === 'sm'
                ? 'mx-[clamp(0.85rem,1.8vw,1.6rem)] h-[0.75rem] w-[0.75rem]'
                : 'mx-[clamp(1.25rem,3vw,3.5rem)] h-[clamp(1rem,1.6vw,1.75rem)] w-[clamp(1rem,1.6vw,1.75rem)]',
              tone === 'light' ? 'text-white/45' : 'text-rose-400',
            )}
            strokeWidth={1}
            aria-hidden="true"
          />
        </span>
      ))}
    </div>
  )
}

/**
 * Infinite ticker of brand phrases. The track is duplicated and translated by
 * exactly -50%, so the loop is seamless; the copy is announced once to screen
 * readers and the duplicate is hidden.
 */
export default function Marquee({
  words,
  className,
  tone = 'dark',
  size = 'lg',
  font = 'display',
}: MarqueeProps) {
  return (
    <div className={cx('relative w-full overflow-hidden mask-fade-x', className)}>
      <div className="flex w-max animate-marquee will-change-transform motion-reduce:animate-none">
        <Track words={words} tone={tone} size={size} font={font} hidden={false} />
        <Track words={words} tone={tone} size={size} font={font} hidden />
      </div>
    </div>
  )
}
