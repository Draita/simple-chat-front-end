<template>
     <div class="rooms-list " v-for="room in this.rooms">
        <userDisplay :data = "room" :variant = "variant" @openMessages="goToChat"

        @clickOverall = "goToChat"/>
    </div>
</template>

<script>

import userDisplay from "@/components/userDisplay.vue"


export default {
    data() {
        return {
            variant: "room"

        }
    },
    props:{
        rooms:{
            type: Object,
            required: true,
        }
    },
    components: {
        userDisplay,
    },
    methods:{
        goToChat(e){
            console.log()
            this.$router.push({name: 'Messages',  params: { roomId: e }})
        }
    },
    created(){
        console.log(this.rooms)

    }
}
</script>