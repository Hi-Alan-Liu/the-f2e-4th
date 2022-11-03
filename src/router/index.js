import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Alan - The F2E 3rd'
    }
  },
  {
    path: '/week01',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layouts/week01/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/week01/HomeView.vue'),
        meta: {
          title: 'Week 1 - The F2E 活動網站設計'
        }
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})

export default router
