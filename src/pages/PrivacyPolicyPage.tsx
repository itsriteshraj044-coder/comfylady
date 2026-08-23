import Seo from '../components/Seo'
import LegalPage from '../sections/shared/LegalPage'
import { legalPages, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

const { privacy } = legalPages

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        meta={seo.privacy}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]),
        ]}
      />
      <LegalPage
        eyebrow={privacy.eyebrow}
        title={privacy.title}
        updated={privacy.updated}
        intro={privacy.intro}
        sections={privacy.sections}
        crumbLabel="Privacy Policy"
        crumbPath="/privacy-policy"
      />
    </>
  )
}
