import type { LucideIcon } from 'lucide-react'

export type IconName = string

export interface CTA {
  label: string
  href: string
}

export interface SectionEyebrow {
  eyebrow: string
  title: string
  subtitle?: string
}

export interface FeatureItem {
  id: string
  icon: IconName
  title: string
  description: string
}

export interface ProductSpec {
  category: string
  size: string
  length: string
  topSheet: string
  absorption: string
}

export interface Product {
  id: string
  slug: string
  name: string
  size: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  imagePrompt: string
  specs: { label: string; value: string }[]
  features: string[]
  benefits: string[]
  usage: string[]
  bestFor: string
}

export interface TimelineStep {
  id: string
  step: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface StatItem {
  id: string
  value: string
  suffix?: string
  label: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  location: string
}

export interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
}

export interface ValueItem {
  id: string
  icon: IconName
  title: string
  description: string
}

export interface NavItem {
  label: string
  path: string
}

export interface SeoMeta {
  title: string
  description: string
  keywords: string
  path: string
}

export interface ImagePrompt {
  id: string
  usage: string
  file: string
  aspect: string
  prompt: string
}

export type { LucideIcon }
