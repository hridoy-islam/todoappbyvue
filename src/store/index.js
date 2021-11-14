import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      console.log(state.tasks);
    },
    DELETE_TASK(state, demo) {
      const oldState = state.tasks;
      const result = oldState.filter((newTask) => newTask != demo);
      state.tasks = result;
    },
    CLEAR_ALL(state) {
      state.tasks = [];
    }
  },
  actions: {
    addTask(context, task) {
      context.commit("addTask", task);
    },
    deleteTask({ commit }, demo) {
      commit("DELETE_TASK", demo);
    },
    clearAll({ commit }) {
      commit("CLEAR_ALL");
    }
  }
});

export default store;
