<template>
    <div class="container-fluid fixed w-full h-screen flex justify-center p-0 m-0">
        <div class="content w-[400px] background-landing mt-[-4px]">
            <div class="text-[24px] font-semibold flex space-x-[54px] pr-[13px] pt-[19px]  justify-end">
                <p @click="this.$router.push({name: 'Login'})">LOGIN</p>
                <p @click="this.$router.push({name: 'Register'})">REGISTER</p>
            </div>
            <p class=" LOGO font-bold text-[40px]   pt-[300px] pl-[20px] tracking-widest"> SIMPLE-CHAT</p>
        </div>
    <div class="background-landing h-screen"></div>


    </div>

</template>


<script>



</script>
<style>
.background-landing{
    background: url(@/assets/background-landing-page.png);
    background-repeat: no-repeat;
}
</style>