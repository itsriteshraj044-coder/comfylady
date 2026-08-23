import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../hooks/useSmoothScroll'
import { ScrollTrigger } from '../animations/gsap'

/**
 * Resets scroll on route change and refreshes ScrollTrigger once the new page
 * has painted, so pinned and scrubbed sections measure the right heights.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    const id = window.setTimeout(() => ScrollTrigger.refresh(), 260)
    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}
