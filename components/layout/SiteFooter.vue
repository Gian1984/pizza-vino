<script setup lang="ts">
import { MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { defineComponent, h } from 'vue'
import { BUSINESS_PHONE_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL } from '~/seo/site'
import type { DeliveryCard, FooterContent, LocaleCode } from '~/content/home/types'

const props = defineProps<{
  footer: FooterContent
  delivery: DeliveryCard[]
  addressTitle: string
  phoneTitle: string
  locale: LocaleCode
}>()

const openingTitleByLocale: Record<LocaleCode, string> = {
  fr: "Heures d'ouverture",
  en: 'Opening Hours',
  it: 'Orari di apertura',
}

const closedLabelByLocale: Record<LocaleCode, string> = {
  fr: 'Fermé',
  en: 'Closed',
  it: 'Chiuso',
}

const openingHours = [
  ['MON', null],
  ['TUE', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
  ['WED', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
  ['THU', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
  ['FRI', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
  ['SAT', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
  ['SUN', '12:00 – 2:30 pm, 6:00 – 10:30 pm'],
] as const

const FacebookIcon = defineComponent({
  name: 'FacebookIcon',
  render() {
    return h(
      'svg',
      { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true', class: 'h-5 w-5' },
      [
        h('path', {
          d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
        }),
      ],
    )
  },
})

const InstagramIcon = defineComponent({
  name: 'InstagramIcon',
  render() {
    return h(
      'svg',
      { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true', class: 'h-5 w-5' },
      [
        h('path', {
          d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
        }),
      ],
    )
  },
})
</script>

<template>
  <footer class="bg-black text-stone-100">
    <div id="contact-me" class="shell grid gap-10 py-14 lg:grid-cols-2">
      <div class="space-y-4">
        <h2 class="text-5xl">Contact</h2>
        <p class="max-w-xl text-lg text-stone-300">
          {{ footer.description }}
        </p>
        <div class="space-y-4 pt-6">
          <a :href="MAPS_URL" target="_blank" rel="noreferrer" class="flex items-start gap-3 text-stone-200 hover:text-white">
            <MapPinIcon class="mt-1 h-5 w-5 flex-none" />
            <span>
              {{ addressTitle }}<br>
              Avenue des Saisons 15<br>
              1050 Ixelles
            </span>
          </a>
          <a href="tel:+32494693028" class="flex items-center gap-3 text-stone-200 hover:text-white">
            <PhoneArrowUpRightIcon class="h-5 w-5 flex-none" />
            <span>{{ phoneTitle }}: {{ BUSINESS_PHONE_DISPLAY }}</span>
          </a>
          <div class="flex gap-3 pt-2">
            <a :href="FACEBOOK_URL" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-stone-200 hover:bg-white/20 hover:text-white">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
            <a :href="INSTAGRAM_URL" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-stone-200 hover:bg-white/20 hover:text-white">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-5xl">{{ openingTitleByLocale[props.locale] }}</h3>
        <div class="border-t border-stone-700">
          <div v-for="[day, hours] in openingHours" :key="day" class="grid grid-cols-[72px_1fr] gap-4 border-b border-stone-800 py-3 text-sm">
            <dt class="font-medium text-stone-400">{{ day }}</dt>
            <dd class="text-white">{{ hours ?? closedLabelByLocale[props.locale] }}</dd>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-8 text-black">
      <div class="shell grid gap-5 md:grid-cols-2 md:justify-center lg:max-w-4xl">
        <a
          v-for="item in delivery"
          :key="item.name"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          class="flex items-center justify-center gap-4 rounded-2xl bg-stone-50 px-5 py-4 text-center hover:bg-stone-100"
        >
          <img :src="item.imageSrc" :alt="item.name" class="h-12 w-auto object-contain" />
          <span class="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">{{ item.name }}</span>
        </a>
      </div>
    </div>

    <div class="shell py-6 text-center text-sm text-stone-400">
      <p>{{ footer.legalLine }}</p>
    </div>
  </footer>
</template>
