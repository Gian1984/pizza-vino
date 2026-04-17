<script setup lang="ts">
import { ChevronRightIcon, StarIcon } from '@heroicons/vue/20/solid'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import { partners } from '~/content/home/shared'
import type { HomeContent } from '~/content/home/types'

defineProps<{
  content: HomeContent
}>()
</script>

<template>
  <div class="min-h-screen bg-stone-50">
    <SiteHeader :current-path="content.path" :navigation="content.navigation" :locale="content.locale" />

    <main>
      <section
        class="relative overflow-hidden border-b border-stone-200 bg-stone-950 text-white"
        :style="{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.55), rgba(17, 24, 39, 0.65)), url(${content.hero.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div class="shell grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div class="space-y-8">
            <p class="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-stone-100">
              {{ content.langLabel }}
            </p>
            <div class="space-y-5">
              <h1 class="max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl">
                {{ content.hero.title }}
              </h1>
              <p class="max-w-2xl text-2xl text-stone-100/90">
                {{ content.hero.lead }}
              </p>
            </div>
            <ul class="grid gap-3 text-xl text-stone-100/90 sm:grid-cols-3 sm:text-2xl">
              <li
                v-for="(bullet, index) in content.hero.bullets"
                :key="bullet"
                class="rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-4 backdrop-blur"
              >
                <span class="block text-sm uppercase tracking-[0.2em] text-stone-300">#{{ index + 1 }}</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-4">
              <a :href="content.hero.pdfHref" class="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-900 hover:bg-stone-100">
                {{ content.hero.pdfLabel }}
                <ChevronRightIcon class="h-5 w-5" />
              </a>
              <a href="tel:+32494693028" class="inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10">
                {{ content.hero.callLabel }}
              </a>
            </div>
          </div>

          <div class="paper-panel self-end rounded-[2.5rem] bg-white/95 p-8 text-stone-900">
            <p class="text-sm uppercase tracking-[0.25em] text-red-700">{{ content.heroHighlight.locationLabel }}</p>
            <h2 class="mt-3 text-4xl">{{ content.heroHighlight.title }}</h2>
            <p class="mt-4 text-lg text-stone-600">
              {{ content.heroHighlight.description }}
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div class="rounded-[1.5rem] bg-stone-100 p-4">
                <p class="text-sm uppercase tracking-[0.2em] text-stone-500">{{ content.heroHighlight.doughLabel }}</p>
                <p class="mt-2 text-lg">{{ content.heroHighlight.doughValue }}</p>
              </div>
              <div class="rounded-[1.5rem] bg-stone-100 p-4">
                <p class="text-sm uppercase tracking-[0.2em] text-stone-500">{{ content.heroHighlight.serviceLabel }}</p>
                <p class="mt-2 text-lg">{{ content.heroHighlight.serviceValue }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[url('/img/carrelage.png')] bg-repeat py-14">
        <div class="shell">
          <div class="paper-panel p-8 sm:p-10">
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div v-for="partner in partners" :key="partner.name" class="flex items-center justify-center">
                <img :src="partner.imageSrc" :alt="partner.name" class="max-h-24 w-auto object-contain lg:max-h-28" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-stone-900 py-24 text-white">
        <img src="/img/new-burratina.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div class="shell relative space-y-12">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-stone-300">{{ content.labels.craftsmanshipTitle }}</p>
            <h2 class="section-title">{{ content.labels.craftsmanshipSubtitle }}</h2>
          </div>
          <div class="grid gap-8 lg:grid-cols-3">
            <article v-for="item in content.supportLinks" :key="item.name" class="paper-panel rounded-[2rem] border-white/10 bg-white/95 p-6 text-stone-900">
              <div class="overflow-hidden rounded-[1.25rem] bg-stone-100 ring-1 ring-stone-200/80">
                <img
                  :src="item.imageSrc"
                  :alt="item.name"
                  class="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-5 text-3xl">{{ item.name }}</h3>
              <p class="mt-3 text-lg text-stone-600">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[url('/img/carrelage.png')] bg-repeat py-24">
        <div class="shell space-y-8">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-red-700">{{ content.labels.galleryTitle }}</p>
            <h2 class="section-title text-stone-900">{{ content.labels.gallerySubtitle }}</h2>
          </div>
          <div class="grid gap-6 lg:grid-cols-5">
            <article v-for="item in content.categories" :key="item.name" class="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200/80">
              <div class="overflow-hidden rounded-b-[1.6rem] rounded-t-[1.6rem] bg-stone-100">
                <img
                  :src="item.imageSrc"
                  :alt="item.name"
                  class="aspect-[4/3] w-full object-cover object-center transition duration-500 hover:scale-[1.02] lg:aspect-[4/5]"
                />
              </div>
              <div class="px-4 py-4">
                <p class="text-2xl text-stone-900">{{ item.name }}</p>
              </div>
            </article>
          </div>
          <div class="grid gap-6 lg:grid-cols-5">
            <article v-for="item in content.galleries" :key="item.name" class="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200/80">
              <div class="overflow-hidden rounded-b-[1.6rem] rounded-t-[1.6rem] bg-stone-100">
                <img
                  :src="item.imageSrc"
                  :alt="item.name"
                  class="aspect-[4/3] w-full object-cover object-center transition duration-500 hover:scale-[1.02] lg:aspect-[4/5]"
                />
              </div>
              <div class="px-4 py-4">
                <p class="text-2xl text-stone-900">{{ item.name }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="menu" class="bg-[url('/img/patterns/close-up-white-marble-texture-background.jpg')] bg-cover bg-center py-24">
        <div class="shell space-y-16">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-red-700">{{ content.labels.menuIntroTitle }}</p>
            <h2 class="section-title text-stone-900">{{ content.labels.redPizzasTitle }}</h2>
            <p class="text-xl text-stone-600">{{ content.labels.redPizzasDescription }}</p>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="pizza in content.redPizzas" :key="pizza.name" class="paper-panel p-6">
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-3xl text-stone-900">{{ pizza.name }}</h3>
                <span class="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">{{ pizza.price }}€</span>
              </div>
              <p class="mt-4 text-lg text-stone-600">{{ pizza.description }}</p>
            </article>
          </div>

          <div class="max-w-3xl space-y-4">
            <h2 class="section-title text-stone-900">{{ content.labels.whitePizzasTitle }}</h2>
            <p class="text-xl text-stone-600">{{ content.labels.whitePizzasDescription }}</p>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="pizza in content.whitePizzas" :key="pizza.name" class="paper-panel p-6">
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-3xl text-stone-900">{{ pizza.name }}</h3>
                <span class="rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-700">{{ pizza.price }}€</span>
              </div>
              <p class="mt-4 text-lg text-stone-600">{{ pizza.description }}</p>
            </article>
          </div>

          <div class="max-w-3xl space-y-4">
            <h2 class="section-title text-stone-900">{{ content.labels.specialsTitle }}</h2>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="pizza in content.specials" :key="pizza.name" class="paper-panel p-6">
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-3xl text-stone-900">{{ pizza.name }}</h3>
                <span class="rounded-full bg-red-700 px-3 py-1 text-sm font-semibold text-white">{{ pizza.price }}€</span>
              </div>
              <p class="mt-4 text-lg text-stone-600">{{ pizza.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="wines" class="bg-stone-950 py-24 text-white">
        <div class="shell space-y-12">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-stone-300">{{ content.labels.winesTitle }}</p>
            <h2 class="section-title">{{ content.labels.winesDescription }}</h2>
          </div>
          <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="wine in content.wines" :key="wine.name" class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 class="text-3xl">{{ wine.name }}</h3>
              <p class="mt-3 text-stone-300">Grapes: {{ wine.grapes }}</p>
              <p class="text-stone-300">Producer: {{ wine.producer }}</p>
              <p class="text-stone-300">Origin: {{ wine.origin }}</p>
              <p class="mt-2 text-stone-100">Pairing: {{ wine.suggestion }}</p>
              <p class="mt-4 text-sm uppercase tracking-[0.2em] text-red-300">
                Glass {{ wine.glass }}€ · Bottle {{ wine.bottle }}€
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-white py-24">
        <img src="/img/pexels-koolshooters-7142952.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
        <div class="shell relative space-y-12">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-red-700">{{ content.labels.testimonialsTitle }}</p>
            <h2 class="section-title text-stone-900">{{ content.labels.testimonialsSubtitle }}</h2>
          </div>
          <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="testimonial in content.testimonials" :key="testimonial.id" class="paper-panel p-6">
              <div class="flex items-center gap-1">
                <StarIcon
                  v-for="index in [1, 2, 3, 4, 5]"
                  :key="index"
                  class="h-5 w-5"
                  :class="index <= testimonial.rating ? 'text-amber-400' : 'text-stone-200'"
                />
              </div>
              <p class="mt-5 text-xl text-stone-700">“{{ testimonial.quote }}”</p>
              <p class="mt-5 font-semibold text-stone-900">{{ testimonial.attribution }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[url('/img/carrelage.png')] bg-repeat py-24">
        <div class="shell space-y-8">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm uppercase tracking-[0.25em] text-red-700">{{ content.labels.deliveryTitle }}</p>
            <h2 class="section-title text-stone-900">{{ content.footer.deliveryTitle }}</h2>
          </div>
          <div class="grid gap-6 lg:grid-cols-3">
            <a
              v-for="item in content.delivery"
              :key="item.name"
              :href="item.link"
              target="_blank"
              rel="noreferrer"
              class="paper-panel block p-6 hover:-translate-y-1"
            >
              <img :src="item.imageSrc" :alt="item.name" class="h-14 w-auto object-contain" />
              <h3 class="mt-5 text-3xl text-stone-900">{{ item.name }}</h3>
              <p class="mt-3 text-lg text-stone-600">{{ item.description }}</p>
            </a>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter :footer="content.footer" :address-title="content.labels.addressTitle" :phone-title="content.labels.phoneTitle" />
  </div>
</template>
