<template>
	<div class="admin">
		<h1>EDIT COOKIES</h1>
		
		<div class="content">
			<div class="form">
				<input v-model="findName" placeholder="Search">
				<div class="suggestions" v-if="suggestions.length > 0">
					<div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectCookie(s)">
						{{s.name}}
					</div>
				</div>
			</div>
			<div class="selected-cookie" v-if="selectedCookie">
				<div class="selected-info">
					<p>Name:</p>
					<input v-model="selectedCookie.name">
					<p>Price:</p>
					<input v-model="selectedCookie.price">
					<p>Image URL:</p>
					<input v-model="selectedCookie.image">
					<img :src="selectedCookie.image" />
				</div>
				<div class="actions" v-if="selectedCookie">
					<button v-if="newCookie" @click="addCookie(selectedCookie)">Add</button>
					<button v-if="!newCookie" @click="updateCookie(selectedCookie)">Update</button>
					<button v-if="!newCookie" @click="deleteCookie(selectedCookie)">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Admin',
		data() {
			return {
				cookies: [],
				findName: "",
				selectedCookie: null,
			}
		},
		computed: {
			suggestions() {
				let cookies = this.cookies.filter(cookie => cookie.name.toLowerCase().startsWith(this.findName.toLowerCase()));
				cookies = cookies.sort((a, b) => a.name > b.name);
				cookies.push({
					name: "+",
					price: "",
					image: "",
					newCookie: true,
				});
				return cookies;
			},
			newCookie() {
				return this.selectedCookie.newCookie;
			}
		},
		created() {
			this.getCookies();
		},
		methods: {
			async getCookies() {
				try {
					let response = await axios.get("/api/cookies");
					this.cookies = response.data;
					return true;
				} catch (error) {
					console.log(error);
				}
			},
			selectCookie(cookie) {
				this.findName = "";
				this.selectedCookie = cookie;
				if (this.newCookie) {
					this.selectedCookie = {
						name: "",
						price: "",
						image: ""
					};
					this.selectedCookie.newCookie = true;
				}
			},
			async addCookie(cookie) {
				try {
					await axios.post("/api/cookies/", {
						name: cookie.name,
						price: cookie.price,
						image: cookie.image,
					});
					this.selectedCookie = null;
					this.getCookies();
					return true;
				} catch (error) {
					console.log(error);
				}
			},
			async deleteCookie(cookie) {
				try {
					await axios.delete("/api/cookies/" + cookie._id);
					this.selectedCookie = null;
					this.getCookies();
					return true;
				} catch (error) {
					console.log(error);
				}
			},
			async updateCookie(cookie) {
				try {
					await axios.put("/api/cookies/" + cookie._id, {
						name: this.selectedCookie.name,
						price: this.selectedCookie.price,
						image: this.selectedCookie.image,
					});
					this.selectedCookie = null;
					this.getCookies();
					return true;
				} catch (error) {
					console.log(error);
				}
			},
		}
	}
</script>

<style scoped>
	.admin {
		text-align: center;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	/* Form */
	input,
	textarea,
	select,
	button {
		font-family: 'Montserrat', sans-serif;
		font-size: 1em;
	}

	.form {
		margin-right: 50px;
	}
	
	/* Suggestions */
	.suggestions {
		width: 200px;
		border: 1px solid #ccc;
	}

	.suggestion {
		min-height: 20px;
		text-align: left;
	}

	.suggestion:hover {
		background-color: #5BDEFF;
		color: #fff;
	}

	/* Selected Cookie Info */
	.selected-cookie {
		display: flex;
	}
	
	.selected-info {
		text-align: left;
		margin-right: 1em;
		width: 300px;
	}
	
	.selected-info p {
		margin-bottom: 0;
	}
	.selected-info input {
		width: 100%;
		margin-bottom: 1em;
	}

	.selected-info img {
		width: 150px;
	}
	
	.actions {
		display: flex;
		flex-direction: column;
	}
	
	.actions button {
		width: 100px;
		margin-top: 1em;
	}
</style>