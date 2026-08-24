import { Link } from 'react-router-dom'
import { brand } from '../content/content'
import { cx } from '../utils/motion'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
  /** Emblem only, without the wordmark beside it. */
  compact?: boolean
}

/**
 * The header lockup: the emblem from the master artwork, set beside a typeset
 * wordmark.
 *
 * The wordmark is type rather than a slice of the logo file. The supplied logo
 * is a stacked lockup whose gold ring passes behind the lettering, so any
 * horizontal crop of the wordmark drags fragments of the emblem along above it
 * — which is exactly what the header was showing. Typesetting it in the site's
 * display face keeps it clean, legible down to a 360px header, and lets it
 * change colour over the dark hero without a filter flattening the artwork.
 *
 * The full artwork still ships and is used where there is room for it: the
 * favicons, the touch icon, and `images/logo-full.png`.
 */
export default function Logo({ tone = 'dark', className, compact = false }: LogoProps) {
  const light = tone === 'light'

  return (
    <Link
      to="/"
      aria-label={`${brand.name} — home`}
      className={cx('group inline-flex items-center gap-2.5 sm:gap-3', className)}
    >
      <img
        src="/images/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={512}
        height={447}
        className="h-10 w-auto shrink-0 transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.06] sm:h-12"
      />

      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cx(
              'font-display text-[1.35rem] font-semibold tracking-tight sm:text-[1.6rem]',
              light ? 'text-cream' : 'text-ink',
            )}
          >
            {brand.wordmark}
          </span>
          <span
            className={cx(
              'mt-1 font-nav text-[0.48rem] font-bold uppercase tracking-luxe sm:text-[0.52rem]',
              light ? 'text-rose-200' : 'text-rose-600',
            )}
          >
            Empower. Elevate. Evolve.
          </span>
        </span>
      )}
    </Link>
  )
}
