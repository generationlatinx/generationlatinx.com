import test from 'ava';
import Vue from 'vue';
import Mailchimp from './mailchimp.vue';
import Router from 'vue-router';

const Ctor = new Vue(Mailchimp);




test('renders', t => {
	const vm = new Vue(Mailchimp).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});
