import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { whyPage } from '../../content/content'

const { comparison } = whyPage

/**
 * Why Comfylady — an honest side-by-side. Rendered as a real table on md and up
 * (scrollable in its own container) and as stacked comparison cards below.
 */
export default function ComparisonSection() {
  return (
    <section className="section bg-shell/60" aria-label="What changes when comfort is engineered">
      <div className="shell">
        <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} align="center" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(2.5rem,4vw,4rem)] hidden overflow-x-auto rounded-sm border border-ink-line bg-cream md:block"
        >
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <caption className="sr-only">
              Comparison of an ordinary sanitary pad against a Comfylady pad
            </caption>
            <thead>
              <tr className="border-b border-ink-line">
                {comparison.headings.map((heading, index) => (
                  <th
                    key={heading || index}
                    scope="col"
                    className={
                      index === 2
                        ? 'bg-blush-100 px-8 py-6 font-display text-xl font-light text-rose-700'
                        : 'px-8 py-6 font-sans text-[0.6rem] uppercase tracking-luxe text-ink-muted'
                    }
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.id} className="border-b border-ink-line/70 last:border-b-0">
                  <th
                    scope="row"
                    className="px-8 py-6 font-sans text-[0.65rem] uppercase tracking-wide2 text-ink-soft"
                  >
                    {row.criterion}
                  </th>
                  <td className="px-8 py-6 text-sm text-ink-muted">
                    <span className="flex items-center gap-3">
                      <Minus className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                      {row.ordinary}
                    </span>
                  </td>
                  <td className="bg-blush-100/50 px-8 py-6 text-sm text-ink">
                    <span className="flex items-center gap-3">
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-rose-500"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      {row.comfylady}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.ul
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-10 space-y-4 md:hidden"
        >
          {comparison.rows.map((row, index) => (
            <motion.li
              key={`${row.id}-card`}
              variants={fadeUp}
              custom={index}
              className="rounded-sm border border-ink-line bg-cream p-6"
            >
              <p className="font-sans text-[0.58rem] uppercase tracking-luxe text-ink-muted">
                {row.criterion}
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <p className="flex items-start gap-3 text-ink-muted">
                  <Minus className="mt-1 h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span>
                    <span className="sr-only">{comparison.headings[1]}: </span>
                    {row.ordinary}
                  </span>
                </p>
                <p className="flex items-start gap-3 rounded-sm bg-blush-100/70 p-3 text-ink">
                  <Check
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-rose-500"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="sr-only">{comparison.headings[2]}: </span>
                    {row.comfylady}
                  </span>
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
