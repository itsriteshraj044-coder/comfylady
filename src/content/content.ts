/* =============================================================================
   COMFYLADY — CENTRALISED CONTENT
   -----------------------------------------------------------------------------
   Every headline, paragraph, label, button and list item on the website lives in
   this single file. Components never hardcode copy — edit here and the whole
   site updates. Images are referenced by path from /public/images (placeholders
   ship with the build; AI generation prompts live in `imagePrompts` below).
   ========================================================================== */

import type {
  FAQItem, FeatureItem, ImagePrompt, NavItem, Product, ProductSpec, SeoMeta,
  StatItem, Testimonial, TimelineStep, ValueItem,
} from '../types'

/* -------------------------------------------------------------------------- */
/*  BRAND                                                                      */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: 'Comfylady',
  legalName: 'COMFYLADY',
  wordmark: 'Comfylady',
  tagline: "Enhancing Women's Health & Confidence",
  industry: 'Feminine Hygiene & Personal Care',
  founder: 'Priyankka Sing Gautam',
  founderTitle: 'Founder & Visionary',
  foundedOn: '3rd June 2026',
  domain: 'https://www.comfylady.com',
  ogImage: '/images/og-comfylady.jpg',
  description:
    'Comfylady is a premium manufacturer, exporter and supplier of skin-friendly sanitary pads engineered for superior leak protection, breathability and all-day comfort.',
}

export const contactDetails = {
  phoneLabel: '+91 85915 00675',
  phoneHref: 'tel:+918591500675',
  whatsappHref: 'https://wa.me/918591500675',
  emailGeneral: 'info@comfylady.com',
  emailSales: 'sales@comfylady.com',
  addressLines: ['Opp. Dena Bank, Taloja, Panvel,', 'Maharashtra, India — 410208'],
  addressSingle: 'Opp. Dena Bank, Taloja, Panvel, Maharashtra 410208, India',
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM (IST)',
  hoursClosed: 'Sunday: Closed',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Taloja,+Panvel,+Maharashtra+410208&output=embed',
  mapLink: 'https://maps.google.com/?q=Taloja,+Panvel,+Maharashtra+410208',
}

export const socialLinks = [
  { id: 'instagram', label: 'Instagram', icon: 'Instagram', href: '#' },
  { id: 'facebook', label: 'Facebook', icon: 'Facebook', href: '#' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', href: '#' },
  { id: 'youtube', label: 'YouTube', icon: 'Youtube', href: '#' },
]

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Why Comfylady', path: '/why-comfylady' },
  { label: 'Quality', path: '/quality' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

export const footerContent = {
  intro: {
    heading: 'Comfort that travels with her, everywhere.',
    text: 'Comfylady manufactures, exports and supplies premium feminine hygiene products to distributors, retailers, institutions and private-label brands across the world.',
  },
  columns: [
    {
      id: 'explore',
      title: 'Explore',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Products', path: '/products' },
        { label: 'Why Comfylady', path: '/why-comfylady' },
      ],
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        { label: 'Quality & Sustainability', path: '/quality' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms-and-conditions' },
      ],
    },
  ],
  newsletter: {
    title: 'Stay in touch',
    text: 'Product updates, wellness notes and export announcements — a few times a year, never more.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: 'Thank you — you are on the list.',
    consent: 'By subscribing you agree to our Privacy Policy.',
  },
  copyright: '© 2026 Comfy Lady. All Rights Reserved.',
  credit: 'Feminine Hygiene & Personal Care',
}

export const marquee = {
  words: [
    'Skin Friendly',
    'Leak Protection',
    'Breathable Comfort',
    'Cottony Soft',
    'OEM & Private Label',
    'Global Export',
  ],
}

/* -------------------------------------------------------------------------- */
/*  HOME PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export const home = {
  /* SECTION 1 — Luxury Hero (centred kinetic stage) */
  hero: {
    eyebrow: 'Premium Feminine Care',
    /* Three designed lines. An image capsule is set inline after line one, and
       the line at `emphasisLineIndex` is rendered in italic rose with a
       self-drawing underline stroke. */
    titleLines: ['Empowering', 'Women with Comfort,', 'Confidence & Care'],
    emphasisLineIndex: 2,
    subtitle:
      'Premium, skin-friendly sanitary pads designed for superior leak protection, breathability and all-day comfort. Proudly manufactured and exported worldwide.',
    /* Phones lock the hero to exactly one screen, so they get a trimmed line
       rather than a truncated one. Shown below the `sm` breakpoint only. */
    subtitleShort:
      'Skin-friendly sanitary pads for superior leak protection and all-day comfort.',
    primaryCta: { label: 'Explore Our Products', href: '/products' },
    secondaryCta: { label: 'Partner With Us (B2B)', href: '/contact' },
    /* Full-bleed ambient backdrop, held far back behind a cream scrim. */
    image: '/images/hero-comfylady.jpg',
    imageAlt: 'A confident woman in soft natural light, embodying everyday comfort and calm',
    /* The inline capsule inside the headline — the focal image of the hero. */
    capsuleImage: '/images/hero-capsule.jpg',
    capsuleAlt: 'Soft blush still life of Comfylady pads on linen, cropped wide',
    badges: [
      { id: 'badge-soft', icon: 'Feather', title: 'Cottony soft', text: 'Skin-friendly top sheets' },
      { id: 'badge-global', icon: 'Globe2', title: 'Global OEM', text: 'Private-label partner' },
    ],
    stats: [
      { id: 'hs1', value: '130 ml+', label: 'Peak absorption' },
      { id: 'hs2', value: '6', label: 'Engineered variants' },
      { id: 'hs3', value: 'L–XXL', label: 'Size architectures' },
    ],
    scrollHint: 'Scroll',
  },

  /* SECTION 2 — Brand Introduction */
  intro: {
    eyebrow: 'About Comfy Lady',
    title: 'Elevating everyday menstrual health',
    lead:
      'Founded on 3rd June 2026 by Priyankka Sing Gautam, Comfy Lady is on a mission to make high-quality menstrual hygiene products accessible, affordable and safe for women everywhere.',
    body: [
      'We are a premier manufacturer, exporter and supplier of premium feminine hygiene products. We believe every woman deserves reliable menstrual care that supports her everyday life without compromising on comfort.',
      'Whether you are a consumer seeking all-day leak protection or a global brand looking for a trusted OEM manufacturing partner, Comfy Lady is dedicated to building long-term partnerships based on trust, excellence and sustainable business practices.',
    ],
    signature: 'Priyankka Sing Gautam',
    signatureRole: 'Founder & Visionary',
    cta: { label: 'Read our story', href: '/about' },
    imagePrimary: '/images/brand-story-primary.jpg',
    imagePrimaryAlt: 'Soft editorial still life of Comfylady pads arranged on linen',
    imageSecondary: '/images/brand-story-secondary.jpg',
    imageSecondaryAlt: 'Close detail of a cottony soft top sheet',
    stat: { value: '100%', label: 'Skin-friendly materials' },
  },

  /* SECTION 3 — Product Showcase */
  products: {
    eyebrow: 'Our Products',
    title: 'Engineered for a zero-leak experience',
    subtitle:
      'Our sanitary pads are engineered for superior absorbency and a zero-leak experience. We offer a versatile range to suit different flows, body types and preferences.',
    cta: { label: 'View the full range', href: '/products' },
  },

  /* SECTION 4 — Why Women Choose Comfylady */
  why: {
    eyebrow: 'Why Choose Us',
    title: 'Why women choose Comfylady',
    subtitle: 'Quality, innovation and customer satisfaction are at the core of our operations.',
    cta: { label: 'Discover the difference', href: '/why-comfylady' },
  },

  /* SECTION 5 — Comfort & Protection Journey */
  journey: {
    eyebrow: 'The Comfylady Journey',
    title: 'Comfort, layer by layer',
    subtitle:
      'Five deliberate stages take a Comfylady pad from raw material selection to the moment it supports her day.',
  },

  /* SECTION 6 — Quality Standards */
  quality: {
    eyebrow: 'Quality Standards',
    title: 'Made under uncompromising standards',
    subtitle:
      'Manufactured under strict hygiene protocols with material traceability, batch-level checks and international compliance in mind.',
    cta: { label: 'Explore our standards', href: '/quality' },
    image: '/images/quality-manufacturing.jpg',
    imageAlt: 'Bright, clean manufacturing environment for feminine hygiene products',
  },

  /* SECTION 7 — Testimonials */
  testimonials: {
    eyebrow: 'Voices',
    title: 'Trusted by women and businesses alike',
    subtitle: 'From everyday wearers to global distribution partners.',
  },

  /* SECTION 8 — FAQ */
  faq: {
    eyebrow: 'Questions',
    title: 'Everything you wanted to ask',
    subtitle: 'Clear answers on comfort, materials, manufacturing and partnerships.',
    cta: { label: 'See all questions', href: '/faq' },
  },

  /* SECTION 9 — Contact CTA */
  cta: {
    eyebrow: 'Partner With Comfylady',
    title: 'Let us build a healthier future, together',
    subtitle:
      'Whether you are an established brand looking for a flawless OEM manufacturer, an organisation driving social change, or a distributor ready to scale your portfolio — Comfylady is your ideal partner.',
    primaryCta: { label: 'Request a Bulk Quote or OEM Consultation', href: '/contact' },
    secondaryCta: { label: 'Call +91 85915 00675', href: 'tel:+918591500675' },
  },
}

/* -------------------------------------------------------------------------- */
/*  SHARED DATA SETS                                                           */
/* -------------------------------------------------------------------------- */

export const whyChooseUs: FeatureItem[] = [
  {
    id: 'materials',
    icon: 'Feather',
    title: 'Premium Quality Materials',
    description:
      'Carefully selected, skin-friendly materials chosen for breathability, softness and comfort against sensitive skin.',
  },
  {
    id: 'control',
    icon: 'ShieldCheck',
    title: 'Stringent Quality Control',
    description:
      'Manufactured under strict hygiene standards that ensure safety, reliability and international compliance at every batch.',
  },
  {
    id: 'portfolio',
    icon: 'LayoutGrid',
    title: 'Comprehensive Portfolio',
    description:
      'A wide range of pads including regular, XL, overnight, ultra-thin, dry-net and cottony soft variants.',
  },
  {
    id: 'global',
    icon: 'Globe2',
    title: 'Global Export & OEM Services',
    description:
      'We cater to distributors, retailers, healthcare organisations, NGOs, government institutions and private-label brands worldwide.',
  },
  {
    id: 'absorbency',
    icon: 'Droplets',
    title: 'Absorbency Without Bulk',
    description:
      'Ultra-thin cores hold from 40 ml to well beyond 130 ml, so protection never comes at the cost of discretion.',
  },
  {
    id: 'accessible',
    icon: 'HeartHandshake',
    title: 'Accessible By Design',
    description:
      'Premium care at a fair price, because dignity during menstruation should never be a question of budget.',
  },
]

export const productSpecs: ProductSpec[] = [
  { category: 'Straight Regular', size: 'L', length: '240 mm', topSheet: 'Non-Woven', absorption: '> 40 ml' },
  { category: 'Straight Regular', size: 'L', length: '240 mm', topSheet: 'Drynet', absorption: '> 50 ml' },
  { category: 'Straight XL', size: 'XL', length: '280 mm', topSheet: 'Non-Woven', absorption: '> 70 ml' },
  { category: 'Straight XL', size: 'XL', length: '280 mm', topSheet: 'Drynet', absorption: '> 80 ml' },
  { category: 'Ultra Thin XL', size: 'XL', length: '280 mm', topSheet: 'Ultra Thin', absorption: '> 100 ml' },
  { category: 'Ultra Thin XXL', size: 'XXL', length: '320 mm', topSheet: 'Ultra Thin', absorption: '> 130 ml' },
]

export const productSpecTableHeadings = [
  'Category', 'Size', 'Length', 'Top Sheet Material', 'Absorption Capacity',
]

export const products: Product[] = [
  {
    id: 'straight-regular-nonwoven',
    slug: 'straight-regular-non-woven',
    name: 'Straight Regular · Non-Woven',
    size: 'L · 240 mm',
    tagline: 'The everyday essential',
    description:
      'A soft non-woven top sheet over a balanced core, shaped for light to moderate days when you want protection you simply forget about.',
    image: '/images/product-straight-regular-nonwoven.jpg',
    imageAlt: 'Comfylady Straight Regular non-woven sanitary pad on a soft blush surface',
    imagePrompt: 'See imagePrompts › product-straight-regular-nonwoven',
    specs: [
      { label: 'Category', value: 'Straight Regular' },
      { label: 'Size', value: 'L' },
      { label: 'Length', value: '240 mm' },
      { label: 'Top Sheet', value: 'Non-Woven' },
      { label: 'Absorption', value: 'Greater than 40 ml' },
    ],
    features: [
      'Cottony soft non-woven top sheet',
      'Balanced absorbent core for regular flow',
      'Breathable back sheet construction',
      'Secure adhesive placement with wings',
    ],
    benefits: [
      'Gentle, non-irritating contact with sensitive skin',
      'Discreet under everyday clothing',
      'Reliable through a full working day',
      'A comfortable first step into premium care',
    ],
    usage: [
      'Best suited to light and moderate flow days.',
      'Change every 4 to 6 hours, or sooner as needed.',
      'Store in a cool, dry place away from direct sunlight.',
    ],
    bestFor: 'Daytime · Regular flow',
  },
  {
    id: 'straight-regular-drynet',
    slug: 'straight-regular-drynet',
    name: 'Straight Regular · Drynet',
    size: 'L · 240 mm',
    tagline: 'Faster dry, longer calm',
    description:
      'The same trusted regular silhouette with a drynet top sheet that pulls moisture away quickly and keeps the surface feeling dry.',
    image: '/images/product-straight-regular-drynet.jpg',
    imageAlt: 'Comfylady Straight Regular drynet sanitary pad detail',
    imagePrompt: 'See imagePrompts › product-straight-regular-drynet',
    specs: [
      { label: 'Category', value: 'Straight Regular' },
      { label: 'Size', value: 'L' },
      { label: 'Length', value: '240 mm' },
      { label: 'Top Sheet', value: 'Drynet' },
      { label: 'Absorption', value: 'Greater than 50 ml' },
    ],
    features: [
      'Perforated drynet surface for rapid transfer',
      'Higher core capacity than the non-woven variant',
      'Even distribution across the absorbent layer',
      'Leak guard channelling along the edges',
    ],
    benefits: [
      'A drier surface feel across longer wear',
      'Reduced stickiness in humid conditions',
      'Confidence on unpredictable mid-cycle days',
      'Less frequent changes when you are on the move',
    ],
    usage: [
      'Suited to moderate flow and warm, humid climates.',
      'Change every 4 to 6 hours for optimal freshness.',
      'Dispose responsibly in the wrapper provided.',
    ],
    bestFor: 'Humid days · Moderate flow',
  },
  {
    id: 'straight-xl-nonwoven',
    slug: 'straight-xl-non-woven',
    name: 'Straight XL · Non-Woven',
    size: 'XL · 280 mm',
    tagline: 'Extended coverage, softly done',
    description:
      'An extra-long silhouette with a soft non-woven surface, built for heavier days and longer stretches away from home.',
    image: '/images/product-straight-xl-nonwoven.jpg',
    imageAlt: 'Comfylady Straight XL non-woven sanitary pad',
    imagePrompt: 'See imagePrompts › product-straight-xl-nonwoven',
    specs: [
      { label: 'Category', value: 'Straight XL' },
      { label: 'Size', value: 'XL' },
      { label: 'Length', value: '280 mm' },
      { label: 'Top Sheet', value: 'Non-Woven' },
      { label: 'Absorption', value: 'Greater than 70 ml' },
    ],
    features: [
      '280 mm length for extended rear coverage',
      'High-capacity absorbent core',
      'Cottony soft non-woven top sheet',
      'Reinforced wings for positional security',
    ],
    benefits: [
      'Assurance through heavy flow hours',
      'Reduced worry during travel and long shifts',
      'Softness maintained across a bigger surface',
      'Fewer changes on demanding days',
    ],
    usage: [
      'Recommended for heavy flow days and long commutes.',
      'Change every 4 to 6 hours depending on flow.',
      'Not intended for overnight use beyond 8 hours.',
    ],
    bestFor: 'Heavy flow · Long days',
  },
  {
    id: 'straight-xl-drynet',
    slug: 'straight-xl-drynet',
    name: 'Straight XL · Drynet',
    size: 'XL · 280 mm',
    tagline: 'Heavy-day dryness',
    description:
      'Drynet technology across an extra-long body — our answer to the heaviest daytime hours when staying dry matters most.',
    image: '/images/product-straight-xl-drynet.jpg',
    imageAlt: 'Comfylady Straight XL drynet sanitary pad',
    imagePrompt: 'See imagePrompts › product-straight-xl-drynet',
    specs: [
      { label: 'Category', value: 'Straight XL' },
      { label: 'Size', value: 'XL' },
      { label: 'Length', value: '280 mm' },
      { label: 'Top Sheet', value: 'Drynet' },
      { label: 'Absorption', value: 'Greater than 80 ml' },
    ],
    features: [
      'Drynet top sheet with rapid intake',
      'Extended 280 mm protection zone',
      'Deep core lock to resist rewet',
      'Breathable back sheet to limit humidity',
    ],
    benefits: [
      'Dry-touch comfort at peak flow',
      'Lower risk of surface irritation',
      'Dependable through back-to-back commitments',
      'Freedom to wear lighter fabrics with confidence',
    ],
    usage: [
      'Ideal for the heaviest one or two days of the cycle.',
      'Change every 4 to 6 hours, or when saturation is felt.',
      'Store sealed until use to preserve hygiene.',
    ],
    bestFor: 'Peak flow · Active days',
  },
  {
    id: 'ultra-thin-xl',
    slug: 'ultra-thin-xl',
    name: 'Ultra Thin XL',
    size: 'XL · 280 mm',
    tagline: 'Barely there, entirely there for you',
    description:
      'A compressed ultra-thin core that holds over 100 ml while remaining almost invisible under clothing. Protection without presence.',
    image: '/images/product-ultra-thin-xl.jpg',
    imageAlt: 'Comfylady Ultra Thin XL sanitary pad shown edge-on to reveal its slim profile',
    imagePrompt: 'See imagePrompts › product-ultra-thin-xl',
    specs: [
      { label: 'Category', value: 'Ultra Thin XL' },
      { label: 'Size', value: 'XL' },
      { label: 'Length', value: '280 mm' },
      { label: 'Top Sheet', value: 'Ultra Thin' },
      { label: 'Absorption', value: 'Greater than 100 ml' },
    ],
    features: [
      'Compressed high-absorbency core',
      'Slim profile with no loss of capacity',
      'Flexible body-contouring construction',
      'Smooth top sheet for a soft finish',
    ],
    benefits: [
      'Invisible under fitted and lightweight clothing',
      'Freedom of movement for sport and travel',
      'Heavy-flow confidence in a discreet form',
      'Comfort that does not announce itself',
    ],
    usage: [
      'Excellent for workwear, sport, travel and eventwear.',
      'Change every 4 to 6 hours to maintain freshness.',
      'Keep the wrapper for discreet disposal.',
    ],
    bestFor: 'Discretion · Heavy flow',
  },
  {
    id: 'ultra-thin-xxl',
    slug: 'ultra-thin-xxl',
    name: 'Ultra Thin XXL',
    size: 'XXL · 320 mm',
    tagline: 'Our overnight benchmark',
    description:
      'The longest and highest-capacity pad in the range, holding more than 130 ml. Designed for overnight rest and the heaviest days.',
    image: '/images/product-ultra-thin-xxl.jpg',
    imageAlt: 'Comfylady Ultra Thin XXL overnight sanitary pad',
    imagePrompt: 'See imagePrompts › product-ultra-thin-xxl',
    specs: [
      { label: 'Category', value: 'Ultra Thin XXL' },
      { label: 'Size', value: 'XXL' },
      { label: 'Length', value: '320 mm' },
      { label: 'Top Sheet', value: 'Ultra Thin' },
      { label: 'Absorption', value: 'Greater than 130 ml' },
    ],
    features: [
      '320 mm of front-to-back coverage',
      'Highest absorption capacity in the range',
      'Ultra-thin profile despite the capacity',
      'Broad rear zone shaped for lying down',
    ],
    benefits: [
      'Uninterrupted sleep through heavy nights',
      'Coverage that moves with you as you turn',
      'Peace of mind on the most demanding days',
      'No bulk, even at maximum protection',
    ],
    usage: [
      'Designed for overnight wear and very heavy flow.',
      'Change on waking, or within 8 hours of wear.',
      'Store in a cool, dry place away from moisture.',
    ],
    bestFor: 'Overnight · Very heavy flow',
  },
]

export const journeySteps: TimelineStep[] = [
  {
    id: 'sourcing',
    step: '01',
    title: 'Material Selection',
    description:
      'It begins with what touches her skin. Top sheets, cores and back sheets are sourced against skin-friendliness, breathability and consistency before a single roll enters the line.',
  },
  {
    id: 'engineering',
    step: '02',
    title: 'Layer Engineering',
    description:
      'Each variant is engineered layer by layer — intake, distribution, lock and barrier — so absorption moves downward and outward rather than back toward the surface.',
  },
  {
    id: 'production',
    step: '03',
    title: 'Hygienic Production',
    description:
      'Converting runs under strict hygiene protocols with controlled handling, so the pad that leaves the line is as clean as the materials that entered it.',
  },
  {
    id: 'testing',
    step: '04',
    title: 'Verification',
    description:
      'Batches are checked against absorption, adhesion, dimensional and integrity criteria. Capacities from 40 ml to over 130 ml are confirmed, not assumed.',
  },
  {
    id: 'delivery',
    step: '05',
    title: 'Packing & Global Despatch',
    description:
      'Sealed, cartoned and prepared for export or private-label distribution — reaching retailers, institutions and partner brands across markets.',
  },
]

export const qualityStats: StatItem[] = [
  { id: 'absorption', value: '130', suffix: 'ml+', label: 'Peak absorption capacity' },
  { id: 'variants', value: '6', suffix: '', label: 'Engineered product variants' },
  { id: 'sizes', value: '3', suffix: '', label: 'Size architectures: L, XL, XXL' },
  { id: 'skin', value: '100', suffix: '%', label: 'Skin-friendly material selection' },
]

export const trustBadges = [
  { id: 'hygiene', icon: 'ShieldCheck', label: 'Strict Hygiene Protocols' },
  { id: 'compliance', icon: 'BadgeCheck', label: 'International Compliance Focus' },
  { id: 'skin', icon: 'Sparkles', label: 'Skin-Friendly Materials' },
  { id: 'oem', icon: 'Factory', label: 'OEM & Private Label Ready' },
  { id: 'export', icon: 'Ship', label: 'Export Documentation Support' },
  { id: 'traceable', icon: 'ScanLine', label: 'Batch-Level Traceability' },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The Ultra Thin XXL changed how I sleep during my heaviest nights. I stopped waking up to check. That is the whole review.',
    name: 'Ananya R.',
    role: 'Everyday wearer',
    location: 'Mumbai, India',
  },
  {
    id: 't2',
    quote:
      'We evaluated several manufacturers for our private label. Comfylady was the only one that matched our specification sheet without asking us to compromise on the top sheet.',
    name: 'Daniel M.',
    role: 'Brand Manager',
    location: 'Nairobi, Kenya',
  },
  {
    id: 't3',
    quote:
      'Consistency batch after batch is what keeps us reordering. Our retail partners have not raised a single quality complaint.',
    name: 'Farah S.',
    role: 'Regional Distributor',
    location: 'Dubai, UAE',
  },
  {
    id: 't4',
    quote:
      'For our community distribution programme, affordability mattered as much as safety. Comfylady let us have both, at scale.',
    name: 'Meenakshi P.',
    role: 'Programme Lead, NGO',
    location: 'Pune, India',
  },
  {
    id: 't5',
    quote:
      'The drynet variant is the one I recommend to friends in humid cities. It genuinely stays dry on the surface.',
    name: 'Sneha K.',
    role: 'Everyday wearer',
    location: 'Chennai, India',
  },
  {
    id: 't6',
    quote:
      'Their team handled customisation on length and absorption without friction. Communication was clear from quote to shipment.',
    name: 'Lukas B.',
    role: 'Procurement Director',
    location: 'Hamburg, Germany',
  },
]

export const faqCategories = ['All', 'Product', 'Comfort & Care', 'Quality & Safety', 'Business & Export']

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    category: 'Product',
    question: 'What sizes and variants does Comfylady offer?',
    answer:
      'Our range spans Straight Regular (L, 240 mm), Straight XL (XL, 280 mm) and Ultra Thin (XL 280 mm and XXL 320 mm). Top sheets are available in Non-Woven, Drynet and Ultra Thin constructions, with absorption capacities from over 40 ml to over 130 ml.',
  },
  {
    id: 'f2',
    category: 'Product',
    question: 'Which pad should I choose for overnight use?',
    answer:
      'The Ultra Thin XXL at 320 mm with absorption above 130 ml is our overnight benchmark. Its extended rear coverage is shaped for lying down, and the ultra-thin profile means the extra capacity does not translate into extra bulk.',
  },
  {
    id: 'f3',
    category: 'Product',
    question: 'What is the difference between Non-Woven and Drynet top sheets?',
    answer:
      'A non-woven top sheet gives a cottony soft surface feel and is ideal if you prefer a fabric-like touch. A drynet top sheet is perforated so fluid transfers into the core faster, keeping the surface drier — a strong choice for heavy flow or humid climates.',
  },
  {
    id: 'f4',
    category: 'Comfort & Care',
    question: 'How often should a sanitary pad be changed?',
    answer:
      'As a general guide, change your pad every four to six hours, and sooner on heavy flow days. Regular changing supports hygiene and skin comfort regardless of the absorption capacity of the pad you are wearing.',
  },
  {
    id: 'f5',
    category: 'Comfort & Care',
    question: 'Are Comfylady pads suitable for sensitive skin?',
    answer:
      'We select skin-friendly, non-irritating materials specifically with sensitive skin in mind, and prioritise breathability throughout the construction. If you have a diagnosed skin condition or a known material sensitivity, we recommend consulting your healthcare professional.',
  },
  {
    id: 'f6',
    category: 'Comfort & Care',
    question: 'How should pads be stored?',
    answer:
      'Store in a cool, dry place away from direct sunlight and moisture, keeping the individual wrappers sealed until use. This protects both the adhesive performance and the hygiene of the pad.',
  },
  {
    id: 'f7',
    category: 'Quality & Safety',
    question: 'How is quality controlled during manufacturing?',
    answer:
      'Production runs under stringent hygiene protocols, and batches are verified against absorption, adhesion, dimensional and integrity criteria. Material selection is governed before production begins, so quality is designed in rather than inspected in afterwards.',
  },
  {
    id: 'f8',
    category: 'Quality & Safety',
    question: 'Do your products meet international standards?',
    answer:
      'Our manufacturing protocols are built around international compliance expectations for feminine hygiene products. For a specific market, our team can discuss the documentation and testing evidence required for your regulatory pathway.',
  },
  {
    id: 'f9',
    category: 'Business & Export',
    question: 'Do you offer OEM and private label manufacturing?',
    answer:
      'Yes. We provide end-to-end private label production, including customised product specifications and packaging, so you can launch your own feminine hygiene brand on a proven manufacturing base.',
  },
  {
    id: 'f10',
    category: 'Business & Export',
    question: 'Can product specifications be customised?',
    answer:
      'They can. Length, top sheet material and absorption capacity can be adjusted to suit your target market. Please state your requirements — for example L, XL or XXL, and Drynet or Non-Woven sheets — when you enquire so our team can quote accurately.',
  },
  {
    id: 'f11',
    category: 'Business & Export',
    question: 'Who do you supply?',
    answer:
      'We supply global distributors and wholesalers, retail chains and e-commerce brands, NGOs, healthcare organisations and government institutions, and private-label brands seeking end-to-end OEM services.',
  },
  {
    id: 'f12',
    category: 'Business & Export',
    question: 'How quickly will my enquiry be answered?',
    answer:
      'Our client relationship team responds to enquiries within 24 to 48 business hours. For urgent business matters, call our hotline on +91 85915 00675 between 9:00 AM and 6:00 PM IST, Monday to Saturday.',
  },
]

/* -------------------------------------------------------------------------- */
/*  ABOUT PAGE                                                                 */
/* -------------------------------------------------------------------------- */

export const about = {
  hero: {
    eyebrow: 'About Us',
    title: 'Rewriting the narrative of comfort and care',
    subtitle:
      "Meet Comfy Lady — a forward-thinking feminine hygiene manufacturer dedicated to elevating women's health through premium quality, uncompromising safety and global accessibility.",
    image: '/images/about-hero.jpg',
    imageAlt: 'Minimal editorial banner expressing calm, care and confidence',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'The Comfy Lady story',
    paragraphs: [
      'Founded on 3rd June 2026 by Priyankka Sing Gautam, Comfy Lady was born out of a simple yet profound belief: every woman deserves access to safe, hygienic and affordable menstrual care that supports her everyday life without compromise.',
      'Witnessing the ongoing gaps in feminine hygiene — where women often have to choose between affordability and skin-safe premium quality — our founder set out to build a manufacturing powerhouse that does both. Based in Panvel, Maharashtra, Comfy Lady has rapidly established itself as a trusted manufacturer, exporter and supplier of next-generation sanitary pads.',
      "We don't just create products; we design a seamless experience of all-day comfort, breathability and reliable leak protection that empowers women to move through their days with absolute confidence.",
    ],
    image: '/images/about-story.jpg',
    imageAlt: 'Founder-led brand story imagery in warm, soft light',
    milestones: [
      { id: 'm1', label: 'Founded', value: '3 June 2026' },
      { id: 'm2', label: 'Headquarters', value: 'Panvel, Maharashtra' },
      { id: 'm3', label: 'Focus', value: 'Manufacturing · Export · OEM' },
    ],
  },
  missionVision: {
    eyebrow: 'Purpose',
    title: 'Our mission & vision',
    mission: {
      title: 'Our Mission',
      text: 'To make high-quality menstrual hygiene products globally accessible and affordable, while actively promoting menstrual health awareness and empowering women through better, skin-friendly hygiene solutions.',
    },
    vision: {
      title: 'Our Vision',
      text: 'To become a premier global benchmark in feminine care manufacturing, recognised for technological innovation, sustainable business practices and trusted private-label partnerships worldwide.',
    },
  },
  values: {
    eyebrow: 'Core Values',
    title: 'Guided by core values',
    subtitle:
      'Everything we manufacture, package and ship is anchored by four foundational principles.',
  },
  founder: {
    eyebrow: 'From the Founder',
    title: 'A message from our founder',
    quote:
      'Comfy Lady was built on the promise of dignity and comfort. For too long, menstrual care has been treated as a basic commodity rather than an essential health standard. Our goal is to ensure that no matter where a woman is in the world — and no matter her budget — she has access to premium, skin-safe and highly effective care. We are excited to partner with businesses, healthcare institutions and brands worldwide to make this vision a reality.',
    name: 'Priyankka Sing Gautam',
    role: 'Founder & Visionary',
    image: '/images/about-founder.jpg',
    imageAlt: 'Portrait-style editorial image representing the founder of Comfylady',
  },
  capabilities: {
    eyebrow: 'Global Capability',
    title: 'State-of-the-art global capabilities',
    paragraphs: [
      'Operating from our strategic hub in Maharashtra, Comfy Lady is fully equipped to handle high-capacity production, product customisation and international export logistics.',
      'Our diverse product architecture spans from Straight Regular (L) to Ultra Thin (XXL) variants, making us uniquely positioned to serve a multifaceted global market.',
    ],
    servingTitle: 'We proudly cater to',
    serving: [
      { id: 'c1', icon: 'Globe2', title: 'Global Distributors & Wholesalers', description: 'Bulk supply capability with export documentation support.' },
      { id: 'c2', icon: 'Store', title: 'Retail Chains & E-commerce Brands', description: 'Shelf-ready and channel-ready product configurations.' },
      { id: 'c3', icon: 'HeartHandshake', title: 'NGOs, Healthcare & Government', description: 'Institutional supply for programmes at community scale.' },
      { id: 'c4', icon: 'Factory', title: 'Private-Label Brands', description: 'End-to-end OEM services from specification to packaging.' },
    ],
    image: '/images/about-capabilities.jpg',
    imageAlt: 'Wide view of a modern feminine hygiene production environment',
  },
  cta: {
    eyebrow: 'Together',
    title: 'Let us build a healthier future, together',
    subtitle:
      'Whether you are an established brand looking for a flawless OEM manufacturer, an organisation driving social change, or a distributor ready to scale your portfolio, Comfy Lady is your ideal partner.',
    primaryCta: { label: 'Explore Our Full Product Range', href: '/products' },
    secondaryCta: { label: 'Get in Touch with Our B2B Team', href: '/contact' },
  },
}

export const brandValues: ValueItem[] = [
  {
    id: 'v1',
    icon: 'ShieldCheck',
    title: 'Quality & Safety First',
    description:
      'We use only carefully selected, skin-friendly and non-irritating materials. Every single pad is manufactured under stringent hygiene protocols that meet rigorous international compliance standards.',
  },
  {
    id: 'v2',
    icon: 'Sparkles',
    title: 'Empowerment Through Hygiene',
    description:
      'We believe proper menstrual hygiene is a cornerstone of health and education. By offering affordable premium care, we strive to break barriers for women and girls globally.',
  },
  {
    id: 'v3',
    icon: 'Layers',
    title: 'Innovation in Every Layer',
    description:
      'From ultra-thin designs to heavy-flow dry-net technology, we continuously innovate our absorption capacities — ranging from 40 ml to over 130 ml — to fit diverse body needs and lifestyles.',
  },
  {
    id: 'v4',
    icon: 'Handshake',
    title: 'Trust & Partnership',
    description:
      'Whether we are supplying a local NGO or manufacturing for a major international private label, we build long-term relationships rooted in transparency, reliability and excellence.',
  },
]

/* -------------------------------------------------------------------------- */
/*  PRODUCTS PAGE                                                              */
/* -------------------------------------------------------------------------- */

export const productsPage = {
  hero: {
    eyebrow: 'Our Products',
    title: 'A range engineered around real days',
    subtitle:
      'Our sanitary pads are engineered for superior absorbency and a zero-leak experience. Six variants across three size architectures, each with a purpose.',
    note: 'This site is informational. For pricing, samples or bulk supply, please contact our team.',
  },
  specTable: {
    eyebrow: 'Specifications',
    title: 'Product specifications',
    subtitle: 'The complete technical overview of the Comfylady range.',
  },
  grid: {
    eyebrow: 'The Range',
    title: 'Explore each variant',
    subtitle: 'Select a product to see its features, benefits and usage guidance.',
  },
  highlights: {
    eyebrow: 'Signature Features',
    title: 'Cottony Soft · Drynet · Ultra Thin',
    subtitle: 'Three constructions, three distinct experiences of comfort.',
    items: [
      {
        id: 'cottony',
        icon: 'Feather',
        title: 'Cottony Soft',
        description:
          'A non-woven top sheet with a fabric-like touch, chosen for wearers who want softness they can feel from the first minute.',
      },
      {
        id: 'drynet',
        icon: 'Droplets',
        title: 'Drynet',
        description:
          'A perforated surface that moves fluid into the core quickly, keeping the top sheet dry through heavy flow and humid weather.',
      },
      {
        id: 'ultrathin',
        icon: 'Minimize2',
        title: 'Ultra Thin',
        description:
          'A compressed core delivering 100 ml to 130 ml of capacity in a profile slim enough to disappear under fitted clothing.',
      },
    ],
  },
  b2b: {
    eyebrow: 'B2B Services & Partnerships',
    title: 'Build your brand with Comfy Lady',
    subtitle:
      'Beyond manufacturing our own premium line, we provide end-to-end solutions for our business partners.',
    items: [
      {
        id: 'oem',
        icon: 'Factory',
        title: 'OEM / Private Label Production',
        description:
          'Launch your own successful feminine hygiene brand with our customised manufacturing and packaging services.',
      },
      {
        id: 'wholesale',
        icon: 'Ship',
        title: 'Wholesale & Export',
        description:
          'Bulk supply capabilities tailored for global distributors, wholesalers and institutional buyers.',
      },
      {
        id: 'custom',
        icon: 'SlidersHorizontal',
        title: 'Product Customisation',
        description:
          'Flexible product specifications to meet the unique demands of your target market.',
      },
    ],
    cta: { label: 'Request a Bulk Quote or OEM Consultation', href: '/contact' },
  },
}

/* -------------------------------------------------------------------------- */
/*  WHY COMFYLADY PAGE                                                         */
/* -------------------------------------------------------------------------- */

export const whyPage = {
  hero: {
    eyebrow: 'Why Comfylady',
    title: 'Comfort is not a feature. It is the whole point.',
    subtitle:
      'Softness, hygiene, protection and skin-friendly materials, engineered together rather than traded against each other.',
    image: '/images/why-hero.jpg',
    imageAlt: 'Serene wellness scene expressing everyday freedom and confidence',
  },
  pillars: {
    eyebrow: 'The Six Pillars',
    title: 'What we build into every pad',
    subtitle: 'Select a pillar to read how it shapes the product in your hand.',
    items: [
      {
        id: 'p1',
        icon: 'Feather',
        title: 'Comfort',
        description:
          'Comfort is designed at the point of contact. Soft top sheets, considered edges and a flexible body mean the pad follows your movement instead of resisting it — through a commute, a shift, a workout or a long flight.',
      },
      {
        id: 'p2',
        icon: 'Cloud',
        title: 'Softness',
        description:
          'Our cottony soft non-woven surface is chosen for a fabric-like touch against sensitive skin, so the first impression and the eighth hour feel closer than you would expect.',
      },
      {
        id: 'p3',
        icon: 'Sparkles',
        title: 'Hygiene',
        description:
          'Hygiene starts long before use. Materials are handled under strict protocols and each pad is sealed individually, so what reaches you is exactly what left our line.',
      },
      {
        id: 'p4',
        icon: 'ShieldCheck',
        title: 'Protection',
        description:
          'Leak protection comes from layer architecture — rapid intake, even distribution, deep locking and a breathable barrier — verified against capacities from 40 ml to beyond 130 ml.',
      },
      {
        id: 'p5',
        icon: 'Leaf',
        title: 'Skin-Friendly Materials',
        description:
          'We select non-irritating, breathable materials with sensitive skin in mind, prioritising airflow so warmth and moisture do not build up over long wear.',
      },
      {
        id: 'p6',
        icon: 'BadgeCheck',
        title: 'Quality Standards',
        description:
          'Stringent hygiene standards, batch-level verification and an international compliance mindset mean consistency is a promise we can evidence, not a claim we repeat.',
      },
    ],
  },
  comparison: {
    eyebrow: 'The Difference',
    title: 'What changes when comfort is engineered',
    rows: [
      { id: 'r1', criterion: 'Surface feel', ordinary: 'Plastic-like, warm after hours', comfylady: 'Cottony soft or dry-touch drynet' },
      { id: 'r2', criterion: 'Absorption', ordinary: 'Surface pooling and rewet', comfylady: 'Rapid intake with deep core lock' },
      { id: 'r3', criterion: 'Profile', ordinary: 'Bulk grows with capacity', comfylady: 'Ultra-thin at 130 ml+ capacity' },
      { id: 'r4', criterion: 'Breathability', ordinary: 'Trapped humidity', comfylady: 'Breathable back sheet construction' },
      { id: 'r5', criterion: 'Range', ordinary: 'One size, compromised fit', comfylady: 'L, XL and XXL architectures' },
      { id: 'r6', criterion: 'Consistency', ordinary: 'Batch-to-batch variation', comfylady: 'Verified batch-level criteria' },
    ],
    headings: ['', 'The ordinary pad', 'Comfylady'],
  },
  lifestyle: {
    eyebrow: 'Everyday Freedom',
    title: 'Made for the way she actually lives',
    subtitle:
      'A cycle does not pause for a presentation, a long-haul flight, an exam or a match. Neither should protection.',
    items: [
      { id: 'l1', icon: 'Briefcase', title: 'At work', description: 'Ultra Thin XL disappears under tailoring and holds through back-to-back days.' },
      { id: 'l2', icon: 'Plane', title: 'In transit', description: 'Straight XL Drynet stays dry across long journeys and humid climates.' },
      { id: 'l3', icon: 'Moon', title: 'Overnight', description: 'Ultra Thin XXL at 320 mm gives coverage that moves as you turn.' },
      { id: 'l4', icon: 'Activity', title: 'In motion', description: 'Flexible construction and secure wings keep position during activity.' },
    ],
    image: '/images/why-lifestyle.jpg',
    imageAlt: 'Woman moving confidently through an ordinary, active day',
  },
  cta: {
    eyebrow: 'Experience It',
    title: 'See which Comfylady is yours',
    subtitle: 'Six variants, three size architectures, one standard of comfort.',
    primaryCta: { label: 'Explore Our Products', href: '/products' },
    secondaryCta: { label: 'Talk to Our Team', href: '/contact' },
  },
}

/* -------------------------------------------------------------------------- */
/*  QUALITY / SUSTAINABILITY PAGE                                              */
/* -------------------------------------------------------------------------- */

export const qualityPage = {
  hero: {
    eyebrow: 'Quality & Sustainability',
    title: 'Trust is manufactured, not marketed',
    subtitle:
      'Manufacturing quality, safety standards, product testing and a sustainable commitment — the four disciplines behind every Comfylady pad.',
    image: '/images/quality-hero.jpg',
    imageAlt: 'Bright, precise manufacturing environment rendered in soft editorial light',
  },
  manufacturing: {
    eyebrow: 'Manufacturing Quality',
    title: 'Built under stringent hygiene protocols',
    paragraphs: [
      'Every Comfylady pad is manufactured under strict hygiene standards that ensure safety, reliability and international compliance. Controlled handling, sealed conversion and disciplined line practice keep the product as clean as the materials that entered it.',
      'Operating from our hub in Panvel, Maharashtra, we are equipped for high-capacity production, product customisation and international export logistics — the same discipline applied whether the run carries our name or a partner brand.',
    ],
    points: [
      'Controlled material handling from intake to conversion',
      'Individually sealed pads to preserve hygiene until use',
      'High-capacity lines with customisation capability',
      'Documented process discipline across every batch',
    ],
    image: '/images/quality-manufacturing.jpg',
    imageAlt: 'Clean feminine hygiene production line in operation',
  },
  safety: {
    eyebrow: 'Safety Standards',
    title: 'Safety designed in, not inspected in',
    subtitle:
      'Material selection is governed before production begins, so safety is a property of the design rather than a filter at the end of the line.',
    items: [
      { id: 's1', icon: 'Leaf', title: 'Skin-Friendly Selection', description: 'Non-irritating, breathable materials selected with sensitive skin in mind.' },
      { id: 's2', icon: 'Wind', title: 'Breathability First', description: 'Back sheet construction that limits heat and humidity build-up over long wear.' },
      { id: 's3', icon: 'ScanLine', title: 'Batch Traceability', description: 'Material and production records that allow a batch to be traced end to end.' },
      { id: 's4', icon: 'BadgeCheck', title: 'Compliance Mindset', description: 'Protocols built around international compliance expectations for feminine hygiene.' },
    ],
  },
  testing: {
    eyebrow: 'Product Testing',
    title: 'Capacities confirmed, not assumed',
    subtitle:
      'Absorption figures published across our range are verification criteria, not marketing rounding.',
    items: [
      { id: 't1', icon: 'Droplets', title: 'Absorption Verification', description: 'Each variant is checked against its stated capacity, from over 40 ml through to over 130 ml.' },
      { id: 't2', icon: 'Ruler', title: 'Dimensional Checks', description: 'Length and profile confirmed against specification: 240 mm, 280 mm and 320 mm.' },
      { id: 't3', icon: 'Link2', title: 'Adhesion & Integrity', description: 'Adhesive performance and structural integrity assessed so the pad holds its position.' },
      { id: 't4', icon: 'PackageCheck', title: 'Seal & Pack Checks', description: 'Wrapper seal and carton integrity verified before despatch or export.' },
    ],
  },
  sustainability: {
    eyebrow: 'Sustainability Commitment',
    title: 'Responsible by intention',
    paragraphs: [
      'Sustainable business practice is written into how we partner, produce and ship. We work toward responsible material sourcing, efficient conversion that limits waste, and packaging decisions that reduce unnecessary volume in transit.',
      'We also treat access as part of sustainability. Menstrual hygiene that is affordable at scale keeps girls in classrooms and women at work — an outcome we pursue alongside our environmental commitments, not instead of them.',
    ],
    points: [
      { id: 'su1', icon: 'Recycle', title: 'Considered Materials', description: 'Responsible sourcing decisions taken at specification stage.' },
      { id: 'su2', icon: 'Gauge', title: 'Efficient Conversion', description: 'Production practice aimed at minimising material waste per run.' },
      { id: 'su3', icon: 'Package', title: 'Leaner Packaging', description: 'Packaging sized to reduce transport volume across export routes.' },
      { id: 'su4', icon: 'Users', title: 'Access as Impact', description: 'Affordable premium care supplied to NGOs, institutions and community programmes.' },
    ],
    image: '/images/quality-sustainability.jpg',
    imageAlt: 'Soft natural still life expressing responsible, considered materials',
  },
  stats: {
    eyebrow: 'By the Numbers',
    title: 'The range at a glance',
  },
  badges: {
    eyebrow: 'Standards',
    title: 'How we hold ourselves accountable',
    note: 'Certification marks and third-party test reports are shared with business partners on request.',
  },
  cta: {
    eyebrow: 'Due Diligence',
    title: 'Request our specification pack',
    subtitle:
      'Distributors, institutional buyers and private-label partners can request detailed specifications and available documentation from our B2B team.',
    primaryCta: { label: 'Contact Our B2B Team', href: '/contact' },
    secondaryCta: { label: 'View Product Range', href: '/products' },
  },
}

/* -------------------------------------------------------------------------- */
/*  FAQ PAGE                                                                   */
/* -------------------------------------------------------------------------- */

export const faqPage = {
  hero: {
    eyebrow: 'FAQ',
    title: 'Questions, answered plainly',
    subtitle:
      'Product guidance, comfort and care, quality assurance and business enquiries — search or browse by category.',
  },
  searchPlaceholder: 'Search questions…',
  emptyState: {
    title: 'No matching questions',
    text: 'Try a different phrase, or reach out and we will answer directly.',
    cta: { label: 'Contact Us', href: '/contact' },
  },
  cta: {
    eyebrow: 'Still Curious',
    title: 'Cannot find your answer?',
    subtitle: 'Our client relationship team replies within 24 to 48 business hours.',
    primaryCta: { label: 'Ask Our Team', href: '/contact' },
    secondaryCta: { label: 'Call +91 85915 00675', href: 'tel:+918591500675' },
  },
}

/* -------------------------------------------------------------------------- */
/*  CONTACT PAGE                                                               */
/* -------------------------------------------------------------------------- */

export const contactPage = {
  hero: {
    eyebrow: 'Contact Us',
    title: 'Let us start a conversation',
    subtitle:
      'Whether you are looking to place a bulk order, launch your own private label, or simply learn more about our premium products, the Comfy Lady team is here to help. Reach out to us today.',
  },
  getInTouch: {
    eyebrow: 'Get In Touch',
    title: 'Choose the way that works best for you',
    subtitle: 'Drop us a line, give us a call, or visit our manufacturing and corporate office.',
    cards: [
      {
        id: 'call',
        icon: 'Phone',
        title: 'Call Us',
        lines: ['Business Hotline: +91 85915 00675'],
        note: 'Available for telephonic consultations, order updates and urgent business inquiries.',
        actionLabel: 'Call now',
        actionHref: 'tel:+918591500675',
      },
      {
        id: 'visit',
        icon: 'MapPin',
        title: 'Visit Our Office',
        lines: ['COMFYLADY', 'Opp. Dena Bank, Taloja, Panvel,', 'Maharashtra, India — 410208'],
        note: 'Our manufacturing and corporate office.',
        actionLabel: 'Open in Maps',
        actionHref: 'https://maps.google.com/?q=Taloja,+Panvel,+Maharashtra+410208',
      },
      {
        id: 'email',
        icon: 'Mail',
        title: 'Email Us',
        lines: ['General Inquiries: info@comfylady.com', 'B2B & Export Sales: sales@comfylady.com'],
        note: 'Written enquiries answered within 24 to 48 business hours.',
        actionLabel: 'Send an email',
        actionHref: 'mailto:info@comfylady.com',
      },
      {
        id: 'hours',
        icon: 'Clock',
        title: 'Business Hours',
        lines: ['Monday – Saturday: 9:00 AM to 6:00 PM (IST)', 'Sunday: Closed'],
        note: 'Enquiries received outside these hours are answered the next business day.',
        actionLabel: '',
        actionHref: '',
      },
    ],
  },
  form: {
    eyebrow: 'Drop Us a Message',
    title: 'Tell us what you need',
    subtitle:
      'Have a specific requirement? Fill out the form below and our dedicated client relationship team will get back to you within 24 to 48 business hours.',
    fields: {
      name: { label: 'Full Name', placeholder: 'Your full name', required: true },
      company: { label: 'Company / Organisation Name', placeholder: 'Optional for retail buyers', required: false },
      email: { label: 'Email Address', placeholder: 'you@company.com', required: true },
      phone: { label: 'Phone Number', placeholder: '+91 00000 00000', required: true },
      purpose: { label: 'Purpose of Inquiry', placeholder: 'Select an option', required: true },
      message: { label: 'Your Message', placeholder: 'Share your requirement, target market and quantities…', required: true },
    },
    purposeOptions: [
      'OEM / Private Label Manufacturing',
      'Bulk Wholesale & Distribution',
      'International Export Inquiries',
      'NGO & Government Institutional Supply',
      'General / Customer Feedback',
    ],
    submitLabel: 'Submit Inquiry',
    submittingLabel: 'Sending…',
    consent: 'By submitting you agree to our Privacy Policy. We never share your details.',
    success: {
      title: 'Thank you — your enquiry is with us',
      text: 'Our client relationship team will respond within 24 to 48 business hours. For urgent matters, call +91 85915 00675.',
      reset: 'Send another message',
    },
    errors: {
      name: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      purpose: 'Please select the purpose of your inquiry.',
      message: 'Please tell us a little about your requirement (at least 10 characters).',
    },
  },
  customNote: {
    eyebrow: 'Private Label',
    title: 'Looking for private label or custom manufacturing?',
    text: 'If you are a distributor, brand manager or institutional buyer looking for custom product specifications — such as adjusting length, top sheet materials or absorption capacities — please mention your specific target requirements (for example L, XL, XXL, Drynet or Non-Woven sheets) in your message so our engineering team can provide an accurate quote faster.',
  },
  map: {
    eyebrow: 'Find Us',
    title: 'Taloja, Panvel, Maharashtra',
    subtitle: 'Opp. Dena Bank, Taloja, Panvel, Maharashtra 410208, India',
    cta: { label: 'Get directions', href: 'https://maps.google.com/?q=Taloja,+Panvel,+Maharashtra+410208' },
  },
}

/* -------------------------------------------------------------------------- */
/*  LEGAL PAGES                                                                */
/* -------------------------------------------------------------------------- */

export const legalPages = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: 3 June 2026',
    intro:
      'Comfylady respects your privacy. This policy explains what information we collect through this website, why we collect it, and the choices available to you.',
    sections: [
      {
        id: 'p1',
        title: '1. Information We Collect',
        body: [
          'We collect the information you choose to provide through our enquiry form — typically your name, company or organisation name, email address, phone number, purpose of inquiry and the content of your message.',
          'We may also collect limited technical information automatically, such as browser type, device type and pages visited, to help us understand how the site is used and to improve it.',
        ],
      },
      {
        id: 'p2',
        title: '2. How We Use Your Information',
        body: [
          'We use the information you provide to respond to your enquiry, to prepare quotations and product specifications, and to maintain a record of our correspondence with you.',
          'Where you have subscribed to updates, we use your email address to send occasional product and company news. You may unsubscribe at any time.',
        ],
      },
      {
        id: 'p3',
        title: '3. Legal Basis and Consent',
        body: [
          'We process enquiry information on the basis of your request to be contacted and our legitimate interest in conducting business correspondence. Marketing communications are sent only where you have opted in.',
        ],
      },
      {
        id: 'p4',
        title: '4. Sharing of Information',
        body: [
          'We do not sell your personal information. We may share it with service providers who help us operate this website or manage correspondence, and only to the extent necessary for those services.',
          'We may disclose information where required to do so by applicable law or regulatory obligation.',
        ],
      },
      {
        id: 'p5',
        title: '5. Data Retention',
        body: [
          'We retain enquiry records for as long as necessary to serve the purpose for which they were collected and to meet our legal and commercial record-keeping obligations.',
        ],
      },
      {
        id: 'p6',
        title: '6. Security',
        body: [
          'We take reasonable technical and organisational measures to protect the information you share with us. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        id: 'p7',
        title: '7. Cookies',
        body: [
          'This website may use cookies or similar technologies to support core functionality and to understand aggregate usage. You can control cookies through your browser settings.',
        ],
      },
      {
        id: 'p8',
        title: '8. Your Rights',
        body: [
          'Subject to applicable law, you may request access to, correction of, or deletion of the personal information we hold about you, and you may object to certain processing. To exercise these rights, contact us using the details below.',
        ],
      },
      {
        id: 'p9',
        title: '9. Contact',
        body: [
          'For any privacy question or request, write to info@comfylady.com or contact COMFYLADY, Opp. Dena Bank, Taloja, Panvel, Maharashtra 410208, India. You can also call +91 85915 00675 during business hours.',
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    updated: 'Last updated: 3 June 2026',
    intro:
      'These terms govern your use of the Comfylady website. By accessing or using this website, you agree to them. If you do not agree, please discontinue use of the site.',
    sections: [
      {
        id: 't1',
        title: '1. Informational Website',
        body: [
          'This website is informational. It does not offer online purchase, checkout or order fulfilment. Product information is published to help you understand our range and to support business enquiries.',
        ],
      },
      {
        id: 't2',
        title: '2. Product Information',
        body: [
          'Specifications, dimensions and absorption capacities are published in good faith and reflect our product architecture at the time of publication. Specifications may be revised as products evolve, and customised specifications are agreed in writing on a per-order basis.',
          'Product content on this website is general information and is not medical advice. If you have a health concern, consult a qualified healthcare professional.',
        ],
      },
      {
        id: 't3',
        title: '3. Enquiries and Quotations',
        body: [
          'Submitting an enquiry does not create a contract. Any supply of goods is subject to a separate written agreement, quotation or purchase order agreed between the parties.',
        ],
      },
      {
        id: 't4',
        title: '4. Intellectual Property',
        body: [
          'All content on this website — including text, layout, graphics, imagery and the Comfylady name and marks — is owned by or licensed to Comfylady and is protected by applicable intellectual property law. You may not reproduce or redistribute it without written permission.',
        ],
      },
      {
        id: 't5',
        title: '5. Acceptable Use',
        body: [
          'You agree not to use this website in any way that is unlawful, that interferes with its operation or security, or that attempts to gain unauthorised access to any part of it or its underlying systems.',
        ],
      },
      {
        id: 't6',
        title: '6. Third-Party Links',
        body: [
          'This website may link to third-party sites or embed third-party services such as maps. We are not responsible for the content, policies or practices of those third parties.',
        ],
      },
      {
        id: 't7',
        title: '7. Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, Comfylady is not liable for any indirect or consequential loss arising from your use of this website or reliance on its content.',
        ],
      },
      {
        id: 't8',
        title: '8. Governing Law',
        body: [
          'These terms are governed by the laws of India, and the courts at Panvel, Maharashtra shall have jurisdiction over any dispute arising in connection with them.',
        ],
      },
      {
        id: 't9',
        title: '9. Changes to These Terms',
        body: [
          'We may update these terms from time to time. The version published on this page is the version in effect.',
        ],
      },
      {
        id: 't10',
        title: '10. Contact',
        body: [
          'Questions about these terms may be sent to info@comfylady.com or COMFYLADY, Opp. Dena Bank, Taloja, Panvel, Maharashtra 410208, India.',
        ],
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const seo: Record<string, SeoMeta> = {
  home: {
    title: 'Comfylady — Premium Sanitary Pads | Manufacturer, Exporter & OEM Partner',
    description:
      'Comfylady manufactures premium, skin-friendly sanitary pads with superior leak protection and all-day comfort. Global export, wholesale and private-label OEM services from Panvel, Maharashtra.',
    keywords:
      'sanitary pads, women hygiene products, comfortable sanitary pads, feminine care products, premium hygiene solutions, sanitary pad manufacturer, sanitary pad exporter, OEM sanitary pads, private label feminine hygiene',
    path: '/',
  },
  about: {
    title: 'About Comfylady — Our Story, Mission & Global Capabilities',
    description:
      'Founded in 2026 by Priyankka Sing Gautam, Comfylady is a premier manufacturer and exporter of premium feminine hygiene products, built on quality, safety and accessibility.',
    keywords:
      'about Comfylady, feminine hygiene manufacturer India, sanitary pad company Maharashtra, women hygiene brand, menstrual health company',
    path: '/about',
  },
  products: {
    title: 'Our Products — Sanitary Pad Range & Specifications | Comfylady',
    description:
      'Explore the Comfylady range: Straight Regular, Straight XL, Ultra Thin XL and Ultra Thin XXL sanitary pads in Non-Woven, Drynet and Ultra Thin constructions, from 40 ml to 130 ml+ absorption.',
    keywords:
      'sanitary pads, ultra thin sanitary pads, XXL overnight pads, drynet sanitary pads, cottony soft pads, sanitary pad specifications, comfortable sanitary pads',
    path: '/products',
  },
  why: {
    title: 'Why Comfylady — Comfort, Hygiene, Protection & Skin-Friendly Care',
    description:
      'Discover why women choose Comfylady: cottony soft materials, dry-touch drynet surfaces, ultra-thin high-capacity cores and stringent quality standards.',
    keywords:
      'comfortable sanitary pads, skin friendly sanitary pads, best sanitary pads for sensitive skin, leak proof sanitary pads, breathable feminine care',
    path: '/why-comfylady',
  },
  quality: {
    title: 'Quality & Sustainability — Manufacturing, Safety & Testing | Comfylady',
    description:
      'Comfylady pads are manufactured under stringent hygiene protocols with batch-level verification, skin-friendly material selection and a sustainable business commitment.',
    keywords:
      'sanitary pad quality standards, feminine hygiene manufacturing, product testing sanitary pads, sustainable feminine care, hygienic sanitary pad production',
    path: '/quality',
  },
  faq: {
    title: 'Frequently Asked Questions | Comfylady Sanitary Pads',
    description:
      'Answers on sizes, absorption, top sheet materials, comfort and care, quality assurance, OEM private label manufacturing and export enquiries.',
    keywords:
      'sanitary pad FAQ, how often to change sanitary pad, ultra thin vs drynet, sanitary pad sizes, OEM sanitary pad manufacturer questions',
    path: '/faq',
  },
  contact: {
    title: 'Contact Comfylady — Bulk Orders, Export & OEM Enquiries',
    description:
      'Contact the Comfylady team for bulk wholesale, international export, NGO and institutional supply, or private-label OEM manufacturing. Panvel, Maharashtra, India.',
    keywords:
      'contact sanitary pad manufacturer, bulk sanitary pad supplier, OEM feminine hygiene enquiry, sanitary pad exporter India, private label sanitary pads',
    path: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Comfylady',
    description: 'How Comfylady collects, uses, shares and protects the information you provide through this website.',
    keywords: 'Comfylady privacy policy, data protection, personal information',
    path: '/privacy-policy',
  },
  terms: {
    title: 'Terms & Conditions | Comfylady',
    description: 'The terms governing use of the Comfylady informational website, product information and enquiries.',
    keywords: 'Comfylady terms and conditions, website terms of use',
    path: '/terms-and-conditions',
  },
  notFound: {
    title: 'Page Not Found | Comfylady',
    description: 'The page you are looking for could not be found.',
    keywords: 'Comfylady',
    path: '/404',
  },
}

export const notFoundPage = {
  eyebrow: 'Error 404',
  title: 'This page has stepped away',
  subtitle: 'The page you are looking for may have moved, or the link may be out of date.',
  cta: { label: 'Return Home', href: '/' },
  secondaryCta: { label: 'Browse Products', href: '/products' },
}

/* -------------------------------------------------------------------------- */
/*  AI IMAGE PROMPTS                                                           */
/*  Paste into Midjourney / Flux / Ideogram / ChatGPT Image Generation.        */
/*  Save the output to /public/images using the `file` name given below.       */
/* -------------------------------------------------------------------------- */

export const imagePrompts: ImagePrompt[] = [
  {
    id: 'hero',
    usage: 'Home — Section 1 Luxury Hero',
    file: 'hero-comfylady.jpg',
    aspect: '4:5 portrait (also export 16:9 for wide screens)',
    prompt:
      'Editorial fashion-wellness photograph of a confident South Asian woman in her late twenties, seated in soft diffused morning light beside a linen-draped window, wearing an unbranded ivory ribbed cotton set, relaxed natural posture with one hand resting on her knee, serene and self-assured expression looking slightly away from camera. Palette of soft rose pink, blush, warm nude and off-white with deep charcoal accents. Shot on medium format, 80mm lens, f/2.8, shallow depth of field, creamy bokeh, gentle skin tones, subtle film grain, matte finish, generous negative space on the left third for typography. Luxury beauty campaign aesthetic, calm and dignified, no text, no logos, no product packaging visible, no plastic sheen.',
  },
  {
    id: 'hero-capsule',
    usage: 'Home — inline image capsule inside the hero headline',
    file: 'hero-capsule.jpg',
    aspect: '2:1 wide (crops into a pill/capsule, so keep the subject dead centre)',
    prompt:
      'Wide crop luxury still life for a rounded capsule crop: softly folded blush-pink linen filling the frame with a single unbranded white sanitary pad laid horizontally across the centre, one dried rose petal resting beside it. Warm directional morning light raking from the left, long soft shadows, shallow depth of field falling off at both edges, palette of soft rose pink, blush and warm nude. Composition centred and horizontally balanced so it reads well cropped into a long pill shape, nothing important near the left or right edge. Shot on 85mm at f/2.8, tactile fabric detail, matte editorial finish, premium feminine wellness aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'brand-story-primary',
    usage: 'Home — Section 2 Brand Introduction (primary image)',
    file: 'brand-story-primary.jpg',
    aspect: '3:4 portrait',
    prompt:
      'Premium still-life product photograph of three unbranded white sanitary pads with a soft cottony surface, arranged as an overlapping fan on crumpled blush-pink linen, one folded to reveal a delicate quilted top sheet texture. A single dried rose stem and a smooth warm nude ceramic dish sit nearby. Soft directional window light from the upper left with long gentle shadows, warm neutral background, minimal styling, tactile fabric detail, shot on 100mm macro at f/4, high dynamic range, matte editorial finish. Luxury skincare campaign styling, discreet and elegant, no branding, no text, no clinical or medical feel.',
  },
  {
    id: 'brand-story-secondary',
    usage: 'Home — Section 2 Brand Introduction (secondary inset image)',
    file: 'brand-story-secondary.jpg',
    aspect: '1:1 square',
    prompt:
      'Extreme macro photograph of a soft white non-woven cottony textile surface with a fine embossed quilted pattern, a single droplet of clear water resting on the fibres and catching the light. Very shallow depth of field, soft rose-tinted rim light, warm white background falling into gentle gradient, delicate fibre detail, abstract and tactile. Shot on 100mm macro at f/5.6, luxury skincare texture photography, no text, no branding, no plastic reflections.',
  },
  {
    id: 'product-straight-regular-nonwoven',
    usage: 'Products — Straight Regular Non-Woven card',
    file: 'product-straight-regular-nonwoven.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single unbranded white sanitary pad with a soft cottony non-woven top sheet and folded wings, centred on a smooth blush-pink paper backdrop with a subtle curved sweep. Soft even studio lighting with one gentle shadow to the lower right, warm nude accent props kept out of frame, clean geometry, generous negative space. Shot on 85mm at f/8, crisp texture detail, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-straight-regular-drynet',
    usage: 'Products — Straight Regular Drynet card',
    file: 'product-straight-regular-drynet.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single unbranded white sanitary pad with a finely perforated dry-net top sheet, shown at a slight three-quarter angle on a soft warm nude paper backdrop, with a scattering of tiny clear water beads on the surface catching cool highlights. Soft studio lighting, gentle single shadow, clean composition with negative space at the top. Shot on 85mm at f/8, macro-sharp perforation detail, matte editorial retouch, premium beauty catalogue aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-straight-xl-nonwoven',
    usage: 'Products — Straight XL Non-Woven card',
    file: 'product-straight-xl-nonwoven.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single elongated unbranded white sanitary pad with a soft cottony non-woven surface, laid diagonally across a soft rose-pink paper backdrop to emphasise its extended length, wings open and flat. Soft even studio lighting, one delicate shadow, quiet composition with wide margins. Shot on 85mm at f/8, fine fabric texture, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-straight-xl-drynet',
    usage: 'Products — Straight XL Drynet card',
    file: 'product-straight-xl-drynet.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single elongated unbranded white sanitary pad with a perforated dry-net surface, standing gently curved on a soft blush backdrop so its length and flexibility read clearly, a faint cool highlight tracing the perforations. Soft studio lighting with a soft gradient background, one subtle shadow. Shot on 85mm at f/8, crisp surface detail, matte editorial retouch, premium beauty catalogue aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-ultra-thin-xl',
    usage: 'Products — Ultra Thin XL card',
    file: 'product-ultra-thin-xl.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single unbranded ultra-thin white sanitary pad photographed close to edge-on so its remarkably slim profile is the subject, resting on a smooth warm nude surface with a soft reflective sheen. Low raking studio light to sculpt the thin silhouette, soft off-white gradient background, elegant negative space above. Shot on 100mm at f/8, precise edge detail, matte editorial retouch, premium minimalist product photography, no text, no logos, no packaging.',
  },
  {
    id: 'product-ultra-thin-xxl',
    usage: 'Products — Ultra Thin XXL card',
    file: 'product-ultra-thin-xxl.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Minimal luxury product photograph of a single extra-long unbranded ultra-thin white sanitary pad laid on soft crumpled ivory bed linen in warm low evening light, conveying overnight rest and calm. Soft shadows, muted rose and nude palette, tranquil bedroom mood without any visible room detail, shallow depth of field at the far end. Shot on 85mm at f/4, tactile linen texture, matte editorial retouch, luxury lifestyle product photography, no text, no logos, no packaging.',
  },
  {
    id: 'women-lifestyle',
    usage: 'Why Comfylady — lifestyle band / general lifestyle imagery',
    file: 'why-lifestyle.jpg',
    aspect: '16:9 landscape',
    prompt:
      'Editorial lifestyle photograph of a woman in her early thirties walking through a bright minimal city space in soft late-afternoon light, wearing an unbranded blush linen blazer and cream trousers, mid-stride with a relaxed confident expression and hair moving naturally. Warm nude and soft white architecture behind her, generous negative space to the right. Shot on 50mm at f/2, natural motion, gentle film grain, muted rose-toned colour grade, matte finish. Premium wellness brand campaign aesthetic, candid and dignified, no text, no logos, no product visible.',
  },
  {
    id: 'wellness-scene',
    usage: 'Why Comfylady — hero / wellness atmosphere',
    file: 'why-hero.jpg',
    aspect: '3:2 landscape',
    prompt:
      'Serene wellness scene photograph: a calm sunlit corner with sheer linen curtains diffusing morning light, a rattan chair with a folded blush throw, a ceramic vase holding soft dried pampas, and a glass of water on a pale oak side table. Warm nude, soft white and gentle rose palette, dust motes visible in the light shaft, deeply calm and unhurried atmosphere. Shot on 35mm at f/2.8, natural light only, subtle film grain, matte editorial grade. Luxury wellness brand photography, no people, no text, no branding.',
  },
  {
    id: 'quality-manufacturing',
    usage: 'Home Section 6 & Quality page — manufacturing',
    file: 'quality-manufacturing.jpg',
    aspect: '3:2 landscape',
    prompt:
      'Clean, bright manufacturing photograph of a modern hygienic feminine-care production facility: white and stainless steel converting machinery in soft focus, a continuous web of pristine white non-woven material moving through rollers in sharp focus in the foreground, a technician in a spotless white coat, hair covering and gloves observing from the mid-ground. Soft even industrial daylight, calm and premium rather than clinical, muted warm-neutral grade with a faint rose cast. Shot on 35mm at f/4, immaculate surfaces, editorial corporate photography, no text, no visible brand marks, no clutter.',
  },
  {
    id: 'quality-hero',
    usage: 'Quality page — hero banner',
    file: 'quality-hero.jpg',
    aspect: '16:9 landscape',
    prompt:
      'Wide architectural photograph of an immaculate white production hall for hygiene products, long clean lines of machinery receding into soft depth, polished floor catching diffused daylight from high clerestory windows, a single technician in white protective wear as a small human accent for scale. Restrained warm-neutral palette with soft rose highlights, generous empty space in the upper third for typography. Shot on 24mm at f/5.6, symmetrical composition, calm and precise, matte editorial grade, no text, no logos, no signage.',
  },
  {
    id: 'quality-sustainability',
    usage: 'Quality page — sustainability section',
    file: 'quality-sustainability.jpg',
    aspect: '4:3 landscape',
    prompt:
      'Soft natural still life expressing responsible materials: neatly stacked layers of undyed white non-woven fabric and unbleached kraft board on a pale oak surface, a sprig of fresh green eucalyptus resting across them, soft morning light from a side window casting long delicate shadows. Warm neutral palette with a single restrained note of green, tactile textures, quiet and considered mood. Shot on 50mm at f/4, matte editorial finish, sustainable brand photography, no text, no branding, no recycling symbols.',
  },
  {
    id: 'about-hero',
    usage: 'About page — hero banner',
    file: 'about-hero.jpg',
    aspect: '16:9 landscape',
    prompt:
      'Minimal editorial banner photograph: a softly lit plaster wall in warm off-white with a gentle rose gradient falling across it, a slim pale oak console below holding a single ceramic vessel and one dried rose stem, long soft shadows from a low side light. Extremely restrained composition with vast negative space in the centre and right for typography. Shot on 35mm at f/5.6, calm and elevated, subtle grain, matte editorial grade. Luxury brand banner photography, no people, no text, no branding.',
  },
  {
    id: 'about-story',
    usage: 'About page — brand story section',
    file: 'about-story.jpg',
    aspect: '3:4 portrait',
    prompt:
      'Warm brand-story photograph: a pair of hands with neat unpolished nails carefully holding a folded sheet of soft white non-woven fabric above a pale oak worktable, alongside a fabric swatch book and a small notebook with handwriting out of focus. Soft golden side light from a window, blush and warm nude palette, intimate and human atmosphere conveying craft and care. Shot on 50mm at f/2.2, shallow depth of field, gentle film grain, matte editorial grade, no text, no logos, no faces.',
  },
  {
    id: 'about-founder',
    usage: 'About page — founder message',
    file: 'about-founder.jpg',
    aspect: '4:5 portrait',
    prompt:
      'Elegant editorial portrait of a poised South Asian businesswoman in her late thirties, standing three-quarter to camera in a softly lit minimal office with an off-white plaster wall behind her, wearing a tailored blush-toned blazer over an ivory silk blouse, warm confident half-smile, hands relaxed. Soft large-source window light from the left, warm nude and rose palette, shallow depth of field. Shot on 85mm at f/2, natural skin texture, subtle film grain, matte editorial retouch. Premium founder portrait for a luxury wellness brand, no text, no branding.',
  },
  {
    id: 'about-capabilities',
    usage: 'About page — global capabilities section',
    file: 'about-capabilities.jpg',
    aspect: '16:9 landscape',
    prompt:
      'Wide corporate photograph of a spotless finished-goods warehouse for hygiene products: neatly aligned unbranded white cartons stacked on pale wooden pallets in long receding rows, soft diffused daylight from high windows, polished pale floor, one worker in white uniform walking in the distance for scale. Warm neutral palette with faint rose light, orderly geometry, calm and premium industrial mood. Shot on 28mm at f/5.6, matte editorial grade, no text, no logos, no signage.',
  },
  {
    id: 'og-image',
    usage: 'Open Graph / social sharing card',
    file: 'og-comfylady.jpg',
    aspect: '1200 x 630 (1.91:1)',
    prompt:
      'Luxury brand social share card image: a soft blush-to-ivory gradient background with a delicate rose-pink light bloom in the upper right, a single unbranded white sanitary pad and one dried rose stem arranged with generous space in the lower left, soft directional light and long gentle shadows. Composition intentionally leaves the centre-right clear for an overlaid wordmark. Shot on 85mm at f/5.6, matte editorial finish, premium feminine wellness aesthetic, no text, no logos.',
  },
]
