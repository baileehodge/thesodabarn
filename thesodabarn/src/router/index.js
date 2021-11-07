import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Locations from '../views/Locations.vue'
import Bakery from '../views/Bakery.vue'

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
		path: '/locations',
		name: 'Locations',
		component: Locations
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
