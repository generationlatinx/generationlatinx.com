// You need to install vue-test-utils
import { mount } from '@vue/test-utils'
import CastRoster from './cast-roster.vue'

describe('CastRoster', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CastRoster)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct initial content', () => {
    const wrapper = mount(CastRoster)

    expect(wrapper.text()).toBe('')
    expect(wrapper.html()).toBe('<div class="container"><div class="row"><div class="s12"><span name="list" tag="div" appear=""></span></div></div></div>')


  })
})
