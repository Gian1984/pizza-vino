import { buildBreadcrumbSchema, buildFaqSchema, buildOrganizationSchema, buildRestaurantSchema, buildWebPageSchema, buildWebsiteSchema } from '~/seo/schema'
import { DEFAULT_OG_IMAGE, withSiteUrl } from '~/seo/site'
import type { SeoEntry } from '~/seo/types'

export function createSeoRegistry(siteUrl: string): Record<'home-fr' | 'home-en' | 'home-it', SeoEntry> {
  const frUrl = withSiteUrl(siteUrl, '/')
  const enUrl = withSiteUrl(siteUrl, '/en')
  const itUrl = withSiteUrl(siteUrl, '/it')
  const image = withSiteUrl(siteUrl, DEFAULT_OG_IMAGE)
  const websiteSchema = buildWebsiteSchema(siteUrl)
  const organizationSchema = buildOrganizationSchema(siteUrl, image)

  return {
    'home-fr': {
      locale: 'fr',
      path: '/',
      title: 'Pizza Vino Ixelles | Pizza napolitaine, vins italiens et livraison à Bruxelles',
      description:
        'Pizza Vino à Ixelles propose une pizza napolitaine artisanale, des vins italiens soigneusement choisis, la vente à emporter et la livraison à Bruxelles.',
      ogTitle: 'Pizza Vino à Ixelles | Pizzeria napolitaine et vins italiens',
      ogDescription:
        'Découvrez une adresse italienne à Ixelles pour manger sur place, commander à emporter ou se faire livrer une vraie pizza napolitaine.',
      ogImage: image,
      keywords:
        'pizzeria ixelles, pizza napolitaine ixelles, restaurant italien ixelles, pizza bruxelles, livraison pizza ixelles, pizza vino',
      canonical: frUrl,
      alternates: { fr: frUrl, en: enUrl, it: itUrl },
      robots: 'index,follow',
      schema: [
        websiteSchema,
        organizationSchema,
        buildRestaurantSchema({
          url: frUrl,
          title: 'Pizza Vino à Ixelles',
          description:
            'Pizzeria napolitaine à Ixelles avec ingrédients italiens, vins sélectionnés, vente à emporter et livraison.',
          image,
          locale: 'fr-BE',
        }),
        buildWebPageSchema({
          url: frUrl,
          title: 'Pizza Vino Ixelles | Pizza napolitaine, vins italiens et livraison à Bruxelles',
          description:
            'Pizza Vino à Ixelles propose une pizza napolitaine artisanale, des vins italiens soigneusement choisis, la vente à emporter et la livraison à Bruxelles.',
          image,
          locale: 'fr-BE',
        }),
        buildBreadcrumbSchema([
          { name: 'Accueil', item: frUrl },
        ]),
        buildFaqSchema([
          {
            question: 'Où se trouve Pizza Vino à Ixelles ?',
            answer: 'Pizza Vino se trouve Avenue des Saisons 15, 1050 Ixelles, à Bruxelles.',
          },
          {
            question: 'Peut-on commander Pizza Vino en livraison ?',
            answer: 'Oui, Pizza Vino propose la livraison via plusieurs plateformes partenaires ainsi que la vente à emporter.',
          },
          {
            question: 'Quel style de pizza propose Pizza Vino ?',
            answer: 'La maison est orientée vers une pizza napolitaine artisanale avec pâte légère, cuisson rapide et ingrédients italiens.',
          },
        ]),
      ],
    },
    'home-en': {
      locale: 'en',
      path: '/en',
      title: 'Pizza Vino Ixelles | Neapolitan pizza, Italian wine and takeaway in Brussels',
      description:
        'Pizza Vino in Ixelles serves artisan Neapolitan pizza, carefully chosen Italian wines, takeaway and delivery in Brussels.',
      ogTitle: 'Pizza Vino in Ixelles | Artisan pizza and Italian wine',
      ogDescription:
        'Visit Pizza Vino for Neapolitan-style pizza in Ixelles, Brussels, with dine-in, takeaway and delivery options.',
      ogImage: image,
      keywords:
        'pizza ixelles, neapolitan pizza brussels, italian restaurant ixelles, takeaway pizza brussels, pizza delivery ixelles, pizza vino',
      canonical: enUrl,
      alternates: { fr: frUrl, en: enUrl, it: itUrl },
      robots: 'index,follow',
      schema: [
        websiteSchema,
        organizationSchema,
        buildRestaurantSchema({
          url: enUrl,
          title: 'Pizza Vino in Ixelles',
          description:
            'Neapolitan pizza restaurant in Ixelles with Italian ingredients, wine pairings, takeaway and delivery.',
          image,
          locale: 'en-BE',
        }),
        buildWebPageSchema({
          url: enUrl,
          title: 'Pizza Vino Ixelles | Neapolitan pizza, Italian wine and takeaway in Brussels',
          description:
            'Pizza Vino in Ixelles serves artisan Neapolitan pizza, carefully chosen Italian wines, takeaway and delivery in Brussels.',
          image,
          locale: 'en-BE',
        }),
        buildBreadcrumbSchema([
          { name: 'Home', item: frUrl },
          { name: 'English', item: enUrl },
        ]),
        buildFaqSchema([
          {
            question: 'Where is Pizza Vino located?',
            answer: 'Pizza Vino is located at Avenue des Saisons 15, 1050 Ixelles, Brussels.',
          },
          {
            question: 'Does Pizza Vino offer takeaway and delivery?',
            answer: 'Yes. Guests can order takeaway and use delivery platforms linked directly from the site.',
          },
          {
            question: 'What kind of pizza does Pizza Vino make?',
            answer: 'Pizza Vino focuses on artisan Neapolitan-style pizza with long dough fermentation and carefully sourced Italian ingredients.',
          },
        ]),
      ],
    },
    'home-it': {
      locale: 'it',
      path: '/it',
      title: 'Pizza Vino Ixelles | Pizza napoletana, vini italiani e asporto a Bruxelles',
      description:
        'Pizza Vino a Ixelles propone pizza napoletana artigianale, vini italiani selezionati, asporto e consegna a Bruxelles.',
      ogTitle: 'Pizza Vino a Ixelles | Pizza napoletana autentica e vini italiani',
      ogDescription:
        'Scopri Pizza Vino a Ixelles: impasto leggero, ingredienti italiani, tavoli in sala, asporto e delivery a Bruxelles.',
      ogImage: image,
      keywords:
        'pizza ixelles, pizza napoletana bruxelles, pizzeria italiana ixelles, asporto pizza bruxelles, delivery pizza ixelles, pizza vino',
      canonical: itUrl,
      alternates: { fr: frUrl, en: enUrl, it: itUrl },
      robots: 'index,follow',
      schema: [
        websiteSchema,
        organizationSchema,
        buildRestaurantSchema({
          url: itUrl,
          title: 'Pizza Vino a Ixelles',
          description:
            'Pizzeria napoletana a Ixelles con ingredienti italiani, vini selezionati, asporto e consegna.',
          image,
          locale: 'it-BE',
        }),
        buildWebPageSchema({
          url: itUrl,
          title: 'Pizza Vino Ixelles | Pizza napoletana, vini italiani e asporto a Bruxelles',
          description:
            'Pizza Vino a Ixelles propone pizza napoletana artigianale, vini italiani selezionati, asporto e consegna a Bruxelles.',
          image,
          locale: 'it-BE',
        }),
        buildBreadcrumbSchema([
          { name: 'Home', item: frUrl },
          { name: 'Italiano', item: itUrl },
        ]),
        buildFaqSchema([
          {
            question: 'Dove si trova Pizza Vino?',
            answer: 'Pizza Vino si trova in Avenue des Saisons 15, 1050 Ixelles, a Bruxelles.',
          },
          {
            question: 'Pizza Vino fa asporto e consegna?',
            answer: 'Sì. È possibile ordinare da asporto oppure usare le piattaforme di delivery collegate dal sito.',
          },
          {
            question: 'Che tipo di pizza propone Pizza Vino?',
            answer: 'Pizza Vino propone una pizza napoletana artigianale con impasto a lunga maturazione e ingredienti italiani selezionati.',
          },
        ]),
      ],
    },
  }
}
