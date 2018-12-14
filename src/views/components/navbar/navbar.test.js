// You need to install vue-test-utils
import { mount } from '@vue/test-utils'
import NavBar from './NavBar.vue'

describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toBe('Home Videos Meet the Directors Contact Next show on Tues, 12/10 8pm')
  })
})
