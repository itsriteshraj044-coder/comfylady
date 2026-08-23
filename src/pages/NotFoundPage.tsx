import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import ButtonLink from '../components/ButtonLink'
import TextReveal from '../components/TextReveal'
import Magnetic from '../components/Magnetic'
import { fadeUp } from '../animations/variants'
import { notFoundPage, seo } from '../content/content'

export default function NotFoundPage() {
  return (
    <>
      <Seo meta={seo.notFound} />

      <section
        className="gradient-blush relative flex min-h-[85svh] items-center overflow-hidden pb-24 pt-[calc(var(--header-h)+5rem)]"
        aria-label="Page not found"
      >
        <div
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[45rem] w-[45rem] rounded-full bg-rose-200/45 blur-[150px]"
          aria-hidden="true"
        />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="shell relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow"
            >
              {notFoundPage.eyebrow}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
              className="mt-6 select-none font-display text-[clamp(6rem,20vw,15rem)] font-light leading-none tracking-tight text-rose-300/70"
            >
              404
            </motion.p>

            <TextReveal
              as="h1"
              text={notFoundPage.title}
              className="display-lg mt-2 text-balance text-ink"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="lead mt-7 max-w-lg"
            >
              {notFoundPage.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              className="mt-11 flex flex-wrap items-center justify-center gap-4"
            >
              <Magnetic>
                <ButtonLink to={notFoundPage.cta.href} variant="primary">
                  {notFoundPage.cta.label}
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink to={notFoundPage.secondaryCta.href} variant="outline">
                  {notFoundPage.secondaryCta.label}
                </ButtonLink>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
