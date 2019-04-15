import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/Home'),
        'toolbar': () => import('./components/Toolbar')
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('./views/About'),
        'toolbar': () => import('./components/Toolbar')
      }
    },
    { 
      path: '*', 
      components: {
        default: () => import('./views/Home'),
        'toolbar': () => import('./components/Toolbar') 
      }
    }
  ]
})
