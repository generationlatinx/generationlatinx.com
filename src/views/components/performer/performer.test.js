import test from 'ava';
import Vue from 'vue';
import Performer from './performer.vue';
import Router from 'vue-router';


const Ctor = new Vue(Performer);

test('renders', t => {
	const vm = new Vue(Performer).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});

// use This from https://vuejs.org/v2/guide/unit-testing.html#Writing-Testable-Components
// import Vue from 'vue'
// import MyComponent from './MyComponent.vue'
//
// // helper function that mounts and returns the rendered text
// function getRenderedText (Component, propsData) {
//   const Constructor = Vue.extend(Component)
//   const vm = new Constructor({ propsData: propsData }).$mount()
//   return vm.$el.textContent
// }
//
// describe('MyComponent', () => {
//   it('renders correctly with different props', () => {
//     expect(getRenderedText(MyComponent, {
//       msg: 'Hello'
//     })).toBe('Hello')
//
//     expect(getRenderedText(MyComponent, {
//       msg: 'Bye'
//     })).toBe('Bye')
//   })
// })
