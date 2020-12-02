<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @click.prevent="submitHandler">
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
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import {required, minLength} from 'vuelidate/dist/validators.min'
  // import { IMaskDirective } from 'vue-imask'
  export default {
      data: () => ({
          name: '',
          number: '',
          // phoneNumberMask: {
          //     mask: '+{7}(000)000-00-00',
          //     lazy: true
          // }
      }),
      validations: {
          name: {required},
          number: {required, minLength: minLength(11)}
      },
      mounted() {
          window.M.updateTextFields()
      },
      methods: {
          async submitHandler() {
              if (this.$v.$invalid){
                  this.$v.$touch()
                  return
              }
              try {
                  /* eslint-disable */
                  const contact = await this.$store.dispatch('createContact',{
                      name: this.name,
                      number: this.number
                  })
                  this.name = ''
                  this.number = ''
                  this.$v.$reset()
                  this.$message('Категория была создана')
                  this.$emit('created', contact)
              } catch (e) {
                  /* eslint-disable */
              }
          }
      },
      // directives: {
      //     imask: IMaskDirective
      // }
  }
</script>