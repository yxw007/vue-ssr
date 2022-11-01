<template>
	<!-- app节点必须在此处定义，否则客户端交互失效，所以防止这里统一管理 -->
	<div id="app">
		<button @click="add">click me</button>
		<button @click="asyncAdd(10)">asyncAdd</button>
		<div>age: {{ this.$store.state.age }}</div>
		<router-link to="/">foo</router-link>
		<router-link to="/bar">bar</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "App",
	data() {
		return { ...mapState(["age"]) };
	},
	methods: {
		...mapActions(["asyncAdd"]),
		add() {
			this.$store.commit("add", 1);
		},
	},
};
</script>

<style lang="scss" scoped></style>
