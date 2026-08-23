import type { ReactElement } from 'react'
import { cx } from '../utils/motion'

/**
 * Brand glyphs for the social links.
 *
 * Lucide v1 removed brand marks from the icon set, so these are drawn here as
 * minimal inline paths — stroked to match the 1.4-weight Lucide icons used
 * elsewhere, and sized by className like any other icon.
 */
const paths: Record<string, ReactElement> = {
  Instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: (
    <path d="M14.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.5H8.6V14h2.8v8" />
  ),
  Linkedin: (
    <>
      <path d="M6.5 9.5V19" />
      <circle cx="6.5" cy="5.4" r="1.6" />
      <path d="M11 19v-5.4a3.1 3.1 0 0 1 6.2 0V19" />
      <path d="M11 19V9.5" />
    </>
  ),
  Youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.6 15 12l-4.8 2.4z" />
    </>
  ),
}

interface SocialIconProps {
  name: string
  className?: string
  strokeWidth?: number
}

export default function SocialIcon({ name, className, strokeWidth = 1.4 }: SocialIconProps) {
  const glyph = paths[name]
  if (!glyph) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx('shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
