<template>
  <div class="container-fluid h-screen w-full flex justify-center">
    <div class="w-[400px] h-screen">

<!-- THIS IS HORRIFIC BUT IT WORKS LMAO -->
      <header-top v-if = "!showSettings" @clickedOnProfilePicture="toggleProfileSettings" :title="titleHeader" :variant="type"/>
      <header-top v-else @clickedOnProfilePicture="toggleProfileSettings" :title="fullName" :variant="type"/>



      <menuSettings @close="toggleProfileSettings" v-show="showSettings" />

      <div class="pl-[22px] pt-[22px] menu flex uppercase text-center pr-[22px] content-center">
        <p @click="goToPage('Chats')" :class="{ 'bg-[#EEEEEE]': currentPage === 'CHATS' }" class="w-1/2">chats</p>
        <p @click="goToPage('Friends')" :class="{ 'bg-[#EEEEEE]': currentPage === 'FRIENDS' }" class="w-1/2">friends</p>
      </div>
      <div class="pt-[40px]">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from "@/components/headerTop.vue"
import UsersAndGroupslist from "@/components/usersAndGroupsList.vue"
import menuSettings from "@/components/menuSettings.vue"

import { userStore } from '@/stores/userSelf'





export default {
  data() {
    return {
      type: "home",
      currentPage: "CHATS",
      titleHeader: "CHATS",
      showSettings: false,
    }
  },
  async mounted() {
    console.log(this.$router.currentRoute._value.name)

    if (this.$router.currentRoute._value.name == "Friends"){

      this.currentPage = 'FRIENDS'
      this.titleHeader = 'FRIENDS'
    }



  },
  methods: {
    toggleProfileSettings() {
      this.showSettings = !this.showSettings;

      if (this.showSettings) {
        this.titleHeader = this.fullName;
        this.type = "tagAndUsername";
      } else {
        this.titleHeader = this.currentPage;
        this.type = "home";
      }
    },

    goToPage(page) {
      this.$router.push({ name: page })
      this.currentPage = page.toUpperCase()
      if (!this.showSettings) {
        this.titleHeader = this.currentPage

      }

    },
  },
  computed: {
    fullName() {
      const store = userStore();
      console.log("update")

      return `${store.userData.username}#${store.userData.tag}`;
    },
  },
  components: {
    headerTop,
    UsersAndGroupslist,
    menuSettings,
  },
}
</script>