<template>
    <div class="container-fluid h-screen w-full flex justify-center ">
        <div class="w-[400px] h-screen background-edit-profile">
            <!-- LOGO -->
            <header-top :variant="back"></header-top>

            <div class="pl-[41px] pt-[133px] ">
                <div class="profile flex">
                    <img src="https://i.imgur.com/aMaWtv2.jpeg"
                        class="w-[109px] h-[109px] object-cover object-center rounded-[10px]">
                    <p class="pl-[33px] w-[157px] font-light text-[12px]">Set a suitable profile picture by pressing the
                        image</p>
                </div>
                <div class="buttons pl-[21px] pt-[60px]">
                    <input class="inp h-[25px]" placeholder="Niko">
                    <button type="submit" class=" w-[223px] bg-[#CBCBCB] active:bg-slate-400 h-[25px] mt-[104px]"> SAVE</button>


                </div>
                <!-- TODO: FIX THIS  -->
                <!-- <img class="absolute bottom-[44px] right-[29px]" src="@/assets/line3.svg"> -->


            </div>

        </div>
    </div>
</template>


<style>
.background-edit-profile{
    background: url(@/assets/background-edit-profile.svg);
    background-repeat: no-repeat;
}
</style>
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
}

</script>
