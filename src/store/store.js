import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import modeleB from './modules/moduleB'
import login from './modules/login'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA,
    modeleB,
    login
  }
})
export default store
