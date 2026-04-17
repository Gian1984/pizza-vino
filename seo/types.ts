import type { LocaleCode } from '~/content/home/types'

export type SeoSchema = Record<string, unknown>

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
  alternates: Record<LocaleCode, string>
  robots: string
  schema: SeoSchema[]
}
