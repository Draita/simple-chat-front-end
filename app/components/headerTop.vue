<template>
  <div class="header  w-full flex pt-[11px]">
    <div v-if = 'this.variant == "home"' class="pl-[16px]"></div>
    <img @click = "this.$router.go(-1)" v-if="variant == 'back' || variant == 'userTitle'" src="@/assets/icons/back.svg">
    <img  v-if="variant == 'settings'" src="@/assets/icons/settings.svg">

    <p class="font-bold pl-[5px] tracking-widest text-[30px] uppercase"  > {{ this.title }}</p>
    <div v-if = 'this.variant == "home"' class="justify-end w-full flex pr-[36px] ">
      <img @click="this.$emit('clickedOnProfilePicture')" class="h-[39px] w-[39px] rounded-[10px] object-cover pt-[3px]" src="https://i.imgur.com/G0eOXkZ.png">

    </div>

  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      validators: value =>
        ['settings', 'back', 'userTitle','home'].includes(value),
        default: 'back',
    },
    title: {
      type: String,
      default: "simple-chat"
    },
    data() {
      return {
        fontSize: 40,
        yes: true,
        showMenu: true,
      }
    },
  },
}

</script>

<style>
.yes{
  background-color: black;
}
</style>