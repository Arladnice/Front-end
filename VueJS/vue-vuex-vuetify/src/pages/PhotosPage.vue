<template>
    <v-container>
        <Photo/>
    </v-container>
</template>

<script>
    import Photo from "../components/photo/Photo";
    export default {
    data: () => ({
        components: {
            Photo
        },
        photos: [
            {id: 1, title: 'фото 1'},
            {id: 2, title: 'фото 2'},
            {id: 3, title: 'фото 3'},
            {id: 4, title: 'фото 4'}
        ],

    })
    }
</script>

<style scoped>

</style>