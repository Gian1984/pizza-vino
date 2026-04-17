import type { SeoEntry } from '~/seo/types'

export function usePageSeo(entry: SeoEntry) {
  const route = useRoute()

  useSeoMeta({
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    ogType: 'website',
    ogTitle: entry.ogTitle,
    ogDescription: entry.ogDescription,
    ogUrl: entry.canonical,
    ogImage: entry.ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: entry.ogTitle,
    twitterDescription: entry.ogDescription,
    twitterImage: entry.ogImage,
    robots: entry.robots,
  })

  useHead({
    htmlAttrs: {
      lang: entry.locale,
    },
    link: [
      { rel: 'canonical', href: entry.canonical },
      { rel: 'alternate', hreflang: 'fr', href: entry.alternates.fr },
      { rel: 'alternate', hreflang: 'en', href: entry.alternates.en },
      { rel: 'alternate', hreflang: 'it', href: entry.alternates.it },
      { rel: 'alternate', hreflang: 'x-default', href: entry.alternates.fr },
    ],
    meta: [
      { property: 'og:locale', content: entry.locale === 'fr' ? 'fr_BE' : entry.locale === 'en' ? 'en_BE' : 'it_BE' },
      ...(Object.entries(entry.alternates)
        .filter(([locale]) => locale !== entry.locale)
        .map(([locale]) => ({
          property: 'og:locale:alternate',
          content: locale === 'fr' ? 'fr_BE' : locale === 'en' ? 'en_BE' : 'it_BE',
        }))),
    ],
    script: entry.schema.map((item, index) => ({
      key: `${route.path}-schema-${index}`,
      type: 'application/ld+json',
      children: JSON.stringify(item),
    })),
  })
}
