import type { Variants } from 'framer-motion'

/** Long, soft cubic-bezier used across the whole site. */
export const LUXE_EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: LUXE_EASE, delay: 0.06 * (i as number) },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, ease: LUXE_EASE, delay: 0.06 * (i as number) },
  }),
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -44 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: LUXE_EASE } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 44 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: LUXE_EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.05, ease: LUXE_EASE } },
}

export const staggerParent = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

export const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.2, ease: LUXE_EASE } },
}

/** Word-by-word text reveal. */
export const wordParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}

export const wordChild: Variants = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: LUXE_EASE } },
}

/** Shared viewport config so every reveal fires at the same point. */
export const viewportOnce = { once: true, amount: 0.25 } as const
export const viewportSoft = { once: true, amount: 0.15 } as const
