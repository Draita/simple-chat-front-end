import { defineStore } from 'pinia'
import APIRequests from "@/APIRequests"
import config from "@/config";


export const userStore = defineStore('user', {
  state: () => ({
    userData: null,
    profilePicture: 'https://i.imgur.com/aMaWtv2.jpeg',
  }),
  actions: {
    async setUserData(data) {
      this.userData =  data
      this.profilePicture = config.apiUrl+"/users/profile_picture/"+data._id+"?t="+Date.now

    },
    clearUserData() {
      this.userData = null
    },
    getUser(){
      return this.userData
    },
    getProfilePicture(){
      return this.profilePicture
    }
  }
})