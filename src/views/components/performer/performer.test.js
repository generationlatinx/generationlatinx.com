// You need to install vue-test-utils
import { mount } from '@vue/test-utils'
import Performer from './performer.vue'

xdescribe('Performer', () => {
  xtest('is a Vue instance', () => {
    const wrapper = mount(Performer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  xtest('has correct content', () => {
    const wrapper = mount(Performer)
    expect(wrapper.props()).toBe('Home Videos Meet the Directors Contact Next show on Tues, 12/10 8pm')
  })
})
