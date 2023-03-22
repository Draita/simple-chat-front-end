<template>
    <div class="user-1 flex   h-[121px] pt-[22px]  w-full hover:bg-gray-50 rounded-[20px]" @click="clickOverall">
        <img :src="this.content.profilePicture" class="w-[78px] h-[78px] object-cover rounded-[10px] ml-[21px]">


        <div class="user-content items-start ">
            <div class="ml-[11px] text-[18px] font-bold w-[200px] truncate">{{ this.content.username }}</div>

            <!-- VARIANT FRIEND -->
            <p v-show="variant == 'room'"
                class=" ml-[11px] w-[160px] text-[12px]  h-[34px] overflow-ellipsis overflow-clip font-normal">
                {{ this.content.lastMessage }}
            </p>

            <!--  VARIANT OUTGOING REQUEST -->

            <div v-if="variant == 'friendRequest'">
                <div v-if="variant == 'friendRequest'" class="ml-[11px] font-normal uppercase">
                    <p class="text-[12px]">{{ friendTextStatus }}</p>
                    <div v-show="this.isIncoming" class="grid grid-cols-2 space-x-[10px]  text-[14px]   mt-[10px]  w-full ">
                        <button @click="this.$emit('acceptFriendRequest', this.data)"
                            class="uppercase bg-[#EEEEEE]  py-[1.0px] rounded-[0px]">accept</button>
                        <button class="uppercase bg-[#EEEEEE]  py-[1.0px] rounded-[0px]"
                            @click="this.$emit('refuseFriendReqeust', this.data)">refuse</button>
                    </div>
                    <button @click="this.$emit('cancelFriendRequest', this.data)" v-show="!this.isIncoming"
                        class=" text-[14px]  bg-[#EEEEEE] py-[1px] mt-[10px] rounded-[0px]  w-full uppercase">cancel</button>


                </div>
            </div>
            <!--  VARIANT INCOMING REQUEST -->

            <div v-if="variant == 'outGoingRequest'" class="ml-[11px] font-normal">
                <p class="text-[12px]">{{ friendTextStatus }}</p>
                <button
                    class=" text-[14px]  bg-[#EEEEEE] py-[1px] mt-[10px] rounded-[0px]  w-full uppercase">cancel</button>
            </div>


        </div>


        <img v-show="this.content.notification && variant == 'room'"
            class="notication   h-[31px] w-[33px] relative top-[21px] right-[6px]" src="@/assets/icons/chat_bulb.svg">
    </div>
</template>

<script>
import config from "@/config";
import APIRequests from "@/APIRequests"
import { menuStore } from '@/stores/menuStorage'
import { userStore } from "@/stores/userSelf";


export default {
    props: {
        variant: {
            type: String,
            validators: value =>
                ['room', 'friendRequest'].includes(value),
            default: 'back',
        },
        data: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            content: {
                _id: "COOL ID",
                username: "ERROR: 404",
                notification: false,
                lastMessage: "This is the beginning of your chatting adventure",
                profilePicture: "https://i.imgur.com/G0eOXkZ.png"

            },
            friendTextStatus: "",
            menuStorage: null,

        }
    },
    created() {

        this.menuStorage = menuStore();
        console.log(this.data)
        if (this.variant == "room") {
            if (this.data.type == "private") {
                this.content.username = this.data.user.username


                if (this.data.hasOwnProperty('lastMessage')) {
                    this.content.lastMessage = this.data.lastMessage.content

                }


                if (this.data.hasOwnProperty('notification')) {
                    this.checkNotification(this.data.notification)
                }


                // socket.emit("checkNotifications", this.data._id);
                this.content.profilePicture = config.apiUrl + "/users/profile_picture/" + this.data.user._id

                socket.on("notification", (notification) => {
                    if (notification.room == this.data._id) {

                        this.checkNotification(notification)
                    }
                    // Handle the notification
                });
            }
        }

        if (this.variant == 'friendRequest') {
            const store = userStore();

            const userSelfId = store.getUser()._id
            const requester = this.data.requester
            var requesterId = null
            if (requester.hasOwnProperty("_id")) {
                requesterId = requester._id
            } else {
                requesterId = requester
            }

            console.log(requesterId + " " + userSelfId)
            if (requesterId == userSelfId) {
                this.isIncoming = false
            } else {
                this.isIncoming = true
            }


            console.log(this.data)

            console.log(this.isIncoming)


            if (this.isIncoming) {
                this.friendTextStatus = "INCOMING FRIEND REQEUST"
                this.content.username = this.data.requester.username
                this.content.profilePicture = config.apiUrl + "/users/profile_picture/" + this.data.requester._id



            } else {
                this.friendTextStatus = "OUTGOING FRIEND REQUEST"
                this.content.username = this.data.addressee.username
                this.content.profilePicture = config.apiUrl + "/users/profile_picture/" + this.data.addressee._id


            }
        }


    },
    methods: {
        clickOverall() {
            if (this.data.hasOwnProperty('notification') && this.data.notification.isActive) {
                APIRequests.clearNotification(this.data.notification._id)
                this.menuStorage.removeNotification(this.data._id)

            }

            // store data

            // this.menuStorage.editRoomListSelf(this.data)

            socket.off("notification")


            this.$emit('clickOverall', this.data._id)

        },
        checkNotification(notification) {
            if (notification.isActive) {
                this.content.notification = true
            }


            // TODO: fix this later this is a fucking mess
            // do instead that only the last line is used setLastMessage and that the whole list is updated

            this.content.lastMessage = notification.lastMessage.content
            this.data.lastMessage.content = notification.lastMessage.content
            this.menuStorage.setLastMessage(this.data._id, notification.lastMessage.content)


        },
    }
}

</script>