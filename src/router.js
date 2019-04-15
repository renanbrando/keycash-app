import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('./views/Home'),
        'toolbar': () => import('./components/Toolbar')
      }
    },
    { 
      path: '*', 
      components: {
        default: () => import('./views/Home'),
        'header': () => import('./components/Toolbar') 
      }
    }
  ]
})
