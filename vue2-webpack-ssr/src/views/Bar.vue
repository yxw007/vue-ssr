<template>
	<div>Bar page , age: {{ $store.state.age }}</div>
</template>

<script>
export default {
	name: "Bar",
	asyncData(store) {
		//TODO: 修改到此处?
	},
};
</script>

<style scoped>
div {
	background-color: blue;
}
</style>
