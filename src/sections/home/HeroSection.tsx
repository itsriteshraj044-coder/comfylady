import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import ButtonLink from '../../components/ButtonLink'
import Magnetic from '../../components/Magnetic'
import SmartImage from '../../components/SmartImage'
import { gsap } from '../../animations/gsap'
import { useMousePosition } from '../../hooks/useMousePosition'
import { scrollToTarget } from '../../hooks/useSmoothScroll'
import { home } from '../../content/content'
import { cx, prefersReducedMotion } from '../../utils/motion'

const { hero } = home

/**
 * SECTION 1 — Hero.
 *
 * Cinematic full-screen: one full-bleed photograph holds the whole viewport and
 * the type sits on it, centred. The photograph is graded by a warm ink scrim
 * that is nearly clear at the top — so the inverted header stays legible
 * against the bright part of the picture — and deep at the bottom, where the
 * headline and the buttons need a ground to read against.
 *
 * Layout is a single flow column: a centred block that takes the free space,
 * then the scroll cue, each a row of the same flex column. Nothing is
 * positioned against the viewport, so no width, height or browser-zoom
 * combination can bring two elements into contact — rows can only push each
 * other down, never overlap.
 *
 * The backdrop is a silent looping video — a portrait cut below `md` and a
 * landscape cut above it, chosen with `matchMedia` so only the one that will be
 * shown is ever fetched. It degrades to the still photograph if the file fails
 * or the visitor asks for reduced motion.
 *
 * Motion: a word-by-word mask reveal
 * for the headline, scroll parallax on the copy, and a pointer lean on the
 * grade. All of it is skipped under `prefers-reduced-motion`, where the markup
 * already renders in its final state.
 */
export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null)
  const pointer = useMousePosition()

  /* Which cut of the backdrop to fetch. Resolved before first paint and kept in
     sync, so rotating a tablet swaps the file rather than letterboxing it. */
  const [portrait, setPortrait] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )
  const [videoFailed, setVideoFailed] = useState(false)
  const stillOnly = prefersReducedMotion() || videoFailed

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setPortrait(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ['start start', 'end start'],
  })
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  /* A whisper of pointer lean on the grade — enough to feel alive, far too
     little to move anything into anything else. */
  const slow = { stiffness: 55, damping: 26, mass: 1.15 }
  const glowX = useSpring(pointer.x * 70, slow)
  const glowY = useSpring(pointer.y * 50, slow)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.from('[data-h="aurora"]', { scale: 0.7, opacity: 0, duration: 2.2, stagger: 0.12 }, 0)
        .fromTo(
        '[data-h="frame"]',
        { clipPath: 'inset(14% 10% 14% 10%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8, ease: 'power3.inOut' },
        0,
        )
        .from('[data-h="photo"]', { scale: 1.3, duration: 2.6 }, 0)
        .from('[data-h="eyebrow"]', { y: 22, opacity: 0, duration: 0.9 }, 0.7)
        .from('[data-h="word"]', { yPercent: 116, opacity: 0, duration: 1.15, stagger: 0.06 }, 0.8)
        .from('[data-h="lead"]', { y: 22, opacity: 0, duration: 0.9 }, 1.35)
        .from('[data-h="cta"]', { y: 20, opacity: 0, duration: 0.85, stagger: 0.09 }, 1.45)
        .from('[data-h="bar"]', { opacity: 0, duration: 1 }, 1.55)
    }, root)

    return () => ctx.revert()
  }, [])

  const accent = hero.titleLines[hero.emphasisLineIndex]

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-ink font-nav"
      aria-label="Introduction"
    >
      {/* ---------- The photograph ---------- */}
      <div data-h="frame" className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div data-h="photo" style={{ y: imageY }} className="absolute -inset-y-[7%] inset-x-0">
          {stillOnly ? (
            <SmartImage
              src={hero.image}
              alt={hero.imageAlt}
              priority
              sizes="100vw"
              className="h-full w-full"
              /* The subject sits left of centre in the still, so a portrait
                 viewport crops towards her rather than to the wall behind. */
              imgClassName="object-[34%_center] lg:object-[45%_center]"
            />
          ) : (
            <video
              key={portrait ? 'portrait' : 'wide'}
              className="h-full w-full object-cover"
              src={portrait ? hero.video.portrait : hero.video.wide}
              poster={portrait ? hero.video.posterPortrait : hero.video.posterWide}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              onError={() => setVideoFailed(true)}
            />
          )}
        </motion.div>

        {/* Grade: deep at the bottom, where the type needs a ground, and just
            dark enough along the top edge to carry the inverted header. */}
        <span
          className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/45 to-ink/85"
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/45 to-transparent"
          aria-hidden="true"
        />
        {/* A warm rose bloom that follows the pointer. */}
        <motion.span
          data-h="aurora"
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-1/3 -ml-[26rem] -mt-[26rem] block h-[52rem] w-[52rem] rounded-full bg-rose-400/25 blur-[150px]"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(28,18,20,0.55)_100%)]"
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />
      </div>

      {/* ---------- Centre block ---------- */}
      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="relative flex flex-1 flex-col items-center justify-center px-[var(--shell-x)] pb-10 pt-[calc(var(--header-h)+3rem)] text-center sm:pb-14"
      >
        <div className="flex w-full flex-col items-center">
          {/* Eyebrow */}
          <div data-h="eyebrow" className="flex items-center gap-3">
            <span className="h-px w-8 bg-rose-300/70 sm:w-14" aria-hidden="true" />
            <span className="font-nav text-[0.6rem] font-bold uppercase tracking-luxe text-rose-200 sm:text-[0.68rem]">
              {hero.eyebrow}
            </span>
            <span className="h-px w-8 bg-rose-300/70 sm:w-14" aria-hidden="true" />
          </div>

          {/* Headline — the three designed lines, one block each, and every
              word in its own mask so the line assembles itself word by word.

              The ramp is sized so those three lines hold at every width rather
              than rewrapping into four. The widest is "Women with Comfort,":
              10.180em in the font 600, less 19 × 0.025em of tracking =
              9.705em. The h1 sits in a 64rem column inside the shell, so the
              available width is min(100vw − 2 × --shell-x, 64rem); 8.5vw and a
              6.25rem cap both stay under that from a 240px phone to 4K. The
              accent line measures 7.26em of the same size, so it never governs.
              Nothing is pinned with `whitespace-nowrap` — if a webfont fails
              and a wider fallback loads, wrapping is a better failure than
              overflow. */}
          <h1 className="mt-6 font-display text-[clamp(1.15rem,8.5vw,6.25rem)] font-bold leading-[1.04] text-cream sm:mt-8">
            {hero.titleLines.map((line) => {
              const isAccent = line === accent
              return (
                <span
                  key={line}
                  className={isAccent ? 'block text-rose-300 italic whitespace-nowrap' : 'block whitespace-nowrap'}
                >
                  {line.split(' ').map((word, index, words) => (
                    <span
                      key={`${word}-${index}`}
                      className={cx(
                        'inline-block overflow-hidden align-bottom pb-[0.14em]',
                        index === words.length - 1 ? '' : (isAccent ? 'mr-[0.4em]' : 'mr-[0.24em]')
                      )}
                    >
                      <span data-h="word" className="inline-block will-change-transform">
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              )
            })}
          </h1>

          <p
            data-h="lead"
            className="mt-6 max-w-2xl text-pretty font-nav text-[clamp(0.95rem,1.05vw,1.2rem)] font-medium leading-[1.7] text-cream/75 sm:mt-8"
          >
            <span className="sm:hidden">{hero.subtitleShort}</span>
            <span className="hidden sm:inline">{hero.subtitle}</span>
          </p>

          {/* Calls to action */}
          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <div data-h="cta" className="w-full sm:w-auto">
              <Magnetic>
                <ButtonLink
                  to={hero.primaryCta.href}
                  variant="rose"
                  className="w-full py-3.5 font-nav font-bold sm:w-auto sm:py-[1.15rem]"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
              </Magnetic>
            </div>
            <div data-h="cta" className="w-full sm:w-auto">
              <Magnetic>
                <ButtonLink
                  to={hero.secondaryCta.href}
                  variant="light"
                  className="w-full py-3.5 font-nav font-bold sm:w-auto sm:py-[1.15rem]"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------- Scroll cue ----------
          Centred, and stacked rather than side by side: the label sits over a
          hairline track down which a glowing rose dot falls on a loop. It reads
          as a direction rather than as a button, which is the whole job of a
          scroll cue. It is also the section's last row now that the marquee has
          gone, so it carries the bottom margin. */}
      <div data-h="bar" className="relative flex justify-center px-[var(--shell-x)] pb-9 pt-1 sm:pb-12">
        <button
          type="button"
          onClick={() => scrollToTarget('#brand-intro')}
          data-cursor="Scroll"
          aria-label={`${hero.scrollHint} to the next section`}
          className="group flex cursor-pointer flex-col items-center gap-3.5"
        >
          <span className="font-nav text-[0.55rem] font-bold uppercase tracking-luxe text-cream/55 transition-colors duration-300 group-hover:text-rose-200 sm:text-[0.6rem]">
            {hero.scrollHint}
          </span>
          <span
            className="relative block h-12 w-[2px] rounded-full bg-white/25 sm:h-16"
            aria-hidden="true"
          >
            {/* The traveller is a full-height sleeve carrying the dot at its
                top edge, so translating it by 100% walks the dot the exact
                length of the track at any breakpoint — no per-size pixel
                values, and the glow is never clipped. */}
            <span className="scroll-dot absolute inset-0 block">
              <span className="absolute left-1/2 top-0 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100 shadow-[0_0_12px_3px_rgba(244,190,200,0.75)]" />
            </span>
          </span>
        </button>
      </div>

    </section>
  )
}
