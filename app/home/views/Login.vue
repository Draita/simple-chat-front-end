<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">

            <!-- LOGO -->
            <header-top></header-top>

            <div class="header space-y-[41px] w-full pl-[66px] pt-[166px] text-[12px]">
                <input v-model="email" class="inp h-[25px] w-[202px]" placeholder="EMAIL*">
                <input v-model="password" class="inp h-[25px] w-[202px]" placeholder="PASSWORD*">


                <button @click="login()" type="submit" class=" w-[202px] bg-[#EEEEEE] active:bg-slate-400 h-[25px]">
                    LOGIN</button>
                <p v-show = "wrong" class = "absolute mt-[-12px] text-[#FF9696]">the password or email was invalid</p>

            </div>
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
            email: "",
            password: "",
            type: "back",
            wrong: false
        }
    },
    methods: {
        async login() {
            try {
                const response = await APIRequests.login(this.email, this.password)
                this.$router.push({name: 'Chats'})
            } catch{
                this.wrong = true;
            }

        }
    }
}

</script>

<style></style>