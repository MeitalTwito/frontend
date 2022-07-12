import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/toy' },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
      children: [
        { path: 'edit/:toyId?', component: toyEdit},
        { path: ':toyId?', component: toyDetails}
      ]
    },
    // {
    //   path: '/toy/edit/:toyId?',
    //   name: 'toy-edit',
    //   component: toyEdit,
    //   // children: [
    //   //   { path: '/edit/:toyId?', component: toyEdit}
    //   // ]
    // },
  ]
})

export default router
