<script setup>
import { onBeforeUnmount } from 'vue'


async function setupData() {

}
setupData()

onBeforeUnmount(() => {
  window.socket.$emit('disconnect')
  window.socket.off("connect")
  window.socket.off('roomList')
  window.socket.off('pending friend requests')
})

</script>


<script>
import { userStore } from '@/stores/userSelf'
import { menuStore } from '@/stores/menuStorage'



import APIRequests from "@/APIRequests"
import io from 'socket.io-client'
import config from "@/config"


export default {
  data() {
    return {
      isLoading: true,
      isGettingRoomList: true,
      isGettingFriendList: true,

    }
  },

  async created() {
    const userStorage = userStore();
    const menuStorage = menuStore();



    const userdata = await APIRequests.getUser();
    await userStorage.setUserData(userdata.data);

    window.socket = await io(config.apiUrl, {
      withCredentials: true,
    });
    console.log(window.socket);

    // Listen for the "roomList" event on connection
    window.socket.on("connect", async () => {
      console.log("Connected to socket");
      window.socket.emit("getRoomList");
      window.socket.emit("get pending friend requests");



    });

    var roomList = []
    await window.socket.on('roomList', (data) => {
      // Update the roomList variable
      menuStorage.setRoomList(data)
      this.isGettingRoomList = false
    })


    await window.socket.on('pending friend requests', (data) => {
      // Update the roomList variable
      menuStorage.setFriendList(data)
      this.isGettingFriendList = false
    })

    this.isLoading = false;
  }
}
</script>

<template>
  <RouterView v-if="!isLoading && !isGettingRoomList&& !isGettingFriendList"></RouterView>
</template>

