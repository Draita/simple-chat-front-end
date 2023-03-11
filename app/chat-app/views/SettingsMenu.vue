<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">
            <!-- LOGO -->
            <header-top :variant="type"></header-top>

            <div class="menu pl-[43px] pt-[111px] text-[24px] font-light space-y-[129px]">
                <p @click="logout">LOGOUT</p>
                <p @click="this.$router.push({name: 'EditProfile'})">EDIT PROFILE</p>
                <p>DELETE ACCOUNT</p>

            </div>

        </div>
    </div>
</template>

<script>

import headerTop from "@/components/headerTop.vue"



export default {
    data() {
        return {
            type: "back"
        }
    },
    components: {
        headerTop,
    },
    methods:{
        logout(){
            this.$router.push({name: 'LandingPage'})
        },
        deleteAccount(){
            this.$router.push({name: 'LandingPage'})
        }
    }
}

</script>
