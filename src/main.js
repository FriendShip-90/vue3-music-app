import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes/' // index 는 적지 않아도 불러온다. 
import store from './store/' // index 는 적지 않아도 불러온다.

createApp(App)
	.use(Router)
	.use(store)
	.mount('#app')