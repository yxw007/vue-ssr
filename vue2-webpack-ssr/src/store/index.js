import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default function () {
	const store = new Vuex.Store({
		state: {
			age: 18
		},
		mutations: {
			add(state, payload) {
				if (payload) {
					state.age += payload;
				} else {
					state.age++;
				}
			}
		},
		actions: {
			async asyncAdd({ commit }, payload) {
				commit('add', payload);
			}
		}
	});

	return store;
}

