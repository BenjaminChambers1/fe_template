import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: function () {
			return import('../views/Home.vue')
		}
	},
	{
		path: '/sign-up',
		name: 'Sign Up',
		component: function () {
			return import('../views/SignUp.vue')
		}
	},
	{
		path: '/log-in',
		name: 'Log In',
		component: function () {
			return import('../views/SignUp.vue')
		}
	}
]

const router = new VueRouter({
	routes
})

export default router
