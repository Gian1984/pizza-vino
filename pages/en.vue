<script setup lang="ts">
import HomePage from '~/components/home/HomePage.vue'
import { homeEn } from '~/content/home/en'
import { createSeoRegistry } from '~/seo/registry'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const seo = createSeoRegistry(config.public.siteUrl)['home-en']

usePageSeo(seo)
</script>

<template>
  <HomePage :content="homeEn" />
</template>
