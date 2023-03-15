<template>
    <div class="users-list " v-for="friend in this.friends">
        <userDisplay :data = "friend" :variant = "variant" @openMessages="goToChat"

        @cancelFriendRequest = "cancel" @acceptFriendRequest = "accept"/>
    </div>
</template>

<script>

import userDisplay from "@/components/userDisplay.vue"
import APIRequests from "@/APIRequests"


export default {
    data() {
        return {
            variant: "friendRequest"

        }
    },
    props:{
        friends:{
            type: Object,
            required: true
        }
    },
    components: {
        userDisplay,
    },

    created(){
        console.log(this.friends)
    },
    updated(){
        console.log(this.friends)


    },
    methods:{
        cancel(e){
            console.log(e)
            APIRequests.cancelFriendRequest(e)
            this.friends.splice(this.friends.indexOf(e), 1)
        },
        accept(e){
            console.log(e)
            APIRequests.acceptFriendRequest(e)
        }
    }

}
</script>