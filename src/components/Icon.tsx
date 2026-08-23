import {
  Activity, BadgeCheck, Briefcase, Clock, Cloud, Compass, Droplets, Factory, Feather,
  Gauge, Globe2, Handshake, HeartHandshake, Layers, LayoutGrid, Leaf, Link2,
  Mail, MapPin, Minimize2, Moon, Package, PackageCheck, Phone, Plane, Recycle, Ruler, ScanLine,
  Ship, ShieldCheck, SlidersHorizontal, Sparkles, Store, Target, Users, Wind,
  type LucideProps,
} from 'lucide-react'
import type { ComponentType } from 'react'

/**
 * Explicit registry mapping the icon names held in content.ts to components.
 *
 * This is deliberately a hand-maintained map rather than `import * as icons`:
 * the barrel import defeats tree-shaking and drags the entire Lucide set
 * (~240 kB) into the bundle. Adding an icon to content.ts means adding it here.
 */
const registry: Record<string, ComponentType<LucideProps>> = {
  Activity, BadgeCheck, Briefcase, Clock, Cloud, Compass, Droplets, Factory, Feather,
  Gauge, Globe2, Handshake, HeartHandshake, Layers, LayoutGrid, Leaf, Link2,
  Mail, MapPin, Minimize2, Moon, Package, PackageCheck, Phone, Plane, Recycle, Ruler, ScanLine,
  Ship, ShieldCheck, SlidersHorizontal, Sparkles, Store, Target, Users, Wind,
}

interface IconProps extends LucideProps {
  /** Any key of the registry above, as stored in content.ts. */
  name: string
}

export default function Icon({ name, ...props }: IconProps) {
  const Component = registry[name] ?? Sparkles
  return <Component aria-hidden="true" {...props} />
}
