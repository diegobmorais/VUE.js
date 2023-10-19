import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/views/Home.vue'
import PublicarVaga from '../components/views/PublicarVaga.vue'

const routes = [  
  {
    path: '/',
    component: Home
  },
  {
    path: '/publicar-vaga',
    component: PublicarVaga
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes //routes: routes
})

export default router