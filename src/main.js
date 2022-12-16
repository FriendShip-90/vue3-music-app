import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes/index.js'

createApp(App)
	.use(Router)
	.mount('#app')