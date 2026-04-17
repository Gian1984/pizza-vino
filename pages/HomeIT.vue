<script setup lang="ts">
useSeoMeta({
  title: 'Redirecting to Italiano | Pizza Vino',
  robots: 'noindex,follow',
})

useHead({
  meta: [{ 'http-equiv': 'refresh', content: '0;url=/it' }],
  link: [{ rel: 'canonical', href: '/it' }],
})
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-center text-white">
    <div class="space-y-4">
      <p class="text-3xl">Reindirizzamento alla pagina italiana…</p>
      <NuxtLink to="/it" class="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
        Continua
      </NuxtLink>
    </div>
  </main>
</template>
