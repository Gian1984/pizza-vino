# Pizza Vino

Nuxt static migration for Pizza Vino with three prerendered pages:

- `/`
- `/en`
- `/it`

## Setup

Use Node 20 LTS.

```bash
nvm use
npm install
```

## Development

```bash
npm run dev
```

## Type checking

```bash
npm run typecheck
```

## Static generation

```bash
npm run generate
```

The generated static site is written to `.output/public`.

## Production site URL

Set the public site URL before generating production output:

```bash
NUXT_PUBLIC_SITE_URL=https://www.pizzavino.be npm run generate
```

You can start from:

```bash
cp .env.example .env
```

This value is used for:

- canonical URLs
- hreflang alternates
- Open Graph URLs
- `robots.txt`
- `sitemap.xml`

## SEO structure

SEO data is centralized in `seo/`:

- `seo/site.ts`
- `seo/schema.ts`
- `seo/registry.ts`

Localized page content lives in `content/home/`.
