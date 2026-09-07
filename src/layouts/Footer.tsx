import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../components/Logo'
import SocialIcon from '../components/SocialIcon'
import TextReveal from '../components/TextReveal'
import { fadeUp, viewportSoft } from '../animations/variants'
import { brand, contactDetails, footerContent, socialLinks } from '../content/content'
import { cx } from '../utils/motion'

/** Large editorial footer: brand statement, newsletter, link columns, contact. */
export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return
    // Front-end only: wire this to your ESP or CRM endpoint.
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div
        className="pointer-events-none absolute -left-[10%] top-0 h-[45rem] w-[45rem] rounded-full bg-rose-500/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 right-0 h-[38rem] w-[38rem] rounded-full bg-nude-400/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="shell relative pb-10 pt-[clamp(4.5rem,8vw,9rem)]">
        {/* Statement + newsletter */}
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              text={footerContent.intro.heading}
              className="display-lg max-w-[16ch] text-balance text-white"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-8 max-w-xl text-pretty text-white/60"
            >
              {footerContent.intro.text}
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="eyebrow text-white/60">{footerContent.newsletter.title}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              {footerContent.newsletter.text}
            </p>

            <form onSubmit={handleSubscribe} className="mt-8" noValidate>
              <label htmlFor="footer-email" className="sr-only">
                {footerContent.newsletter.placeholder}
              </label>
              <div className="flex items-center gap-3 border-b border-white/25 pb-3 transition-colors duration-500 focus-within:border-rose-300">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={footerContent.newsletter.placeholder}
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={footerContent.newsletter.button}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-500 hover:border-rose-300 hover:bg-rose-400 hover:text-ink"
                >
                  {subscribed ? (
                    <Check className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  )}
                </button>
              </div>
              <p
                className="mt-3 text-xs text-white/40"
                role={subscribed ? 'status' : undefined}
                aria-live="polite"
              >
                {subscribed ? footerContent.newsletter.success : footerContent.newsletter.consent}
              </p>
            </form>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">{brand.tagline}</p>
            <ul className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} on ${social.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70@ transition-all duration-500 hover:border-rose-300 hover:text-rose-200"
                  >
                    <SocialIcon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerContent.columns.map((column) => (
            <nav key={column.id} aria-label={column.title} className="lg:col-span-2">
              <p className="eyebrow text-white/45">{column.title}</p>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-2 text-sm text-white/65@ transition-colors duration-500 hover:text-white"
                    >
                      <span className="h-px w-0 bg-rose-300 transition-all duration-500 ease-luxe group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className="not-italic lg:col-span-3">
            <p className="eyebrow text-white/45">Contact</p>
            <ul className="mt-6 space-y-5 text-sm text-white/65">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" strokeWidth={1.4} aria-hidden="true" />
                <a href={contactDetails.phoneHref} className="transition-colors hover:text-white">
                  {contactDetails.phoneLabel}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" strokeWidth={1.4} aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <a
                    href={`mailto:${contactDetails.emailGeneral}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactDetails.emailGeneral}
                  </a>
                  <a
                    href={`mailto:${contactDetails.emailSales}`}
                    className="transition-colors hover:text-white"
                  >
                    {contactDetails.emailSales}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" strokeWidth={1.4} aria-hidden="true" />
                <span>
                  {contactDetails.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </address>
        </div>

        {/* Oversized wordmark */}
        <div className="relative overflow-hidden border-t border-white/10 pt-10 pb-6">
          <motion.p
            initial={{ y: '40%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            className={cx(
              'select-none text-center font-display font-light leading-none tracking-tight',
              'text-[clamp(3.5rem,17vw,17rem)] text-white/[0.07]',
            )}
          >
            {brand.wordmark}
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContent.copyright}</p>
          <p className="uppercase tracking-wide2">{footerContent.credit}</p>
        </div>
      </div>
    </footer>
  )
}
