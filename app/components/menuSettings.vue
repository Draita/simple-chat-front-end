<template>
    <div class="menu pl-[22px] pt-[20px] text-[24px] font-light space-y-[26px]
                        border-black border-b-[1px] pb-[18px] relative">
        <menuText v-if="menuShow == 'text'" @deleteAccount="deleteAccount" @logout="logout" @editProfile="editProfile" />


        <editProfile v-if="menuShow == 'editProfile'" @close = "close"/>
        <div v-if="menuShow == 'editProfile'" class="absolute top-0 right-[45px]">
            <img @click="close" class="w-[19px]" src="@/assets/icons/close.svg">

        </div>
    </div>
</template>

<script>


import menuText from "@/components/menuText.vue"
import editProfile from "@/components/editProfile.vue"


export default {
    components: {
        menuText,
        editProfile
    },
    data() {
        return {
            showMenu: true,
            showEditProfile: true,
            menuShow: "text",
            open: false,
            userData: Object,
        }
    },
    methods: {
        editProfile() {
            this.menuShow = "editProfile"
        },
        logout() {
            this.$router.push({ name: 'LandingPage' })
        },
        deleteAccount() {
            this.$router.push({ name: 'LandingPage' })
        },
        close() {
            this.menuShow = "text"
        },
        created() {


        }
    }
}

</script>