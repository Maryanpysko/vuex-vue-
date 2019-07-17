import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    changeCounter(state, payload) {
      return (state.counter += payload);
    }
  },
  actions: {
    asyncChangeCaunter(context, payload) {
      setTimeout(() => {
        context.commit("changeCounter", payload);
      }, 200);
    }
  },
  getters: {
    coputedCounter(state) {
      return state.counter * 10;
    }
  }
});
