import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    displayJobs: [],
    rows: 0
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_JOBS(state, displayJobs) {
      state.displayJobs = displayJobs;
    }
  },
  actions: {
    async fetchData() {
      return new Promise(resolve => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();
          resolve(val);
        }, 1000);
      });
    }
  },
  getters: {
    jobs(state) {
      return state.jobs;
    },
    displayJobs(state) {
      return state.displayJobs;
    },
    rows(state) {
      return state.rows;
    }
  },
  modules: {}
});
