<script setup lang="ts">
import { ChevronRightIcon, StarIcon } from '@heroicons/vue/20/solid'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import { partners } from '~/content/home/shared'
import type { HomeContent, LocaleCode } from '~/content/home/types'

defineProps<{
  content: HomeContent
}>()

const wineLabels: Record<LocaleCode, { grapes: string; producer: string; origin: string; suggestion: string; glass: string; bottle: string }> = {
  fr: { grapes: 'Cépages', producer: 'Producteur', origin: 'Origine', suggestion: 'Suggestion', glass: 'Verre', bottle: 'Bouteille' },
  en: { grapes: 'Grapes', producer: 'Producer', origin: 'Origin', suggestion: 'Suggestion', glass: 'Glass', bottle: 'Bottle' },
  it: { grapes: 'Uve', producer: 'Produttore', origin: 'Origine', suggestion: 'Suggestione', glass: 'Bicchiere', bottle: 'Bottiglia' },
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader :current-path="content.path" :navigation="content.navigation" :locale="content.locale" />

    <main>
      <section
        class="bg-gray-900 pt-10 text-white sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8"
        :style="{ backgroundImage: `url(${content.hero.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div class="shell py-10"></div>
        <div class="shell lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="mx-auto max-w-md px-0 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div class="pb-28 lg:py-24">
              <h1 class="mt-4 text-5xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 lg:text-7xl">
                {{ content.hero.title }}
              </h1>
              <div class="mt-5 sm:mt-12">
                <blockquote class="sm:flex lg:block">
                  <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                  </svg>
                  <div class="mt-2 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-5">
                    <h2 class="text-3xl text-white sm:text-4xl">{{ content.hero.lead }}</h2>
                    <cite v-for="(bullet, index) in content.hero.bullets" :key="bullet" class="mt-2 block text-2xl font-extralight italic text-white">
                      # {{ index + 1 }} &mdash; {{ bullet }}
                    </cite>
                  </div>
                </blockquote>
              </div>
              <div class="mt-10 flex flex-wrap gap-3 sm:mt-12">
                <a :href="content.hero.pdfHref" class="mr-2 inline-flex items-center rounded-full border-2 border-black bg-white p-1 pr-2 text-sm text-black hover:bg-gray-300 sm:text-base lg:text-sm xl:text-base">
                  <span class="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide">{{ content.hero.pdfLabel }}</span>
                  <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" />
                </a>
                <a href="tel:+32494693028" class="inline-flex items-center rounded-full border-2 border-black bg-white p-1 pr-2 text-sm text-black hover:bg-gray-300 sm:text-base lg:text-sm xl:text-base">
                  <span class="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide">{{ content.hero.callLabel }}</span>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0"></div>
        </div>
      </section>

      <section class="bg-white py-12 text-center lg:py-24" style="background-image: url('/img/carrelage.png')">
        <div class="shell">
          <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12">
            <li v-for="partner in partners" :key="partner.name">
              <img class="mx-auto h-20 lg:h-36" :src="partner.imageSrc" :alt="partner.name" />
            </li>
          </ul>
        </div>
      </section>

      <div class="bg-white" style="background-image: url('/img/carrelage.png')">
        <div class="relative bg-gray-800 pb-32">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="/img/new-burratina.jpg" alt="" />
            <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div class="shell relative py-24 sm:py-32">
            <h2 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">{{ content.labels.craftsmanshipTitle }}</h2>
            <p class="mt-6 max-w-3xl text-2xl text-white">{{ content.labels.craftsmanshipBody }}</p>
          </div>
        </div>
        <section class="relative z-10 mx-auto -mt-32 max-w-screen-2xl px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <h2 id="contact-heading" class="sr-only">Contact us</h2>
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            <article v-for="item in content.supportLinks" :key="item.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
              <div class="flex-1 rounded-2xl border-4 border-red-700 px-6 pb-8 pt-16 md:px-8">
                <div class="flow-root">
                  <img :src="item.imageSrc" :alt="item.name" class="mx-auto h-[18rem] w-full rounded-[1rem] object-cover object-center" />
                </div>
                <h3 class="mt-2 text-4xl text-gray-900">{{ item.name }}</h3>
                <p class="mt-4 text-lg text-gray-500">{{ item.description }}</p>
              </div>
            </article>
          </div>
        </section>
      </div>

      <section style="background-image: url('/img/carrelage.png')" class="relative pt-20">
        <div class="shell">
          <div class="space-y-4 pb-20 sm:space-y-12">
            <h2 class="text-center text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">{{ content.labels.galleryTitle }}</h2>
          </div>

          <div class="mt-4 flow-root">
            <div class="-my-2">
              <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div class="absolute flex min-w-[1120px] space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:min-w-0 xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  <article v-for="item in content.categories" :key="item.name" class="group relative h-80 w-56 overflow-hidden rounded-lg xl:w-auto">
                    <span class="absolute inset-0">
                      <img :src="item.imageSrc" :alt="item.name" class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110" />
                    </span>
                    <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span class="relative mt-auto flex h-full items-end px-6 pb-6 text-center text-xl font-bold text-white">{{ item.name }}</span>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 flow-root pb-20">
            <div class="-my-2">
              <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div class="absolute flex min-w-[1120px] space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:min-w-0 xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  <article v-for="item in content.galleries" :key="item.name" class="group relative h-80 w-56 overflow-hidden rounded-lg xl:w-auto">
                    <span class="absolute inset-0">
                      <img :src="item.imageSrc" :alt="item.name" class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110" />
                    </span>
                    <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span class="relative mt-auto flex h-full items-end px-6 pb-6 text-center text-xl font-bold text-white">{{ item.name }}</span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-12 text-center lg:py-12" style="background-image: url('/img/carrelage.png')">
        <div class="shell">
          <h2 class="py-20 text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">{{ content.labels.menuIntroTitle }}</h2>
        </div>
      </section>

      <section class="bg-white pb-24" style="background-image: url('/img/patterns/close-up-white-marble-texture-background.jpg')">
        <div aria-hidden="true" class="relative">
          <img src="/img/pizza-burratina.png" alt="" class="h-96 w-full object-cover object-center" />
          <div class="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div class="shell relative -mt-12 space-y-16 pb-16 sm:pb-24">
          <div class="max-w-3xl space-y-4">
            <h2 id="pizze_rosse" class="text-4xl font-extrabold tracking-tight text-red-700 md:text-5xl lg:text-6xl">{{ content.labels.redPizzasTitle }}</h2>
            <p class="text-2xl text-gray-500">{{ content.labels.redPizzasDescription }}</p>
          </div>

          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            <article v-for="pizza in content.redPizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
              <h3 class="text-3xl text-gray-900">{{ pizza.name }}</h3>
              <p class="mt-2 text-lg text-gray-500">{{ pizza.description }}</p>
              <p class="font-medium text-gray-900">{{ pizza.price }}€</p>
            </article>
          </div>

          <div class="max-w-3xl space-y-4">
            <h2 id="pizze_bianche" class="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">{{ content.labels.whitePizzasTitle }}</h2>
            <p class="text-2xl text-gray-500">{{ content.labels.whitePizzasDescription }}</p>
          </div>

          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            <article v-for="pizza in content.whitePizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
              <h3 class="text-3xl text-gray-900">{{ pizza.name }}</h3>
              <p class="mt-2 text-lg text-gray-500">{{ pizza.description }}</p>
              <p class="font-medium text-gray-900">{{ pizza.price }}€</p>
            </article>
          </div>

          <div class="max-w-3xl space-y-4">
            <h2 id="suggestioni" class="text-4xl font-extrabold tracking-tight text-red-700 md:text-5xl lg:text-6xl">{{ content.labels.specialsTitle }}</h2>
          </div>

          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            <article v-for="pizza in content.specials" :key="pizza.name" class="border-t border-gray-200 pt-4">
              <h3 class="text-3xl text-gray-900">{{ pizza.name }}</h3>
              <p class="mt-2 text-lg text-gray-500">{{ pizza.description }}</p>
              <p class="font-medium text-gray-900">{{ pizza.price }}€</p>
            </article>
          </div>

          <div class="max-w-3xl space-y-4">
            <h2 id="wines" class="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{{ content.labels.winesTitle }}</h2>
            <p class="text-2xl text-gray-500">{{ content.labels.winesDescription }}</p>
          </div>

          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            <article v-for="wine in content.wines" :key="wine.name" class="border-t border-gray-200 pt-4">
              <h3 class="text-3xl text-gray-900">{{ wine.name }}</h3>
              <p class="mt-2 text-lg text-gray-500">{{ wineLabels[content.locale].grapes }}: {{ wine.grapes }} - {{ wineLabels[content.locale].producer }}: {{ wine.producer }}</p>
              <p class="text-lg text-gray-500">{{ wineLabels[content.locale].origin }}: {{ wine.origin }}</p>
              <p class="text-lg text-gray-500">{{ wineLabels[content.locale].suggestion }}: {{ wine.suggestion }}</p>
              <p class="font-medium text-gray-900">{{ wineLabels[content.locale].glass }}: {{ wine.glass }}€ - {{ wineLabels[content.locale].bottle }}: {{ wine.bottle }}€</p>
            </article>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-white">
        <div aria-hidden="true" class="absolute inset-0">
          <div class="absolute inset-0 mx-auto overflow-hidden">
            <img src="/img/pexels-koolshooters-7142952.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
          <div class="absolute inset-0 bg-white bg-opacity-10" />
          <div class="absolute inset-0 bg-gradient-to-r from-white via-white" />
        </div>

        <section class="shell relative flex flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
          <div class="max-w-2xl lg:max-w-none">
            <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{{ content.labels.testimonialsTitle }}</h2>
            <p class="mx-auto mt-4 max-w-xl text-2xl text-gray-600">{{ content.labels.testimonialsSubtitle }}</p>
            <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center rounded-full bg-transparent p-1 pr-2 text-white hover:text-gray-200">
              <span class="rounded-full"><img class="mx-auto h-28" src="/img/Tripadvisor-Logo.png" alt="Tripadvisor" /></span>
              <ChevronRightIcon class="h-5 w-5 text-black" />
            </a>
          </div>
        </section>

        <section class="shell relative py-24 sm:px-6 lg:px-8 lg:py-32">
          <div class="max-w-2xl lg:max-w-none">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">{{ content.labels.testimonialsListTitle }}</h2>
            <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              <blockquote v-for="testimonial in content.testimonials" :key="testimonial.id" class="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-5">
                  <div class="flex items-center">
                    <StarIcon v-for="index in [1, 2, 3, 4, 5]" :key="index" class="h-5 w-5" :class="index <= testimonial.rating ? 'text-amber-400' : 'text-stone-200'" />
                  </div>
                  <p class="mt-2 text-lg text-gray-900">{{ testimonial.quote }}</p>
                  <cite class="mt-4 block font-semibold not-italic text-gray-900">{{ testimonial.attribution }}</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </section>
    </main>

    <SiteFooter
      :footer="content.footer"
      :delivery="content.delivery"
      :locale="content.locale"
      :address-title="content.labels.addressTitle"
      :phone-title="content.labels.phoneTitle"
    />
  </div>
</template>
