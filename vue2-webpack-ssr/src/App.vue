<template>
	<div>
		<button @click="++counter">click me</button>
		<div>counter: {{ counter }}</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return { counter: 1 };
	},
};
</script>

<style lang="scss" scoped></style>
