<template>
    <div class="grid  grid-flow-col pl-[34px] w-full">
        <input v-model="searchInput" class="inp w-[280px] h-[25px]" placeholder="SEARCH FOR CHAT">

    </div>
    <UsersAndGroupslist v-if="!isLoading" :rooms="this.rooms"></UsersAndGroupslist>

    <UsersAndGroupslist />
</template>

<script>
import UsersAndGroupslist from "@/components/usersAndGroupsList.vue"
import APIRequests from "@/APIRequests"



export default {
    components: {
        UsersAndGroupslist
    },
    data() {
        return {
            isLoading: true,
            searchInput: "",
            room: "",
        }
    },
    async created() {
        const response = await APIRequests.getRoomList()
        this.friends = response.data
        this.isLoading = false
        this.rooms = (response.data)
    },
}

</script>