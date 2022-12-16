import { createWebHashHistory, createRouter } from 'vue-router'

import Home from "./Home";
import Music from "./Music";

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/music',
			component: Music,
		},
	]
})