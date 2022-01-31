<template>

  <!--  Header Section -->

  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" style="background-image: url('img/pizza-outside.png'); background-size: cover;">
    <div class="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="space"></div>
    <div class="mx-auto  lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24 pb-40">
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <h2 class="text-4xl mt-2 font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" id="title" lang="it">Per chi ama la pizza</h2>
            </h1>
            <div class="mt-5 sm:mt-12">
              <blockquote class="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div class="mt-2 sm:mt-0 sm:ml-6 lg:mt-5 lg:ml-0">
                  <h1 class="text-4xl text-white" id="rinunciare" lang="it">
                    A tre cose non si può assolutamente rinunciare:
                  </h1>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text1" lang="it">
                    # 1 &mdash; Un ottima pizza.
                  </cite>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text2" lang="it">
                    # 2 &mdash; Un buon bicchiere di vino.
                  </cite>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text3" lang="it">
                    # 3 &mdash; ...
                  </cite>
                </div>
              </blockquote>
            </div>
            <div class="mt-10 sm:mt-12">
              <a href="doc/pizza-vino-it.pdf" class="mr-2 inline-flex items-center border-2 border-black text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full" lang="it">Scarica menù</span>
                <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <a type="button" href="TEL: 0032494693028" class="mt-2 inline-flex items-center border-2 border-black text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full" lang="it">Chiama</span>
                <phone-outgoing-icon class="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
<!--            <img class="h-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-46 lg:max-w-46" src="img/pizza-vino-logo-black.png" alt="" id="pizza_lovers" />-->
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--  Food parterners section-->

  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12">
          <li v-for="partner in partners" :key="partner.name">
            <div class="space-y-4">
              <img class="mx-auto h-20  lg:h-36" :src="partner.imageUrl" alt="partner_logo" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <!--  Pizza photo section-->


  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/pizza-primo-piano5.jpeg" alt="pizza_firstlook" />
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl" id="sub_title_pizzaphoto" lang="en">Made with love</h1>
        <p class="mt-6 max-w-3xl text-2xl text-white" lang="it">Un impasto leggero che riposa tra le 48 e le 72 ore prima di essere utizzato, realizzato con ingredienti di alta qualità, per ottenere un cornicione pronunciato ma scavato all'interno; la cottura in un forno rotante misto gas / legna a 450°C permette di preservare i sapori autentici del pomodoro e della mozzarella fiordilatte.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="max-w-screen-2xl -mt-32 mx-auto relative z-10 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading" lang="en">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8 border-4 border-red-700 rounded-2xl">
            <div class="sm:flex-shrink-0">
              <div class="flow-root">
                <img class="h-46 mx-auto" :src="link.imageSrc" alt="" />
              </div>
            </div>
            <h3 class="text-2xl font-medium text-gray-900 mt-2" id="card_title" lang="it">{{ link.name }}</h3>
            <p class="mt-4 text-lg text-gray-500" lang="it">{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>


  <!--  Gallery section-->

  <div>
    <div class="relative pt-20" style="background-image: url('img/carrelage.png');">
      <div class="absolute inset-x-0 bottom-0" />
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative  sm:rounded-2xl sm:overflow-hidden">

          <div class="space-y-4 sm:space-y-12 pb-20">
            <h2 class="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl text-center" id="gallery">Gallery</h2>
          </div>

          <div class="mt-4 flow-root">
            <div class="-my-2">
              <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  <p v-for="category in categories" :key="category.name" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0 zoom">
                  <img :src="category.imageSrc" alt="" class="w-full h-full object-center object-cover" />
                </span>
                    <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span class="relative mt-auto text-center text-xl font-bold text-white">{{ category.name }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 flow-root">
            <div class="-my-2">
              <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  <p v-for="category in galleries" :key="category.name" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0 zoom">
                  <img :src="category.imageSrc" alt="" class="w-full h-full object-center object-cover" />
                </span>
                    <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span class="relative mt-auto text-center text-xl font-bold text-white">{{ category.name }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl py-20" id="place">Ma adesso spazio alle ...</h2>
      </div>
    </div>
  </div>

  <!--  Menù section-->

  <div class="bg-white" style="background-image: url('img/patterns/close-up-white-marble-texture-background.jpg');">
    <div aria-hidden="true" class="relative">
      <img src="img/pizza-burratina.png" alt="pizza-burratina" class="w-full h-96 object-center object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-white" />
    </div>

    <div class="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 class="text-4xl font-extrabold tracking-tight text-red-700 md:text-5xl lg:text-6xl" id="pizze_rosse" lang="it">Pizze Rosse</h2>
        <p class="mt-4 text-gray-500 text-2xl" lang="it">Sugo a base di pomodoro del Piennolo, tipico dell'area vesuviana campana, deve il suo nome al modo in cui i grappoli vengono intrecciati per essere conservati. Hanno una forma ovale ma allungata e un sapore tipicamente acidulo.</p>
      </div>

      <!--  Red pizzas-->

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in redpizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="red_pizza_name" lang="it">{{ pizza.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500" lang="it">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900" lang="it">{{ pizza.price }}€</dt>
        </div>
      </dl>

      <!--  White pizzas-->

      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl mt-16">
        <h2 class="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl" id="pizze_bianche" lang="it">Pizze bianche</h2>
        <p class="mt-4 text-gray-500 text-2xl" lang="it">Espressamente pensate senza salsa di pomodoro per esaltare i sapori tipici di prodotti italiani unici. Una combinazione strabiliante che solleticherà le vostre papille gustative.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in whitepizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="white_pizza_name" lang="it">{{ pizza.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500" lang="it">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900">{{ pizza.price }}€</dt>
        </div>
      </dl>

      <!--  Wines selection-->

      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl mt-16">
        <h2 class="text-4xl font-extrabold tracking-tight text-red-700 md:text-5xl lg:text-6xl" id="wines">Selezione di vini</h2>
        <p class="mt-4 text-gray-500 text-2xl">Quello che conta è che questa volta ci sarà un buon vino ad accompagnarla.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="wine in wines" :key="wine.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="wine_name">{{ wine.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500">Uve: {{ wine.grapes }} - Produttore: {{ wine.producer }}</dd>
          <dd class="text-lg text-gray-500">Origine: {{ wine.origin }}</dd>
          <dd class="text-lg text-gray-500">Suggestione: {{ wine.suggestion }}</dd>
          <dt class="font-medium text-gray-900">Bicchiere: {{ wine.glass }}€ - Bottiglia: {{ wine.bottle }}€</dt>
        </div>
      </dl>
    </div>
  </div>

  <!--  Testimonial section-->

  <div class="bg-white relative overflow-hidden">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto overflow-hidden">
        <img src="img/pexels-koolshooters-7142952.jpg" alt="pizza_together" class="w-full h-full object-center object-cover " />
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-10" />
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white" />
    </div>

    <!-- Callout -->
    <section aria-labelledby="sale-heading" class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" lang="it">
          La tua opinione conta!
        </h2>
        <p class="mt-4 max-w-xl mx-auto text-2xl text-gray-600" id="text_comment" lang="it">Ti chiediamo di lasciare un commento. Perché i tuoi commenti sono la nostra migliore pubblicità. Grazie!</p>
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="rounded-full"><img class="h-28 mx-auto" src="img/Tripadvisor-Logo.png" alt="tripadvisor" /></span>
          <ChevronRightIcon class=" w-5 h-5 text-black" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900" lang="it">Casa dicono su di noi ?</h2>

        <div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
              <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
            </svg>
            <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-5 lg:ml-0">
              <div class="flex items-center xl:col-span-1">
                <div class="flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[testimonial.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                </div>
              </div>
              <p class="text-lg text-gray-900 mt-2" lang="it">
                {{ testimonial.quote }}
              </p>
              <cite class="mt-4 block font-semibold not-italic text-gray-900">
                {{ testimonial.attribution }}
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { StarIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { NewspaperIcon, PhoneIcon, SupportIcon, CameraIcon, PhoneOutgoingIcon } from '@heroicons/vue/outline'

const categories = [
  {
    name: 'Napoli',
    imageSrc: 'img/carousel/4-200x100.jpg',
  },
  {
    name: 'Michele',
    imageSrc: 'img/carousel/5-200x100.jpg',
  },
  {
    name: 'Calzone',
    imageSrc: 'img/carousel/carousel-2.jpeg',
  },
  {
    name: 'Bresaola e tartufo',
    imageSrc: 'img/carousel/carousel-1.png',
  },
  {
    name: 'Dehors',
    imageSrc: 'img/carousel/outside-pizzeria.jpeg'
  },
]


const galleries = [
  {
    name: 'Mortadella',
    imageSrc: 'img/uno.png',
  },
  {
    name: 'Burrata',
    imageSrc: 'img/due.png',
  },
  {
    name: 'Asporto',
    imageSrc: 'img/tre.png',
  },
  {
    name: 'Michele',
    imageSrc: 'img/quattro.png',
  },
  {
    name: 'Special',
    imageSrc: 'img/cinque.png'
  },
]

const redpizzas = [
  { name: 'Margherita', description: 'Pomodoro, basilico e fior di latte.', price:'9,00' },
  { name: 'Regina', description: 'Pomodoro, basilico e mozzarella di bufala.', price:'12,00' },
  { name: 'Principessa', description: 'Pomodoro, basilico e scamorza affumicata.', price:'10,00' },
  { name: 'Burrata', description: 'Pomodoro, basilico, burratina d\'Andria e datterini.', price:'15,00' },
  { name: 'Marinara', description: 'Pomodoro, aglio, origano e basilico.', price:'8,00' },
  { name: 'Rucola Reggiano', description: 'Pomodoro, fior di latte, rucola e Parmigiano Reggiano.', price:'11,00' },
  { name: 'Porchetta Funghi', description: 'Pomodoro, basilico, fior di latte, porchetta d\'Ariccia e funghi.', price:'12,50' },
  { name: 'Quattro Stagioni', description: 'Pomodoro, basilico, fior di latte, porchetta d\'Ariccia, funghi, olive nere e carciofi al forno.', price:'13,50' },
  { name: 'Napoli', description: 'Pomodoro, fior di latte, capperi, filetti di alici di Cetara e origano.', price:'12,00' },
  { name: 'Siciliana', description: 'Pomodoro, basilico, fior di latte, capperi, filetti di alici di Cetara, olive nere e aglio.', price:'13,00' },
  { name: 'Diavola', description: 'Pomodoro, basilico, fior di latte e \'Nduja', price:'12,50' },
  { name: 'Calabrese', description: 'Pomodoro, basilico, scamorza affumicata, salamino piccante, cipolle rosse di Tropea e olive nere.', price:'15,00' },
  { name: 'Boscaiola', description: 'Pomodoro, basilico, scamorza affumicata, mascarpone, rucola e scaglie di grana.', price:'13,00' },
  { name: 'Bresaola e tartufo', description: 'Pomodoro, fior di latte, rucola, bresaola Punta d\'Anca, scaglie di grana e tartufo nero.', price:'19,00' },
  { name: 'Crudaiola', description: 'Pomodoro, rucola, culatello, scaglie di grana, crema di burrata, datterini, basilico ed origano.', price:'16,00' },
  { name: 'Vegana', description: 'Pomodoro, mix di verdure, rucola e pomodori secchi.', price:'13,00' },
  { name: 'Vegetariana', description: 'Pomodoro, fior di latte e mix di verdure.', price:'14,00' },
  { name: 'Calzone', description: 'Sorpresa del pizzaiolo!.', price:'15,00' },
]

const whitepizzas=[
  { name: 'Salsiccia Friarelli', description: 'Fior di latte, basilico, salsiccia e friarielli Napoletani.', price:'14,00' },
  { name: '4 Formaggi', description: 'Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.', price:'12,50' },
  { name: 'Fresca', description: 'Fior di latte, datterini gialli e rossi, rucola e scaglie di grana.', price:'13,00' },
  { name: 'Patate & Tartufo', description: 'Fior di latte, basilico, patate lesse e tartufo nero.', price:'19,00' },
  { name: 'Mortadella', description: 'Fior di latte, rucola, mortadella, scaglie di pecorino Romano, pesto di pomodori secchi e pistacchi tostati.', price:'16,00' },
  { name: 'Genovese', description: 'Fior di latte, pesto alla genovese, pomodorini gialli e rossi del Piennolo del Vesuvio, ricottan scaglie di grana e pinoli tostati.', price:'16,00' },
]

const wines=[
  {
    name:'Prosecco Doc Settolo Bio',
    grapes:'Glera',
    producer:'Fratelli Collavo',
    origin:'Veneto',
    suggestion:'Pizza Fresca',
    glass:'6,50',
    bottle:'30,00'
  },
  {
    name:'Trebbiano Charisma Biodinamico',
    grapes:'Trebbiano',
    producer:'Lunaria',
    origin:'Abruzzo',
    suggestion:'Pizza Rucola Reggiano',
    glass:'6,00',
    bottle:'27,00'
  },
  {
    name:'Malvasia Labelle Biodinamico',
    grapes:'Malvasia',
    producer:'Lunaria',
    origin:'Abruzzo',
    suggestion:'Pizza Siciliana',
    glass:'6,00',
    bottle:'27,00'
  },
  {
    name:'Pinot Grigio Biodinamico',
    grapes:'Pinot Grigio',
    producer:'Lunaria',
    origin:'Abruzzo',
    suggestion:'Pizza Principessa',
    glass:'6,00',
    bottle:'26,00'
  },
  {
    name:'Lambrusco Emilia Secco Bio',
    grapes:'Lambrusco',
    producer:'Medici Ermete',
    origin:'Emilia Romagna',
    suggestion:'Pizza Regina',
    glass:'5,50',
    bottle:'25,00'
  },
  {
    name:'Nero D\'Avola Bio',
    grapes:'Nero D\'Avola',
    producer:'Due Terre Wines',
    origin:'Sicilia',
    suggestion:'Pizza Napoli',
    glass:'6,00',
    bottle:'26,00'
  },
  {
    name:'Negroamaro Torre Nova Bio',
    grapes:'Negroamaro',
    producer:'Natalino Del Prete',
    origin:'Puglia',
    suggestion:'Pizza Calabrese',
    glass:'6,00',
    bottle:'28,00'
  },
  {
    name:'Primitivo Ruminat Bio',
    grapes:'Primitivo',
    producer:'Lunaria',
    origin:'Abruzzo',
    suggestion:'Pizza Boscaiola',
    glass:'6,00',
    bottle:'30,00'
  },
  {
    name:'Montepulciano Coste di Moro Bio',
    grapes:'Montepulciano',
    producer:'Lunaria',
    origin:'Abruzzo',
    suggestion:'Pizza 4 Stagioni',
    glass:'6,00',
    bottle:'27,00'
  },
  {
    name:'Dolcetto D\'Alba Bio',
    grapes:'Dolcetto',
    producer:'Brezza',
    origin:'Piemonte',
    suggestion:'Pizza Porchetta Funghi',
    glass:'7,50',
    bottle:'33,00'
  },
  {
    name:'Nebbiolo Delle Langhe Bio',
    grapes:'Nebbiolo',
    producer:'Brezza',
    origin:'Piemonte',
    suggestion:'Pizza Patate e Tartufo',
    glass:'7,50',
    bottle:'34,00'
  },
]

const supportLinks = [
  {
    name: 'Forno a legna',
    description:
        'Design assolutamente italiano da più di un secolo, ottime prestazioni, i forni Valoriani sono riconosciuti a livello internazionale. Certificazioni e attestati ricevuti dall\'Associazione Napoletana Vera Pizza, da partner come Slow Food, Gambero Rosso, Witaly ecc...',
    icon: CameraIcon,
    imageSrc:'img/forno.jpeg'
  },
  {
    name: 'Qualità dei prodotti',
    description:
        'Per noi è importante servire una pizza di alta qualità. Prodotti di alta qualità a prezzi convenienti per dare ai clienti un prodotto finale ottimo da gustare. Gli ingredienti rigorosamente italiani (e il modo in cui vengono lavorati) sono, soprattutto per quanto riguarda la pizza, la parte più importante.',
    icon: CameraIcon,
    imageSrc:'img/pizza-primo-piano3.jpeg'
  },
  {
    name: 'Il Pizzaiolo',
    description:
        'Appassionato di cucina già dall\'età di 14 anni, Michele decide durante il periodo del liceo di iniziare a lavorare in un ristorante-pizzeria nella provincia di Verona, dove affondano le sue radici. Arriva a Bruxelles all\'età di 21 anni dopo un anno di esperienza in Germania, e nel 2009, a 27 anni, corona il sogno di aprire il suo proprio ristorante dove finalmente è libero di esprimere il suo miglior concetto di pizza.',
    icon: CameraIcon,
    imageSrc:'img/michele-pizza.jpeg'
  },
]


const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
        'Un’esperienza unica davvero, ho provato tante pizzeria di Bruxelles ma questa non ha niente a vedere con le altre. Tutto in bella vista, prodotti di alta qualità, esteticamente ti fa sentire a casa il locale e il personale molto simpatico..',
    attribution: 'Yuri Abbate',
  },
  {
    id: 2,
    rating: 4,
    quote:
        'Ristorante tipico italiano, bellissimo ! Erano le migliori pizze che abbiamo mangiato nella nostra vita, con prodotti freschi ! Il servizio è stato perfetto, il cameriere era così gentile, carino! Possibile mangiare vegan ! Ancora grazie di tutto ! Era davvero delizioso ! Ci vediamo presto.',
    attribution: 'Mauran Art',
  },
  {
    id: 3,
    rating: 5,
    quote:
        'Atmosfera veramente rilassante, con un servizio accogliente e caloroso ed ovviamente delle pizze variate e veramente deliziose. Consiglio a tutti di provare questa pizzeria, hanno dei prodotti freschi e di qualità che si risentono sia nella guarnitura della pizza che nell\'impasto. Grazie ancora!.',
    attribution: 'Fab Verdi',
  },

]

const partners = [
  {
    imageUrl:
        'img/farine-caputo.png',
  },
  {
    imageUrl:
        'img/viniveneti.png',
  },
  {
    imageUrl:
        'img/pomodorinoDOP.png',
  },
  {
    imageUrl:
        'img/Birra_peroni_s.r.l._logo.png',
  },
]

const fooddelivery = [
  {
    name: 'Ordina Adesso',
    link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino',
    imageSrc: 'img/deliveroo.png',
    description: "Your favourite restaurants and takeaways, delivered to your door.",
  },
  {
    name: 'Ordina Adesso',
    link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w',
    imageSrc: 'img/Uber-Eats-Logo.png',
    description: "Crave it? Get it. Search for a favourite restaurant, cuisine or dish.",
  },
  {
    name: 'Ordina Adesso',
    link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino',
    imageSrc: 'img/takeaway.png',
    description: "What do you fancy? Browse through countless menus and reviews.",
  },
]

export default {

  components: {
    StarIcon,
    PhoneOutgoingIcon,
    ChevronRightIcon,
  },

  setup() {
    return {
      redpizzas,
      whitepizzas,
      wines,
      testimonials,
      fooddelivery,
      NewspaperIcon,
      PhoneIcon,
      SupportIcon,
      supportLinks,
      CameraIcon,
      partners,
      categories,
      galleries
    }
  },
}

</script>

