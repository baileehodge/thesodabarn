<template>
	<div class="bakery">
		<h1>BAKERY ORDERS</h1>
		<ProductList :products="products" />
	</div>
</template>

<style scoped>
	.bakery {
		text-align: center;
	}
</style>

<script>
	import ProductList from "../components/ProductList.vue"
	export default {
		name: 'Browse',
		components: {
			ProductList
		},
		data() {
			return {
				country: '',
			}
		},
		computed: {
			products() {
				return this.$root.$data.products;
			}
		}
	}
</script>
