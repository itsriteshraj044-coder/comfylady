import { brand, contactDetails, faqs, products } from '../content/content'

/** Organisation + local business — emitted on every page. */
export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: brand.legalName,
  alternateName: brand.name,
  url: brand.domain,
  logo: `${brand.domain}/logo.svg`,
  image: `${brand.domain}${brand.ogImage}`,
  description: brand.description,
  foundingDate: '2026-06-03',
  founder: { '@type': 'Person', name: brand.founder },
  slogan: brand.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opp. Dena Bank, Taloja',
    addressLocality: 'Panvel',
    addressRegion: 'Maharashtra',
    postalCode: '410208',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8591500675',
      contactType: 'sales',
      email: contactDetails.emailSales,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-8591500675',
      contactType: 'customer support',
      email: contactDetails.emailGeneral,
      areaServed: 'IN',
    },
  ],
  sameAs: [],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brand.name,
  url: brand.domain,
  description: brand.description,
  publisher: { '@type': 'Organization', name: brand.legalName },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

/** Informational product listing — no offers, since this is not a store. */
export const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Comfylady Product Range',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: product.name,
      description: product.description,
      category: 'Feminine Hygiene / Sanitary Pads',
      brand: { '@type': 'Brand', name: brand.name },
      image: `${brand.domain}${product.image}`,
      additionalProperty: product.specs.map((spec) => ({
        '@type': 'PropertyValue',
        name: spec.label,
        value: spec.value,
      })),
    },
  })),
}

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${brand.domain}${crumb.path === '/' ? '' : crumb.path}`,
  })),
})
