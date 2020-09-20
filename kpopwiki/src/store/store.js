import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavOpen: false
  },
  mutations: {
    setIsNavOpen (state, status) {
      state.isNavOpen = status
    },
    toggleNav (state) {
      state.isNavOpen = !state.isNavOpen
    }
  }

})
