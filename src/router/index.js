import { createRouter, createWebHistory } from 'vue-router'
import Tarefas from '../views/TarefasView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
   routes: [
    {
      path: '/',
      name: 'tarefas',
      component: () => import(/* webpackChunkName: "tarefas" */ '../views/TarefasView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import(/* webpackChunkName: "sobre" */ '../views/SobreView.vue')
    }
  ]
})

export default router
