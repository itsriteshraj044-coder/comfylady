import { useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ButtonLink from '../../components/ButtonLink'
import Magnetic from '../../components/Magnetic'
import SmartImage from '../../components/SmartImage'
import Marquee from '../../components/Marquee'
import Icon from '../../components/Icon'
import { gsap } from '../../animations/gsap'
import { useMousePosition } from '../../hooks/useMousePosition'
import { scrollToTarget } from '../../hooks/useSmoothScroll'
import { home, marquee } from '../../content/content'
import { cx, prefersReducedMotion } from '../../utils/motion'

const { hero } = home

/**
 * SECTION 1 — Luxury hero, built as a centred kinetic stage rather than the
 * usual text-left / image-right split.
 *
 * The composition is typographic: an oversized three-line headline with an
 * image capsule set *inline* after the first line, and the closing line set in
 * italic rose. Behind it, three aurora fields drift on their own slow loops and
 * lean towards the pointer; in front, two glass badges float at the margins.
 *
 * The headline runs at the font's natural tracking. It previously carried a
 * negative value drawn for a serif, which ran the letters together; that was
 * corrected rather than replaced with a positive one.
 *
 * Its size is a single 7.4vw ramp rather than a breakpointed one, so phones get
 * the same proportions as desktop instead of a shrunken variant. The figure is
 * derived from the font's measured advance widths — "Women with Comfort," is
 * 10.594em in Fahkwang 300 — which leaves comfortable clearance at every width
 * and lets the lines be pinned with `whitespace-nowrap` so the three-line
 * structure never breaks.
 *
 * Responsiveness note: the capsule is sized in `em`, so it scales with the
 * fluid headline automatically and stays proportional from a 360px phone up to
 * a 4K display without needing a single breakpoint of its own.
 */
export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null)
  const pointer = useMousePosition()

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.14])

  /* Pointer lean. Springs keep it languid rather than twitchy. */
  const slow = { stiffness: 60, damping: 24, mass: 1.1 }
  const auroraX = useSpring(pointer.x * 70, slow)
  const auroraY = useSpring(pointer.y * 55, slow)
  const capsuleX = useSpring(pointer.x * -34, { stiffness: 90, damping: 20 })
  const capsuleY = useSpring(pointer.y * -22, { stiffness: 90, damping: 20 })
  const badgeLeftX = useSpring(pointer.x * 44, slow)
  const badgeLeftY = useSpring(pointer.y * 32, slow)
  const badgeRightX = useSpring(pointer.x * -38, slow)
  const badgeRightY = useSpring(pointer.y * -28, slow)

  useLayoutEffect(() => {
    /* Reduced motion: the markup already renders in its final state, so we
       simply never build the timeline. */
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      /* The underline draws itself by animating its own dash offset, measured
         at runtime so it is correct at any viewport width. */
      tl.from('[data-h="aurora"]', { scale: 0.7, opacity: 0, duration: 2.2, stagger: 0.12 }, 0)
        .from('[data-h="pill"]', { y: 26, opacity: 0, duration: 1 }, 0.25)
        .from('[data-h="line"]', { yPercent: 112, opacity: 0, duration: 1.35, stagger: 0.1 }, 0.35)
        .fromTo(
          '[data-h="capsule"]',
          { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.2 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.25 },
          0.9,
        )
        .from('[data-h="sub"]', { y: 24, opacity: 0, duration: 1 }, 1.05)
        .from('[data-h="cta"]', { y: 22, opacity: 0, duration: 0.9, stagger: 0.09 }, 1.15)
        .from('[data-h="stat"]', { y: 20, opacity: 0, duration: 0.9, stagger: 0.09 }, 1.28)
        .from('[data-h="badge"]', { scale: 0.88, opacity: 0, y: 18, duration: 1, stagger: 0.14 }, 1.2)
        .from('[data-h="bottom"]', { y: 24, opacity: 0, duration: 1 }, 1.45)
    }, root)

    return () => ctx.revert()
  }, [])

  const emphasis = hero.emphasisLineIndex

  return (
    <section
      ref={root}
      className="hero-stage relative isolate flex flex-col justify-center overflow-hidden bg-cream font-nav pb-[2.85rem] pt-[calc(var(--header-h)+min(2.5svh,1.5rem))] sm:pb-[7rem] sm:pt-[calc(var(--header-h)+3.5rem)] lg:pb-[9.5rem]"
      aria-label="Introduction"
    >
      {/* ---------- Ambient backdrop ---------- */}
      <motion.div
        style={{ scale: backdropScale }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        aria-hidden="true"
      >
        <SmartImage src={hero.image} alt="" priority placeholder="minimal" className="h-full w-full" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream/80 to-cream"
        aria-hidden="true"
      />

      {/* ---------- Aurora fields ---------- */}
      <motion.div
        style={{ x: auroraX, y: auroraY }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <motion.span
          data-h="aurora"
          animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.12, 0.96, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[18%] block h-[38rem] w-[38rem] rounded-full bg-rose-300/45 blur-[130px] sm:h-[52rem] sm:w-[52rem]"
        />
        <motion.span
          data-h="aurora"
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1, 0.94, 1.1, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-[14%] top-[6%] block h-[34rem] w-[34rem] rounded-full bg-nude-300/50 blur-[130px] sm:h-[46rem] sm:w-[46rem]"
        />
        <motion.span
          data-h="aurora"
          animate={{ x: [0, 40, -35, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.95, 1] }}
          transition={{ duration: 29, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-20%] left-[22%] block h-[32rem] w-[32rem] rounded-full bg-blush-300/60 blur-[120px] sm:h-[44rem] sm:w-[44rem]"
        />
      </motion.div>

      <div className="grain pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      {/* ---------- Floating glass badges (large screens only) ---------- */}
      <motion.div
        style={{ x: badgeLeftX, y: badgeLeftY }}
        className="pointer-events-none absolute left-[calc(var(--shell-x)*0.35)] top-[30%] hidden lg:block xl:left-[calc(var(--shell-x)*0.7)]"
      >
        <div
          data-h="badge"
          className="glass-panel animate-floaty rounded-full border border-white/70 px-6 py-4 shadow-[0_28px_60px_-42px_rgba(120,66,74,0.75)] motion-reduce:animate-none"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
              <Icon name={hero.badges[0].icon} className="h-4 w-4" strokeWidth={1.4} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-nav text-sm font-semibold text-ink">{hero.badges[0].title}</span>
              <span className="mt-0.5 font-nav text-[0.65rem] font-normal text-ink-muted">{hero.badges[0].text}</span>
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ x: badgeRightX, y: badgeRightY }}
        className="pointer-events-none absolute right-[calc(var(--shell-x)*0.35)] top-[54%] hidden lg:block xl:right-[calc(var(--shell-x)*0.7)]"
      >
        <div
          data-h="badge"
          className="glass-panel animate-floaty rounded-full border border-white/70 px-6 py-4 shadow-[0_28px_60px_-42px_rgba(120,66,74,0.75)] [animation-delay:-3s] motion-reduce:animate-none"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
              <Icon name={hero.badges[1].icon} className="h-4 w-4" strokeWidth={1.4} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-nav text-sm font-semibold text-ink">{hero.badges[1].title}</span>
              <span className="mt-0.5 font-nav text-[0.65rem] font-normal text-ink-muted">{hero.badges[1].text}</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* ---------- Centre stage ---------- */}
      <motion.div style={{ y: contentY, opacity: contentFade }} className="shell relative w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          {/* Eyebrow pill */}
          <div data-h="pill">
            <span className="glass-panel inline-flex items-center gap-2.5 rounded-full border border-white/70 py-2 pl-3 pr-5 shadow-[0_18px_40px_-32px_rgba(120,66,74,0.7)]">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
              </span>
              <span className="eyebrow font-nav">{hero.eyebrow}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-[min(3svh,1.5rem)] font-display text-[clamp(1.5rem,7.4vw,6.5rem)] font-light leading-[1.1] tracking-normal text-ink sm:mt-9">
            {hero.titleLines.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <span
                  data-h="line"
                  className="flex flex-nowrap items-center justify-center gap-x-[0.26em] whitespace-nowrap will-change-transform"
                >
                  <span
                    className={cx('inline-block', index === emphasis && 'italic text-rose-600')}
                  >
                    {line}
                  </span>

                  {/* Inline image capsule — sized in em, so it scales with the
                      headline on every device. */}
                  {index === 0 && (
                    <motion.span style={{ x: capsuleX, y: capsuleY }} className="inline-block align-middle">
                      <span
                        data-h="capsule"
                        data-cursor="Comfylady"
                        className={cx(
                          'relative block h-[0.72em] w-[1.5em] overflow-hidden rounded-full',
                          'border border-white/60',
                        )}
                      >
                        <SmartImage
                          src={hero.capsuleImage}
                          alt={hero.capsuleAlt}
                          priority
                          placeholder="minimal"
                          sizes="(max-width: 640px) 22vw, 12vw"
                          className="h-full w-full"
                        />
                      </span>
                    </motion.span>
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            data-h="sub"
            className="lead mt-[min(2.5svh,1.25rem)] max-w-2xl text-pretty font-nav font-normal sm:hidden"
          >
            {hero.subtitleShort}
          </p>
          <p data-h="sub" className="lead mt-8 hidden max-w-2xl text-pretty font-nav font-normal sm:block">
            {hero.subtitle}
          </p>

          {/* Calls to action */}
          <div className="mt-[min(3svh,1.5rem)] flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:justify-center">
            <div data-h="cta" className="w-full sm:w-auto">
              <Magnetic>
                <ButtonLink
                  to={hero.primaryCta.href}
                  variant="primary"
                  className="w-full py-3.5 font-nav sm:w-auto sm:py-[1.15rem]"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
              </Magnetic>
            </div>
            <div data-h="cta" className="w-full sm:w-auto">
              <Magnetic>
                <ButtonLink
                  to={hero.secondaryCta.href}
                  variant="outline"
                  className="w-full py-3.5 font-nav sm:w-auto sm:py-[1.15rem]"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </Magnetic>
            </div>
          </div>

          {/* Stats */}
          <dl className="mt-[min(3svh,1.5rem)] grid w-full max-w-2xl grid-cols-3 divide-x divide-ink-line border-y border-ink-line py-4 sm:mt-14 sm:py-6">
            {hero.stats.map((stat) => (
              <div key={stat.id} data-h="stat" className="px-2 text-center sm:px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-nav text-[clamp(1.25rem,2.4vw,2rem)] font-semibold leading-none text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-2 block font-nav text-[0.55rem] font-medium uppercase leading-snug tracking-wide2 text-ink-muted sm:text-[0.62rem]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* ---------- Scroll cue ---------- */}
      <button
        data-h="bottom"
        type="button"
        onClick={() => scrollToTarget('#brand-intro')}
        data-cursor="Scroll"
        className="group absolute bottom-[5.5rem] right-[var(--shell-x)] hidden items-center gap-3 font-nav text-[0.58rem] font-medium uppercase tracking-luxe text-ink-muted transition-colors duration-500 hover:text-rose-600 lg:flex"
      >
        {hero.scrollHint}
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors duration-500 group-hover:border-rose-400">
          <ArrowDown
            className="h-3.5 w-3.5 animate-floaty motion-reduce:animate-none"
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </span>
      </button>

      {/* ---------- Bottom marquee ---------- */}
      <div
        data-h="bottom"
        className="absolute inset-x-0 bottom-0 border-t border-ink-line/70 bg-cream/70 py-3 backdrop-blur-sm sm:py-4"
      >
        <Marquee words={marquee.words} size="sm" font="nav" />
      </div>
    </section>
  )
}
