import Vue from 'vue';
import VueRouter from 'vue-router'

import ShowsPage from '@/views/pages/shows-page'
// import NextVideo from '@/views/components/videos'

import Mailchimp from '@/views/components/mailchimp'
import Performer from '@/views/components/performer'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>'}

const routes = [
  // { path: '/performers', component: CastRoster },
  { path: '/foo', component: Foo },
  {
    path: '/',
    name: 'Home',
    component: ShowsPage
  },
  // {
  //   path: '/videos',
  //   name: 'Videos',
  //   compoennt: NextVideo
  // }
  // {
  //   path: '/assigned',
  //   name: 'Meet the Directors',
  //   component: DirectorShowcase
  // }
  {
    path: '/contact',
    name: 'Mailchimp',
    component: Mailchimp
  },
  {
    path: '/performers/:id',
    name: 'Performer',
    component: Performer
  }
]

export default new VueRouter({
  routes,
  mode: "history"
})
