import { defineStore } from 'pinia'
import APIRequests from "@/APIRequests"

export const userStore = defineStore('user', {
  state: () => ({
    userData: null
  }),
  actions: {
    async setUserData(data) {
      this.userData =  data
    },
    clearUserData() {
      this.userData = null
    },
    getUser(){
      return this.userData
    }
  }
})