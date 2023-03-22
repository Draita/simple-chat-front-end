<template>
     <div v-show="!this.loading" class="rooms-list " v-for="room in this.rooms">
        <userDisplay :data = "room" :variant = "variant" @openMessages="goToChat"
        @updateList="updateList"

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
            loading: true
        }
    },
    components: {
        userDisplay,
    },
    methods:{

        clickOverall(){


        },

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