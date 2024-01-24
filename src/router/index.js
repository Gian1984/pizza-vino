import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Français - Pizza Vino, per chi ama la pizza, une excellente pizza',
      metaTags: [
        {
          name: 'description',
          content: 'Page d\'accueil de la pizzeria Pizza Vino ixelles en français.'
        },
        {
          property: 'og:description',
          content: 'La pizzeria Pizza Vino est située à Bruxelles précisément à Ixelles. Produits frais choisis quotidiennement et tradition typiquement italienne se rencontrent en un seul endroit : la pizza !.'
        }
      ]
    }
  },
  {
    path: '/HomeEN',
    name: 'HomeEN',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeEN.vue'),
    meta: {
      title: 'Home English - Pizza Vino, per chi ama la pizza, une excellente pizza',
      metaTags: [
        {
          name: 'description',
          content: 'Home page of the pizzeria pizza vino Ixelles in english.'
        },
        {
          property: 'og:description',
          content: 'The pizzeria Pizza Vino , is located in Brussels precisely in Ixelles. Daily chosen fresh products and the typical Italian tradition meet all in one place: the pizza!.'
        }
      ]
    }
  },
  {
    path: '/HomeIT',
    name: 'HomeIT',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeIT.vue'),
    meta: {
      title: 'Home Italiano - Pizza Vino, per chi ama la pizza, une excellente pizza',
      metaTags: [
        {
          name: 'description',
          content: 'Home page della pizzeria pizza vino ixelles in Italiano.'
        },
        {
          property: 'og:description',
          content: 'La pizzeria Pizza Vino , si trova a Bruxelles precisamente a Ixelles. Prodotti freschi scelti giornalmente e la tipica tradizione italiana si incontrano in un unico luogo: la pizza!.'
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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
