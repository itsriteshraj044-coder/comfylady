import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'
import BackToTop from '../components/BackToTop'
import Cursor from '../components/Cursor'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { LUXE_EASE } from '../animations/variants'

/**
 * App shell: smooth scroll, sticky header, animated route transitions, footer.
 */
export default function RootLayout() {
  const { pathname } = useLocation()
  useSmoothScroll()

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <Cursor />
      <ScrollProgress />
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          id="main"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: LUXE_EASE }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </div>
  )
}
