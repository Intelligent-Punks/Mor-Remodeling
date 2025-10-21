# SEO Implementation Documentation

## Overview

This document describes the SEO implementation for the Mor Remodeling website, including meta tags, Open Graph tags, and structured data (JSON-LD schema).

## Implementation Structure

### 1. Core Components

#### SEOHead Component (`src/components/SEOHead.tsx`)
- Manages all SEO-related meta tags using `react-helmet-async`
- Handles:
  - Basic meta tags (title, description, keywords)
  - Canonical URLs
  - Open Graph tags for social media
  - Twitter Card tags
  - JSON-LD structured data (schema.org)

#### HelmetProvider Setup (`src/main.tsx`)
- Wraps the entire app with `HelmetProvider` for SSR compatibility
- Enables dynamic head tag management across all pages

### 2. SEO Data Structure

All pages include SEO data in their content files:

```typescript
interface SEOData {
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
```

### 3. Pages with SEO Implementation

#### Static Pages
1. **Home Page** (`src/content/home.ts`)
   - Schema Type: `Organization`
   - Includes company info, contact details, and social links

2. **About Page** (`src/content/aboutPage.ts`)
   - Schema Type: `AboutPage`
   - Features company history, founding date, and certifications

3. **Services Page** (`src/content/servicesPage.ts`)
   - Schema Type: `Service`
   - Lists all service types offered

4. **Projects Page** (`src/content/projectsPage.ts`)
   - Schema Type: `CollectionPage`
   - Showcases portfolio of completed projects

5. **Contact Page** (`src/content/contactPage.ts`)
   - Schema Type: `ContactPage`
   - Includes full contact information and address

#### Dynamic Pages

1. **Service Detail Pages** (`src/content/serviceDetails.ts`)
   - Function: `generateServiceSEO(service: ServiceDetail)`
   - Schema Type: `Service`
   - Dynamically generates SEO based on service data
   - Includes service name, description, area served, and provider info

2. **Project Detail Pages** (`src/content/projectDetails.ts`)
   - Function: `generateProjectSEO(project: ProjectDetail)`
   - Schema Type: `Project`
   - Dynamically generates SEO based on project data
   - Includes project name, location, completion date, and creator info

## SEO Features

### Meta Tags
- **Title**: Dynamic titles with site name
- **Description**: Page-specific descriptions (150-160 characters)
- **Keywords**: Relevant keywords for each page

### Open Graph (Social Media)
- **og:title**: Optimized for social sharing
- **og:description**: Engaging descriptions for social media
- **og:image**: Featured images for each page
- **og:type**: Appropriate content types (website, article, etc.)
- **og:url**: Canonical URLs

### Twitter Cards
- **twitter:card**: Large image summaries
- **twitter:title**: Twitter-optimized titles
- **twitter:description**: Twitter-optimized descriptions
- **twitter:image**: Featured images

### Structured Data (Schema.org)
Implemented JSON-LD schemas:
- **Organization**: Company information
- **Service**: Service offerings
- **ContactPage**: Contact information
- **AboutPage**: Company background
- **Project**: Completed projects
- **CollectionPage**: Project portfolio

## Usage Examples

### Using SEO in Static Pages
```tsx
import home from '@/content/home'
import SEOHead from '@/components/SEOHead'

export default function HomePage() {
  return (
    <div>
      <SEOHead seo={home.seo} />
      {/* Page content */}
    </div>
  )
}
```

### Using SEO in Dynamic Pages
```tsx
import { getServiceBySlug, generateServiceSEO } from '@/content/serviceDetails'
import SEOHead from '@/components/SEOHead'

export default function ServiceDetailPage() {
  const service = getServiceBySlug(slug)
  const seo = generateServiceSEO(service)
  
  return (
    <div>
      <SEOHead seo={seo} />
      {/* Page content */}
    </div>
  )
}
```

## Future Enhancements

When migrating to a backend API:
1. SEO data will be included in API responses
2. Content files will be replaced with API calls
3. The SEO structure remains the same - only data source changes
4. No component changes required

## Testing SEO

### Manual Testing
1. View page source to verify meta tags
2. Use browser DevTools to inspect `<head>` content
3. Check that JSON-LD schema is valid

### Online Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Schema.org Validator**: https://validator.schema.org/

### Verification Checklist
- ✅ All pages have unique titles
- ✅ All descriptions are 150-160 characters
- ✅ All pages have appropriate keywords
- ✅ Open Graph images are set
- ✅ Canonical URLs are correct
- ✅ JSON-LD schema validates successfully
- ✅ No duplicate meta tags
- ✅ Mobile-friendly meta viewport tag present

## Dependencies

```json
{
  "react-helmet-async": "^2.0.5"
}
```

Installed with: `npm install react-helmet-async --legacy-peer-deps`

## Notes

- The implementation is fully compatible with React 19
- All SEO data is typed with TypeScript for type safety
- Schema.org structured data follows best practices
- The solution is designed for easy migration to CMS or API

