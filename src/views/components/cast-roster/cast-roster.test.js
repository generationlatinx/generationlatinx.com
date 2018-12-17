// You need to install vue-test-utils
import { mount, createLocalVue } from '@vue/test-utils'
import CastRoster from './cast-roster.vue'

import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe('CastRoster', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CastRoster, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct initial content', () => {
    const wrapper = mount(CastRoster, {
      localVue,
      router
    })

    expect(wrapper.text()).toBe('')
    expect(wrapper.html()).toBe('<div class="container"><div class="row"><div class="s12"><span name="list" tag="div" appear=""></span></div></div></div>')


  })
})
