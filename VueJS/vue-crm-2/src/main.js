import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate/src";
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import messagePlugin from '../utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyBg6FaRLwoeuhKHGWJ-xAcjGnXTI9Dcye0",
  authDomain: "vue-crm-2-e6190.firebaseapp.com",
  databaseURL: "https://vue-crm-2-e6190-default-rtdb.firebaseio.com",
  projectId: "vue-crm-2-e6190",
  storageBucket: "vue-crm-2-e6190.appspot.com",
  messagingSenderId: "287289391829",
  appId: "1:287289391829:web:bc2f62477a8e7c172e805c",
  measurementId: "G-3C6VQ66FBJ"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
