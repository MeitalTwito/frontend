import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'toy-app',
      component: toyApp
    },
  ]
})

export default router
