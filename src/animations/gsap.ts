import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Shared luxury easing — long, soft settle. */
export const EASE = 'power3.out'
export const EASE_LUXE = 'expo.out'

/** Default ScrollTrigger start for section reveals. */
export const TRIGGER_START = 'top 82%'

export { gsap, ScrollTrigger }
