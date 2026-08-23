import Seo from '../components/Seo'
import PageHero from '../sections/shared/PageHero'
import StorySection from '../sections/about/StorySection'
import MissionVisionSection from '../sections/about/MissionVisionSection'
import ValuesSection from '../sections/about/ValuesSection'
import FounderSection from '../sections/about/FounderSection'
import CapabilitiesSection from '../sections/about/CapabilitiesSection'
import CtaSection from '../sections/shared/CtaSection'
import { about, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

export default function AboutPage() {
  return (
    <>
      <Seo
        meta={seo.about}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
        imageLabel="About banner"
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about' },
        ]}
      />

      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <FounderSection />
      <CapabilitiesSection />

      <CtaSection
        eyebrow={about.cta.eyebrow}
        title={about.cta.title}
        subtitle={about.cta.subtitle}
        primaryCta={about.cta.primaryCta}
        secondaryCta={about.cta.secondaryCta}
      />
    </>
  )
}
