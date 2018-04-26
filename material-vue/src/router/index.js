import Vue from 'vue'
import Router from 'vue-router'
import Lyrics from '@/components/Lyrics'
import Form from '@/components/Form'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lyrics',
      component: Lyrics
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
