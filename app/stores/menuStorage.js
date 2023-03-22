import { defineStore } from "pinia";

export const menuStore = defineStore("menu", {
  state: () => ({
    roomList: null,
    friendList: null,
  }),
  actions: {
    async setRoomList(data) {
      this.roomList = data;
    },
    getRoomList() {
      return this.roomList;
    },
    editRoomListSelf(room) {
      const index = this.roomList.findIndex((obj) => obj._id === room._id);
      if (index !== -1) {
        this.roomList[index] = room;
      }
    },
    setLastMessage(id, message) {
      const room = this.roomList.find((obj) => obj._id === id);
      if (room) {
        room.lastMessage.content = message;
        room.lastMessage.time = new Date().toISOString();
      }
    },
    removeNotification(id) {
      const room = this.roomList.find((obj) => obj._id === id);
      console.log("--------------")
      if (room) {
        room.notification.isActive = false;
        console.log(room)
      }
      console.log(this.roomList)


    },
    setFriendList(data) {
      const menuStorage = menuStore();

      this.friendList = data;
    },
    getFriendList() {
      return this.friendList;
    },
    removeFriend(friendId) {
      const index = this.friendList.filter((item) => item._id !== friendId);
      if (index !== -1) {
        this.friendList.splice(index, 1);
      }
      return this.friendList
    },
  },
});
