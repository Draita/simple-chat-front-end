import { createRouter, createWebHistory } from "vue-router";

// Import child routers

import Home from "@/home/Home.vue";
import LandingPage from "@/home/views/LandingPage.vue";
import Login from "@/home/views/Login.vue";
import Register from "@/home/views/Register.vue";

import ChatApp from "@/chat-app/ChatApp.vue";

import UsersAndGroups from "@/chat-app/views/UsersAndGroups.vue";

import Messages from "@/chat-app/views/Messages.vue";
import EditProfile from "@/chat-app/views/EditProfile.vue";

import MenuHome from "@/chat-app/views/MenuHome.vue";

import Chat from "@/chat-app/views/Chats.vue";
import Friend from "@/chat-app/views/Friends.vue";






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
        { path: "messages/:roomId", name: "Messages", component: Messages },
        { path: "editprofile", name: "EditProfile", component: EditProfile },
        {
          path: "home",
          name: "MenuHome",
          component: MenuHome,
          children:[
            { path: "chat", name: "Chats", component: Chat },
            { path: "friend", name: "Friends", component: Friend },
          ]
        }

    ],

    },
  ],
});

export default router;
