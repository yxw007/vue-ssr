<template>
	<!-- app节点必须在此处定义，否则客户端交互失效，所以防止这里统一管理 -->
	<div id="app">
		<button @click="add">click me</button>
		<div>counter: {{ counter }}</div>
	</div>
	
</template>

<script>
export default {
	name: "App",
	data() {
		return { counter: 1 };
	},
	methods: {
		add() {
			this.counter++;
		},
	},
};
</script>

<style lang="scss" scoped></style>
