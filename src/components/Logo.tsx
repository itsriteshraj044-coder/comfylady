import { Link } from 'react-router-dom'
import { brand } from '../content/content'
import { cx } from '../utils/motion'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
  compact?: boolean
  /** Typeface for the wordmark. The header runs on Montserrat ('nav'). */
  font?: 'display' | 'nav'
}

/**
 * Wordmark plus a petal mark drawn in SVG — no raster asset, so it stays crisp
 * from mobile through 4K.
 */
export default function Logo({
  tone = 'dark',
  className,
  compact = false,
  font = 'display',
}: LogoProps) {
  const text = tone === 'light' ? 'text-white' : 'text-ink'
  const wordmarkFont = font === 'nav' ? 'font-nav' : 'font-display'
  const captionFont = font === 'nav' ? 'font-nav' : 'font-sans'

  return (
    <Link
      to="/"
      aria-label={`${brand.name} — home`}
      className={cx('group inline-flex items-center gap-3', className)}
    >
      <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
          <g
            className="origin-center transition-transform duration-[900ms] ease-luxe group-hover:rotate-45"
            style={{ transformOrigin: '20px 20px' }}
          >
            <path
              d="M20 4c5 5.4 5 12.8 0 16.5C15 16.8 15 9.4 20 4Z"
              className="fill-rose-400/85"
            />
            <path
              d="M36 20c-5.4 5-12.8 5-16.5 0C23.2 15 30.6 15 36 20Z"
              className="fill-rose-500/70"
            />
            <path
              d="M20 36c-5-5.4-5-12.8 0-16.5 5 3.7 5 11.1 0 16.5Z"
              className="fill-nude-400/80"
            />
            <path
              d="M4 20c5.4-5 12.8-5 16.5 0C16.8 25 9.4 25 4 20Z"
              className="fill-rose-300/85"
            />
          </g>
          <circle cx="20" cy="20" r="2" className="fill-ink/70" />
        </svg>
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={cx(wordmarkFont, 'text-2xl font-normal tracking-tight', text)}>
            {brand.wordmark}
          </span>
          <span
            className={cx(
              captionFont,
              'mt-1 text-[0.5rem] uppercase tracking-luxe',
              tone === 'light' ? 'text-white/55' : 'text-ink-muted',
            )}
          >
            Feminine Care
          </span>
        </span>
      )}
    </Link>
  )
}
