import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import PillarsSection from '../sections/why/PillarsSection'
import ComparisonSection from '../sections/why/ComparisonSection'
import LifestyleSection from '../sections/why/LifestyleSection'
import WhyChooseSection from '../sections/home/WhyChooseSection'
import CtaSection from '../sections/shared/CtaSection'
import { seo, whyPage } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

export default function WhyComfyladyPage() {
  return (
    <>
      <Seo
        meta={seo.why}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Why Comfylady', path: '/why-comfylady' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={whyPage.hero.eyebrow}
        title={whyPage.hero.title}
        subtitle={whyPage.hero.subtitle}
        image={whyPage.hero.image}
        imageAlt={whyPage.hero.imageAlt}
        imageLabel="Wellness scene"
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Why Comfylady', path: '/why-comfylady' },
        ]}
      />

      <PillarsSection />
      <ComparisonSection />
      <LifestyleSection />
      <WhyChooseSection />

      <CtaSection
        eyebrow={whyPage.cta.eyebrow}
        title={whyPage.cta.title}
        subtitle={whyPage.cta.subtitle}
        primaryCta={whyPage.cta.primaryCta}
        secondaryCta={whyPage.cta.secondaryCta}
      />
    </>
  )
}
