<script setup lang="ts">
import { MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { BUSINESS_PHONE_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL } from '~/seo/site'
import type { FooterContent } from '~/content/home/types'

defineProps<{
  footer: FooterContent
  addressTitle: string
  phoneTitle: string
}>()
</script>

<template>
  <footer id="visit" class="border-t border-stone-200 bg-stone-950 text-stone-100">
    <div class="shell grid gap-8 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
      <div class="space-y-4">
        <h2 class="text-4xl">Pizza Vino</h2>
        <p class="max-w-xl text-lg text-stone-300">
          {{ footer.description }}
        </p>
        <p class="text-sm uppercase tracking-[0.2em] text-stone-500">
          {{ footer.legalLine }}
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl">{{ addressTitle }}</h3>
        <a :href="MAPS_URL" target="_blank" rel="noreferrer" class="flex items-start gap-3 text-stone-200 hover:text-white">
          <MapPinIcon class="mt-1 h-5 w-5 flex-none" />
          <span>Avenue des Saisons 15<br>1050 Ixelles</span>
        </a>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl">{{ phoneTitle }}</h3>
        <a href="tel:+32494693028" class="flex items-center gap-3 text-stone-200 hover:text-white">
          <PhoneArrowUpRightIcon class="h-5 w-5 flex-none" />
          <span>{{ BUSINESS_PHONE_DISPLAY }}</span>
        </a>
        <div class="flex gap-3 pt-2">
          <a :href="FACEBOOK_URL" target="_blank" rel="noreferrer" class="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">
            Facebook
          </a>
          <a :href="INSTAGRAM_URL" target="_blank" rel="noreferrer" class="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
