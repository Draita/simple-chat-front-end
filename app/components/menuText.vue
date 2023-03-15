<template>
    <div class="flex w-full">
        <p @click="this.$emit('logout')">LOGOUT</p>


    </div>
    <p @click="this.$emit('editProfile')">EDIT PROFILE</p>
    <p @click="this.$emit('deleteAccount')">DELETE ACCOUNT</p>
</template>