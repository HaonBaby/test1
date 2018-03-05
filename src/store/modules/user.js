const USERINFO = {
  namespaced: true,
  state: {
    token: '',
    id: '',
    headUrl: '',
    name: ''
  },
  mutations: {
    saveUserInfo (state, data) {
      state.id = data.id
      state.headUrl = data.headimgurl
      state.name = data.name
      state.loginStatus = true
    }
  },
  actions: {
    login (context, data) {
      console.log(1)
      return new Promise((resolve, reject) => {
        this.$request.post('login', data).then((response) => {
          resolve(response.data)
        })
      })
    }
  }
}
export default USERINFO
