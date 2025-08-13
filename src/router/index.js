// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// immagine og/tw condivisa (in public/img/)
const OG_IMAGE = '/img/pexels-koolshooters-7142952.jpg'

// util: normalizza il path (niente slash finale, tranne '/')
function normalizePath (path) {
  if (!path) return '/'
  if (path === '/') return '/'
  return path.replace(/\/+$/, '')
}

// util: crea assoluto per canonical (fallback su origin)
function absoluteUrl (path) {
  const base = typeof window !== 'undefined' ? window.location.origin : ''
  return base + normalizePath(path)
}

// definisci una mappa degli alternate per hreflang
const alternates = {
  fr: '/',
  en: '/en',
  it: '/it'
}

const routes = [
  // lingue principali
  {
    path: '/',
    name: 'home-fr',
    component: Home,
    meta: {
      lang: 'fr',
      title: 'Pizza Vino – Pizzeria à Ixelles (FR)',
      description: "Page d'accueil de la pizzeria Pizza Vino à Ixelles. Produits frais, tradition italienne, four bien chaud.",
      ogTitle: 'Pizza Vino – Pizzeria à Ixelles',
      ogDescription: "Produits frais choisis quotidiennement et tradition italienne se rencontrent en un seul endroit : la pizza.",
      ogImage: OG_IMAGE,
      robots: 'index,follow'
    }
  },
  {
    path: '/en',
    name: 'home-en',
    component: () => import(/* webpackChunkName: "home-en" */ '../views/HomeEN.vue'),
    meta: {
      lang: 'en',
      title: 'Pizza Vino – Pizzeria in Ixelles (EN)',
      description: 'Home page of Pizza Vino in Ixelles, Brussels. Fresh daily ingredients and true Italian tradition.',
      ogTitle: 'Pizza Vino – Pizzeria in Ixelles',
      ogDescription: 'Daily selected fresh products and Italian tradition meet in one place: pizza.',
      ogImage: OG_IMAGE,
      robots: 'index,follow'
    }
  },
  {
    path: '/it',
    name: 'home-it',
    component: () => import(/* webpackChunkName: "home-it" */ '../views/HomeIT.vue'),
    meta: {
      lang: 'it',
      title: 'Pizza Vino – Pizzeria a Ixelles (IT)',
      description: "Home page della pizzeria Pizza Vino a Ixelles, Bruxelles. Ingredienti freschi e tradizione italiana.",
      ogTitle: 'Pizza Vino – Pizzeria a Ixelles',
      ogDescription: 'Prodotti freschi e tradizione italiana in un unico luogo: la pizza.',
      ogImage: OG_IMAGE,
      robots: 'index,follow'
    }
  },

  // redirect 301 (per preservare seo dai vecchi url)
  { path: '/HomeEN', redirect: { path: '/en' } },
  { path: '/HomeIT', redirect: { path: '/it' } },

  // catch-all 404 (noindex)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'pagina non trovata – Pizza Vino',
      description: 'la pagina che cerchi non esiste.',
      robots: 'noindex,follow',
      ogImage: OG_IMAGE
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// helper per aggiungere <meta> o <link> controllati
function addHeadTag(tagName, attrs = {}) {
  const el = document.createElement(tagName)
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  el.setAttribute('data-vue-router-controlled', '')
  document.head.appendChild(el)
  return el
}

router.beforeEach((to, from, next) => {
  // normalizza il path (evita maiuscole e slash finali)
  const normalized = normalizePath(to.path)
  if (to.path !== normalized || /[A-Z]/.test(to.path)) {
    return next({ path: normalized.toLowerCase(), query: to.query, hash: to.hash, replace: true })
  }
  next()
})

// aggiorna head dopo la navigazione (dom disponibile)
router.afterEach((to) => {
  const nearest = to.matched.slice().reverse().find(r => r.meta) || {}
  const meta = nearest.meta || {}

  // title
  if (meta.title) document.title = meta.title

  // pulisci i vecchi tag controllati
  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .forEach(el => el.parentNode && el.parentNode.removeChild(el))

  // canonical
  addHeadTag('link', { rel: 'canonical', href: absoluteUrl(to.fullPath || to.path) })

  // basic meta
  if (meta.description) addHeadTag('meta', { name: 'description', content: meta.description })
  if (meta.robots) addHeadTag('meta', { name: 'robots', content: meta.robots })

  // open graph
  addHeadTag('meta', { property: 'og:type', content: 'website' })
  addHeadTag('meta', { property: 'og:url', content: absoluteUrl(to.fullPath || to.path) })
  addHeadTag('meta', { property: 'og:title', content: meta.ogTitle || meta.title || 'Pizza Vino' })
  addHeadTag('meta', { property: 'og:description', content: meta.ogDescription || meta.description || '' })
  // usa sempre l’immagine condivisa (assoluta)
  addHeadTag('meta', { property: 'og:image', content: absoluteUrl(OG_IMAGE) })

  if (meta.lang) {
    const ogLocale = meta.lang === 'en' ? 'en_US' : (meta.lang === 'it' ? 'it_IT' : 'fr_BE')
    addHeadTag('meta', { property: 'og:locale', content: ogLocale })
    Object.keys(alternates)
      .filter(l => l !== meta.lang)
      .forEach(l => {
        const alt = l === 'en' ? 'en_US' : (l === 'it' ? 'it_IT' : 'fr_BE')
        addHeadTag('meta', { property: 'og:locale:alternate', content: alt })
      })
  }

  // twitter
  addHeadTag('meta', { name: 'twitter:card', content: 'summary_large_image' })
  addHeadTag('meta', { name: 'twitter:title', content: meta.ogTitle || meta.title || 'Pizza Vino' })
  addHeadTag('meta', { name: 'twitter:description', content: meta.ogDescription || meta.description || '' })
  addHeadTag('meta', { name: 'twitter:image', content: absoluteUrl(OG_IMAGE) })
  addHeadTag('meta', { name: 'twitter:image:alt', content: 'happy friends sharing pizza from Pizza Vino' })

  // hreflang alternates
  Object.entries(alternates).forEach(([lang, path]) => {
    addHeadTag('link', {
      rel: 'alternate',
      hreflang: lang,
      href: absoluteUrl(path)
    })
  })
  addHeadTag('link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(alternates.fr) })

  // json-ld (restaurant) sulle home
  if (to.name && String(to.name).startsWith('home')) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Pizza Vino',
      servesCuisine: ['Pizza', 'Italian'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ixelles',
        addressRegion: 'Bruxelles',
        addressCountry: 'BE'
      },
      url: absoluteUrl('/'),
      image: absoluteUrl(OG_IMAGE)
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    script.setAttribute('data-vue-router-controlled', '')
    document.head.appendChild(script)
  }
})

export default router

