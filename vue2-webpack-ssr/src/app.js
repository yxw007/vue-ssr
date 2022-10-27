import Vue from "vue";
import App from "./App.vue"

export default function () {
	const app = new Vue({
		render(h) {
			return h(App);
		}
	});

	return { app };
}
