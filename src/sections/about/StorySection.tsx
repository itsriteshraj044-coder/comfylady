import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import ParallaxImage from '../../components/ParallaxImage'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { about } from '../../content/content'

const { story } = about

/** About — the founding story, with a milestone ledger beneath the copy. */
export default function StorySection() {
  return (
    <section className="section field-cream" aria-label="Our story">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-7 lg:pr-8">
            <SectionHeading eyebrow={story.eyebrow} title={story.title} />

            <div className="mt-10 space-y-7">
              {story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportSoft}
                  className={
                    index === 0
                      ? 'max-w-prose2 text-pretty font-sans text-[clamp(1.25rem,1.9vw,1.75rem)] font-light italic leading-snug text-ink/85'
                      : 'body-muted max-w-prose2 text-pretty'
                  }
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.dl
              variants={staggerParent(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              className="mt-14 grid gap-8 border-t border-ink-line pt-10 sm:grid-cols-3"
            >
              {story.milestones.map((milestone, index) => (
                <motion.div key={milestone.id} variants={fadeUp} custom={index}>
                  <dt className="font-sans text-[0.58rem] uppercase tracking-luxe text-ink-muted">
                    {milestone.label}
                  </dt>
                  <dd className="mt-3 font-display text-xl font-light leading-tight text-ink">
                    {milestone.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-5">
            <ParallaxImage
              src={story.image}
              alt={story.imageAlt}
              label="Brand story"
              ratio="aspect-[3/4]"
              strength={10}
              className="lg:sticky lg:top-32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
