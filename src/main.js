import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/styles.css'
import Spend from "@/ressource/Spend.vue";
import SpendCat from "@/ressource/SpendCat.vue";
import Tailwind from "@/ressource/Tailwind.vue";
import './assets/tailwind.css'
import 'vue-select/dist/vue-select.css'
import axios from 'axios';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Déclarez vos routes ici
        { path: '/spend', component: Spend },
        { path: '/spend-cat', component: SpendCat },
        { path: '/tailwind', component: Tailwind },
    ]
})
const app = createApp(App)

// Configure Axios pour être utilisé globalement
app.config.globalProperties.$axios = axios;
app.use(router)

app.mount('#app')
