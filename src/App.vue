<template>

  <!-- Header section -->

  <Disclosure as="nav" class="bg-black" v-slot="{ open }">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-8 rounded-full" src="img/pizza-vino-logo.jpeg" alt="pizza-vino-logo" />
            <div class="flex-1">
              <h2 class="ml-2 text-xl font-bold leading-7 text-white sm:text-3xl sm:truncate" id="pizza_vino">
                Pizza Vino
              </h2>
            </div>
          </div>
          <div class="mt-3 hidden sm:block sm:ml-6">
            <div class="flex space-x-4" id="menu_nav">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-black text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div>
            <img v-if="homePage()" class="h-8 w-8 rounded-full" id="flag" :src="flag" alt="pizza-vino-logo" />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1" id="menu_nav_mobile">
        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
      </div>
    </DisclosurePanel>
  </Disclosure>


  <router-view/>


  <!-- Footer section -->






  <footer class="bg-black">
    <div class="py-18 overflow-hidden lg:py-18 mb-10">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="relative mt-10 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">


          <div class="relative">
            <h3 class="text-4xl font-extrabold text-white tracking-tight sm:text-3xl" id="sub_contact">
              Contact
            </h3>
            <p class="text-lg text-gray-500 mt-2">
              {{ description }}
            </p>
            <dl class="mt-14 space-y-3">
              <div v-for="item in transferFeatures" :key="item.id" class="relative">
                <dt>
                  <a :href="item.href" class="hover:text-gray-300">
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white hover:bg-red-900">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-white">{{ item.name }}</p>
                  </a>
                </dt>
                <dd class="ml-16 text-gray-500 text-sm">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>


          <div class="mt-10 -mx-4 relative lg:mt-0 gap-8" aria-hidden="true">
            <div class="relative mx-5">
              <h3 class="text-4xl font-extrabold text-white tracking-tight sm:text-3xl sm:px-5" id="sub_opening">
                Opening Hours
              </h3>
              <div class="mt-10 border-t border-gray-200">
                <dl class="sm:divide-y sm:divide-gray-200">
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      MON
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      Closed
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      TUE
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      WED
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      THU
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      FRI
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      SAT
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                  <div class="py-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">
                      SUN
                    </dt>
                    <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                      12:00 – 2:30 pm, 6:00 – 10:30 pm
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--  Food-delivery parteners-->

    <div class="bg-white">
      <div class="mx-auto">
        <div class="bg-gray-50 rounded-2xl pb-5" id="food_delivery_pannel">
          <div class="max-w-xl mx-auto lg:max-w-none">
            <div class="mt-5 max-w-sm mx-auto grid grid-cols-1 gap-y-5 gap-x-8 sm:max-w-none xl:grid-cols-3">
              <div v-for="delivery in fooddelivery" :key="delivery.name" class="text-center sm:flex sm:text-left lg:block lg:text-center delivey_pannel">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-16 mx-auto delivery_img" :src="delivery.imageSrc" alt="" />
                  </div>
                </div>
                <div class="sm:mt-0 sm:ml-3 lg:ml-0" id="order_button">
                  <a :href="delivery.link" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">{{ delivery.name }}</span>
                    <ChevronRightIcon class=" w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mx-auto max-w-md px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <a href="https://www.gianlucatiengo.com/">
        <p class="text-center text-base text-gray-400 hover:text-white underline">
          &copy; 2021  Gianluca Tiengo. All rights reserved.
        </p>
      </a>
    </div>
  </footer>


</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, FlagIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, LocationMarkerIcon, PhoneOutgoingIcon } from '@heroicons/vue/outline'
import { ChevronRightIcon, } from '@heroicons/vue/solid'
import { defineComponent, h } from 'vue'


const navigation = [
  { name: 'Français', href: '/', current: true },
  { name: 'English', href: '/HomeEN', current: true },
  { name: 'Italiano', href: '/HomeIT', current: true },
]

const transferFeatures = [
  {
    id: 1,
    name: 'Address',
    href:'https://www.google.be/maps/place/PizzaVino/@50.8199996,4.3833578,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c518e8b6ab6b:0xfd6daa37c3d4bc26!8m2!3d50.8200407!4d4.3856159',
    description:
        'Avenue des Saisons 15\n' +
        '1050 Ixelles',
    icon: LocationMarkerIcon,
  },
  {
    id: 2,
    name: 'Contact',
    href:'tel:0494693028',
    description:
        'TEL: 0494 69 30 28',
    icon: PhoneOutgoingIcon,
  },
  {
    id: 3,
    name: 'Facebook',
    description:
        ' Pizza Vino Facebook ',
    href: 'https://www.facebook.com/pizzavinobxl',
    icon: defineComponent({
      render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d:
                  'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
    }),
  },
  {
    id: 3,
    name: 'Instagram',
    description:
        ' Pizza Vino Instagram ',
    href: 'https://www.instagram.com/pizzavinobxl/',
    icon: defineComponent({
      render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d:
                  'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
    }),
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
    link: 'https://www.proxideal.eu/',
    imageSrc: 'img/Proxideal_Logo-01.png',
    description: "Vos plats préférés livrés au prix juste.",
  },
]





export default {

  data() {
    return {
      flag: "",
      description:""
    }
  },

  methods: {
    homePage() {
      if(this.$route.path == "/" || this.$route.path == "/home" ) {
        return (this.flag = 'img/flag/belgium.png') && (this.description = 'Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t\'attendons!')
      } else if(this.$route.path == "/HomeEN") {
        return (this.flag = 'img/flag/british.png') && (this.description = 'Click on the icons to find us on a map or over the social media. Do you want to book a table or order a pizza? Click on the phone! We are waiting for you!')
      } else {
        return (this.flag = 'img/flag/italy.png') && (this.description = 'Clicca sulle icone per trovarci sulla mappa o sui social media. Vuoi prenotare un tavolo o ordinare una pizza? Clicca sul telefono! Ti stiamo aspettando!')
      }
    }
  },

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    FlagIcon,
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon,
    LocationMarkerIcon,
    PhoneOutgoingIcon,
    ChevronRightIcon,
  },
  setup() {
    return {
      navigation,
      transferFeatures,
      fooddelivery,
    }
  },
}
</script>

<style>

#pizza-vino-logo{
  display: none !important;
}

#flag{
  border: lightgrey solid 2px !important;
}

#menu_nav_mobile,
#sub_opening,
#sub_contact,
#menu_nav,
#red_pizza_name,
#testimonial-heading,
#white_pizza_name,
#card_title,
#sale-heading,
#pizze_bianche,
#pizze_rosse,
#sub_title_pizzaphoto,
#pizza_vino,
#title{
  font-family: lobster;
}

#header_text2,
p,
dd{
  font-family: "Neucha" !important;
}


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

  #pizza_lovers{
    max-width: 380px;
    justify-content: center;
    padding-bottom: 50px;
  }

}

@media only screen and (max-width: 1024px) {
  #pizza_lovers{
    max-width: 400px;
    max-height: 600px;
    justify-content: center !important;
    padding-bottom: 200px !important;
  }

  #food_delivery_pannel{
    padding: 20px !important;
    justify-content: center !important;
    align-items: center !important;
  }
  #order_button{
    align-items: center;
    margin-top: 15px;
  }

  .delivey_pannel{
    justify-content: center !important;
  }
  .delivery_img{
  }

}


.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  margin-left: 50px;
  margin-right: 50px;
  border: 5px solid #B91C1C !important;
  color: #B91C1C !important;
}

</style>
