import {createApp} from 'vue'
import './style.css'
import router from "../router/routes.ts";
import App from './App.vue'
import {createPinia, Pinia} from "pinia";

const pinia: Pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
