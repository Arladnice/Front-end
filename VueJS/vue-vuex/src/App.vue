<template>
  <div id="app">
    <div class="posts" v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:() => ({
      posts: []
  }),
  async mounted() {
    const fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const parsedFetchedData = await fetchedData.json()
      this.posts = parsedFetchedData
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
