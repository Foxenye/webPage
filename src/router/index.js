import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/About'
import Excel from '@/components/Excel'
import Data from '@/components/Data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Excel',
      name: '/Excel',
      component: Excel
    },
    {
      path: '/Data',
      name: '/Data',
      component: Data
    }
  ]
})
