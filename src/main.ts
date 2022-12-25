import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/home.vue'


// add this
import './index.css'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {path: '/', name: 'home', component: Home}
    ]

})



createApp(App).use(router).mount('#app')