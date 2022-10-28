<template>
	<div id="app">
		<div @click="add">click me</div>
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
