<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{task.title}}</h1>
      <form @submit.prevent="submitHandler">

        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea style="min-height: 150px" v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/120</span>
        </div>

        <input type="text" ref="datepicker">

        <button class="btn" type="submit" style="margin-right: 1rem">Update task</button>
        <button class="btn blue" type="button">Complete task</button>
      </form>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
    export default {
        computed: {
            task() {
                return this.$store.getters.taskById(+this.$route.params.id)
            }
        },
        data: () => ({
            description: '',
            chips: '',
            date: null
        }),
        mounted() {
            this.description = this.task.description
            this.chips = M.Chips.init(this.$refs.chips, {
                placeholder: 'Task tags',
                data: this.task.tags
            })
            this.date = M.Datepicker.init(this.$refs.datepicker, {
                format: 'dd.mm.yyyy',
                defaultDate: new Date(),
                setDefaultDate: true
            })
            setTimeout(() => {
                M.updateTextFields()
            }, 0)
        },
        methods: {
            submitHandler() {
                this.$store.dispatch('updateTask', {
                    id: this.task.id,
                    description: this.description,
                    date: this.date.date
                })
                this.$router.push('/list')
            },
            destroyed() {
                if (this.date && this.date.destroy) {
                    this.date.destroy()
                }
                if (this.chips && this.chips.destroy) {
                    this.chips.destroy()
                }
            }
        },
    }
</script>

<style scoped>

</style>
