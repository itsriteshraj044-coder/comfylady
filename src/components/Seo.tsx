import { Helmet } from 'react-helmet-async'
import { brand } from '../content/content'
import type { SeoMeta } from '../types'

interface SeoProps {
  meta: SeoMeta
  /** Extra JSON-LD blocks for this page. */
  schema?: Record<string, unknown>[]
  image?: string
}

/**
 * Per-page head management: title, description, keywords, canonical,
 * Open Graph, Twitter card and JSON-LD structured data.
 */
export default function Seo({ meta, schema = [], image }: SeoProps) {
  const url = `${brand.domain}${meta.path === '/' ? '' : meta.path}`
  const ogImage = `${brand.domain}${image ?? brand.ogImage}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {schema.map((block, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
