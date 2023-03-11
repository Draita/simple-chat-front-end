<template>
   <div class="grid  grid-flow-col pl-[34px]  w-full">
        <input v-model="searchInput" class="inp w-[245px] h-[25px]" placeholder="Enter a username#0000">
        <img @click="addFriend" class=" mt-[9px] pr-[40px]" src="@/assets/icons/add.svg">
    </div>
</template>

<script>
export default{
    data(){
        return {
            searchInput: "",
        }
    },
    methods:{
        addfriend(){

        }
    }
}

</script>