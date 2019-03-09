import Vue from 'vue';
import VueRouter from 'vue-router'

import ShowsPage from '@/views/pages/shows-page'
// import NextVideo from '@/views/components/videos'

import Mailchimp from '@/views/components/mailchimp'
import Performer from '@/views/components/performer'
import Assigned from '@/views/components/assigned'

Vue.use(VueRouter)


const routes = [
  // { path: '/performers', component: CastRoster },


  {
    path: '/',
    name: 'Home',
    component: ShowsPage
    // component: () => import('@/views/components/shows-page')

  },
  // {
  //   path: '/videos',
  //   name: 'Videos',
  //   compoennt: NextVideo
  // }
  {
    path: '/assigned',
    name: 'Meet the Directors',
    component: Assigned
  },
  {
    path: '/contact',
    name: 'Mailchimp',
    component: Mailchimp
  },
  {
    path: '/performers/:performerSlug-glx-:id',
    name: 'Performer',
    component: Performer
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
