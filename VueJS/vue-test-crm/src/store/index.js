import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import contacts from "./contacts";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, contacts, info
  }
})
