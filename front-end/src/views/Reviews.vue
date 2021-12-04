<template>
	<div class="reviews">
		<h1>REVIEWS</h1>
		
		
		<div v-for="review in reviews" :key="review._id">
			<p>{{review.author}}</p>
			<p>{{review.description}}</p>
			<p>{{review.rating}}</p>
		</div>
	</div>
</template>

<style scoped>
	.reviews {
		text-align: center;
	}
</style>

<script>
	import axios from 'axios';
	export default {
		name: 'Reviews',
		components: {
		},
		data() {
			return {
				reviews: [],
			}
		},
		created() {
			this.getReviews();
		},
		methods: {
			async getReviews() {
				try {
					let response = await axios.get("/api/reviews");
					this.reviews = response.data;
				}
				catch (error) {
					console.log(error);
				}
			},
			
			async addReview() {
				//TODO
				this.getReviews();
			}
		}
	}
</script>
