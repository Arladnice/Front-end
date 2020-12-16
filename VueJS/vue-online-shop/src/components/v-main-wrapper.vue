<template>
  <div class="v-main-wrapper">
    <v-catalog/>
    <v-card/>
  </div>
</template>

<script>
  import vCatalog from './v-catalog'
  import vCard from './v-card'
    export default {
        name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCard,
        },
        props: {},
        data: () => ({
           title: 'Hello'
        }),
        computed: {

        },
        methods: {

        },
        watch: {

        },

    }
</script>

<style scoped>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>