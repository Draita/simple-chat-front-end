<script>
import { ref } from 'vue'
import InlineSvg from "vue-inline-svg";

export default {
}

</script>

<style>
.contact {
    background-color: #CEFFBD;
    opacity: 1;
    background-image: linear-gradient(#9086FF 2.8000000000000003px, transparent 2.8000000000000003px), linear-gradient(90deg, #9086FF 2.8000000000000003px, transparent 2.8000000000000003px), linear-gradient(#9086FF 1.4000000000000001px, transparent 1.4000000000000001px), linear-gradient(90deg, #9086FF 1.4000000000000001px, #CEFFBD 1.4000000000000001px);
    background-size: 70px 70px, 70px 70px, 14px 14px, 14px 14px;
    background-position: -2.8000000000000003px -2.8000000000000003px, -2.8000000000000003px -2.8000000000000003px, -1.4000000000000001px -1.4000000000000001px, -1.4000000000000001px -1.4000000000000001px;
}

.top {
    background: url("../../assets/backdrop-home-top.png") center center;
    background-size: cover;
}
</style>
<template >
    <div class="top h-[910px]">
        <div class="select-none">

            <div class="topbar pl-5 grid grid-flow-col justify-items-stretch">
                <div class="text text-[32px] text-white">Thijmen</div>
                <img src="../../assets/hambergermenuicon.svg" class="w-[46.5px] place-self-end" alt="hamburger" />
            </div>

            <div class="grid place-items-center">
                <div class="bg-[#FF9898] h-[410px] w-[340px] justify-center mt-[50px]
                rounded-[5px] border-4 border-black rounded-b-none
                p-[5px] text-[48px] text-center
                ">
                    Hi I am Thijmen,
                    a webdesigner
                    from
                    The Netherlands
                </div>
                <div class="bg-[#F1FFE7] h-[360px] w-[340px] justify-center align-middle
            rounded-[5px] rounded-t-none border-4 border-t-0 border-black">

                    <img src="../../assets/portrait.png" class="w-[300px] ml-[20px] pt-[25px]" alt="hamburger" />


                </div>

            </div>


        </div>
    </div>



    <div class="bg-[#F4F4F4] h-[721px]">
        <div class="select-none">


            <div class="grid place-items-center">
                <div class="bg-[#FFD7D7] h-[575px] w-[340px] justify-center mt-[50px]
                rounded-[5px] border-4 border-black rounded-b-none
                p-[25px] text-[48px] text-center
                ">
                    I want to help you with brand presentation through web design and photography
                </div>
                <div class="bg-black h-[170px] w-[340px]
            rounded-[5px] rounded-t-none border-4 border-t-0 border-black ">

                    <img src="@/assets/image 3.png" class="w-full h-full m-[0px]" alt="image" />


                </div>

            </div>


        </div>
    </div>




    <div class="contact h-[647px] select-none">
        <div class="pt-[116px] ">
            <div class="flex flex-col rounded-md  justify-center items-center space-y-[80px]" role="group">
                <button type="button" class="bg-[#FFB6F8] rounded-[5px] border-4
                 border-black font-light text-white w-64 text-[48px] h-[85px] uppercase
                  hover:bg-[#5D56AE] ">
                    home
                </button>

                <button type="button" class="bg-[#FFB6F8] rounded-[5px] border-4
                 border-black font-light text-white w-64 text-[48px] h-[85px] uppercase
                  hover:bg-[#5D56AE] ">
                    ABOUT ME
                </button>

                <button type="button" class="bg-[#FFB6F8] rounded-[5px] border-4
                 border-black font-light text-white w-64 text-[48px] h-[85px] uppercase
                  hover:bg-[#5D56AE] ">
                    CONTACT
                </button>
            </div>
        </div>

    </div>

</template>



