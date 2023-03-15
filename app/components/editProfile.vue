<template>
  <div v-if="!saved" class="">
    <div class="profile flex">
      <!-- profile -->
      <!-- <img
          src="https://i.imgur.com/aMaWtv2.jpeg"
          class="w-[78px] h-[78px] object-cover object-center rounded-[10px]"
        /> -->

      <div class="hover bg-gray-500   w-[78px] h-[78px]  rounded-[10px]">
        <input type="file" id='upload' class="rounded-full" accept="image/png, image/gif, image/jpeg" name="img"
          @change="this.onFileChangeProfilePicture" style=" visibility: hidden; width: 1px; height: 1px" />

        <a href="" onclick="document.getElementById('upload').click(); return false"><img id="blah" :src=this.image
            alt="image" class=" object-cover mt-[-36px] hover:opacity-70  rounded-[10px]"
            style="width: 78px; height: 78px;" /></a>
      </div>


      <div class="flex pt-[53px] text-[16px] pl-[11px] ">
        <input maxlength="11" v-on:input="validateUsername" v-model="userData.username" class="inp w-[171px] h-[21px]"
          :class="{ 'border-red-500': usernameError }" />
        <p>#</p>
        <input maxlength="4" v-on:input="validateTag" v-model="userData.tag" class="inp w-[38px] h-[21px]"
          :class="{ 'border-red-500': tagError }" />
      </div>
    </div>

    <button type="submit" @click="saveProfile"
      class="text-[12px] font-semibold ml-[44px] mt-[31px] w-[223px] bg-[#EEEEEE] active:bg-slate-400 h-[25px]"
      :disabled="usernameError || tagError">
      SAVE
    </button>
  </div>
  <div v-else class="text-[32px] font-bold uppercase text-green-500">SAVED</div>
</template>

<script>
import { userStore } from "@/stores/userSelf";
import axios from "axios";
import FormData from "form-data";
import APIRequests from "@/APIRequests";

export default {
  data() {
    return {
      userData: Object,
      saved: false,
      usernameError: false,
      tagError: false,
      image: 'https://i.imgur.com/aMaWtv2.jpeg',
      bufferImage: "",
    };
  },

  created() {
    const store = userStore();
    // do weird things to make a copy

    this.userData = JSON.parse(JSON.stringify(store.getUser()));
  },
  methods: {
    async saveProfile() {
      let data = new FormData();
      console.log(this.userData.tag);
      data.append("username", this.userData.username);
      data.append("tag", this.userData.tag);
      data.append("image", this.bufferImage)

      const response = await APIRequests.saveProfile(data);
      console.log();
      const store = userStore();
      store.setUserData(response.data);
      this.saved = true;

    },
    onFileChangeProfilePicture(e) {
      try {
        const selectedFile = e.target.files[0]
        this.bufferImage = selectedFile

        const file = e.target.files[0];
        this.image= URL.createObjectURL(file);

      } catch (err) {
        console.log(err)
      }

    },
    validateUsername(event) {
      const value = event.target.value;
      this.usernameError =
        value.length < 3 || value.length > 12 || !/^[a-zA-Z0-9_]+$/.test(value);
    },
    validateTag(event) {
      const value = event.target.value;
      this.tagError =
        value.length !== 4 || isNaN(parseInt(value)) || parseInt(value) < 0;
    },
  },
};
</script>
