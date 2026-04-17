<script setup lang="ts">
import type { LocaleCode, NavigationLabels } from '~/content/home/types'

defineProps<{
  currentPath: string
  navigation: NavigationLabels
  locale: LocaleCode
}>()

const locales = [
  { code: 'fr' as const, label: 'FR', path: '/' },
  { code: 'en' as const, label: 'EN', path: '/en' },
  { code: 'it' as const, label: 'IT', path: '/it' },
]

const flagByLocale: Record<LocaleCode, string> = {
  fr: '/img/flag/belgium.png',
  en: '/img/flag/british.png',
  it: '/img/flag/italy.png',
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-black">
    <div class="shell flex flex-col gap-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3 text-white">
          <img class="h-9 w-9 rounded-full object-cover" src="/img/pizza-vino-logo.jpeg" alt="Pizza Vino logo" />
          <div class="leading-none">
            <p class="text-3xl">Pizza Vino</p>
            <p class="mt-1 text-xs uppercase tracking-[0.25em] text-stone-300">Ixelles</p>
          </div>
        </NuxtLink>

        <nav class="flex items-center gap-2 lg:hidden">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="item.path"
            class="rounded-full border px-3 py-1 text-sm font-semibold"
            :class="item.code === locale ? 'border-white bg-white text-black' : 'border-stone-700 text-white hover:bg-stone-900'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
        <nav class="flex flex-wrap gap-2 text-sm font-semibold text-white">
          <NuxtLink :to="{ path: currentPath, hash: '#pizze_rosse' }" class="rounded-md px-3 py-2 hover:bg-stone-900">
            {{ navigation.menu }}
          </NuxtLink>
          <NuxtLink :to="{ path: currentPath, hash: '#wines' }" class="rounded-md px-3 py-2 hover:bg-stone-900">
            {{ navigation.wines }}
          </NuxtLink>
          <NuxtLink :to="{ path: currentPath, hash: '#contact-me' }" class="rounded-md px-3 py-2 hover:bg-stone-900">
            {{ navigation.visit }}
          </NuxtLink>
        </nav>

        <nav class="hidden items-center gap-2 lg:flex">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="item.path"
            class="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 bg-white"
            :class="item.code === locale ? 'border-white' : 'border-stone-500 opacity-85 hover:opacity-100'"
          >
            <img :src="flagByLocale[item.code]" :alt="item.label" class="h-full w-full object-cover" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
