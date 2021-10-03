<template>

  <!--  Header Section -->

  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" style="background-image: url('img/pizza-outside.png'); background-size: cover;">
    <div class="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="space"></div>
    <div class="mx-auto  lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24 pb-6">
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <h2 class="text-4xl mt-2 font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" id="title" lang="it">Per chi ama la pizza</h2>
            </h1>
            <div class="mt-5 sm:mt-12">
              <blockquote class="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div class="mt-2 sm:mt-0 sm:ml-6 lg:mt-5 lg:ml-0">
                  <h1 class="text-4xl text-white" id="rinunciare" lang="en">
                    Three things you can't say no:
                  </h1>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text1" lang="en">
                    1 &mdash; A delicious pizza.
                  </cite>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text2" lang="en">
                    2 &mdash; A good glass of wine.
                  </cite>
                  <cite class="text-2xl mt-2 block font-extralight text-white italic" id="header_text3" lang="en">
                    3 &mdash;
                  </cite>
                </div>
              </blockquote>
            </div>
            <div class="mt-10 sm:mt-12">
              <a href="doc/pizza-vino-en.pdf" class="mr-2 inline-flex items-center border-2 border-black text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full" lang="en">Download the menù</span>
                <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <a type="button" href="TEL: 0494 69 30 28" class="mt-2 inline-flex items-center border-2 border-black text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full" lang="en">Call</span>
                <phone-outgoing-icon class="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="h-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-46 lg:max-w-46" src="img/pizza-vino-logo-black.png" alt="" id="pizza_lovers" />
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
        <p class="mt-6 max-w-3xl text-2xl text-white" lang="en">A light dough that rests between 48 and 72 hours before being used, made with high quality ingredients, to obtain a pronounced but hollowed out cornice; cooking in a combined gas / wood rotary oven at 450 ° C allows to preserve the authentic flavors of tomato and fiordilatte mozzarella.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="max-w-screen-2xl -mt-32 mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8 border-4 border-red-700 rounded-2xl">
            <div class="sm:flex-shrink-0">
              <div class="flow-root">
                <img class="h-46 mx-auto" :src="link.imageSrc" alt="" />
              </div>
            </div>
            <h3 class="text-2xl font-medium text-gray-900 mt-2" id="card_title" lang="en">{{ link.name }}</h3>
            <p class="mt-4 text-lg text-gray-500" lang="en">{{ link.description }} </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--  Carousel section-->

  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl" id="gallery">Gallery</h2>
      </div>
    </div>
  </div>

  <div class="bg-white relative overflow-hidden">
    <div class="gallery-wrap" style="background-image: url('img/carousel/4-200x100.jpg');">
      <div class="item" style="background-image: url('img/carousel/5-200x100.jpg');"></div>
      <div class="item" style="background-image: url('img/carousel/carousel-2.jpeg');"></div>
      <div class="item" style="background-image: url('img/carousel/carousel-1.png');"></div>
      <div class="item" style="background-image: url('img/carousel/outside-pizzeria.jpeg');"></div>
      <div class="item" style="background-image: url('img/carousel/carousel-3.png');"></div>
      <div class="item" style="background-image: url('img/pizza-primo-piano3.jpeg');"></div>
    </div>
  </div>

  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl" id="place">But now it's time for ...</h2>
      </div>
    </div>
  </div>



  <!--  Menù section-->

  <div class="bg-white" style="background-image: url('img/patterns/close-up-white-marble-texture-background.jpg');">
    <div aria-hidden="true" class="relative">
      <img src="img/pizza-burratina.png" alt="pizza-burratina" class="w-full h-96 object-center object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-white" />
    </div>

    <!--  Red selection-->

    <div class="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 class="text-6xl font-extrabold tracking-tight text-red-700 sm:text-4xl lg:text-6xl" id="pizze_rosse" lang="it">Pizze Rosse</h2>
        <p class="mt-4 text-gray-500 text-2xl" lang="en">Sauce made with Piennolo tomato, typical of the Vesuvian area of Campania, it owes its name to the way in which the tomato clusters are intertwined to be preserved. They have an oval but elongated shape and a typically sour taste.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in redpizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="red_pizza_name" lang="it">{{ pizza.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500" lang="en">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900">{{ pizza.price }}€</dt>
        </div>
      </dl>

      <!--  White pizzas -->

      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl mt-16">
        <h2 class="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl" id="pizze_bianche" lang="it">Pizze bianche</h2>
        <p class="mt-4 text-gray-500 text-2xl" lang="en">Expressly designed without tomato sauce to enhance the typical flavors of unique Italian products. An amazing combination that will tickle your taste buds.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in whitepizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="white_pizza_name" lang="it">{{ pizza.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500" lang="en">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900">{{ pizza.price }}€</dt>
        </div>
      </dl>

      <!--  Wines selection-->

      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl mt-16">
        <h2 class="text-6xl font-extrabold tracking-tight text-red-700 sm:text-4xl lg:text-6xl" id="wines">Selection of wines</h2>
        <p class="mt-4 text-gray-500 text-2xl">What matters is that this time there will be a good wine.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="wine in wines" :key="wine.name" class="border-t border-gray-200 pt-4">
          <dt class="text-2xl text-gray-900" id="wine_name">{{ wine.name }}</dt>
          <dd class="mt-2 text-lg text-gray-500">Grapes: {{ wine.grapes }} - Producer: {{ wine.producer }}</dd>
          <dd class="text-lg text-gray-500">Origin: {{ wine.origin }}</dd>
          <dd class="text-lg text-gray-500">Suggestion: {{ wine.suggestion }}</dd>
          <dt class="font-medium text-gray-900">Glass: {{ wine.glass }}€ - Bottle: {{ wine.bottle }}€</dt>
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
        <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" lang="en">
          To give importance to our customers
        </h2>
        <p class="mt-4 max-w-xl mx-auto text-2xl text-gray-600" id="text_comment" lang="en">we ask you to leave a comment. Because your comments are our best advertisement. Thanks!.</p>
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="rounded-full"><img class="h-28 mx-auto" src="img/Tripadvisor-Logo.png" alt="tripadvisor" /></span>
          <ChevronRightIcon class=" w-5 h-5 text-black" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900" lang="en">What are people saying?</h2>

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
              <p class="text-lg text-gray-900 mt-2" lang="en">
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

const redpizzas = [
  { name: 'Margherita', description: 'Tomato, Basil and Mozzarella.', price:'9,00' },
  { name: 'Regina', description: 'Tomato, Basil and Mozzarella di Bufala.', price:'12,00' },
  { name: 'Principessa', description: 'Tomato, Basil and Smoked Scamorza Cheese.', price:'10,00' },
  { name: 'Burrata', description: 'Tomato, Basil, Burratina d\'Andria and Red Datterini Tomatoes.', price:'15,00' },
  { name: 'Marinara', description: 'Tomato, Garlic, Oregano and Basil.', price:'8,00' },
  { name: 'Rucola Reggiano', description: 'Tomato, Mozzarella, Rocket and Parmigiano Reggiano Cheese.', price:'11,00' },
  { name: 'Porchetta Funghi', description: 'Tomato, Basil, Mozzarella, Porchetta d\'Ariccia and Mushrooms.', price:'12,50' },
  { name: 'Quattro Stagioni', description: 'Tomato, Basil, Mozzarella, Porchetta d\'Ariccia, Mushrooms, Black Olives and Baked Artichokes.', price:'13,50' },
  { name: 'Napoli', description: 'Tomato, Mozzarella, Capers, Cetara Anchovy Fillets and Oregano.', price:'12,00' },
  { name: 'Siciliana', description: 'Tomato, Basil, Mozzarella, Capers, Cetara Anchovy Fillets, Black Olives and Garlic.', price:'13,00' },
  { name: 'Diavola', description: 'Tomato, Basil, Mozzarella and \'Nduja*. ( Spicy, spreadable pork sausage from the region of Calabria )', price:'12,50' },
  { name: 'Calabrese', description: 'Tomato, Basil, Smoked Scamorza Cheese, Spicy Salami, Tropea Red Onions and Black Olives.', price:'15,00' },
  { name: 'Boscaiola', description: 'Tomato, Basil, Smoked Scamorza Cheese, Mascarpone, Rocket and Parmigiano Reggiano Cheese flakes.', price:'13,00' },
  { name: 'Bresaola e tartufo', description: 'Tomato, Mozzarella, Rocket, Punta d\'Anca Bresaola, Parmigiano Reggiano Cheese flakes and Black Truffle.', price:'19,00' },
  { name: 'Crudaiola', description: 'Tomato, Rocket, Culatello, Parmigiano Reggiano Cheese flakes, Burrata Cream, Datterini Tomatoes, Basil and Oregano.', price:'16,00' },
  { name: 'Vegana', description: 'Tomato, Mix of Vegetables, Rocket and Dried Tomatoes.', price:'13,00' },
  { name: 'Vegetariana', description: 'Tomato, Mozzarella and a Mix of Vegetables.', price:'14,00' },
  { name: 'Calzone', description: 'The "Pizzaiolo" will surprise you!.', price:'15,00' },
]

const whitepizzas=[
  { name: 'Salsiccia Friarelli', description: 'Fior di latte, Basil, Sausage and Friarielli*. ( Neapolitan Broccoli )', price:'14,00' },
  { name: '4 Formaggi', description: 'Fior di latte, Smoked Scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano Cheese and Basil.', price:'12,50' },
  { name: 'Fresca', description: 'Fior di latte, yellow and red Datterini Tomatoes, Rocket and Parmigiano Reggiano Cheese flakes.', price:'13,00' },
  { name: 'Patate & Tartufo', description: 'Fior di latte, Basil, boiled Potatoes and Black Truffle.', price:'19,00' },
  { name: 'Mortadella', description: 'Fior di latte, Rocket, Mortadella, Pecorino Romano cheese flakes, Dried Tomato Pesto and Toasted Pistachios.', price:'16,00' },
  { name: 'Genovese', description: 'Fior di latte, Genoese Pesto, yellow and red Tomatoes from "Piennolo del Vesuvio", Ricotta cheese flakes and Toasted Pine Nuts.', price:'16,00' },
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
    name: 'Wood-fired oven',
    description:
        'Absolutely Italian design for more than a century, excellent performance, Valoriani ovens are internationally recognized. Certifications and certificates received from the Neapolitan True Pizza Association, from partners such as Slow Food, Gambero Rosso, Witaly etc...',
    icon: CameraIcon,
    imageSrc:'img/forno.jpeg'
  },
  {
    name: 'Quality products',
    description:
        'For us it is important to serve a high quality pizza. High quality products at affordable prices to give customers a final product that is excellent to taste and easy to digest. The ingredients only Made in Italy (and the way they are processed) are, especially with regards to pizza, the most important part.',
    icon: CameraIcon,
    imageSrc:'img/pizza-primo-piano3.jpeg'
  },
  {
    name: 'Il Pizzaiolo',
    description:
        'Passionate about cooking since the age of 14, Michele decides during high school to start working in a restaurant-pizzeria in the province of Verona, where his roots lie. He arrives in Brussels at the age of 21 after a year of experience in Germany. In 2009 at the age of 27, he crowns the dream of opening his own restaurant where he is finally free to express his best concept of pizza.',
    icon: CameraIcon,
    imageSrc:'img/michele-pizza.jpeg'
  },
]


const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
        'This Resteraunt is just amazing. The Staff is very friendly and polite. If you wanna eat an ORIGINAL italian Pizza and drink a real coffee, don\'t miss to go there. I will come again.',
    attribution: 'Okan35 B.',
  },
  {
    id: 2,
    rating: 4,
    quote:
        'Really good pizza and very nice people. We absolutely loved it (thin crust, fresh quality toppings) and will certainly be back to enjoy an evening with a bottle of wine to go with our food. In the meantime we\'ll probably order again. Highly recommended.',
    attribution: 'Wim Dekkers',
  },
  {
    id: 3,
    rating: 5,
    quote:
        'This is the right place of you want to enjoy a really good pizza ! You’ll find the traditional tastes and also some nice composition and good choice of wine too.',
    attribution: 'Lorenzo Vinc',
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
    name: 'Order now',
    link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino',
    imageSrc: 'img/deliveroo.png',
    description: "Your favourite restaurants and takeaways, delivered to your door.",
  },
  {
    name: 'Order now',
    link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w',
    imageSrc: 'img/Uber-Eats-Logo.png',
    description: "Crave it? Get it. Search for a favourite restaurant, cuisine or dish.",
  },
  {
    name: 'Order now',
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
      partners
    }
  },
}

</script>

