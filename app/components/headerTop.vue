<template>
  <div class="header  w-full flex pt-[11px]">
    <div v-if='!(this.variant == "back")' class="pl-[16px]"></div>
    <img @click="goBack" v-if="variant == 'back' || variant == 'userTitle'" src="@/assets/icons/back.svg">

    <p class="font-bold pl-[5px] tracking-widest text-[30px]  " :class="{
      'tracking-widest': variant === 'tagAndUsername',
      'text-lg': variant === 'tagAndUsername',
      'pt-[9px]': variant === 'tagAndUsername'
    }"> {{ this.title }}</p>

    <div v-if='this.variant == "home" || this.variant == "tagAndUsername"' class="justify-end w-full flex pr-[36px] ">
      <img @click="this.$emit('clickedOnProfilePicture')" class="h-[39px] w-[39px] rounded-[10px] object-cover pt-[3px]"
        :src="image">

    </div>

  </div>
</template>

<script>
import { userStore } from '@/stores/userSelf'

export default {
  props: {
    variant: {
      type: String,
      validators: value =>
        [, 'back', 'userTitle', 'home', 'tagAndUsername'].includes(value),
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
        image: ""
      }
    },
  },
  created(){
    const store = userStore();

    this.image = store.profilePicture
  },
  methods:{
    goBack(){
      this.$emit("back")
      this.$router.go(-1)


    }
  }
}

</script>

<style>
.yes {
  background-color: black;
}

.showUsernameAndTag {
  font-size: 20px;
  letter-spacing: normal;


}
</style>