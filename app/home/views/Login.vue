<template>
    <div class="container-fluid h-screen w-full flex justify-center">
        <div class="w-[400px] h-screen">

            <!-- LOGO -->
           <header-top ></header-top>

            <div class="header space-y-[41px] w-full pl-[66px] pt-[166px] z-30 text-[12px]">
                <input class="inp h-[25px]" placeholder="MAIL*">
                <input class="inp h-[25px]" placeholder="PASSWORD*">
                <button @click="login()" type="submit" class=" w-[202px] bg-[#EEEEEE] active:bg-slate-400 h-[25px]"> LOGIN</button>
            </div>
        </div>
    </div>
</template>

<script>

import headerTop from "@/components/headerTop.vue"


export default {
    components:{
        headerTop,
    },
    data() {
        return {
            name: "NEKO CHAN",
            type: "back"
        }
    },
    methods:{
        login(){
            this.$router.push({name: 'UsersAndGroups'})
        }
    }
}

</script>

<style></style>