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
                    &mdash; Raffaele Esposito è l’inventore della pizza Margherita che creò per la Regina Margherita di Savoia in omaggio ai tre colori della bandiera italiana. Alla classica pizza napoletana di olio e pomodoro, aggiunse il bianco della mozzarella, il rosso del pomodoro e il verde del basilico.
                  </cite>
                </div>
              </blockquote>
            </div>
            <div class="mt-10 sm:mt-12">
              <a href="doc/pizza-vino-it.pdf" class="inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">Scarica il menù</span>
                <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <a type="button" href="TEL: 0494 69 30 28" class="mt-2 inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-gray-300">
                <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">Chiama</span>
                <phone-outgoing-icon class="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-46 lg:max-w-46" src="img/Pizza%20Lovers%20Typography%20Vector.svg" alt="" id="pizza_lovers" />
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
              <img class="mx-auto h-20  lg:h-36" :src="partner.imageUrl" alt="" />
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
        <img class="w-full h-full object-cover" src="img/pizza-primo-piano5.jpeg" alt="" />
        <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Made with love</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">Un impasto leggero, realizzato con ingredienti di alta qualità, per ottenere un cornicione pronunciato ma scavato all'interno; la perfetta cottura, né umida né bruciata ma gradevole al palato, permette di preservare i sapori autentici del pomodoro e della mozzarella fiordilatte.</p>
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
        <p class="mt-4 text-gray-500">Sugo a base di pomodoro del Piennolo, tipico dell'area vesuviana campana, deve il suo nome al modo in cui i grappoli di pomodoro vengono intrecciati per essere conservati. Hanno una forma ovale ma allungata e un sapore tipicamente acidulo.</p>
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
        <p class="mt-4 text-gray-500">Anche senza salsa di pomodoro è sempre una pizza! Capace di soddisfare i palati più raffinati. Una combinazione strabiliante che solleticherà le vostre papille gustative.</p>
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
        <p class="mt-4 max-w-xl mx-auto text-xl text-gray-600" id="text_comment">Ti chiediamo di lasciare un commento. Perché i tuoi commenti sono la nostra migliore pubblicità. Grazie!</p>
        <a href="https://fr.tripadvisor.be/Restaurant_Review-g1136493-d19872077-Reviews-PizzaVino-Ixelles_Brussels.html" class="inline-flex items-center text-white bg-transparent rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="rounded-full"><img class="h-28 mx-auto" src="img/Tripadvisor-Logo.png" alt="tripadvisor" /></span>
          <ChevronRightIcon class=" w-5 h-5 text-black" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Casa dicono su di noi ?</h2>

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

const supportLinks = [
  {
    name: 'Wood-fired oven',
    description:
        'Design assolutamente italiano da più di un secolo, ottime prestazioni, i forni Valoriani sono riconosciuti a livello internazionale. Certificazioni e attestati ricevuti dall\'Associazione Napoletana Vera Pizza, da partner come Slow Food, Gambero Rosso, Witaly ecc...',
    icon: CameraIcon,
    imageSrc:'img/forno.jpeg'
  },
  {
    name: 'Quality products',
    description:
        'Per noi è importante servire una pizza di alta qualità. Prodotti di alta qualità a prezzi convenienti per dare ai clienti un prodotto finale ottimo da gustare, digeribile e dal giusto prezzo. Gli ingredienti (e il modo in cui vengono lavorati) sono, soprattutto per quanto riguarda la pizza, la parte più importante.',
    icon: CameraIcon,
    imageSrc:'img/pizza-primo-piano3.jpeg'
  },
  {
    name: 'Il Pizzaiolo',
    description:
        'Fin da piccolo Michele amava guardare i pizzaioli muovere le mani nell\'impasto con destrezza ed eleganza. Ha iniziato a lavorare all\'età di 16 anni. Dopo tanti anni che fa questo mestiere, ha capito che il segreto è non sentirsi mai arrivati: giorno dopo giorno imparare qualcosa di nuovo, approcciando a questo lavoro sempre con lo stesso entusiasmo del primo giorno.',
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
      photos,
      partners
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

  #text_comment{
    color: black !important;
  }

  #pizza_lovers{
    max-height: 400px;
    justify-content: center;
    padding-bottom: 100px;
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