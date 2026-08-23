import Seo from '../components/Seo'
import LegalPage from '../sections/shared/LegalPage'
import { legalPages, seo } from '../content/content'
import { breadcrumbSchema, organisationSchema } from '../utils/schema'

const { terms } = legalPages

export default function TermsPage() {
  return (
    <>
      <Seo
        meta={seo.terms}
        schema={[
          organisationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Terms & Conditions', path: '/terms-and-conditions' },
          ]),
        ]}
      />
      <LegalPage
        eyebrow={terms.eyebrow}
        title={terms.title}
        updated={terms.updated}
        intro={terms.intro}
        sections={terms.sections}
        crumbLabel="Terms & Conditions"
        crumbPath="/terms-and-conditions"
      />
    </>
  )
}
