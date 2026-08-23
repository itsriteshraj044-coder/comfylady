import Seo from '../components/Seo'
import HeroSection from '../sections/home/HeroSection'
import BrandIntroSection from '../sections/home/BrandIntroSection'
import ProductShowcaseSection from '../sections/home/ProductShowcaseSection'
import WhyChooseSection from '../sections/home/WhyChooseSection'
import JourneySection from '../sections/home/JourneySection'
import QualityStandardsSection from '../sections/home/QualityStandardsSection'
import TestimonialsSection from '../sections/home/TestimonialsSection'
import FaqSection from '../sections/home/FaqSection'
import CtaSection from '../sections/shared/CtaSection'
import { home, seo } from '../content/content'
import { faqSchema, organisationSchema, productListSchema, websiteSchema } from '../utils/schema'

export default function HomePage() {
  return (
    <>
      <Seo
        meta={seo.home}
        schema={[organisationSchema, websiteSchema, productListSchema, faqSchema]}
      />

      <HeroSection />
      <BrandIntroSection />
      <ProductShowcaseSection />
      <WhyChooseSection />
      <JourneySection />
      <QualityStandardsSection />
      <TestimonialsSection />
      <FaqSection />
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
