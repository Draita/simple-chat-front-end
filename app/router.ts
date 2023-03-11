import { createRouter, createWebHistory } from "vue-router";

// Import child routers

import Home from "@/home/Home.vue";
import LandingPage from "@/home/views/LandingPage.vue";
import Login from "@/home/views/Login.vue";
import Register from "@/home/views/Register.vue";

import ChatApp from "@/chat-app/ChatApp.vue";

import UsersAndGroups from "@/chat-app/views/UsersAndGroups.vue";

import Messages from "@/chat-app/views/Messages.vue";
import Menu from "@/chat-app/views/SettingsMenu.vue";
import EditProfile from "@/chat-app/views/EditProfile.vue";



// Create parent router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        { path: "", name: "LandingPage", component: LandingPage },
        { path: "register", name: "Register", component: Register },
        { path: "login", name: "Login", component: Login },
      ],
    },
    {
      path: "/",
      component: ChatApp,
      children: [
        { path: "profiles", name: "UsersAndGroups", component: UsersAndGroups },
        { path: "messages", name: "Messages", component: Messages },
        { path: "menu", name: "Menu", component: Menu },
        { path: "editprofile", name: "EditProfile", component: EditProfile },

    ],

    },
  ],
});

export default router;
