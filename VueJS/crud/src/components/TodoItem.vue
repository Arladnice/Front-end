<template>
  <div>

    <span class="main-span">
      <b-form-checkbox v-on:change="todo.completed = !todo.completed"
      >
      </b-form-checkbox>
      <strong>{{ index + 1 }}</strong>
      <b-list-group-item v-bind:class="{done: todo.completed}">
        {{ todo.title | uppercase}}
      </b-list-group-item>

      <b-button variant="danger" v-on:click="$emit('remove-todo', todo.id)">Удалить</b-button>
    </span>

  </div>
</template>

<script>
    export default {
        props: ['todo', 'index'],
        filters: {
            uppercase(value) {
                return value.toUpperCase()
            }
        }
    }
</script>

<style scoped>
  .main-span {
    display: flex;
  }
  .done {
    text-decoration: line-through;
  }
</style>
