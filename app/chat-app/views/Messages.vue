<template>
    <div v-show="!isLoading" class="container-fluid w-full flex justify-center h-screen">
        <div class="w-[400px] relative">
            <header-top @back="leaveRoom" :variant="type" :title="name" />

            <div @scroll="onScroll" class="messages px-[20px] pt-[40px] w-full overflow-scroll chat pb-[30px]"
                ref="chatContainer">
                <div class="grid grid-cols-1 py-[4.5px]" v-for="message in this.messages">
                    <p v-if="message.user._id == user._id"
                        class="bg-white z-30 h-fit w-fit px-[10px]  ml-[55px] py-[2px] rounded-[10px] justify-self-end">
                        {{ message.content }}
                    </p>
                    <p v-else class="bg-[#FFE2E2] h-fit w-fit mr-[55px] px-[10px] py-[2px] rounded-[10px] z-30">
                        {{ message.content }}
                    </p>
                </div>

            </div>
            <div class="flex absolute bottom-[13px]">
                <input v-model="inputMessage"
                    class="chat z-30 w-[252px] h-fit left-[16px] rounded-[20px] px-[18px] py-[11px] bg-[#EEEEEE] text-box"
                    contentEditable="true" />

                <p @click="sendMessage">send</p>
            </div>
        </div>
    </div>
</template>



<script>
// TODO THERE'S A BUG WHEN YOU RELOAD THE PAGE MORE MESSAGES GET LOADED EACH TIME. This is because the sockets ain't turned off when reloading
// putting this in a pinea model would fix this because when it's called you could disconnect everything
import io from "socket.io-client";
import headerTop from "@/components/headerTop.vue";
import config from "@/config";



export default {
    data() {
        return {
            socket: window.socket,

            name: "",
            type: "userTitle",
            roomId: this.$route.params.roomId,
            messages: [],
            inputMessage: "yooo",
            socket: undefined,
            participants: Object,
            user: {
                _id: "",
                username: "",
                tag: "",
            },
            isLoading: true,
            loadingNewMessages: false,
        };
    },
    components: {
        headerTop,
    },
    created() {
        (this.socket = window.socket), this.socket.emit("join room", this.roomId);

        this.socket.on("participants", (users) => {
            this.participants = users;
            for (let i = 0; i < users.length; i++) {
                if (users[i].isUserSelf) {
                    this.user = users[i].user;
                    break;
                }
            }
        });

        this.socket.on("done", () => {
            this.isLoading = false;
        });

        this.socket.on("new message", (message) => {
            // this.messages.push(message)
            console.log(message)
            console.log(message.user)
            this.messages.unshift(message);
        });

        this.socket.on("load messages", (messages) => {
            console.log("Loaded messages");
            this.messages = messages;
            this.messages = messages.reverse();
        });
        this.socket.on("update room data", (room) => {
            if (room.type == "private") {
                this.name = room.user.username;
            }
        });

        this.socket.on("error", (error) => {
            console.error(error);
        });

        this.socket.on("more messages loaded", (newMessages) => {
            newMessages.reverse()
            if (this.loadingNewMessages) {
                for (var i = 0; i < newMessages.length; i++) {
                    this.messages.push(newMessages[i])
                }
                this.loadingNewMessages = true;
            }



        });
    },

    methods: {
        sendMessage() {
            const message = {
                content: this.inputMessage,
            };
            this.socket.emit("new message", message);
        },

        leaveRoom() {
            this.socket.emit("leave room");

            // OFF
            this.socket.off("load messages");
            this.socket.off("update room data");
            this.socket.off("new message");
            this.socket.off("done");
            this.socket.off("participants");
            this.socket.off("more messages loaded")

            console.log("leave brooo");
        },

        // infinity scroll functionality
        onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
            if ((scrollTop - 400) < (clientHeight - scrollHeight)) {
                if (!this.loadingNewMessages) {
                console.log(this.messages[this.messages.length - 1]._id)

                    this.socket.emit("load more messages", this.messages[this.messages.length - 1]._id)
                    this.loadingNewMessages = true;
                }

            }
        }
    },
};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.chat::-webkit-scrollbar {
    display: none;
}

.chat {
    scroll-behavior: smooth;
    max-height: calc(100% - 90px);

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
}

.chat {
    display: flex;
    flex-direction: column-reverse;
}

.text-box {
    border: none;

    outline: none;
    width: 202px;
}

.text-box div:focus {
    border: 2px solid #00d263;
}
</style>
