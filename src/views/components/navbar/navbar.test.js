import test from 'ava';
import Vue from 'vue';
import Navbar from './navbar.vue';
import Router from 'vue-router';

const Ctor = new Vue(Navbar);




test('renders', t => {
	const vm = new Vue(Navbar).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});
