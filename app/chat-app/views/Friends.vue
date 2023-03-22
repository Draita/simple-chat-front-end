<template>
    <div class="grid  grid-flow-col pl-[34px] w-full">

        <input v-model="friend" class="inp w-[245px] h-[25px]" placeholder="Enter a username#0000">
        <img @click="addFriend" class="mb-[-9px] pr-[40px]" src="@/assets/icons/add.svg">

    </div>
    <friendRequestsList @cancelFriendRequest="cancelFriendRequest" @refuseFriendReqeust="refuseFriendReqeust"
    @acceptFriendRequest="acceptRequest"
        :friends="this.friends"></friendRequestsList>
</template>

<script>


import APIRequests from "@/APIRequests"
import friendRequestsList from "@/components/friendRequestsList.vue"
import { menuStore } from '@/stores/menuStorage'
import io from "socket.io-client";



export default {

    data() {
        return {
            friend: "",
            friends: "",
            socket: null

        }
    },
    async created() {
        this.socket = window.socket
        const menuStorage = menuStore();
        this.friends = menuStorage.getFriendList()
        this.socket.on("new friend", (friend) => {
            console.log(friend)

            // move functionality to menuStorage
            this.friends.push(friend)
        });


        this.socket.on("remove request", (friendId) => {
            console.log(this.friends)
            const menuStorage = menuStore();
           this.friends =  menuStorage.removeFriend(friendId)



            // const index = this.friends.filter(item => item._id !== friendId);
            // if (index !== -1) {
            //     this.friends.splice(index, 1);
            // }

            // const test = this.friends.findIndex((obj) => obj.id === friendId);
            // console.log(test)
        });
    },
    components: {
        friendRequestsList
    },
    methods: {
        async addFriend() {
            console.log(this.friend)
            this.socket.emit("send friend request", this.friend);

            // const response = await APIRequests.addFriend(this.friend)
            // this.friends.push(response.data)
        },
        cancelFriendRequest(e) {
            this.socket.emit("cancel friend request", e._id);
        },
        refuseFriendReqeust(e) {
            console.log(e)
            this.socket.emit("refuse friend request", e._id);
        },
        acceptRequest(e) {
            console.log(e)
            this.socket.emit("accept friend reqeust", e._id);
        }

    },


}

</script>