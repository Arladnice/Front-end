<template>
  <form class="add-todo" @submit.prevent="onSubmit">
    <b-form-input v-model="text" placeholder="Добавить задачу"></b-form-input>
    <b-button variant="success" type="submit">Добавить</b-button>
  </form>
</template>

<script>
    export default {
        data:() => ({
            text: ''
        }),
        methods: {
            onSubmit() {
                if (this.text.trim()) {
                    const newTodo = {
                        id: Date.now(),
                        title: this.text,
                        completed: false
                    }
                    this.$emit('add-todo', newTodo)
                    this.text = ''
                }
            }
        }
    }
</script>

<style scoped>
  .add-todo {
    display: flex;
    justify-content: space-between;
  }
</style>
