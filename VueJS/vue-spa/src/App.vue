<template>
  <div id="app">
    <Navabar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navabar from "./components/Navabar";
  export default {
    components: {Navabar}
  }
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
