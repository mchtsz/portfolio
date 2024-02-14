<script setup lang=ts>
const props = defineProps<{
	title?: String,
	totalCurrency: Number | any
}>()
</script>

<template>
	<section>
		<h1>{{ props.title }}</h1>
		<hr class="darkblue">
		<p>Total</p>
		<b>Nok {{ props.totalCurrency.toLocaleString('en-US') }}</b>
		<hr class="lightblue">
	</section>
</template>

<style scoped lang=scss>
section {
	color: #fff;
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: .5rem;
}
</style>