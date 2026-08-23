import { motion } from 'framer-motion'
import type { ElementType } from 'react'

const componentCache = new WeakMap<object, ElementType>()

/**
 * Resolves a tag name ('h2', 'p', …) to its motion component.
 *
 * Framer's `motion` proxy memoises each tag, so `motion.h2` returns the *same*
 * component every time. Calling `motion(tag)` during render does not — it mints
 * a fresh component on each pass, which remounts the subtree and throws away
 * any animation state. Always go through this helper; custom components are
 * cached here for the same reason.
 */
export function motionTag(tag: ElementType): ElementType {
  if (typeof tag === 'string') {
    const proxy = motion as unknown as Record<string, ElementType>
    return proxy[tag] ?? motion.div
  }

  const key = tag as unknown as object
  const cached = componentCache.get(key)
  if (cached) return cached

  const created = motion.create(tag as never) as ElementType
  componentCache.set(key, created)
  return created
}
