<template>
	<div class="footer">
		<div class="footer-item">Not an official site</div>
		<div class="footer-item">
			Created by <a href="http://baileehodge.com/" target="_blank">Bailee Hodge</a> and <a href="http://jstnmcbrd.com/" target="_blank">Justin McBride</a>
		</div>
		<div class="footer-item">All images © The Soda Barn</div>
		<div class="footer-item">
			<a href="https://github.com/baileehodge/thesodabarn" target="_blank">
				<img src="../assets/icons/github-white.png" width="25px" title="GitHub Repository"/>
			</a>
			<a href="https://www.facebook.com/mysodabarn" target="_blank">
				<img src="../assets/icons/facebook-white.png" width="25px" title="Facebook Page"/>
			</a>
			<a href="https://www.instagram.com/the.soda.barn/" target="_blank">
				<img src="../assets/icons/instagram-white.png" width="25px" title="Instagram Page"/>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer {
		background-color: #1B5F76;
		color: white;
	}
	
	.footer {
		height: auto;
		min-height: 4em;
		width: 100%;
		
		margin-top: 30px;
	}

	@media only screen and (min-width: 900px) { /*customize this number when footer is changed*/
		.footer {	
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
	.footer-item {
		margin: auto;
		text-align: center;
	}
	.footer-item a{
		color: white;
		text-decoration: none;
	}
</style>
