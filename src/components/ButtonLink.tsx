import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cx } from '../utils/motion'

type Variant = 'primary' | 'rose' | 'outline' | 'light'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: Variant
  size?: 'md' | 'sm'
  className?: string
  withIcon?: boolean
  ariaLabel?: string
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  rose: 'btn-rose',
  outline: 'btn-outline',
  light: 'btn-light',
}

const isExternal = (href: string) =>
  href.startsWith('http') ||
  href.startsWith('tel:') ||
  href.startsWith('mailto:') ||
  href.startsWith('#')

/**
 * One button, two rendering modes: an internal router link or a native anchor
 * for phone, mail and off-site destinations. Content comes from content.ts.
 */
export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  withIcon = true,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cx('btn', variantClass[variant], size === 'sm' && 'btn-sm', className)

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {withIcon && (
        <ArrowUpRight
          className="relative z-10 h-[1.05em] w-[1.05em] transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      )}
    </>
  )

  if (isExternal(to)) {
    return (
      <a
        href={to}
        className={cx(classes, 'group')}
        aria-label={ariaLabel}
        {...(to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link to={to} className={cx(classes, 'group')} aria-label={ariaLabel}>
      {inner}
    </Link>
  )
}
