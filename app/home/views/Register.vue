<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">

            <!-- LOGO -->
            <header-top></header-top>

            <form @submit.prevent="register" class="header space-y-[41px] w-full pl-[66px] pt-[166px] z-30 text-[12px]">
                <input v-model="username" class="inp h-[25px] w-[202px]" placeholder="USERNAME*">
                <input v-model="email" class="inp h-[25px] w-[202px]" placeholder="EMAIL*">
                <input v-model="password" class="inp h-[25px] w-[202px]" placeholder="PASSWORD*">
                <button type="submit" class=" w-[202px] bg-[#EEEEEE] active:bg-slate-400 h-[25px]"> REGISTER</button>
            </form>
        </div>
    </div>
</template>

<script>

import headerTop from "@/components/headerTop.vue"
import APIRequests from "@/APIRequests"


export default {
    components: {
        headerTop,
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',

        };

    },
    methods: {
        async register() {
            const response = await APIRequests.register(this.username,this.email,this.password)
            console.log(response)

        }
    }
}

</script>

<style></style>