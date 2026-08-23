import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Logo from '../components/Logo'
import Magnetic from '../components/Magnetic'
import { LUXE_EASE } from '../animations/variants'
import { brand, contactDetails, navigation, socialLinks } from '../content/content'
import { getLenis } from '../hooks/useSmoothScroll'
import { cx } from '../utils/motion'
import SocialIcon from '../components/SocialIcon'

/**
 * Sticky header that condenses on scroll, plus a full-screen editorial menu on
 * small screens. Smooth scrolling is paused while the overlay is open so the
 * page behind cannot move under the panel.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (value) => setScrolled(value > 40))
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const lenis = getLenis()
    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only font-nav focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:text-xs focus:uppercase focus:tracking-wide2 focus:text-cream"
      >
        Skip to content
      </a>

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: LUXE_EASE, delay: 0.5 }}
        className={cx(
          'fixed inset-x-0 top-0 z-[60] font-nav transition-[background-color,box-shadow,padding] duration-700 ease-luxe',
          scrolled
            ? 'glass-panel py-3 shadow-[0_18px_44px_-38px_rgba(90,50,56,0.55)]'
            : 'bg-transparent py-5 lg:py-7',
        )}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Logo font="nav" />

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cx(
                    'group relative px-4 py-2 font-nav text-[0.7rem] font-medium uppercase tracking-wide2 transition-colors duration-500',
                    isActive ? 'text-rose-600' : 'text-ink-soft hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      className={cx(
                        'absolute inset-x-4 bottom-1 h-px origin-left bg-rose-500 transition-transform duration-500 ease-luxe',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contactDetails.phoneHref}
              className="hidden items-center gap-2 font-nav text-[0.7rem] font-medium uppercase tracking-wide2 text-ink-soft transition-colors duration-500 hover:text-rose-600 lg:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {contactDetails.phoneLabel}
            </a>

            <Magnetic className="hidden xl:block">
              <Link to="/contact" className="btn btn-primary btn-sm group font-nav">
                <span className="relative z-10">Enquire</span>
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:border-rose-400 hover:text-rose-600 xl:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.85, ease: LUXE_EASE }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-cream font-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="gradient-rose-veil pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

            <div className="shell relative flex min-h-screen flex-col py-6">
              <div className="flex items-center justify-between">
                <Logo font="nav" />
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:border-rose-400 hover:text-rose-600"
                >
                  <X className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-14 flex-1">
                <ul className="flex flex-col">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: LUXE_EASE, delay: 0.2 + index * 0.06 }}
                      className="border-b border-ink-line/70"
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          cx(
                            'group flex items-baseline gap-5 py-4 font-nav text-[clamp(1.4rem,5.4vw,2.25rem)] font-medium leading-none tracking-[-0.01em] transition-colors duration-500',
                            isActive ? 'text-rose-600' : 'text-ink hover:text-rose-600',
                          )
                        }
                      >
                        <span className="font-nav text-[0.55rem] tracking-luxe text-ink-muted">
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-12 flex flex-col gap-8 border-t border-ink-line/70 pt-8 sm:flex-row sm:items-end sm:justify-between"
              >
                <div className="space-y-2">
                  <p className="eyebrow font-nav">Get in touch</p>
                  <a
                    href={contactDetails.phoneHref}
                    className="block font-nav text-2xl font-light text-ink"
                  >
                    {contactDetails.phoneLabel}
                  </a>
                  <a
                    href={`mailto:${contactDetails.emailGeneral}`}
                    className="block text-sm text-ink-soft"
                  >
                    {contactDetails.emailGeneral}
                  </a>
                  <p className="max-w-xs text-sm text-ink-muted">{contactDetails.addressSingle}</p>
                </div>

                <ul className="flex gap-3">
                  {socialLinks.map((social) => (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        aria-label={`${brand.name} on ${social.label}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:border-rose-400 hover:text-rose-600"
                      >
                        <SocialIcon name={social.icon} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
