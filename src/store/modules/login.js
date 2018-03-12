import request from '../../../apis/request'

const LOGIN = {
  state: {
    id: '',
    headUrl: '',
    name: '',
    loginStatus: false,
    token: '',
    tokenStatus: false
  },
  mutations: {
    saveStatus (state, data) {
      state.loginStatus = data
    },
    saveToken (state, data) {
      state.token = data
    },
    updateTokenStatus (state, status) {
      state.tokenStatus = status
    },
    saveUserInfo (state, data) {
      state.id = data.id
      state.headUrl = data.headimgurl
      state.name = data.name
      state.loginStatus = true
    }
  },
  actions: {
    log (context, data) {
      return new Promise((resolve, reject) => {
        request.post('login', data).then((res) => {
          if (res.data.code === '200') {
            context.commit('saveStatus', true)
            context.commit('saveToken', res.data.data.token)
            localStorage.setItem('token', res.data.data.token)
            context.commit('saveUserInfo', res.data.data)
          } else if (res.data.code === '401') {
            context.commit('updateTokenStatus', true)
          }
          resolve(res)
        })
      })
    }
  },
  getters: {
    status: state => state.loginStatus,
    token: state => state.token,
    name: state => state.name
  }
}
export default LOGIN
