<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">Have an account?</router-link>
          </p>
          VALIDATION ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Username">
            </fieldset>
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubbmitting">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'McvRegister',
      computed: {
        isSubbmitting() {
          return this.$store.state.auth.isSubbmitting
        }
      },
      methods: {
        onSubmit() {
          this.$store.dispatch('register', {
            email: 'denarlakov1@gmail.com',
            username: 'denden222',
            password: '123123test'
          }).then(user => {
            console.log('successfully register user', user)
          })
        },
      }
    }
</script>

<style scoped>

</style>
