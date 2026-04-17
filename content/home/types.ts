export type LocaleCode = 'fr' | 'en' | 'it'

export type ImageCard = {
  name: string
  imageSrc: string
  description?: string
}

export type MenuItem = {
  name: string
  description: string
  price: string
}

export type WineItem = {
  name: string
  grapes: string
  producer: string
  origin: string
  suggestion: string
  glass: string
  bottle: string
}

export type Testimonial = {
  id: number
  rating: number
  quote: string
  attribution: string
}

export type DeliveryCard = {
  name: string
  link: string
  imageSrc: string
  description: string
}

export type SupportCard = {
  name: string
  description: string
  imageSrc: string
}

export type NavigationLabels = {
  menu: string
  wines: string
  visit: string
}

export type FooterContent = {
  description: string
  deliveryTitle: string
  socialTitle: string
  legalLine: string
}

export type HeroContent = {
  title: string
  lead: string
  bullets: [string, string, string]
  pdfHref: string
  pdfLabel: string
  callLabel: string
  heroImage: string
}

export type HeroHighlight = {
  locationLabel: string
  title: string
  description: string
  doughLabel: string
  doughValue: string
  serviceLabel: string
  serviceValue: string
}

export type ContentLabels = {
  craftsmanshipTitle: string
  craftsmanshipSubtitle: string
  craftsmanshipBody: string
  galleryTitle: string
  gallerySubtitle: string
  menuIntroTitle: string
  redPizzasTitle: string
  redPizzasDescription: string
  whitePizzasTitle: string
  whitePizzasDescription: string
  specialsTitle: string
  winesTitle: string
  winesDescription: string
  testimonialsTitle: string
  testimonialsSubtitle: string
  testimonialsListTitle: string
  deliveryTitle: string
  visitTitle: string
  addressTitle: string
  phoneTitle: string
}

export type HomeContent = {
  key: 'home-fr' | 'home-en' | 'home-it'
  locale: LocaleCode
  path: '/' | '/en' | '/it'
  langLabel: string
  navigation: NavigationLabels
  hero: HeroContent
  heroHighlight: HeroHighlight
  labels: ContentLabels
  supportLinks: SupportCard[]
  categories: ImageCard[]
  galleries: ImageCard[]
  redPizzas: MenuItem[]
  whitePizzas: MenuItem[]
  specials: MenuItem[]
  wines: WineItem[]
  testimonials: Testimonial[]
  delivery: DeliveryCard[]
  footer: FooterContent
}
