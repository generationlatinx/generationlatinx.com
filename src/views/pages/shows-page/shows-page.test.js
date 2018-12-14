// You need to install vue-test-utils
import { mount } from '@vue/test-utils'
import ShowsPage from './shows-page.vue'

describe('ShowsPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ShowsPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(ShowsPage)
    expect(wrapper.text()).toBe('')
    expect(wrapper.html()).toBe('<div><div><div class=\"progress show-on-sm pbar purple\"><div class=\"indeterminate\"></div></div></div></div>')		
  })
})
