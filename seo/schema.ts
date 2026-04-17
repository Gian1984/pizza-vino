import {
  BRAND_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_LOCALITY,
  BUSINESS_ADDRESS_REGION,
  CUISINES,
  CURRENCIES_ACCEPTED,
  BUSINESS_LATITUDE,
  BUSINESS_LONGITUDE,
  BUSINESS_PHONE,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  PAYMENT_ACCEPTED,
  PRICE_RANGE,
} from '~/seo/site'

type PageSchemaOptions = {
  url: string
  title: string
  description: string
  image: string
  locale: string
}

type FaqQuestion = {
  question: string
  answer: string
}

export function buildRestaurantSchema(options: PageSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${options.url}#restaurant`,
    name: BRAND_NAME,
    image: options.image,
    url: options.url,
    telephone: BUSINESS_PHONE,
    servesCuisine: CUISINES,
    priceRange: PRICE_RANGE,
    paymentAccepted: PAYMENT_ACCEPTED,
    currenciesAccepted: CURRENCIES_ACCEPTED,
    openingHours: OPENING_HOURS,
    inLanguage: options.locale,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS,
      addressLocality: BUSINESS_ADDRESS_LOCALITY,
      addressRegion: BUSINESS_ADDRESS_REGION,
      addressCountry: BUSINESS_ADDRESS_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_LATITUDE,
      longitude: BUSINESS_LONGITUDE,
    },
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  }
}

export function buildWebPageSchema(options: PageSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.title,
    description: options.description,
    inLanguage: options.locale,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: options.image,
    },
  }
}

export function buildWebsiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: BRAND_NAME,
    inLanguage: ['fr-BE', 'en-BE', 'it-BE'],
  }
}

export function buildOrganizationSchema(siteUrl: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: BRAND_NAME,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: image,
    },
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE,
      contactType: 'customer service',
      areaServed: 'BE',
      availableLanguage: ['fr', 'en', 'it'],
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

export function buildFaqSchema(questions: FaqQuestion[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
