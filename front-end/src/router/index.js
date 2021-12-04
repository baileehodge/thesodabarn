import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Bakery from '../views/Bakery.vue'
import Reviews from '../views/Reviews.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/menu',
		name: 'Menu',
		component: Menu
	},
	{
		path: '/reviews',
		name: 'Reviews',
		component: Reviews
	},
	{
		path: '/bakery',
		name: 'Bakery',
		component: Bakery
	}
	//{
	//	path: '/about',
	//	name: 'About',
	//	// route level code-splitting
	//	// this generates a separate chunk (about.[hash].js) for this route
	//	// which is lazy-loaded when the route is visited.
	//	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
