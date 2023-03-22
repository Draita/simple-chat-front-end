<template>
    <div class="grid  grid-flow-col pl-[34px] w-full">
        <input v-model="searchInput" class="inp w-[280px] h-[25px]" placeholder="SEARCH FOR CHAT">

    </div>
    <UsersAndGroupslist @updateList="updateRoomList" @update="update" v-if="!isLoading" :rooms="this.rooms" />
</template>

<script>
import UsersAndGroupslist from "@/components/usersAndGroupsList.vue"
import APIRequests from "@/APIRequests"
import { menuStore } from '@/stores/menuStorage'




export default {
    components: {
        UsersAndGroupslist
    },
    data() {
        return {
            searchInput: "",
            room: "",
            isLoading: false
        }
    },
    created() {
        const menuStorage = menuStore();
        this.rooms = menuStorage.roomList

        this.isLoading = false

    },
    computed: {
        roomList() {
            // const menuStorage = menuStore();

            // this.rooms = menuStorage.roomList
            // console.log("update")

            // return menuStorage.roomList;
        },
    },
    mounted() {
    },
    methods: {
        updateRoomList() {
            const menuStorage = menuStore();
            this.rooms = menuStorage.roomList

        }
    }
}

</script>