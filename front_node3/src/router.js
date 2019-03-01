import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Projets',
      name: 'projets',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/Projets-details/:id',
      name: 'Projets-details',
      component: () => import('./views/ProjectDetail.vue')
    },
    {
      path: '/Projets/create',
      name: 'Projets/create',
      component: () => import('./views/ProjectNew.vue')
    },
    {
      path: '/Projets-edit/:id',
      name: 'Projets-edit',
      component: () => import('./views/ProjectEdit.vue')
    }
  ]
})
