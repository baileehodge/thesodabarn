<template>
	<div id="app">
		<Navbar />
		<div class="page-centerer">
			<router-view/>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'
	import Footer from '@/components/Footer.vue'
	
	export default {
		name: 'App',
		components: {
			Navbar,
			Footer
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		font-family: "Century Gothic", "Arial", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	#app {
		background-color: white; /* change later */
	}
	
	h1 {
		font-family: "Bahnschrift Condensed", sans-serif;
	}
	
	.page-centerer {
		margin-left: auto;
		margin-right: auto;
		width: 50vw;
		
		background-color: white;
		
		padding-top: 30px;
		padding-bottom: 30px;
	}
</style>
