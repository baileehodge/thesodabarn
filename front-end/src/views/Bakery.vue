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
	import axios from 'axios';
	import ProductList from "../components/ProductList.vue"
	export default {
		name: 'Browse',
		components: {
			ProductList
		},
		data() {
			return {
				country: '',
				products: [],
			}
		},
		created() {
			try {
				let response = await axios.get("/api/cookies");
				this.products = response.data;
			}
			catch (error) {
				console.log(error);
			}
		},
	}
</script>
