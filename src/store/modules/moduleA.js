const MODULEA = {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment1 (context) {
      context.commit('increment')
    },
    decrement1 (context) {
      context.commit('decrement')
    }
  },
  getters: {
    result: state => state.count
  }
}
export default MODULEA
