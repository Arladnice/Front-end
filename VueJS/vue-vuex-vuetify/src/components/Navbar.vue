<template>
    <v-container fluid>
        <v-app-bar
                color="deep-purple accent-4"
                dark
        >
            <v-spacer />
            <v-btn outlined class="ml-1">
                <router-link to="/">Главная</router-link>
            </v-btn>
            <v-btn outlined class="ml-1">
                <router-link to="/photo">Фото</router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>