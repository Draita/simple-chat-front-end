<template>
    <div class="users-list">
        <UserAndGroupContent @openMessages="goToChat"/>
    </div>
</template>

<script>

import UserAndGroupContent from "@/components/userAndGroupContent.vue"


export default {
    data() {
        return {
            type: "settings"

        }
    },
    components: {
        UserAndGroupContent,
    },
    methods:{
        goToChat(e){
            console.log(e)
            this.$router.push({name: 'Messages'})
        }
    }
}
</script>