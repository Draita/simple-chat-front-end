<template>
    <div class="container-fluid w-full flex justify-center  h-screen">
        <div class="w-[400px]  relative ">
            <header-top :variant="type" :title="name" />

            <div class="messages px-[20px] pt-[40px] w-full grid grid-cols-1 overflow-scroll
                      chat space-y-[9px] pb-[30px]">
                <!-- NEKO -->
                <p class="bg-[#FFE2E2] h-fit w-fit px-[10px] py-[2px] rounded-[10px] z-30">
                    Hey how are you?
                </p>
                <!-- ME -->
                <p class="bg-white z-30 h-fit w-fit px-[10px] py-[2px] rounded-[10px] justify-self-end ">
                    I am good
                </p>
            </div>
            <div class="chat z-30  absolute bottom-[13px] w-[252px] h-fit left-[16px] rounded-[20px] px-[18px] py-[11px] bg-[#EEEEEE] text-box"
                contentEditable="true">
                rwerwer

            </div>
        </div>




    </div>
</template>

<style>


/* Hide scrollbar for Chrome, Safari and Opera */
.chat::-webkit-scrollbar {
    display: none;
}

.chat {
    max-height: calc(100% - 90px);

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
}

.text-box {
    border: none;

    outline: none;
    width: 202px;
}

.text-box div:focus {
    border: 2px solid #00d263;
}
</style>

<script>

import headerTop from "@/components/headerTop.vue"



export default {
    data() {
        return {
            name: "NEKO CHAN",
            type: "userTitle"


        }
    },
    components: {
        headerTop,
    },
}

</script>