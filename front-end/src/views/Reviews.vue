<template>
	<div class="reviews">
		<h1>REVIEWS</h1>
		<div class="form" id="review-input">
			<div id="author-stars">
				<input v-model="author" placeholder="Your Name">
				<star-rating
					v-model="stars"
					v-bind:increment="0.5"
					v-bind:star-size="25"
					v-bind:show-rating="false"/>
			</div>
			<textarea v-model="description" placeholder="Description"></textarea>
			<button @click="addReview">Post</button>
		</div>
		<hr />
		<div class="avg-rating" v-if="averageRating">
			<h3>Average:</h3>
			<star-rating
					v-bind:rating="averageRating*5"
					v-bind:star-size="50"
					v-bind:increment="0.01"
					v-bind:show-rating="false"
					v-bind:read-only="true"/>
		</div>
		<hr />
		
		<div v-for="review in reviews" :key="review._id">
			<div class="review">
				<star-rating
					v-if="review.rating"
					v-bind:rating="review.rating*5"
					v-bind:increment="0.5"
					v-bind:star-size="25"
					v-bind:show-rating="false"
					v-bind:read-only="true"/>
				<span>{{review.description}}</span>
				<span><em>- {{review.author}}</em></span>
			</div>
			<hr/>
		</div>
	</div>
</template>

<style scoped>
	.reviews {
		text-align: center;
	}
	.avg-rating {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.avg-rating h3 {
		margin-right: 1em;
	}
	.review {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.review * {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	#review-input {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#author-stars {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1em;
		width: 100%;
	}
	#author-stars input, #author-stars star-rating {
		flex: 1;
	}
	#author-stars input {
		margin-right: 1em;
	}
	#review-input button {
		width: 100%;
	}
	#review-input textarea {
		width: 100%;
		margin-bottom: 1em;
	}
</style>

<script>
	import axios from 'axios';
	import StarRating from 'vue-star-rating'
	export default {
		name: 'Reviews',
		components: {
			StarRating,
		},
		data() {
			return {
				reviews: [],
				author: "",
				description: "",
				stars: -1,
			}
		},
		created() {
			this.getReviews();
			console.log(this.averageRating)
		},
		computed: {
			rating() {
				return this.stars / 5;
			},
			averageRating() {
				var total = 0;
				var num = 0;
				for (let r of this.reviews) {
					if (r.rating === undefined) continue;
					total += r.rating;
					num += 1;
				}
				if (num === 0) return undefined;
				return total / num;
			},
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
				try {
					let review = {
						author: this.author,
						description: this.description
					};
					if (this.stars !== -1) review.rating = this.rating;
					
					await axios.post("/api/reviews", review);
					this.description = ""
					this.stars = -1;
				}
				catch (error) {
					console.log(error);
				}
				this.getReviews();
			}
		}
	}
</script>
