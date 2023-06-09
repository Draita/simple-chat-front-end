import { createApp } from "vue";
import { createPinia } from "pinia";

import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

import App from "./App.vue";

import router from "./router";
import "./index.css";
import "@/axios";
import vueClickOutsideElement from "vue-click-outside-element";

// Import child components
import Home from "@/home/Home.vue";
import ChatApp from "@/chat-app/ChatApp.vue";

const pinia = createPinia();

// Create parent Vue app
const app = createApp(App);
// Register router
app.use(router);

// Register child components
app.component("Home", Home);
app.component("ChatApp", ChatApp);

app.use(vueClickOutsideElement);
app.use(pinia);
app.use(Croppa);

// Mount parent Vue app
app.mount("#app");
