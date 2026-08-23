import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { cx } from '../utils/motion'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  /** Rendered inside the placeholder so you know which asset is missing. */
  label?: string
  priority?: boolean
  sizes?: string
  /**
   * 'minimal' draws the blush field only, with no caption. Use it wherever the
   * frame is too small or too far back to carry text — the hero's inline
   * capsule and its faded backdrop, for instance, where the descriptive
   * placeholder would overflow or ghost through.
   */
  placeholder?: 'full' | 'minimal'
}

/**
 * Every image on the site goes through here. While the real photography is
 * being generated (prompts live in content.ts › imagePrompts), a missing file
 * degrades into an on-brand blush placeholder instead of a broken icon — so the
 * layout, spacing and animation all stay truthful during art direction.
 */
export default function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  label,
  priority = false,
  sizes,
  placeholder = 'full',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (failed) {
    const file = src.split('/').pop()
    return (
      <div
        className={cx(
          'relative flex h-full w-full items-center justify-center overflow-hidden',
          'bg-[radial-gradient(120%_100%_at_20%_0%,#F8E6E1_0%,#F5D3D8_38%,#F0E4D8_100%)]',
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <div className="grain absolute inset-0" aria-hidden="true" />
        {placeholder === 'minimal' ? null : (
        <div className="relative z-10 flex max-w-[80%] flex-col items-center gap-3 px-6 py-8 text-center">
          <ImageIcon className="h-6 w-6 text-rose-600/60" strokeWidth={1.2} aria-hidden="true" />
          <span className="eyebrow text-rose-700/70">{label ?? 'Image placeholder'}</span>
          <span className="font-display text-lg font-light leading-snug text-rose-900/70">
            {alt}
          </span>
          {file && (
            <code className="text-[0.62rem] tracking-wide text-rose-800/45">/images/{file}</code>
          )}
        </div>
        )}
      </div>
    )
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        className={cx(
          'h-full w-full object-cover transition-opacity duration-700 ease-luxe',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
          className,
        )}
      />
      {!loaded && <span className="absolute inset-0 animate-pulse bg-shell" aria-hidden="true" />}
    </>
  )
}
