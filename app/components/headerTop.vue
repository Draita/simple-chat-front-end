<template>
  <div class="header pl-[11px] w-full flex ">
    <img @click = "this.$router.go(-1)" v-if="variant == 'back' || variant == 'userTitle'" src="@/assets/icons/back.svg">
    <img @click = "this.$router.push({name: 'Menu'})" v-if="variant == 'settings'" src="@/assets/icons/settings.svg">

    <p class="font-bold pl-[5px] tracking-widest text-[40px]"  > {{ this.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      validators: value =>
        ['settings', 'back', 'userTitle'].includes(value),
        default: 'back',
    },
    title: {
      type: String,
      default: 'SIMPLE-CHAT'
    },
    data() {
      return {
        fontSize: 40,
        yes: true,
        showMenu: true,

      }
    },
    mounted() {
      if (this.variant == 'userTitle') {
        this.fontSize = 30;

      }
      this.fontSize = 40;
    }
  },
}

</script>

<style>
.yes{
  background-color: black;
}
</style>