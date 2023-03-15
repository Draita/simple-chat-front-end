<template>
    <div v-show="!isLoading" class="container-fluid w-full flex justify-center  h-screen">
        <div class="w-[400px]  relative ">
            <header-top :variant="type" :title="name" />



            <div class="messages px-[20px] pt-[40px] w-full  overflow-scroll
                                  chat space-y-[9px] pb-[30px]">
                <div class= "grid grid-cols-1" v-for="message in this.messages">
                    <p v-if="(message.user._id == user._id)"
                        class="bg-white z-30 h-fit w-fit px-[10px] py-[2px] rounded-[10px] justify-self-end ">
                        {{ message.content }}
                    </p>
                    <p v-else class="bg-[#FFE2E2] h-fit w-fit px-[10px] py-[2px] rounded-[10px] z-30">
                        {{ message.content}}
                    </p>
                </div>



            </div>

            <div class="flex absolute bottom-[13px]">
                <input v-model = "inputMessage"
                class="chat z-30   w-[252px] h-fit left-[16px] rounded-[20px] px-[18px] py-[11px] bg-[#EEEEEE] text-box"
                contentEditable="true">

                <p @click = "sendMessage">send</p>

            </div>


        </div>




    </div>
</template>

<script>
import io from 'socket.io-client'
import headerTop from "@/components/headerTop.vue"
import config from "@/config"

export default {
    data() {
        return {
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
        }
    },
    components: {
        headerTop,
    },
    created() {
        this.socket = io(config.apiUrl, {
            withCredentials: true,
        });

        this.socket.on('connect', (message) => {
            console.log('Connected to room')
            this.socket.emit('join room', this.roomId)
        })

        this.socket.on('participants', (users) => {
            this.participants = users
            for (let i = 0; i < users.length; i++) {
                if (users[i].isUserSelf) {
                    this.user = users[i].user
                    break;
                }

            }
            console.log(this.user)
        })

        this.socket.on("done", () => {
            this.isLoading = false
        });



        // socket.on('disconnect', () => {
        //     console.log('Disconnected from server')
        // })

        this.socket.on('new message', (message) => {
            console.log('New message:', message)
            this.messages.push(message)
        })

        this.socket.on('load messages', (messages) => {
            console.log('Loaded messages:', messages)
            this.messages = messages
        })
        this.socket.on('update room data', (room) => {
            this.name = room.name
        })

        this.socket.on('error', (error) => {
            console.error(error)
        })
    },
    methods: {
        sendMessage() {
            const message = {
                content: this.inputMessage,
            }
            console.log(message)

            this.socket.emit('new message', message)

        }
    }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.chat::-webkit-scrollbar {
    display: none;
}

.chat {
    max-height: calc(100% - 90px);

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
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