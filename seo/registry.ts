import { buildBreadcrumbSchema, buildFaqSchema, buildOrganizationSchema, buildRestaurantSchema, buildWebPageSchema, buildWebsiteSchema } from '~/seo/schema'
import { DEFAULT_OG_IMAGE, PAGE_OG_IMAGES, withSiteUrl } from '~/seo/site'
import type { SeoEntry } from '~/seo/types'

export function createSeoRegistry(siteUrl: string): Record<'home-fr' | 'home-en' | 'home-it', SeoEntry> {
  const frUrl = withSiteUrl(siteUrl, '/')
  const enUrl = withSiteUrl(siteUrl, '/en')
  const itUrl = withSiteUrl(siteUrl, '/it')
  const brandImage = withSiteUrl(siteUrl, DEFAULT_OG_IMAGE)
  const frImage = withSiteUrl(siteUrl, PAGE_OG_IMAGES['home-fr'])
  const enImage = withSiteUrl(siteUrl, PAGE_OG_IMAGES['home-en'])
  const itImage = withSiteUrl(siteUrl, PAGE_OG_IMAGES['home-it'])
  const websiteSchema = buildWebsiteSchema(siteUrl)
  const organizationSchema = buildOrganizationSchema(siteUrl, brandImage)

  return {
    'home-fr': {
      locale: 'fr',
      path: '/',
      title: 'Pizza Vino Ixelles | Pizza artisanale, vins italiens et livraison à Bruxelles',
      description:
        'Découvrez Pizza Vino à Ixelles : pizza artisanale à pâte légère (48-72h de maturation), ingrédients italiens de qualité, vins sélectionnés et livraison à Bruxelles.',
      ogTitle: 'Pizza Vino à Ixelles | Pizza artisanale et vins italiens',
      ogDescription:
        'Pizzeria à Ixelles : une pâte légère et digeste, cuisson au four Valoriani et des saveurs authentiques italiennes à déguster sur place ou en livraison.',
      ogImage: frImage,
      keywords:
        'pizzeria ixelles, pizza artisanale ixelles, restaurant italien ixelles, pizza bruxelles, livraison pizza ixelles, pizza vino, pizza digeste',
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
            'Pizzeria artisanale à Ixelles avec ingrédients italiens, vins sélectionnés, vente à emporter et livraison.',
          image: frImage,
          locale: 'fr-BE',
        }),
        buildWebPageSchema({
          url: frUrl,
          title: 'Pizza Vino Ixelles | Pizza artisanale, vins italiens et livraison à Bruxelles',
          description:
            'Pizza Vino à Ixelles propose une pizza artisanale à pâte légère, des vins italiens soigneusement choisis, la vente à emporter et la livraison.',
          image: frImage,
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
            answer: 'Oui, Pizza Vino propose la livraison via Deliveroo et Uber Eats ainsi que la vente à emporter.',
          },
          {
            question: 'Quel style de pizza propose Pizza Vino ?',
            answer: 'Nous proposons une pizza artisanale à pâte légère, maturée entre 48 et 72 heures pour une digestibilité optimale, avec un cornicione alvéolé et cuite au four Valoriani.',
          },
        ]),
      ],
    },
    'home-en': {
      locale: 'en',
      path: '/en',
      title: 'Pizza Vino Ixelles | Artisan Pizza, Italian Wine & Delivery in Brussels',
      description:
        'Enjoy artisan pizza in Ixelles with light dough matured for 48-72h. High-quality Italian ingredients, selected wines, takeaway and delivery in Brussels.',
      ogTitle: 'Pizza Vino Ixelles | Artisan Pizza & Italian Wine',
      ogDescription:
        'Experience authentic Italian flavors in Ixelles: light, highly digestible dough and premium ingredients cooked in a traditional Valoriani oven.',
      ogImage: enImage,
      keywords:
        'pizza ixelles, artisan pizza brussels, italian restaurant ixelles, takeaway pizza brussels, pizza delivery ixelles, pizza vino, light dough pizza',
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
            'Artisan pizza restaurant in Ixelles with Italian ingredients, wine pairings, takeaway and delivery.',
          image: enImage,
          locale: 'en-BE',
        }),
        buildWebPageSchema({
          url: enUrl,
          title: 'Pizza Vino Ixelles | Artisan Pizza, Italian Wine & Delivery in Brussels',
          description:
            'Pizza Vino in Ixelles serves artisan pizza with light dough matured for 48-72 hours, carefully chosen Italian wines and delivery options.',
          image: enImage,
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
            answer: 'Yes. Guests can order takeaway or use delivery platforms like Deliveroo and Uber Eats.',
          },
          {
            question: 'What kind of pizza does Pizza Vino make?',
            answer: 'We focus on artisan pizza with a light dough that rests for 48-72 hours, ensuring high digestibility and authentic flavors with a pronounced, hollowed-out crust.',
          },
        ]),
      ],
    },
    'home-it': {
      locale: 'it',
      path: '/it',
      title: 'Pizza Vino Ixelles | Pizza artigianale, vini italiani e asporto a Bruxelles',
      description:
        'Pizza Vino a Ixelles: pizza artigianale con impasto leggero (48-72h di maturazione), ingredienti italiani d\'eccellenza e consegna a domicilio a Bruxelles.',
      ogTitle: 'Pizza Vino a Ixelles | Pizza artigianale e vini italiani',
      ogDescription:
        'Vera pizza artigianale a Ixelles: impasto digeribile, forno Valoriani e i migliori prodotti Made in Italy per un sapore autentico.',
      ogImage: itImage,
      keywords:
        'pizza ixelles, pizza artigianale bruxelles, pizzeria italiana ixelles, asporto pizza bruxelles, delivery pizza ixelles, pizza vino, pizza digeribile',
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
            'Pizzeria artigianale a Ixelles con ingredienti italiani, vini selezionati, asporto e consegna.',
          image: itImage,
          locale: 'it-BE',
        }),
        buildWebPageSchema({
          url: itUrl,
          title: 'Pizza Vino Ixelles | Pizza artigianale, vini italiani e asporto a Bruxelles',
          description:
            'Pizza Vino a Ixelles propone pizza artigianale con impasto a lunga maturazione, vini italiani selezionati, asporto e consegna.',
          image: itImage,
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
            answer: 'Sì. È possibile ordinare da asporto oppure usare le piattaforme Deliveroo e Uber Eats.',
          },
          {
            question: 'Che tipo di pizza propone Pizza Vino?',
            answer: 'Proponiamo una pizza artigianale con impasto leggero maturato 48-72 ore per la massima digeribilità, cornicione alveolato e cottura in forno Valoriani.',
          },
        ]),
      ],
    },
  }
}
