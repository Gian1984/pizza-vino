<script setup lang="ts">
import HomePage from '~/components/home/HomePage.vue'
import { homeFr } from '~/content/home/fr'
import { createSeoRegistry } from '~/seo/registry'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const seo = createSeoRegistry(config.public.siteUrl)['home-fr']

usePageSeo(seo)
</script>

<template>
  <HomePage :content="homeFr" />
</template>
