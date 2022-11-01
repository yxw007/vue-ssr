import Vue from "vue";
import Router from "vue-router";

import Foo from "../views/Foo.vue";
import Bar from "../views/Bar.vue";

Vue.use(Router);

export default function () {
	const router = new Router({
		mode: 'history',
		routes: [
			{
				path: '/', component: Foo
			},
			{
				path: '/bar', component: Bar
			},
			{
				path: '*', component: {
					render(h) {
						return h("div", {}, "not found 404");
					}
				}
			},
		]
	});

	return router;
}
