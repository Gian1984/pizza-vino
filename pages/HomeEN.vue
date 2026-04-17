<script setup lang="ts">
useSeoMeta({
  title: 'Redirecting to English | Pizza Vino',
  robots: 'noindex,follow',
})

useHead({
  meta: [{ 'http-equiv': 'refresh', content: '0;url=/en' }],
  link: [{ rel: 'canonical', href: '/en' }],
})
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-center text-white">
    <div class="space-y-4">
      <p class="text-3xl">Redirecting to the English page…</p>
      <NuxtLink to="/en" class="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
        Continue
      </NuxtLink>
    </div>
  </main>
</template>
