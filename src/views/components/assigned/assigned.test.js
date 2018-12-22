// You need to install vue-test-utils
import { mount, createLocalVue } from '@vue/test-utils'
import Assigned from './assigned.vue'

import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe('Assigned', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Assigned, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct initial content', () => {
    const wrapper = mount(Assigned, {
      localVue,
      router
    }).find('thead')
    .find('th')

    expect(wrapper.text()).toBe('Performer')
  })

  xtest('has correct initial data row', () => {
    const wrapper = mount(Assigned, {
      localVue,
      router
    }).find('tbody')
    // .find('th')

    expect(wrapper.text()).toBe('Mishell Liveo Creator and Executive Producer Facecard')
  })


})
