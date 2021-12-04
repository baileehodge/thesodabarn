<template>
	<div class="menu">
		<h1>MENU</h1>
		<br>
		<img src="../assets/menus/menu1.jpg" width="100%"/>
		<hr class = "menu-hr">
		<img src="../assets/menus/menu2.jpg" width="100%"/>
		<hr class = "menu-hr">
		<img src="../assets/menus/menu3.jpg" width="100%"/>
	</div>
</template>

<style scoped>
	.menu-hr {
		width: 50%;
		margin-right: auto;
		margin-left: auto;
		border-top: 2px solid #033F47;
	}
	
	.menu {
		text-align: center;
	}
</style>

<script>
	export default {
		name: 'Menu',
		components: {
		}
	}
</script>
