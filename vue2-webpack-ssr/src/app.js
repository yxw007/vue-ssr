import Vue from "vue";
import App from "./App.vue"

debugger
const app = new Vue({
	el: "#app",
	render(h) {
		return h(App);
	}
});

app.$mount();
