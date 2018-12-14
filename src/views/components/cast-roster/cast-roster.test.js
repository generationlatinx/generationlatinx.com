import test from 'ava';
import Vue from 'vue';
import Performer from './cast-roster.vue';
import Router from 'vue-router';


const Ctor = new Vue(Performer);

test('renders', t => {
	const vm = new Vue(Performer).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});
