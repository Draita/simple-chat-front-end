<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">
            <!-- LOGO -->

            <header-top @clickedOnProfilePicture="showProfileSettings" :title="titleHeader" :variant="type"></header-top>
            <div class="menu pl-[22px] pt-[20px] text-[24px] font-light space-y-[26px]
            border-black border-b-[1px] pb-[18px]">
                <p @click="logout">LOGOUT</p>
                <p @click="this.$router.push({name: 'EditProfile'})">EDIT PROFILE</p>
                <p>DELETE ACCOUNT</p>
            </div>


            <div class=" pl-[22px] pt-[22px] menu flex uppercase text-center pr-[22px] content-center">
                <p @click="goToChats"  :class="{ 'bg-[#EEEEEE]': showChats }" class="w-1/2">chats</p>
                <p @click="goToFriends "  :class="{ 'bg-[#EEEEEE]': showFriends }"  class="w-1/2">friends</p>

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
import APIRequests from "@/APIRequests"
import { hyphenate } from "@vue/shared"



export default {
    data() {
        return {
            type: "home",
            titleHeader: "CHATS",
            showChats: true,
            showFriends: false,

        }
    },
    async created() {
        const response = await APIRequests.getUsersAndGroupsList()
    },
    methods: {
        addFriend() {
            APIRequests.addFriend(this.searchInput)
        },
        showProfileSettings() {
            console.log("bro")

        },
        goToChats(){
            this.$router.push({name: 'Chat'})
            this.showChats = true
            this.showFriends = false

        },
        goToFriends(){
            this.$router.push({name: 'Friend'})
            this.showChats = false
            this.showFriends = true

        },
    },
    components: {
        headerTop,
        UsersAndGroupslist
    },
}

</script>

<style></style>