<template>
    <div class="user-1 flex   h-[121px] pt-[22px]  w-full hover:bg-gray-50 rounded-[20px]"
        @click="this.$emit('clickOverall', this.data._id)">
        <img :src="this.content.profilePicture" class="w-[78px] h-[78px] object-cover rounded-[10px] ml-[21px]">


        <div class="user-content items-start ">
            <div class="ml-[31px] text-[18px] font-bold w-[200px] truncate">{{ this.content.username }}</div>

            <!-- VARIANT FRIEND -->
            <p v-show="variant == 'friend'"
                class=" ml-[31px] w-[160px] text-[12px]  h-[34px] overflow-ellipsis overflow-clip font-normal">
                {{ this.content.lastMessage }}
            </p>


            <div v-if="variant == 'friendRequest'">
                <div v-if="variant == 'friendRequest'" class="ml-[31px] font-normal uppercase">
                    <p class="text-[12px]">{{ friendTextStatus }}</p>
                    <div v-show="this.isIncoming" class="grid grid-cols-2 space-x-[10px]  text-[14px]   mt-[10px]  w-full ">
                        <button
                        @click = "this.$emit('acceptFriendRequest', this.data.requester._id)" class="uppercase bg-[#EEEEEE]  py-[1.0px] rounded-[0px]">accept</button>
                        <button
                            class="uppercase bg-[#EEEEEE]  py-[1.0px] rounded-[0px]">refuse</button>
                    </div>
                    <button @click = "this.$emit('cancelFriendRequest', this.data.addressee._id)" v-show="!this.isIncoming"
                            class=" text-[14px]  bg-[#EEEEEE] py-[1px] mt-[10px] rounded-[0px]  w-full uppercase">cancel</button>


                </div>
            </div>
            <!--  VARIANT OUTGOING REQUEST -->
            <div v-if="variant == 'outGoingRequest'" class="ml-[31px] font-normal">
                <p class="text-[12px]">{{ friendTextStatus }}</p>
                <button
                    class=" text-[14px]  bg-[#EEEEEE] py-[1px] mt-[10px] rounded-[0px]  w-full uppercase">cancel</button>
            </div>

            <!--  VARIANT INCOMING REQUEST -->



        </div>


        <img v-show="this.content.notification && variant == 'friend'"
            class="notication   h-[31px] w-[33px] relative top-[21px] right-[6px]" src="@/assets/icons/chat_bulb.svg">
    </div>
</template>

<script>
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
                username: "Niko Chan",
                notification: true,
                lastMessage: "How are you doing today, is everything alright with you? and what?and what?and what?and what?",
                profilePicture: "https://i.imgur.com/G0eOXkZ.png"

            },
            friendTextStatus: ""
        }
    },
    created() {
        if (this.variant == "room"){
            if (this.data.type == "private"){
                this.content.username = this.data.name
            }
        }

        if (this.variant == 'friendRequest') {
            this.isIncoming = this.data.isIncoming
            console.log(this.isIncoming)

            if (this.isIncoming) {
                this.friendTextStatus = "INCOMING FRIEND REQEUST"
                this.content.username = this.data.requester.username

            } else {
                this.friendTextStatus = "OUTGOING FRIEND REQUEST"
                this.content.username = this.data.addressee.username

            }
        }


    }
}

</script>