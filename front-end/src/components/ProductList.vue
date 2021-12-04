<template>
	<div class="wrapper">
		<div class="products">
			<div class="product" v-for="product in products" :key="product._id">
				<div class="info">
					<h2>{{product.name}}</h2>
					<h3>{{product.price}}</h3>
				</div>
				<div class="image">
					<img :src="product.image">
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'ProductList',
		props: {
			products: Array
		}
	}
</script>


<style scoped>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.products {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 90%;
		font-family: "Century Gothic", "Arial", sans-serif;
	}

	.product {
		display: flex;
		margin: 10px;
		margin-top: 50px;
		width: 200px;
		background: #1B5F76;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
	}

	.product img {
		border: 2px solid #333;
		height: 200px;
		width: 200px;
		object-fit: cover;
	}

	.product .image {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.info {
		background: #1B5F76;
		color: white;
		padding: 10px 30px;
		height: 100px;
		width: 50%;
	}

	.info h1 {
	}

	.info h2 {
	}

	.info p {
		margin: 0px;
		font-size: 10px;
	}


	.price {
		display: flex;
	}

	button {
		height: 50px;
		background: #000;
		color: white;
		border: none;
	}

	.auto {
		margin-left: auto;
	}
</style>