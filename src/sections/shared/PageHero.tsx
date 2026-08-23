import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import TextReveal from '../../components/TextReveal'
import SmartImage from '../../components/SmartImage'
import { fadeUp, lineGrow } from '../../animations/variants'
import { cx } from '../../utils/motion'

interface Crumb {
  label: string
  path: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  image?: string
  imageAlt?: string
  imageLabel?: string
  align?: 'left' | 'center'
}

/**
 * The shared inner-page opener. With an image it becomes a full-bleed banner
 * with a scroll-scrubbed parallax and a dark scrim; without one it falls back to
 * a quiet blush typographic header — used by the legal pages.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  image,
  imageAlt = '',
  imageLabel,
  align = 'left',
}: PageHeroProps) {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])

  const light = Boolean(image)
  const centered = align === 'center'

  return (
    <section
      ref={ref}
      className={cx(
        'relative isolate flex items-end overflow-hidden',
        light
          ? 'min-h-[74svh] bg-ink pb-[clamp(3rem,6vw,6rem)] pt-[calc(var(--header-h)+5rem)] lg:min-h-[82svh]'
          : 'gradient-blush pb-[clamp(3.5rem,6vw,6rem)] pt-[calc(var(--header-h)+5.5rem)]',
      )}
      aria-label={title}
    >
      {image ? (
        <>
          <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 h-[120%] w-full">
            <SmartImage src={image} alt={imageAlt} priority label={imageLabel} className="h-full w-full" />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -right-[10%] -top-[30%] h-[40rem] w-[40rem] rounded-full bg-rose-200/45 blur-[140px]"
            aria-hidden="true"
          />
          <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
        </>
      )}

      <motion.div style={{ y: contentY }} className="shell relative w-full">
        <div className={cx(centered && 'mx-auto max-w-4xl text-center')}>
          {crumbs.length > 0 && (
            <motion.nav
              aria-label="Breadcrumb"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className={cx('mb-8 flex flex-wrap items-center gap-1.5 text-[0.65rem] uppercase tracking-wide2', centered && 'justify-center')}
            >
              {crumbs.map((crumb, index) => (
                <span key={crumb.path} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight
                      className={cx('h-3 w-3', light ? 'text-white/40' : 'text-ink-muted')}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page" className={light ? 'text-white/60' : 'text-ink-muted'}>
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className={cx(
                        'transition-colors duration-500',
                        light ? 'text-white/75 hover:text-white' : 'text-ink-soft hover:text-rose-600',
                      )}
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className={cx('flex items-center gap-4', centered && 'justify-center')}
          >
            <motion.span
              variants={lineGrow}
              initial="hidden"
              animate="show"
              className={cx('block h-px w-12 origin-left', light ? 'bg-white/45' : 'bg-rose-400')}
            />
            <span className={cx('eyebrow', light && 'text-white/75')}>{eyebrow}</span>
          </motion.div>

          <TextReveal
            as="h1"
            text={title}
            delay={0.12}
            className={cx(
              'display-xl mt-7 max-w-[19ch] text-balance',
              light ? 'text-white' : 'text-ink',
              centered && 'mx-auto',
            )}
          />

          {subtitle && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3, duration: 0.9 }}
              className={cx(
                'lead mt-8 max-w-2xl text-pretty',
                light && 'text-white/70',
                centered && 'mx-auto',
              )}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  )
}
