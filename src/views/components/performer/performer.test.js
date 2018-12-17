// You need to install vue-test-utils
import { mount, createLocalVue } from '@vue/test-utils'
import Performer from './performer.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()



describe('Performer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Performer, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(Performer, {
      localVue,
      router
    })
    // expect(wrapper.props()).toBe({"bio": undefined})
    // TODO: fix undefined condition
    expect(wrapper.props()).toEqual({"bio": undefined})
  })
  xtest('has fallback if content is undefined', () => {
    const wrapper = mount(Performer, {
      localVue,
      router
    })
    expect(wrapper.props()).toBe('Home Videos Meet the Directors Contact Next show on Tues, 12/10 8pm')
  })

})
