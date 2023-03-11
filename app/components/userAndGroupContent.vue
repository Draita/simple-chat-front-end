<template>
    <div class="user-1 flex   h-[121px] pt-[22px]  w-full hover:bg-gray-50 rounded-[20px]" @click="this.$emit('openMessages', this.content._id)">
        <img :src="this.content.profilePicture" class="w-[78px] h-[78px] object-cover rounded-[10px] ml-[21px]">
        <div class="user-content items-start ">
            <div class="ml-[31px] text-[18px] font-bold w-[200px] truncate">{{this.content.username}}</div>
            <p class=" ml-[31px] w-[160px] text-[12px]  h-[34px] overflow-ellipsis overflow-clip font-normal">{{this.content.lastMessage}}
            </p>
        </div>
        <img v-show= "this.content.notification" class="notication   h-[31px] w-[33px] relative top-[21px] right-[6px]" src="@/assets/icons/chat_bulb.svg">
    </div>
</template>

<script>
export default{
    data(){
        return{
            content:{
                _id: "COOL ID",
                username: "Niko Chan",
                notification: true,
                lastMessage: "How are you doing today, is everything alright with you? and what?and what?and what?and what?",
                profilePicture: "https://i.imgur.com/G0eOXkZ.png"

            }
        }
    }
}

</script>