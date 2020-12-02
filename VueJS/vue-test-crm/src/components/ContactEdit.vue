<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field" >
          <select ref="select" v-model="current">
            <option
              v-for="c of contacts"
              :key="c.id"
              :value="c.id"
            >{{c.name}}</option>
          </select>
          <label>Выберите номер</label>
        </div>

        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
          >
          <label for="name">Название</label>
          <span
            v-if="$v.name.$dirty && !$v.name.required"
            class="helper-text invalid"
          >Введите название</span>
        </div>

        <div class="input-field">
          <input
            id="number"
            type="text"
            v-model.number="number"
            :class="{invalid: $v.number.$dirty && !$v.number.minLength}"
          >
          <label for="number">Номер (в формате: 89991112233)</label>
          <span
            v-if="$v.number.$dirty && !$v.number.minLength"
            class="helper-text invalid"
          >Минимальная величина 11</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/dist/validators.min'

    export default {
      props: {
          contacts: {
              type: Array,
              required: true
          }
      },
      data: () => ({
          select: null,
          name: '',
          number: '',
          current: null
      }),
      validations: {
          name: {required},
          number: {required, minLength: minLength(11)}
      },
      watch: {
          current(contId) {
              const {name, number} = this.contacts.find(c => c.id === contId)
              this.name = name
              this.number = number
          }
      },
      created() {
          const {id, name, number} = this.contacts[0]
          this.current = id
          this.name = name
          this.number = number
      },
      methods: {
        async submitHandler() {
          if (this.$v.$invalid) {
            this.$v.$touch()
            return
          }
          try {
              const contactData = {
                  id: this.current,
                  name: this.name,
                  number: this.number
              }
              await this.$store.dispatch('updateContact', contactData)
              this.$message('Контакт успешно обновлён')
              this.$emit('updated', contactData)
          } catch (e) {
              /* eslint-disable */
          }
        }
      },
      mounted() {
          this.select = window.M.FormSelect.init(this.$refs.select);
          window.M.updateTextFields()
      },
      destroyed() {
          if (this.select && this.select.destroy) {
              this.select.destroy()
          }
      }
  }
</script>