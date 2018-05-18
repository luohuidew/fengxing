import Vue from 'vue'
import Vuex from 'vuex'
import tour from './modules/tour'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tour
  },
  getters
})

export default store
