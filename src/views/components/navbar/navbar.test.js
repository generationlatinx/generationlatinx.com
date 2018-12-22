// You need to install vue-test-utils
import { mount, createLocalVue } from '@vue/test-utils'
import NavBar from './navbar.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()


describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(NavBar, {
      localVue,
      router
    })

    expect(wrapper.text()).toBe('Home Videos Contact Shows on Tuesdays at 10pm')
  })
})
