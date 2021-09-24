import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page Français - Pizza Vino',
      metaTags: [
        {
          name: 'description',
          content: 'Page d\'accueil de la pizzeria Pizza Vino ixelles en français.'
        },
        {
          property: 'og:description',
          content: 'La pizzeria est située à Bruxelles précisément à Ixelles. Produits frais choisis quotidiennement et tradition typiquement italienne se rencontrent en un seul endroit : la pizza !.'
        }
      ]
    }
  },
  {
    path: '/HomeEN',
    name: 'HomeEN',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeEN.vue'),
    meta: {
      title: 'Home English - Pizza Vino',
      metaTags: [
        {
          name: 'description',
          content: 'Home page of the pizzeria pizza vino ixelles in english.'
        },
        {
          property: 'og:description',
          content: 'The pizzeria, is located in Brussels precisely in Ixelles. Daily chosen fresh products and the typical Italian tradition meet all in one place: the  pizza!.'
        }
      ]
    }
  },
  {
    path: '/HomeIT',
    name: 'HomeIT',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeIT.vue'),
    meta: {
      title: 'Home Page Italiano - Pizza Vino',
      metaTags: [
        {
          name: 'description',
          content: 'Home page della pizzeria pizza vino ixelles in Italiano.'
        },
        {
          property: 'og:description',
          content: '\n' +
              'La pizzeria, si trova a Bruxelles precisamente a Ixelles. Prodotti freschi scelti giornalmente e la tipica tradizione italiana si incontrano in un unico luogo: la pizza!.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
