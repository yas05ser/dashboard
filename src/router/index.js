import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import index from '../views/students/Index.vue'
import VeeValidate from 'vee-validate';
import teachers from '../views/teachers/index.vue'
import trainer from '../views/training/index.vue'

Vue.use(VeeValidate);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component: index,
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: teachers,
  },
  {
    path: '/training',
    name: 'training',
    component: trainer,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
