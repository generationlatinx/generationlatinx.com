import Vue from 'vue';
import VueRouter from 'vue-router'

import PageNotFound from '@/views/components/page-not-found'
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
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
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
