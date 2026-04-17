export default defineNuxtConfig({
  compatibilityDate: '2026-04-16',
  devtools: { enabled: false },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Neucha&display=swap',
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.pizzavino.be',
    name: 'Pizza Vino',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.pizzavino.be',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/it', '/HomeEN', '/HomeIT', '/sitemap.xml', '/robots.txt'],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/it': { prerender: true },
    '/HomeEN': { prerender: true },
    '/HomeIT': { prerender: true },
    '/404': { prerender: true },
  },
  sitemap: {
    defaults: {
      lastmod: new Date('2026-04-16').toISOString(),
    },
  },
  robots: {
    credits: false,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: ['/sitemap.xml'],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
