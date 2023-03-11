<template>
    <div class="grid  grid-flow-col pl-[34px] w-full">
        <input v-model="searchInput" class="inp w-[280px] h-[25px]" placeholder="SEARCH FOR CHAT">

    </div>
    <UsersAndGroupslist />
</template>

<script>
import UsersAndGroupslist from "@/components/usersAndGroupsList.vue"



export default {
    components: {
        UsersAndGroupslist
    },
    data(){
        return {
            searchInput: "",
        }
    }
}

</script>