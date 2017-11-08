import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Callback from '@/components/Callback.vue'

Vue.config.productionTip = false
Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/callback',
        name: 'Callback',
        component: Callback
      },
      {
        path: '*',
        redirect: '/home'
      }
    ]
  })

  export default router;