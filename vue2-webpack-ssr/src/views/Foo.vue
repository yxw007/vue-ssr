<template>
	<div>Foo page age: {{ $store.state.age }}</div>
</template>

<script>
export default {
	name: "Foo",
	/* mounted() {
		this.$store.dispatch("asyncAdd", 1000);
	}, */
	asyncData(store) {
		return store.dispatch("asyncAdd", 1000);
	},
};
</script>

<style scoped>
div {
	background: red;
}
</style>
