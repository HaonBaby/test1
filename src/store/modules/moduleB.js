const MODULEB = {
  state: {
    number: 0
  },
  mutations: {
    add (state) {
      state.number++
    },
    sub (state) {
      state.number--
    }
  },
  actions: {
    add (context) {
      context.commit('add')
    },
    sub (context) {
      context.commit('sub')
    }
  },
  getters: {
    all: state => state.number
  }
}
export default MODULEB
