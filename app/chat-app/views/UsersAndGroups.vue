<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">
            <!-- LOGO -->
            <header-top :variant="type"></header-top>
            <div class="grid  grid-flow-col pl-[34px] pt-[64px] w-full">
                <input v-model = "searchInput" class="inp w-[245px] h-[25px]" placeholder="SEARCH">
                <img @click = "addFriend" class="mt-[9px] pr-[40px]" src="@/assets/icons/add.svg">
            </div>

            <UsersAndGroupslist />

        </div>
    </div>
</template>

<script>

import headerTop from "@/components/headerTop.vue"
import UsersAndGroupslist from "@/components/usersAndGroupsList.vue"
import APIRequests from "@/APIRequests"



export default {
    data() {
        return {
            type: "settings",
            searchInput: "",

        }
    },
    async created() {
        const response = await APIRequests.getUsersAndGroupsList()
    },
    methods:{
        addFriend(){
            APIRequests.addFriend(this.searchInput)

        }
    },
    components: {
        headerTop,
        UsersAndGroupslist
    },
}

</script>

<style></style>