# Pizza Vino Nuxt Migration Strategy

## Branch

- Dedicated branch: `migration-nuxt-static-seo`

## Goal

Migrate the current Vue CLI SPA to a Nuxt static site generated with `npx nuxi generate`, preserving the three public pages:

- `/` for French
- `/en` for English
- `/it` for Italian

The new project must prioritize technical SEO:

- server-rendered HTML at generate time
- page-specific meta tags
- canonical and hreflang links
- Restaurant schema and page-specific JSON-LD
- XML sitemap generation
- robots support
- clean static output deployable from `.output/public`

The codebase should be TypeScript-first, not JavaScript-first.

## Current-State Analysis

The current application is a Vue 3 SPA built with Vue CLI 5. SEO is currently injected client-side in `src/router/index.js`, which is better than nothing but still weaker than prerendered HTML for indexing and link unfurling.

Key observations:

- Routing is manual via `vue-router`.
- SEO tags are injected after navigation on the client.
- There are already three language routes: `/`, `/en`, `/it`.
- `App.vue` contains shared navigation and footer logic.
- The three home views are large and mostly parallel content variants.
- Assets are already in `public/img` and can be migrated with low risk.
- The project is already on Vue 3 and Tailwind 3, so the main migration is framework structure, not template syntax.

SEO limitation today:

- crawlers depend on hydrated client execution to see final head tags
- no Nuxt route rules or prerender strategy
- no sitemap module
- no centralized typed SEO registry

## Target Architecture

Use Nuxt 3 with TypeScript and static generation.

Suggested structure:

```text
app/
  app.vue
components/
  layout/
    SiteHeader.vue
    SiteFooter.vue
  sections/
    ...
content/
  home/
    fr.ts
    en.ts
    it.ts
pages/
  index.vue
  en.vue
  it.vue
  404.vue
seo/
  site.ts
  types.ts
  registry.ts
  schema.ts
composables/
  usePageSeo.ts
public/
  img/
  doc/
nuxt.config.ts
tsconfig.json
```

## Recommended Nuxt Stack

Base:

- `nuxt`
- `typescript`
- `vue-tsc`
- `tailwindcss`

SEO:

- `@nuxtjs/sitemap`

Strongly recommended right after the first migration pass:

- `@nuxtjs/robots`
- `nuxt-schema-org`

Reasoning:

- `@nuxtjs/sitemap` covers the sitemap requirement directly.
- `@nuxtjs/robots` should be added because sitemap without robots is incomplete for a serious SEO setup.
- `nuxt-schema-org` is the cleanest way to manage Restaurant, FAQ, Organization and WebSite structured data in Nuxt.

Note:

Nuxt documentation confirms that prerendered static output is produced with `nuxt generate` and that crawlable links plus explicit prerender routes can be combined for static generation. The official Nuxt SEO module bundle also lists `@nuxtjs/sitemap` as part of the SEO stack.

## Routing Strategy

We do not need dynamic locale routing for this site. Three explicit static pages are simpler and safer:

- `pages/index.vue`
- `pages/en.vue`
- `pages/it.vue`

Navigation must use `<NuxtLink>` so the prerender crawler can discover the language pages.

For static generation, configure explicit prerender routes anyway:

- `/`
- `/en`
- `/it`
- `/sitemap.xml`
- `/robots.txt`

Optional legacy redirects to preserve old URLs:

- `/HomeEN` -> `/en`
- `/HomeIT` -> `/it`

These redirects can be handled via Nitro route rules or hosting redirects, depending on deployment target.

## SEO Registry Design

Create a dedicated `seo/` folder that centralizes all SEO metadata and schemas.

Recommended types:

```ts
export type LocaleCode = 'fr' | 'en' | 'it'

export type SeoEntry = {
  locale: LocaleCode
  path: '/' | '/en' | '/it'
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  keywords: string
  canonical: string
  alternateLocales: Record<LocaleCode, string>
  robots?: string
  schema: Record<string, unknown>[]
  faqSchema?: Record<string, unknown>
}
```

Recommended registry shape:

```ts
export const seoRegistry: Record<'home-fr' | 'home-en' | 'home-it', SeoEntry> = {
  ...
}
```

Support files:

- `seo/site.ts`: brand constants, base URL, default OG image, business coordinates, phone, socials
- `seo/types.ts`: shared SEO types
- `seo/schema.ts`: functions generating Restaurant, FAQ, WebPage, WebSite, Breadcrumb schemas
- `seo/registry.ts`: final page registry used by the three pages

This keeps page files thin and makes SEO reviewable in one place.

## Content Strategy

The current pages are large and partly duplicated. We should avoid cloning that pattern in Nuxt.

Recommended split:

- one shared layout shell for header/footer
- reusable section components for hero, pizza list, wines, gallery, delivery, contact
- one content data file per locale
- one SEO registry entry per locale/page

This gives:

- less duplication
- easier translation updates
- easier SEO copy optimization by locale

## Page-Level SEO Strategy

Each page should import:

- content data for the locale
- one SEO registry entry for the locale

Then apply:

- `useSeoMeta(...)`
- `useHead(...)`
- JSON-LD from the registry

Each locale page should have:

- localized title and meta description
- localized Open Graph and Twitter copy
- canonical URL
- `hreflang` alternates for `fr`, `en`, `it`, and `x-default`
- Restaurant schema
- FAQ schema specific to local search intent
- optional `Menu` or `FoodEstablishment` schema extensions if content supports it

## SEO Content Quality Requirements

The registry should not contain generic placeholder SEO copy. It should be written for actual search intent around a pizzeria in Ixelles/Brussels.

Themes to cover:

- pizzeria in Ixelles
- pizza napolitaine / Neapolitan pizza in Brussels
- restaurant italien Ixelles
- take-away and delivery
- fresh ingredients
- authentic Italian tradition
- dine-in and reservation intent

For each locale, copy should be native, not mechanically translated.

## Static Generation Requirements

`nuxt.config.ts` should be prepared for static deployment:

```ts
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/it', '/sitemap.xml', '/robots.txt']
    }
  }
})
```

Deployment target:

- run `npx nuxi generate`
- deploy `.output/public`

This is the right model for the current site because:

- there are only three public pages
- content is mostly static
- SEO matters more than client-side app behavior

## Proposed Migration Phases

### Phase 1: Scaffold Nuxt baseline

- add Nuxt 3
- switch scripts from Vue CLI to Nuxt
- add TypeScript config
- add Tailwind integration for Nuxt
- keep existing assets in `public/`

### Phase 2: Port layout and shared UI

- move header/footer from `App.vue` into shared components
- replace `router-link` with `NuxtLink`
- remove client-side router SEO logic entirely

### Phase 3: Extract localized content

- move page copy and structured content into typed locale files
- identify sections shared across locales versus language-specific content

### Phase 4: Build SEO registry

- create `seo/` folder
- define types
- define site constants
- create per-page registry entries
- add schema generators
- connect registry to `useSeoMeta` and `useHead`

### Phase 5: Add sitemap and robots

- install `@nuxtjs/sitemap`
- add `@nuxtjs/robots`
- configure site URL and sitemap routes
- ensure sitemap includes `/`, `/en`, `/it`

### Phase 6: Static generation hardening

- configure Nitro prerender routes
- verify `npx nuxi generate`
- inspect generated HTML in `.output/public`
- validate canonical, hreflang, JSON-LD, sitemap and robots output

### Phase 7: Cleanup

- remove Vue CLI-specific files
- remove `src/main.js`, `src/router`, old SPA structure
- prune obsolete dependencies

## Risks and Decisions

### Risk: copying the SPA structure directly into Nuxt

Bad approach:

- one huge page component per locale with embedded SEO and content

Better approach:

- shared sections
- typed locale content data
- centralized SEO registry

### Risk: mechanically translated SEO text

This will weaken relevance and CTR. We should write each locale with local search phrasing.

### Risk: relying only on crawler-discovered routes

Even if links exist, we should still explicitly prerender the three pages and sitemap assets.

### Risk: mixing content data and SEO data

Keep them separate:

- `content/` for rendering content
- `seo/` for metadata and schemas

## Acceptance Criteria

The migration is complete when all of the following are true:

- the site runs on Nuxt 3
- the project is TypeScript-first
- `npx nuxi generate` succeeds
- `.output/public` contains static output for `/`, `/en`, `/it`
- navigation between the three pages works with `<NuxtLink>`
- every page has its own canonical URL
- every page has hreflang alternates
- every page has high-quality localized title and description
- every page outputs JSON-LD in the prerendered HTML
- `sitemap.xml` includes the three public pages
- `robots.txt` points to the sitemap

## Recommended First Implementation Step

Start by scaffolding a clean Nuxt 3 app in the current repo on this branch, then port only:

- shared layout
- three static pages
- SEO registry
- sitemap and robots

Do not migrate every legacy file one-to-one. Recompose the site for the target architecture instead.

## Sources

- Nuxt prerendering docs: https://nuxt.com/docs/3.x/getting-started/prerendering
- Nuxt generate command docs: https://nuxt.com/docs/3.x/api/commands/generate
- Nuxt SEO modules listing: https://nuxt.com/modules/seo
