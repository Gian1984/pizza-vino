<script setup lang="ts">
useSeoMeta({
  title: 'Page not found | Pizza Vino',
  robots: 'noindex,follow',
})
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-center text-white">
    <div class="max-w-xl space-y-6">
      <p class="text-sm uppercase tracking-[0.3em] text-stone-400">404</p>
      <h1 class="text-5xl">This page does not exist.</h1>
      <p class="text-xl text-stone-300">Return to Pizza Vino and choose your language.</p>
      <div class="flex justify-center gap-3">
        <NuxtLink to="/" class="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
          Français
        </NuxtLink>
        <NuxtLink to="/en" class="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          English
        </NuxtLink>
        <NuxtLink to="/it" class="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Italiano
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
