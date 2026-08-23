import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import HighlightsSection from '../sections/products/HighlightsSection'
import ProductGridSection from '../sections/products/ProductGridSection'
import SpecTableSection from '../sections/products/SpecTableSection'
import B2bSection from '../sections/products/B2bSection'
import CtaSection from '../sections/shared/CtaSection'
import { fadeUp, viewportSoft } from '../animations/variants'
import { home, productsPage, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema, productListSchema } from '../utils/schema'

export default function ProductsPage() {
  return (
    <>
      <Seo
        meta={seo.products}
        schema={[
          organisationSchema,
          productListSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={productsPage.hero.eyebrow}
        title={productsPage.hero.title}
        subtitle={productsPage.hero.subtitle}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
        ]}
      />

      {/* Informational-site notice */}
      <div className="border-y border-ink-line bg-blush-100/50">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          className="shell py-5 text-center font-sans text-[0.7rem] uppercase tracking-wide2 text-ink-soft"
        >
          {productsPage.hero.note}
        </motion.p>
      </div>

      <ProductGridSection />
      <SpecTableSection />
      <HighlightsSection />
      <B2bSection />

      <CtaSection
        eyebrow={home.cta.eyebrow}
        title={home.cta.title}
        subtitle={home.cta.subtitle}
        primaryCta={home.cta.primaryCta}
        secondaryCta={home.cta.secondaryCta}
      />
    </>
  )
}
