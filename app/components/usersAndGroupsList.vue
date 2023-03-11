<template>
    <div class="users-list">
        <personOrGroup @openMessages="goToChat"/>
    </div>
</template>

<script>

import personOrGroup from "@/components/personOrGroup.vue"


export default {
    data() {
        return {
            type: "settings"

        }
    },
    components: {
        personOrGroup,
    },
    methods:{
        goToChat(e){
            console.log(e)
            this.$router.push({name: 'Messages'})
        }
    }
}
</script>