<template>
	<div class="bakery">
		<h1>BAKERY</h1>
		<router-link to="/bakery/admin">Edit</router-link>
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
			this.getCookies()
		},
		methods: {
			async getCookies() {
				try {
					let response = await axios.get("/api/cookies");
					this.products = response.data;
				}
				catch (error) {
					console.log(error);
				}
			}
		}
	}
</script>
