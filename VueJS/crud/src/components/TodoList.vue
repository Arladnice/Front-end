<template>
  <div class="todo-list__main">
    <h2>Todo List</h2>

    <router-link to="/">Home</router-link>
      <add-todo
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not-completed</option>
    </select>
    <b-list-group class="pt-3">
      <todo-item
        v-for="(todo, i) in todos"
        :key="todo.id"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      />
    </b-list-group>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import AddTodo from "./AddTodo";
    export default {
        data:() => ({
            filter: 'all'
        }),
        props: ['todos'],
        components: {
            TodoItem,
            AddTodo
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            },
            addTodo(newTodo) {
                this.$emit('add-todo', newTodo)
            }
        },
        watch: {
            filter(value) {
                if (this.value === 'all') {
                    this.$emit('change-todo', this.todos)
                }
                if (this.value === 'completed') {
                    this.$emit('change-todo', this.todos.filter(t => t.completed))
                }
                if (this.value === 'not-completed') {
                    this.$emit('change-todo', this.todos.filter(t => !t.completed))
                }
            }
        }

    }
</script>

<style scoped>
  .todo-list__main {
    justify-content: center;
    display: inline-block;
  }
</style>
