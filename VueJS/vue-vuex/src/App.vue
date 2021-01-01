<template>
  <div id="app">
    <PostForm/>
    <h1>{{getCount}}</h1>
    <div class="posts" v-for="post in validatePost" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import PostForm from "./components/PostForm";
    export default {
        components: {
            PostForm
        },
      computed: mapGetters(['allPosts', 'getCount', 'validatePost']),
        methods: mapActions(['fetchData']),
        mounted() {
          this.fetchData(12)
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  margin: 60px auto;
}
  .posts {
    border: #2c3e50 solid 1px;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

</style>
