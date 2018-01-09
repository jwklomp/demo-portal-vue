import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Newslist from '@/components/Newslist'
import Accountlist from '@/components/Accountlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }, 
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    }, 
    {
      path: '/newslist',
      name: 'Newslist',
      component: Newslist
    },
    {
      path: '/accountlist',
      name: 'Accountlist',
      component: Accountlist
    }
  ]
})
