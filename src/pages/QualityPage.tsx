import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import ManufacturingSection from '../sections/quality/ManufacturingSection'
import DisciplineGrid from '../sections/quality/DisciplineGrid'
import StandardsSection from '../sections/quality/StandardsSection'
import SustainabilitySection from '../sections/quality/SustainabilitySection'
import CtaSection from '../sections/shared/CtaSection'
import { qualityPage, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

export default function QualityPage() {
  return (
    <>
      <Seo
        meta={seo.quality}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Quality & Sustainability', path: '/quality' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={qualityPage.hero.eyebrow}
        title={qualityPage.hero.title}
        subtitle={qualityPage.hero.subtitle}
        image={qualityPage.hero.image}
        imageAlt={qualityPage.hero.imageAlt}
        imageLabel="Quality banner"
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Quality', path: '/quality' },
        ]}
      />

      <ManufacturingSection />

      <DisciplineGrid
        eyebrow={qualityPage.safety.eyebrow}
        title={qualityPage.safety.title}
        subtitle={qualityPage.safety.subtitle}
        items={qualityPage.safety.items}
        tone="shell"
      />

      <StandardsSection />

      <DisciplineGrid
        eyebrow={qualityPage.testing.eyebrow}
        title={qualityPage.testing.title}
        subtitle={qualityPage.testing.subtitle}
        items={qualityPage.testing.items}
        tone="cream"
      />

      <SustainabilitySection />

      <CtaSection
        eyebrow={qualityPage.cta.eyebrow}
        title={qualityPage.cta.title}
        subtitle={qualityPage.cta.subtitle}
        primaryCta={qualityPage.cta.primaryCta}
        secondaryCta={qualityPage.cta.secondaryCta}
      />
    </>
  )
}
