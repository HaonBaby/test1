import apis from './apis'
// 配置api接口
var root = '//neican.ink:2080'
// 引用axios
var axios = require('axios')

function apiAxios (method, url, params, success, failure) {
  axios({
    method: method,
    url: apis[url],
    params: params,
    baseURL: root,
    withCredentials: false
  }).then(res => {
    if (res.data.code === '200') {
      success(res.data)
    } else {
      failure(res.data)
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  }
}
