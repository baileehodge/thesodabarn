<template>
	<div class="home">
		<h1>Welcome to the Soda Barn!</h1>
		<br>
		<b-carousel
			id="carousel-1"
			:interval=5000
			controls
			indicators
			background="white"
			label-next=""
			label-prev=""
		>
			<!-- Text slides with image 
			<b-carousel-slide
				caption="First slide"
				text="Nulla vitae elit libero, a pharetra augue mollis interdum."
				img-src="../assets/slideshow/drinks.jpg"
			></b-carousel-slide> -->
			
			<b-carousel-slide img-src="https://media.discordapp.net/attachments/398641708319113226/906770610032611348/drinks.jpg"></b-carousel-slide>
			
			<b-carousel-slide img-src="https://media.discordapp.net/attachments/398641708319113226/906770605188198411/cookie-dough.jpg"></b-carousel-slide>

			<b-carousel-slide img-src="https://media.discordapp.net/attachments/398641708319113226/906770607138562078/cookies.jpg"></b-carousel-slide>

		</b-carousel>
	</div>
</template>

<script>
	let slides = function() {
		return undefined;
	}
	slides();

	export default {
		name: 'Home',
		components: {
		}
	}
</script>

<style scoped>
	.home {
		text-align: center;
		color: #2c3e50;
	}
	
	#carousel-1 {
		padding: 30px;
	}
</style>
