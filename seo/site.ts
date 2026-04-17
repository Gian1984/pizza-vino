export const BRAND_NAME = 'Pizza Vino'
export const DEFAULT_OG_IMAGE = '/og/brand.png'
export const DEFAULT_TWITTER_IMAGE = DEFAULT_OG_IMAGE
export const PAGE_OG_IMAGES = {
  'home-fr': '/og/home-fr.png',
  'home-en': '/og/home-en.png',
  'home-it': '/og/home-it.png',
} as const
export const BUSINESS_PHONE = '+32494693028'
export const BUSINESS_PHONE_DISPLAY = '0494 69 30 28'
export const BUSINESS_ADDRESS = 'Avenue des Saisons 15, 1050 Ixelles, Brussels, Belgium'
export const BUSINESS_ADDRESS_LOCALITY = 'Ixelles'
export const BUSINESS_ADDRESS_REGION = 'Brussels'
export const BUSINESS_ADDRESS_COUNTRY = 'BE'
export const BUSINESS_LATITUDE = 50.8200407
export const BUSINESS_LONGITUDE = 4.3856159
export const MAPS_URL =
  'https://www.google.be/maps/place/PizzaVino/@50.8199996,4.3833578,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c518e8b6ab6b:0xfd6daa37c3d4bc26!8m2!3d50.8200407!4d4.3856159'
export const FACEBOOK_URL = 'https://www.facebook.com/pizzavinobxl'
export const INSTAGRAM_URL = 'https://www.instagram.com/pizzavinobxl/'
export const MENU_FR_URL = '/doc/pizza-vino-fr.pdf'
export const MENU_EN_URL = '/doc/pizza-vino-en.pdf'
export const MENU_IT_URL = '/doc/pizza-vino-it.pdf'
export const PRICE_RANGE = '$$'
export const CURRENCIES_ACCEPTED = 'EUR'
export const PAYMENT_ACCEPTED = 'Cash, Card'
export const OPENING_HOURS = [
  'Tu-Su 12:00-14:30',
  'Tu-Su 18:00-22:30',
]
export const CUISINES = ['Pizza', 'Italian', 'Neapolitan']

export function withSiteUrl(siteUrl: string, path: string) {
  return new URL(path, ensureTrailingSlash(siteUrl)).toString()
}

function ensureTrailingSlash(value: string) {
  return value.endsWith('/') ? value : `${value}/`
}
