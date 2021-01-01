<template>
  <div>

    <loader v-if="this.loading"/>
    <todo-list
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      @add-todo="addTodo"
      v-else-if="todos.length"
      v-on:change-todo="changeTodo"
    />
    <p v-else>No Todos</p>
  </div>
</template>

<script>
    import TodoList from "../components/TodoList";
    import Loader from "../components/Loader";
    export default {
        name: 'App',
        components: {
            TodoList,
            Loader
        },
        data:() => ({
            todos: [],
            loading: true,
        }),
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos/?_limit=4')
                .then(response => response.json())
                .then(json => {
                    this.todos = json
                    this.loading = false
                })
        },
        methods: {
            removeTodo(id){
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addTodo(newTodo) {
                this.todos.push(newTodo)
            },
            changeTodo(value) {
                console.log(value)
                this.todos.push(value)
            }
        },
    }
</script>

<style scoped>

</style>
