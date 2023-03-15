<script setup>
import { userStore } from '@/stores/userSelf'


async function setupData() {

}
setupData()



</script>


<script>
import { userStore } from '@/stores/userSelf'
import APIRequests from "@/APIRequests"


export default {
  data() {
    return {
      isLoading: true,

    }
  },

  async created() {
    const userdata = await APIRequests.getUser()
    const store = userStore()
    await store.setUserData(userdata.data)

    this.isLoading = false

  }



}

</script>

<template>
  <RouterView v-if = "!isLoading"></RouterView>
</template>

