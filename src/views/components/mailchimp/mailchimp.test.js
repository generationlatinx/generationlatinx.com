// You need to install vue-test-utils
import { mount } from '@vue/test-utils'
import Mailchimp from './mailchimp.vue'

describe('Mailchimp', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Mailchimp)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(Mailchimp)
    expect(wrapper.text()).toContain('Subscribe with your email address')
  })
})
