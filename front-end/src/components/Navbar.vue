<template>
	<div class="navbar">
		<div class="nav-section"></div>
		<div class="nav-section">
			<router-link class="nav-item" to="/">Home</router-link>
			<router-link class="nav-item" to="/menu">Menu</router-link>
		</div>
		<div class="middle-logo nav-section">
			<a href="/"><img src="../assets/soda-barn-logo-white.png" title="The Soda Barn" alt="The Soda Barn Logo"></a>
		</div>
		<div class="nav-section">
			<router-link class="nav-item" to="/bakery">Bakery</router-link>
			<router-link class="nav-item" to="/reviews">Reviews</router-link>
		</div>
		<div class="nav-section"></div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		
		background-color: #1B5F76;
	}
	
	.navbar {
		height: auto;
		min-height: 4em;
		width: 100%;
		
		padding: 10px;
	}
	
	.nav-section {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.nav-item {
		flex: 1;
		padding: 30px;
		color: rgba(200, 200, 200, 0.8);
		text-decoration: unset;
		font-weight: unset;
		text-align: center;
	}
	
	.navbar a.router-link-exact-active {
		color: white;
	}
	
	.middle-logo img {
		width: 100px;
	}
</style>
