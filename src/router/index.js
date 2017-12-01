import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Coordination from '@/components/Coordination' //多组织协同
import Assessment from '@/components/Assessment'	//利润考核



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Coordination',
      component: Coordination
    },
    {
      path: '/Assessment',
      name: 'Assessment',
      component: Assessment
    },
    {
      path: '/Coordination',
      name: 'Coordination',
      component: Coordination
    },
  ]
})
