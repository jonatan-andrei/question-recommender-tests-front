import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ResultadoTeste from '../views/ResultadoTeste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resultado/:id',
    name: 'ResultadoTeste',
    component: ResultadoTeste
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
