<template>
	<div>Bar page , age: {{ $store.state.age }}</div>
</template>

<script>
export default {
	name: "Bar",
	asyncData(store) {},
};
</script>

<style scoped>
div {
	background-color: blue;
}
</style>
