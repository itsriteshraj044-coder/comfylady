import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { fadeUp, viewportSoft } from '../animations/variants'
import { cx } from '../utils/motion'
import type { StatItem } from '../types'

interface StatCounterProps {
  stat: StatItem
  index?: number
  tone?: 'dark' | 'light'
}

/** Animated statistic — counts up the first time it enters the viewport. */
export default function StatCounter({ stat, index = 0, tone = 'dark' }: StatCounterProps) {
  const numeric = Number.parseFloat(stat.value)
  const { ref, value } = useCountUp(Number.isFinite(numeric) ? numeric : 0)

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={viewportSoft}
      className="flex flex-col"
    >
      <p
        className={cx(
          'font-display font-light leading-none tracking-tight',
          'text-[clamp(2.75rem,5vw,4.5rem)]',
          tone === 'light' ? 'text-white' : 'text-ink',
        )}
      >
        <span ref={ref}>{Number.isFinite(numeric) ? value : stat.value}</span>
        {stat.suffix && (
          <span className={tone === 'light' ? 'text-rose-300' : 'text-rose-500'}>{stat.suffix}</span>
        )}
      </p>
      <span
        className={cx('mt-5 block h-px w-12', tone === 'light' ? 'bg-white/25' : 'bg-rose-300')}
        aria-hidden="true"
      />
      <p
        className={cx(
          'mt-5 max-w-[15rem] text-sm leading-relaxed',
          tone === 'light' ? 'text-white/60' : 'text-ink-soft',
        )}
      >
        {stat.label}
      </p>
    </motion.div>
  )
}
