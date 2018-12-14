import test from 'ava';
import Vue from 'vue';
import ShowsPage from './shows-page.vue';
import Router from 'vue-router';


const Ctor = new Vue(ShowsPage);

test('renders', t => {
	const vm = new Vue(ShowsPage).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});
