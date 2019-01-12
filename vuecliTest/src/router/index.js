import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HI from '@/components/HI'
import HI1 from '@/components/HI1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HI',
      component: HI,
      children:[
        {path: '/',component: HI,name: 'HI'},
        {path: 'HI1',component: HI1,name: 'HI1'}
      ]
    }
  ]
})
