<template>
    <div class="grid  grid-flow-col pl-[34px] w-full">

        <input v-model="friend" class="inp w-[245px] h-[25px]" placeholder="Enter a username#0000">
        <img @click="addFriend" class="mb-[-9px] pr-[40px]" src="@/assets/icons/add.svg">

    </div>
    <friendRequestsList v-if="!isLoading" :friends = "this.friends"></friendRequestsList>
</template>

<script>


import APIRequests from "@/APIRequests"
import friendRequestsList from "@/components/friendRequestsList.vue"



export default {
    data() {
        return {
            friend: "",
            friends: "",
            isLoading: true,
        }
    },
    async created() {
        const response = await APIRequests.getFriendRequests()
        this.friends = response.data
        this.isLoading = false

    },
    components: {
        friendRequestsList
    },
    methods: {
        async addFriend() {
            const response = await APIRequests.addFriend(this.friend)
            this.friends.push(response.data)
        }
    },
}

</script>