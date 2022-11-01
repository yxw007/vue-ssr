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
			asyncAdd({ commit }, payload) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						commit('add', payload);
						resolve();
					}, 1000);
				});
			}
		}
	});

	//! 用后端最新的store.state 替换掉client中的store.state 避免服务端已渲染最新的state 页面后，client又渲染会之前的state中的状态页面效果
	//! 注意：此时需要用global变量，webpack打包后会自动替换global变量(不要使用window会导致报错)
	if (global && global.__INITIAL_STATE__) {
		store.replaceState(global.__INITIAL_STATE__);
	}

	return store;
}

