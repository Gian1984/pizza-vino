<script setup lang="ts">
import HomePage from '~/components/home/HomePage.vue'
import { homeIt } from '~/content/home/it'
import { createSeoRegistry } from '~/seo/registry'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const seo = createSeoRegistry(config.public.siteUrl)['home-it']

usePageSeo(seo)
</script>

<template>
  <HomePage :content="homeIt" />
</template>
