import { Helmet } from 'react-helmet-async'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonical?: string
  schema?: Record<string, any>
}

interface SEOHeadProps {
  seo: SEOData
  siteName?: string
}

export default function SEOHead({ seo, siteName = 'Mor Remodeling' }: SEOHeadProps) {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonical,
    schema,
  } = seo

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const finalOgTitle = ogTitle || fullTitle
  const finalOgDescription = ogDescription || description
  const currentUrl = canonical || window.location.href

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}

