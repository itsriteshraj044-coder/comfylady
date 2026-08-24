import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../animations/variants'
import { contactDetails, contactPage, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

export default function ContactPage() {
  return (
    <>
      <Seo
        meta={seo.contact}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '/contact' },
        ]}
      />

      {/* Ways to reach us */}
      <section className="section field-cream" aria-label="Get in touch">
        <div className="shell">
          <SectionHeading
            eyebrow={contactPage.getInTouch.eyebrow}
            title={contactPage.getInTouch.title}
            subtitle={contactPage.getInTouch.subtitle}
          />

          <motion.ul
            variants={staggerParent(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewportSoft}
            className="mt-[clamp(3rem,5vw,5rem)] grid gap-7 sm:grid-cols-2 xl:grid-cols-4"
          >
            {contactPage.getInTouch.cards.map((card, index) => (
              <motion.li
                key={card.id}
                variants={fadeUp}
                custom={index}
                className="group flex flex-col rounded-sm border border-ink-line bg-white/60 p-8 transition-all duration-700 ease-luxe hover:-translate-y-2 hover:border-rose-200 hover:shadow-[0_36px_80px_-58px_rgba(120,66,74,0.5)] lg:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blush-200 text-rose-700 transition-colors duration-700 ease-luxe group-hover:bg-rose-500 group-hover:text-white">
                  <Icon name={card.icon} className="h-5 w-5" strokeWidth={1.2} />
                </span>

                <h3 className="mt-7 font-display text-2xl font-light leading-tight text-ink">
                  {card.title}
                </h3>

                <div className="mt-4 space-y-1.5">
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-ink-soft">
                      {line}
                    </p>
                  ))}
                </div>

                <p className="mt-5 flex-1 text-xs leading-relaxed text-ink-muted">{card.note}</p>

                {card.actionHref && (
                  <a
                    href={card.actionHref}
                    className="link-underline mt-7 self-start"
                    {...(card.actionHref.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {card.actionLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Form */}
      <section className="section field-shell" aria-label="Send us a message">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow={contactPage.form.eyebrow}
                title={contactPage.form.title}
                subtitle={contactPage.form.subtitle}
                titleClassName="display-md"
              />

              <motion.aside
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportSoft}
                className="mt-12 rounded-sm border border-ink-line bg-cream p-8"
              >
                <p className="eyebrow">{contactPage.customNote.eyebrow}</p>
                <h3 className="mt-4 font-display text-xl font-light leading-snug text-ink">
                  {contactPage.customNote.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {contactPage.customNote.text}
                </p>
              </motion.aside>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="rounded-sm border border-ink-line bg-cream p-8 lg:col-span-8 lg:p-14"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative field-cream pb-[clamp(4rem,7vw,8rem)]" aria-label="Find us">
        <div className="shell">
          <div className="flex flex-col gap-8 pb-10 pt-[clamp(4rem,7vw,8rem)] lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={contactPage.map.eyebrow}
              title={contactPage.map.title}
              subtitle={contactPage.map.subtitle}
              titleClassName="display-md"
            />
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              href={contactPage.map.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group shrink-0"
            >
              <MapPin className="relative z-10 h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              <span className="relative z-10">{contactPage.map.cta.label}</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="shell"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-ink-line bg-shell md:aspect-[21/9]">
            <iframe
              title={`Map showing ${contactDetails.addressSingle}`}
              src={contactDetails.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[35%] transition-all duration-700 ease-luxe hover:grayscale-0"
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
