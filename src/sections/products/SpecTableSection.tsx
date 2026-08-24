import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { productSpecTableHeadings, productSpecs, productsPage } from '../../content/content'

const { specTable } = productsPage

/**
 * Products — the technical overview. The table scrolls inside its own container
 * on narrow screens so the page body never scrolls sideways, and the same data
 * is restated as stacked cards below the small-screen breakpoint.
 */
export default function SpecTableSection() {
  return (
    <section className="section field-shell" aria-label="Product specifications">
      <div className="shell">
        <SectionHeading
          eyebrow={specTable.eyebrow}
          title={specTable.title}
          subtitle={specTable.subtitle}
        />

        {/* Table — md and up */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-[clamp(2.5rem,4vw,4rem)] hidden overflow-x-auto rounded-sm border border-ink-line bg-cream md:block"
        >
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">
              Comfylady sanitary pad specifications by category, size, length, top sheet material
              and absorption capacity
            </caption>
            <thead>
              <tr className="border-b border-ink-line bg-blush-100/70">
                {productSpecTableHeadings.map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="px-6 py-5 font-sans text-[0.6rem] uppercase tracking-luxe text-ink-soft lg:px-8"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productSpecs.map((row, index) => (
                <motion.tr
                  key={`${row.category}-${row.topSheet}`}
                  variants={fadeUp}
                  custom={index}
                  className="group border-b border-ink-line/70 transition-colors duration-500 last:border-b-0 hover:bg-blush-100/50"
                >
                  <th
                    scope="row"
                    className="px-6 py-6 font-display text-lg font-light text-ink lg:px-8"
                  >
                    {row.category}
                  </th>
                  <td className="px-6 py-6 lg:px-8">
                    <span className="inline-flex items-center rounded-full border border-ink-line px-3 py-1 font-sans text-[0.6rem] uppercase tracking-wide2 text-ink-soft transition-colors duration-500 group-hover:border-rose-300 group-hover:text-rose-700">
                      {row.size}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-sm text-ink-soft lg:px-8">{row.length}</td>
                  <td className="px-6 py-6 text-sm text-ink-soft lg:px-8">{row.topSheet}</td>
                  <td className="px-6 py-6 font-display text-lg font-light text-rose-700 lg:px-8">
                    {row.absorption}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Stacked cards — below md */}
        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="mt-10 space-y-4 md:hidden"
        >
          {productSpecs.map((row, index) => (
            <motion.li
              key={`${row.category}-${row.topSheet}-card`}
              variants={fadeUp}
              custom={index}
              className="rounded-sm border border-ink-line bg-cream p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-light text-ink">{row.category}</h3>
                <span className="shrink-0 rounded-full border border-ink-line px-3 py-1 font-sans text-[0.58rem] uppercase tracking-wide2 text-ink-soft">
                  {row.size}
                </span>
              </div>
              <dl className="mt-5 space-y-3 border-t border-ink-line pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Length</dt>
                  <dd className="text-ink">{row.length}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Top sheet</dt>
                  <dd className="text-ink">{row.topSheet}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Absorption</dt>
                  <dd className="font-display text-lg font-light text-rose-700">{row.absorption}</dd>
                </div>
              </dl>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
