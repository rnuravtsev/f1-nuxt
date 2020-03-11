import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    testing: 0
  },
  getters: {},
  mutations: {
    CHANGE_TESTING: (state, payload) => {
      state.testing += payload;
    }
  }
})

export default store
