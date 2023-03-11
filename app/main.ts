import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import './index.css'
import '@/axios'

// Import child components
import Home from '@/home/Home.vue';
import ChatApp from '@/chat-app/ChatApp.vue';



// Create parent Vue app
const app = createApp(App);
// Register router
app.use(router)

// Register child components
app.component('Home', Home);
app.component('ChatApp', ChatApp);

// Mount parent Vue app
app.mount('#app');