import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import messagePlugin from '@/utils/message.plugin'
import store from './store'
import dateFilter from "@/filters/date.filter";
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyDICMKA31sz6SXmTEzVAXhsT_RESjmpPcU",
  authDomain: "vue-test-crm-bf97f.firebaseapp.com",
  databaseURL: "https://vue-test-crm-bf97f.firebaseio.com",
  projectId: "vue-test-crm-bf97f",
  storageBucket: "vue-test-crm-bf97f.appspot.com",
  messagingSenderId: "741724244035",
  appId: "1:741724244035:web:2e88e2f65c6e6943072cf6",
  measurementId: "G-HMDKDL845W"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app =  new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


