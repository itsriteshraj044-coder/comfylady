import { motion } from 'framer-motion'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'
import { fadeUp, staggerParent, viewportSoft } from '../../animations/variants'
import { cx } from '../../utils/motion'

interface DisciplineItem {
  id: string
  icon: string
  title: string
  description: string
}

interface DisciplineGridProps {
  eyebrow: string
  title: string
  subtitle?: string
  items: DisciplineItem[]
  tone?: 'cream' | 'shell'
  columns?: 2 | 4
}

/**
 * Shared four-up grid used by the Safety and Testing sections — same rhythm,
 * different content, so the page reads as one system.
 */
export default function DisciplineGrid({
  eyebrow,
  title,
  subtitle,
  items,
  tone = 'cream',
  columns = 4,
}: DisciplineGridProps) {
  return (
    <section
      className={cx('section', tone === 'cream' ? 'field-cream' : 'field-shell')}
      aria-label={title}
    >
      <div className="shell">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className={cx(
            'mt-[clamp(3rem,5vw,5rem)] grid gap-7',
            columns === 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-2',
          )}
        >
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              custom={index}
              className={cx(
                'group relative flex flex-col rounded-sm border border-ink-line p-8 transition-all duration-700 ease-luxe hover:-translate-y-2 hover:border-rose-200 hover:shadow-[0_36px_80px_-58px_rgba(120,66,74,0.5)] lg:p-10',
                tone === 'cream' ? 'bg-white/60' : 'bg-cream',
              )}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blush-200 text-rose-700 transition-colors duration-700 ease-luxe group-hover:bg-rose-500 group-hover:text-white">
                <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.2} />
              </span>
              <h3 className="mt-7 font-display text-xl font-light leading-tight text-ink lg:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
