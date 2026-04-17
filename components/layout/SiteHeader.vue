<script setup lang="ts">
import type { LocaleCode, NavigationLabels } from '~/content/home/types'

const props = defineProps<{
  currentPath: string
  navigation: NavigationLabels
  locale: LocaleCode
}>()

const locales = [
  { code: 'fr' as const, label: 'FR', path: '/' },
  { code: 'en' as const, label: 'EN', path: '/en' },
  { code: 'it' as const, label: 'IT', path: '/it' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
    <div class="shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3 text-stone-900">
          <img class="h-11 w-11 rounded-full object-cover" src="/img/pizza-vino-logo.jpeg" alt="Pizza Vino logo" />
          <div>
            <p class="text-2xl leading-none">Pizza Vino</p>
            <p class="text-sm uppercase tracking-[0.2em] text-stone-500">Ixelles</p>
          </div>
        </NuxtLink>

        <nav class="flex items-center gap-2 lg:hidden">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="item.path"
            class="rounded-full px-3 py-1 text-sm font-semibold"
            :class="item.code === locale ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
        <nav class="flex flex-wrap gap-2 text-sm font-semibold text-stone-700">
          <NuxtLink :to="{ path: currentPath, hash: '#menu' }" class="rounded-full px-4 py-2 hover:bg-stone-100">
            {{ navigation.menu }}
          </NuxtLink>
          <NuxtLink :to="{ path: currentPath, hash: '#wines' }" class="rounded-full px-4 py-2 hover:bg-stone-100">
            {{ navigation.wines }}
          </NuxtLink>
          <NuxtLink :to="{ path: currentPath, hash: '#visit' }" class="rounded-full px-4 py-2 hover:bg-stone-100">
            {{ navigation.visit }}
          </NuxtLink>
        </nav>

        <nav class="hidden items-center gap-2 lg:flex">
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="item.path"
            class="rounded-full px-3 py-1 text-sm font-semibold"
            :class="item.code === locale ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
