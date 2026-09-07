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
  { id: 'instagram', label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/comfylady01?igsi=MThxaXI0aTZiM2Q3eQ%3D%3D&utm_source=qr' },
  { id: 'facebook', label: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591244347360' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/company/comfylady' },
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
  /* SECTION 1 — Cinematic full-screen hero */
  hero: {
    eyebrow: 'Premium Feminine Care',
    /* Three designed lines, set one per line. The line at `emphasisLineIndex`
       is highlighted in rose. */
    titleLines: ['Empowering', 'Women with Comfort,', 'Confidence & Care'],
    emphasisLineIndex: 2,
    subtitle:
      'Premium, skin-friendly sanitary pads designed for superior leak protection, breathability and all-day comfort. Proudly manufactured and exported worldwide.',
    /* Phones get a trimmed line rather than a truncated one. Shown below the
       `sm` breakpoint only. */
    subtitleShort:
      'Skin-friendly sanitary pads for superior leak protection and all-day comfort.',
    primaryCta: { label: 'Explore Our Products', href: '/products' },
    secondaryCta: { label: 'Partner With Us (B2B)', href: '/contact' },
    /* The full-bleed backdrop that holds the whole first screen. The video is
       the primary treatment; the still is the poster frame and the fallback
       under reduced motion or if the file cannot play. Portrait and landscape
       cuts are separate files so a phone never downloads the wide one. */
    video: {
      wide: '/videos/hero-desktop.mp4',
      portrait: '/videos/hero-mobile.mp4',
      posterWide: '/images/hero-poster-desktop.jpg',
      posterPortrait: '/images/hero-poster-mobile.jpg',
    },
    image: '/images/hero-comfylady.jpg',
    imageAlt: 'A confident woman in soft natural light, embodying everyday comfort and calm',
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
    /* The portrait that anchors the section. 2:3, so it is framed at its own
       ratio rather than cropped into the 4:5 the rest of the page uses. */
    portrait: {
      src: '/images/brand-story-portrait.jpg',
      alt: 'A smiling young woman in a white vest holding up a Comfylady sanitary pad against a warm beige backdrop',
    },
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
    image: '/images/about-founder.jpg',
    imageAlt: 'Our founder in the manufacturing facility',
    video: '/videos/quality.mp4',
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
  { category: 'Straight', size: 'L', length: '245 mm', topSheet: '5 – 8 g', absorption: '30 – 150 ml' },
  { category: 'Straight', size: 'XL+', length: '290 mm', topSheet: '8 – 12 g', absorption: '30 – 150 ml' },
  { category: 'Straight', size: 'XXL', length: '330 mm', topSheet: '9 – 14 g', absorption: '30 – 150 ml' },
  { category: 'Maxi', size: 'L', length: '245 mm', topSheet: '5 – 8 g', absorption: '30 – 150 ml' },
  { category: 'Maxi', size: 'XL', length: '290 mm', topSheet: '8 – 12 g', absorption: '30 – 150 ml' },
  { category: 'Ultra Thin', size: 'XL', length: '290 mm', topSheet: '8 – 12 g', absorption: '50 – 400 ml' },
  { category: 'Ultra Thin', size: 'XXL', length: '330 mm', topSheet: '14 – 18 g', absorption: '50 – 400 ml' },
  { category: 'Bamboo', size: 'L', length: '245 mm', topSheet: '2 Wings', absorption: '80 – 150 ml' },
  { category: 'Bamboo', size: 'XL', length: '290 mm', topSheet: '2 Wings', absorption: '120 – 250 ml' },
  { category: 'Bamboo', size: 'XXL', length: '330 mm', topSheet: '2 Wings', absorption: '150 – 350 ml' },
  { category: 'Panty Liner', size: 'Regular', length: '180 mm', topSheet: 'Slim', absorption: 'Light' },
  { category: 'Panty Liner', size: 'Long', length: '190 mm', topSheet: 'Slim', absorption: 'Light' },
]

export const productSpecTableHeadings = [
  'Category', 'Size', 'Length', 'Weight / Wings', 'Absorption',
]

export const products: Product[] = [
  {
    id: 'straight',
    slug: 'straight-sanitary-pads',
    name: 'Straight Sanitary Pads',
    size: 'L · XL+ · XXL',
    tagline: 'Trusted everyday protection, in three sizes',
    description:
      'Our core straight pad, available in three classifications — L (245 mm), XL+ (290 mm) and XXL (330 mm) — each built around a 6-layer tissue wrap for high comfort and dependable leak protection.',
    image: '/images/product-straight.jpg',
    imageAlt: 'Comfylady straight sanitary pads in L, XL+ and XXL sizes',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Straight' },
      { label: 'Sizes', value: 'L · XL+ · XXL' },
      { label: 'Length', value: '245 – 330 mm' },
      { label: 'Construction', value: '6-Layer Tissue Wrap' },
      { label: 'Absorption', value: '30 – 150 ml' },
    ],
    features: [
      'Three sizes — L 245 mm, XL+ 290 mm, XXL 330 mm',
      '2 wings for secure placement',
      '6-layer tissue wrap core',
      'Available with or without chip pad',
      'Skin-friendly materials',
    ],
    benefits: [
      'High comfort and reliable leak protection',
      'A size for every flow, from light to heavy',
      'Weights: L 5–8 g, XL+ 8–12 g, XXL 9–14 g',
      'Customised packaging available',
    ],
    usage: [
      'Choose L for lighter days, XL+ for moderate–heavy, XXL for heavy days.',
      'Change every 4 to 6 hours, or sooner as needed.',
      'Store in a cool, dry place away from direct sunlight.',
    ],
    bestFor: 'Everyday · All flows',
  },
  {
    id: 'maxi',
    slug: 'maxi-sanitary-pads',
    name: 'Maxi Sanitary Pads',
    size: 'L · XL',
    tagline: 'Trifold and straight formats for care on the go',
    description:
      'Maxi pads offered in both trifold and straight formats, in L (245 mm) and XL (290 mm). A 6-layer tissue wrap delivers high comfort and leak protection, while the trifold pack stays compact in a bag.',
    image: '/images/product-maxi.jpg',
    imageAlt: 'Comfylady Maxi sanitary pad shown as a trifold pack and an open pad',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Maxi' },
      { label: 'Format', value: 'Trifold & Straight' },
      { label: 'Sizes', value: 'L · XL' },
      { label: 'Length', value: '245 – 290 mm' },
      { label: 'Absorption', value: '30 – 150 ml' },
    ],
    features: [
      'Trifold and straight formats',
      'L (245 mm) and XL (290 mm), 2 wings',
      '6-layer tissue wrap',
      'Available with or without chip pad',
      'Skin-friendly materials',
    ],
    benefits: [
      'Trifold pack is compact and travel-friendly',
      'High comfort and leak protection',
      'Weights: L 5–8 g, XL 8–12 g',
      'Customised packaging available',
    ],
    usage: [
      'Carry the trifold format for discreet on-the-go changes.',
      'Change every 4 to 6 hours, or sooner as needed.',
      'Store in a cool, dry place away from direct sunlight.',
    ],
    bestFor: 'Trifold & Straight',
  },
  {
    id: 'ultra-thin',
    slug: 'ultra-thin-sanitary-pads',
    name: 'Ultra Thin Sanitary Pads',
    size: 'XL · XXL',
    tagline: 'Slim profile, side leak-lock protection',
    description:
      'A trifold ultra-thin pad in XL (290 mm) and XXL (330 mm), engineered with side leak-lock channels and 8-layer protection for very high absorption in a discreet, slim body.',
    image: '/images/product-ultra-thin.jpg',
    imageAlt: 'Comfylady Ultra Thin sanitary pad trifold pack',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Ultra Thin' },
      { label: 'Format', value: 'Trifold' },
      { label: 'Sizes', value: 'XL · XXL' },
      { label: 'Protection', value: '8-Layer + Leak Lock' },
      { label: 'Absorption', value: '50 – 400 ml' },
    ],
    features: [
      'Side leak-lock channels',
      '8-layer protection',
      'XL (290 mm) and XXL (330 mm), 2 wings',
      'Available with or without chip pad',
      'Trifold format',
    ],
    benefits: [
      'Very high absorption, 50–400 ml',
      'High comfort with a slim, discreet profile',
      'Weights: XL 8–12 g, XXL 14–18 g',
      'Confidence on the heaviest days and overnight',
    ],
    usage: [
      'Ideal for heavy flow, long days and overnight rest.',
      'Change every 4 to 6 hours, or when saturation is felt.',
      'Keep the wrapper for discreet disposal.',
    ],
    bestFor: 'Trifold · Slim profile',
  },
  {
    id: 'bamboo',
    slug: 'bamboo-sanitary-pads',
    name: 'Bamboo Sanitary Pads',
    size: '245 · 290 · 330 mm',
    tagline: 'Bamboo comfort with 7-layer protection',
    description:
      'Bamboo-based sanitary pads with 7-layer protection, offered in a strip pack across three lengths — 245 mm, 290 mm and 330 mm — with high absorption tuned to each size.',
    image: '/images/product-bamboo.jpg',
    imageAlt: 'Comfylady Bamboo sanitary pad with bamboo stalks and flowers',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Bamboo' },
      { label: 'Pack', value: 'Strip Pack' },
      { label: 'Sizes', value: '245 · 290 · 330 mm' },
      { label: 'Construction', value: '7-Layer Protection' },
      { label: 'Absorption', value: '80 – 350 ml' },
    ],
    features: [
      '7-layer protection',
      '245 mm — absorption 80–150 ml',
      '290 mm — absorption 120–250 ml',
      '330 mm — absorption 150–350 ml',
      '2 wings · strip pack',
    ],
    benefits: [
      'Bamboo-based, skin-friendly materials',
      'High absorption across three sizes',
      'Print on chip, release paper and outer-cover options',
      'Customised packaging available',
    ],
    usage: [
      'Pick the length that matches your flow, from 245 to 330 mm.',
      'Change every 4 to 6 hours, or sooner as needed.',
      'Store in a cool, dry place away from moisture.',
    ],
    bestFor: 'Bamboo · 7-Layer',
  },
  {
    id: 'panty-liner',
    slug: 'panty-liners',
    name: 'Panty Liners',
    size: '180 · 190 mm',
    tagline: 'Light, everyday freshness',
    description:
      'Slim panty liners in 180 mm and 190 mm for daily freshness and light protection — ideal between periods, for spotting, and for light bladder leakage.',
    image: '/images/product-panty-liner.jpg',
    imageAlt: 'Comfylady panty liner pack',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Panty Liner' },
      { label: 'Type', value: 'Everyday' },
      { label: 'Sizes', value: '180 · 190 mm' },
      { label: 'Use', value: 'Daily / Light flow' },
      { label: 'Materials', value: 'Skin-friendly' },
    ],
    features: [
      '180 mm and 190 mm lengths',
      'Slim, discreet everyday liner',
      'Skin-friendly materials',
      'Suitable for light bladder leakage',
      'Customised packaging available',
    ],
    benefits: [
      'Everyday freshness and light protection',
      'Barely-there comfort under any clothing',
      'Ideal between periods and for spotting',
      'A dependable daily companion',
    ],
    usage: [
      'Use for daily freshness, spotting and light flow.',
      'Change through the day as needed.',
      'Store in a cool, dry place away from moisture.',
    ],
    bestFor: 'Everyday freshness',
  },
  {
    id: 'vending-machine',
    slug: 'sanitary-napkin-vending-machines',
    name: 'Sanitary Napkin Vending Machines',
    size: 'Manual · Auto · UPI',
    tagline: 'Smart hygiene dispensing for modern spaces',
    description:
      'Sanitary napkin vending machines in manual, automatic and UPI-enabled models, with 25 to 200 piece capacities. A durable metal body and hygienic dispensing make them ideal for schools, offices, hospitals and public washrooms.',
    image: '/images/product-vending-machine.jpg',
    imageAlt: 'Comfylady sanitary napkin vending machines',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Vending Machine' },
      { label: 'Models', value: 'Manual · Auto · UPI' },
      { label: 'Capacity', value: '25 – 200 pieces' },
      { label: 'Body', value: 'Durable Metal' },
      { label: 'Payment', value: 'Coin & Digital' },
    ],
    features: [
      'Manual, automatic and UPI-enabled models',
      'Capacity options: 25, 50, 100, 200 pieces',
      'Durable metal body, compact design',
      'Coin and digital payment support',
      'Easy installation and low maintenance',
    ],
    benefits: [
      'Hygienic, user-friendly dispensing',
      'Suitable for schools, colleges and hospitals',
      'Ideal for offices, public washrooms and retail brands',
      'Tailor-made to your requirement',
    ],
    usage: [
      'Deploy in schools, colleges, offices, hospitals and public washrooms.',
      'Choose the model and capacity to match footfall.',
      'Contact our team for installation and servicing.',
    ],
    bestFor: 'Smart hygiene infrastructure',
  },
  {
    id: 'incinerator',
    slug: 'sanitary-pad-incinerators',
    name: 'Sanitary Pad Incinerators',
    size: '100 pads / day',
    tagline: 'Safe, hygienic, eco-friendly disposal',
    description:
      'Sanitary pad incinerators for safe, smoke-controlled disposal — 100 pads per day, with heavy-duty medical-waste models for high-usage areas. Stainless-steel construction with odour control and low ash residue.',
    image: '/images/product-incinerator.jpg',
    imageAlt: 'Comfylady sanitary pad incinerator',
    imagePrompt: 'Brochure-derived product image',
    specs: [
      { label: 'Category', value: 'Incinerator' },
      { label: 'Build', value: 'Stainless Steel' },
      { label: 'Capacity', value: '100 pads / day' },
      { label: 'Burning', value: 'Smoke-Controlled' },
      { label: 'Disposal', value: 'Eco-Friendly' },
    ],
    features: [
      'Capacity: 100 pads per day',
      'Heavy-duty medical-waste models available',
      'Smoke-controlled burning and odour reduction',
      'Stainless steel construction',
      'Safe operation, energy efficient',
    ],
    benefits: [
      'Fast, hygienic disposal',
      'Low ash residue and odour control',
      'Eco-friendly and energy efficient',
      'Suitable for high-usage areas',
    ],
    usage: [
      'Ideal for schools, offices, hospitals and public facilities.',
      'Follow the operating guide for safe use.',
      'Contact our team for capacity and servicing options.',
    ],
    bestFor: 'Safe, hygienic disposal',
  },
]

export const journeySteps: TimelineStep[] = [
  {
    id: 'sourcing',
    step: '01',
    title: 'Material Selection',
    description:
      'It begins with what touches her skin. Top sheets, cores and back sheets are sourced against skin-friendliness, breathability and consistency before a single roll enters the line.',
    image: '/images/brand-story-secondary.jpg',
    imageAlt: 'Macro detail of a cottony soft non-woven top sheet',
  },
  {
    id: 'engineering',
    step: '02',
    title: 'Layer Engineering',
    description:
      'Each variant is engineered layer by layer — intake, distribution, lock and barrier — so absorption moves downward and outward rather than back toward the surface.',
    image: '/images/layer-engineering.jpg',
    imageAlt: 'A woman in a bright living room presenting a Comfylady pad, showing its engineered layered surface',
  },
  {
    id: 'production',
    step: '03',
    title: 'Hygienic Production',
    description:
      'Converting runs under strict hygiene protocols with controlled handling, so the pad that leaves the line is as clean as the materials that entered it.',
    image: '/images/quality-manufacturing.jpg',
    imageAlt: 'A converting line running under controlled hygienic conditions',
  },
  {
    id: 'testing',
    step: '04',
    title: 'Verification',
    description:
      'Batches are checked against absorption, adhesion, dimensional and integrity criteria. Capacities from 40 ml to over 130 ml are confirmed, not assumed.',
    image: '/images/quality-hero.jpg',
    imageAlt: 'Finished pads being checked against absorption and integrity criteria',
  },
  {
    id: 'delivery',
    step: '05',
    title: 'Packing & Global Despatch',
    description:
      'Sealed, cartoned and prepared for export or private-label distribution — reaching retailers, institutions and partner brands across markets.',
    image: '/images/about-capabilities.jpg',
    imageAlt: 'Cartoned stock prepared for export and private-label distribution',
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
    name: 'Amina N.',
    role: 'Everyday wearer',
    location: 'Lagos, Nigeria',
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
      'Consistency batch after batch is what keeps us reordering. Our retail partners across the region have not raised a single quality complaint.',
    name: 'Kofi A.',
    role: 'Regional Distributor',
    location: 'Accra, Ghana',
  },
  {
    id: 't4',
    quote:
      'For our community distribution programme, affordability mattered as much as safety. Comfylady let us have both, at scale.',
    name: 'Zanele M.',
    role: 'Programme Lead, NGO',
    location: 'Johannesburg, South Africa',
  },
  {
    id: 't5',
    quote:
      'The drynet variant is the one I recommend to friends in humid cities. It genuinely stays dry on the surface.',
    name: 'Grace O.',
    role: 'Everyday wearer',
    location: 'Dar es Salaam, Tanzania',
  },
  {
    id: 't6',
    quote:
      'Their team handled customisation on length and absorption without friction. Communication was clear from quote to shipment.',
    name: 'Tariq S.',
    role: 'Procurement Director',
    location: 'Cairo, Egypt',
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
    title: 'A complete feminine hygiene portfolio',
    subtitle:
      'From straight, maxi, ultra-thin and bamboo sanitary pads to panty liners, vending machines and incinerators — engineered for comfort, protection and dignity.',
    note: 'This site is informational. For pricing, samples or bulk supply, please contact our team.',
  },
  specTable: {
    eyebrow: 'Specifications',
    title: 'Size & specification chart',
    subtitle: 'Sizes, weights and absorption across the Comfylady pad range.',
  },
  grid: {
    eyebrow: 'The Range',
    title: 'Explore the portfolio',
    subtitle: 'Select a product to see its features, benefits and specifications.',
  },
  highlights: {
    eyebrow: 'Core Features',
    title: 'Engineered for comfort and protection',
    subtitle: 'The features built into the Comfylady range.',
    items: [
      {
        id: 'layers',
        icon: 'Layers',
        title: 'Layered Protection',
        description:
          '6-layer tissue wrap on straight and maxi pads, 8-layer protection on ultra thin and 7-layer on bamboo — fluid moves down and locks in.',
      },
      {
        id: 'leaklock',
        icon: 'ShieldCheck',
        title: 'Side Leak-Lock Channels',
        description:
          'Raised channels along the edges of the ultra-thin pads guide flow inward and guard against side leaks on the heaviest days.',
      },
      {
        id: 'comfort',
        icon: 'Feather',
        title: 'High Comfort & Protection',
        description:
          'A soft, body-hugging surface paired with dependable leak protection across every size, from L to XXL.',
      },
      {
        id: 'skin',
        icon: 'Leaf',
        title: 'Skin-Friendly Materials',
        description:
          'Breathable, non-irritating materials — including bamboo-based options — chosen with sensitive skin in mind.',
      },
      {
        id: 'chip',
        icon: 'ScanLine',
        title: 'Chip Pad Options',
        description:
          'Available with or without a chip pad, with print-on-chip, release paper and outer-cover customisation.',
      },
      {
        id: 'packaging',
        icon: 'Package',
        title: 'Customised Packaging',
        description:
          'Strip packs and tailor-made packaging with an excellent printing finish, in matte or glossy.',
      },
    ],
  },
  b2b: {
    eyebrow: 'B2B Services & Partnerships',
    title: 'Build your brand with Comfylady',
    subtitle:
      'A manufacturer, importer and exporter offering end-to-end partnerships — backed by BIS, ISO, IAF, WHO-GMP, CE and FDA compliance.',
    items: [
      {
        id: 'oem',
        icon: 'Factory',
        title: 'OEM',
        description:
          'Manufacture your own feminine-hygiene brand on our lines, built to your specification.',
      },
      {
        id: 'odm',
        icon: 'SlidersHorizontal',
        title: 'ODM',
        description:
          'Original design manufacturing — we develop the product and packaging with you, end to end.',
      },
      {
        id: 'cbm',
        icon: 'PackageCheck',
        title: 'CBM',
        description:
          'Complete brand manufacturing, from formulation and pads to finished, market-ready packs.',
      },
      {
        id: 'dealership',
        icon: 'Handshake',
        title: 'Dealership',
        description:
          'Distributor and dealership opportunities for regional and national partners.',
      },
      {
        id: 'tender',
        icon: 'BadgeCheck',
        title: 'Tender',
        description:
          'Institutional and government tender supply, backed by full certification and compliance.',
      },
      {
        id: 'export',
        icon: 'Globe2',
        title: 'Export Facilities',
        description:
          'Export facilities available — bulk supply for international distributors and buyers.',
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
    file: 'hero-comfylady.jpg',
    usage:
      'Home — Section 1 Hero. Full-bleed background behind centred cream type, ' +
      'graded with a warm ink scrim. Rendered at 100vw on every device, so the ' +
      'same file is cropped from ultrawide down to a narrow portrait phone.',
    aspect:
      '16:9 landscape master at 3840×2160 or wider. It must also survive a 9:16 ' +
      'centre crop: the subject sits at roughly 35% from the left, which is where ' +
      'both the phone and the desktop crops are anchored.',
    prompt:
      'Cinematic editorial photograph for a premium feminine-care brand. A confident ' +
      'woman in her late twenties walks unhurried through a sunlit minimalist courtyard ' +
      'of pale limewashed plaster walls, wearing an unbranded blush-pink linen blazer over ' +
      'an ivory top and wide cream trousers, mid-stride, relaxed shoulders, a calm ' +
      'self-assured half-smile, looking just past the camera. Place her in the left third ' +
      'of the frame at about 35% from the left edge, full or three-quarter length, with ' +
      'her head well below the top edge; keep the centre and right two-thirds quiet and ' +
      'uncluttered — soft plaster, one out-of-focus olive tree, nothing that competes — ' +
      'because large centred type is set over that area. Late-afternoon golden light ' +
      'raking from the right, long soft shadows across the ground, luminous and airy along ' +
      'the top of the frame, naturally deeper and shadowed towards the bottom. Palette of ' +
      'warm cream, blush pink, soft rose and nude with muted terracotta accents; no cool ' +
      'blues, no neon. Shot on medium format, 50mm at f/2.2, shallow depth of field, ' +
      'creamy falloff, natural skin texture, fine film grain, matte editorial finish. ' +
      'Calm, dignified, aspirational — a luxury campaign frame, not a stock photo. ' +
      'No text, no logos, no watermarks, no product packaging, no plastic sheen, no ' +
      'harsh contrast, nothing crossing the centre of the frame at head height.',
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
    id: 'product-straight',
    usage: 'Products — Straight Sanitary Pads card (L · XL+ · XXL)',
    file: 'product-straight.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Minimal luxury product photograph of three unbranded white sanitary pads of clearly increasing length arranged in a neat evenly spaced row on a smooth blush-pink paper backdrop, each with a soft cottony quilted top sheet and folded wings, reading as small, medium and large (L 245 mm, XL+ 290 mm, XXL 330 mm). Soft even studio lighting with one gentle shadow beneath, clean geometry, generous negative space above and below. Shot on 85mm at f/8, crisp fabric texture, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-maxi',
    usage: 'Products — Maxi Sanitary Pads card (trifold & straight)',
    file: 'product-maxi.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Minimal luxury product photograph pairing a neatly folded unbranded trifold sanitary-pad pack in a soft matte-white wrapper beside a single open white maxi pad with a cottony quilted top sheet and wings, on a soft warm nude paper backdrop. Soft studio lighting, one delicate shadow, balanced composition with negative space around the two objects. Shot on 85mm at f/8, tactile fabric and wrapper texture, matte editorial retouch, premium beauty catalogue aesthetic, no text, no logos, no branding.',
  },
  {
    id: 'product-ultra-thin',
    usage: 'Products — Ultra Thin Sanitary Pads card (trifold, slim)',
    file: 'product-ultra-thin.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Minimal luxury product photograph of a slim unbranded trifold sanitary-pad pack in a soft matte-white wrapper standing upright on a smooth blush backdrop, with a single ultra-thin pad shown close to edge-on beside it to emphasise its remarkably slim profile. Low raking studio light to sculpt the thin silhouette, soft off-white gradient background, elegant negative space above. Shot on 100mm at f/8, precise edge detail, matte editorial retouch, premium minimalist product photography, no text, no logos, no packaging.',
  },
  {
    id: 'product-bamboo',
    usage: 'Products — Bamboo Sanitary Pads card',
    file: 'product-bamboo.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Minimal luxury product photograph of a single unbranded natural-white bamboo sanitary pad with a soft quilted top sheet, laid on a smooth pale rose backdrop with a few fresh green bamboo leaves and a soft-focus bamboo stalk to one side as an eco cue. Soft natural-feeling studio light, gentle single shadow, calm and organic mood, warm cream and soft green accents within a rose palette. Shot on 85mm at f/8, fine fibre texture, matte editorial retouch, sustainable beauty brand aesthetic, no text, no logos, no packaging.',
  },
  {
    id: 'product-panty-liner',
    usage: 'Products — Panty Liners card (180 · 190 mm)',
    file: 'product-panty-liner.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Minimal luxury product photograph of a small slim unbranded white panty liner with a soft cottony surface, shown flat and slightly curved on a smooth warm nude paper backdrop beside a neatly folded slim liner wrapper, conveying everyday lightness and discretion. Soft even studio lighting, one delicate shadow, quiet composition with wide margins. Shot on 100mm at f/8, fine texture detail, matte editorial retouch, high-end beauty catalogue aesthetic, no text, no logos, no branding.',
  },
  {
    id: 'product-vending-machine',
    usage: 'Products — Sanitary Napkin Vending Machines card',
    file: 'product-vending-machine.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Clean minimal product photograph of a modern wall-mounted sanitary-napkin vending machine with a smooth rose-pink and white powder-coated metal body, a small dispensing tray at the base and a subtle coin and UPI/digital slot on the front, mounted on a pale limewashed wall in a bright minimal washroom setting. Soft even daylight, gentle shadow, premium and hygienic rather than industrial, warm rose-neutral colour grade. Shot on 35mm at f/5.6, immaculate surfaces, editorial corporate product photography, no text, no visible brand marks, no clutter.',
  },
  {
    id: 'product-incinerator',
    usage: 'Products — Sanitary Pad Incinerators card',
    file: 'product-incinerator.jpg',
    aspect: '4:5 portrait — subject centred so it survives a 16:11 detail crop',
    prompt:
      'Clean minimal product photograph of a compact sanitary-pad incinerator unit with a smooth rose-pink and white powder-coated stainless-steel body, a rounded top disposal opening and simple front controls, standing on a pale floor against a limewashed wall in a bright minimal utility space. Soft even daylight, gentle shadow, premium and hygienic look, warm rose-neutral colour grade. Shot on 35mm at f/5.6, spotless surfaces, editorial corporate product photography, no text, no visible brand marks, no clutter.',
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
