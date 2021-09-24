<template>

  <!--  Header Section -->

  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" style="background-image: url('img/pizza-outside.png'); background-size: cover;">
    <div class="mx-auto  lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <img class="h-40 items-center" src="img/pizza-vino-logo.jpeg" alt="pizza-vino-logo" />
              <h2 class="text-4xl mt-2 font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Per chi ama la pizza</h2>
            </h1>
            <div class="mt-5 sm:mt-12">
              <blockquote class="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div class="mt-2 sm:mt-0 sm:ml-6 lg:mt-5 lg:ml-0">
                  <p class="text-lg text-white">
                    Rafè!, nun te piglià collera, è cos‘e niente!
                    Però pure tu con ‘sta pizza Margherita, alla Regina Margherita di Savoia non potevi preparare un piatto di pasta, nu ragù, ‘na genovese, ‘na lasagna.
                    Vedi un po’ che cosa hai combinato!
                  </p>
                  <cite class="mt-2 block font-extralight text-white italic">
                    &mdash; Raffaele Esposito is the inventor of the Margherita pizza which he created for Queen Margherita of Savoy as a tribute to the three colors of the Italian flag. To the classic Neapolitan pizza of oil and tomato, he added the white of the mozzarella, the red of the tomato and the green of the basil.
                  </cite>
                </div>
              </blockquote>
            </div>
            <div class="mt-10 sm:mt-12">
              <a href="doc/pizza-vino-en.pdf" class="inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">Download the online menù</span>
                <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-46 lg:max-w-46" src="img/Pizza%20Lovers%20Typography%20Vector.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--  Food parterners section-->

  <div class="bg-gray-500" style="background-image: url('img/carrelage.png');">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div class="flow-root mt-8 lg:mt-10 sm:ml-10">
        <div class="-mt-4  flex flex-wrap justify-between lg:-ml-4 ">
          <div class="mt-4  flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 ">
            <img class="h-36" src="img/farine-caputo.png" alt="farine-caputo" />
          </div>
          <div class="mt-4 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img class="h-36" src="img/viniveneti.png" alt="vini-veneti" />
          </div>
          <div class="mt-4  flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img class="h-36" src="img/pomodorinoDOP.png" alt="pomodorini-dop" />
          </div>
          <div class="mt-4  flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img class="h-36" src="img/Birra_peroni_s.r.l._logo.png" alt="birra-peroni" />
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--  Pizza photo section-->


  <div class="bg-white" style="background-image: url('img/carrelage.png');">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/pizza-primo-piano5.jpeg" alt="" />
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Made with love</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">A light dough, made with high quality ingredients, to obtain a pronounced cornice but hollowed out inside; perfect cooking, neither wet nor burnt but pleasant on the palate, allows to preserve the authentic flavors of tomato and fiordilatte mozzarella.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-5 inline-block bg-red-700 rounded-xl shadow-lg transform -translate-y-1/2">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div class="sm:flex-shrink-0">
              <div class="flow-root">
                <img class="h-46 mx-auto" :src="link.imageSrc" alt="" />
              </div>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mt-2">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <carousel>
    <slide v-for="slide in photos" :key="slide" style="background-image: url('img/carrelage.png');">
      <div class="carousel__item hidden md:block">
        <img class="h-34 mx-auto mb-16" :src="slide.imageSrc" alt="photos carousel" id="photo-carousel" />
      </div>
    </slide>
    <template #addons>
      <Navigation />
    </template>
  </carousel>

  <!--  Menù section-->

  <div class="bg-white" style="background-image: url('img/patterns/close-up-white-marble-texture-background.jpg');">
    <div aria-hidden="true" class="relative">
      <img src="img/pizza-burratina.png" alt="" class="w-full h-96 object-center object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-white" />
    </div>

    <div class="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 class="text-3xl font-extrabold tracking-tight text-red-700 sm:text-4xl lg:text-6xl">Pizze Rosse</h2>
        <p class="mt-4 text-gray-500">Sauce made with Piennolo tomato, typical of the Vesuvian area of Campania, it owes its name to the way in which the tomato clusters are intertwined to be preserved. They have an oval but elongated shape and a typically sour taste.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in redpizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">{{ pizza.name }}</dt>
          <dd class="mt-2 text-sm text-gray-500">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900">{{ pizza.price }}€</dt>
        </div>
      </dl>

      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl mt-16">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">Pizze bianche</h2>
        <p class="mt-4 text-gray-500">Even without tomato sauce it is always a pizza! Able to satisfy the most refined palates. A mind-blowing combination that will tickle your taste buds.</p>
      </div>

      <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="pizza in whitepizzas" :key="pizza.name" class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">{{ pizza.name }}</dt>
          <dd class="mt-2 text-sm text-gray-500">{{ pizza.description }}</dd>
          <dt class="font-medium text-gray-900">{{ pizza.price }}€</dt>
        </div>
      </dl>
    </div>
  </div>

  <!--  Testimonial section-->

  <div class="bg-white relative overflow-hidden">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto overflow-hidden">
        <img src="img/pexels-koolshooters-7142952.jpg" alt="" class="w-full h-full object-center object-cover " />
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-10" />
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white" />
    </div>

    <!-- Callout -->
    <section aria-labelledby="sale-heading" class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          To give importance to our customers
        </h2>
        <p class="mt-4 max-w-xl mx-auto text-xl text-gray-600">we ask you to leave a comment. Because your comments are our best advertisement. Thanks!.</p>
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="rounded-full"><img class="h-28 mx-auto" src="img/Tripadvisor-Logo.png" alt="tripadvisor" /></span>
          <ChevronRightIcon class=" w-5 h-5 text-black" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">What are people saying?</h2>

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
              <p class="text-lg text-gray-900 mt-2">
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
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation,} from 'vue3-carousel';

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
  { name: 'Diavola', description: 'Tomato, Basil, Mozzarella and \'Nduja*. ( Type of Italian salami, spiced sausage )', price:'12,50' },
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
        'For us it is important to serve a high quality pizza. High quality products at affordable prices to give customers a final product that is excellent to taste, easy to digest and at a fair price. The ingredients (and the way they are processed) are, especially with regards to pizza, the most important part.',
    icon: CameraIcon,
    imageSrc:'img/pizza-primo-piano3.jpeg'
  },
  {
    name: 'Il Pizzaiolo',
    description:
        'From an early age Michele loved to watch pizza makers move their hands in the dough with dexterity and elegance. He started working at the age of 16 in the "Lorem" pizzeria. After at age of 18 he decided that it was time to put himself to the test: he therefore left that pizzeria, to begin his professional and personal growth path.',
    icon: CameraIcon,
    imageSrc:'img/michele-pizza.jpeg'
  },
]

const photos =[
  {
    imageSrc: 'img/carousel/4-200x100.jpg',
  },
  {
    imageSrc: 'img/carousel/5-200x100.jpg',
  },
  {
    imageSrc: 'img/carousel/carousel-2.jpeg',
  },
  {
    imageSrc: 'img/carousel/carousel-1.png',
  },
  {
    imageSrc: 'img/carousel/outside-pizzeria.jpeg',
  },
  {
    imageSrc: 'img/carousel/carousel-3.png',
  }

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
    Carousel, Slide, Pagination, Navigation
  },

  setup() {
    return {
      redpizzas,
      whitepizzas,
      testimonials,
      fooddelivery,
      NewspaperIcon,
      PhoneIcon,
      SupportIcon,
      supportLinks,
      CameraIcon,
      photos
    }
  },
}

</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#photo-carousel{
  max-height: 600px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}


@media only screen and (max-width: 736px) {

  #header_text1{
    font-size: medium !important;
  }

  #header_text2{
    font-size: small !important;
  }

  #text_comment{
    color: #374151 !important;
  }

  p{
    font-size: medium !important;
  }

  #photo-carousel{
    display: none !important;
  }
  .carousel__item{
    display: none !important;
  }
  .carousel__prev,
  .carousel__next {
    display: none !important;
  }
}


.carousel__slide {

}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  margin-left: 50px;
  margin-right: 50px;
  border: 5px solid #B91C1C;
  color: #B91C1C;
}
</style>