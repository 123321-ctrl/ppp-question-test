import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import * as VueRouter from "vue-router";
import routes from './router/index'

const pinia = createPinia()
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes
})


createApp(App).use(pinia).use(router).mount('#app')
