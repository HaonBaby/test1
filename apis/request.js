import axios from 'axios'
import apis from './api'
import qs from 'qs'
import root from './root'
const request = axios.create({
  baseURL: root.httpUrl,
  // 请求超过2s请求取消
  timeout: 2000
})

// 得到token
function getToken () {
  return localStorage.getItem('token') || ''
}

// 请求拦截
// request.interceptors.request.use(
//   response => {
//     // 在请求发送之前做些什么
//     let token, bearerToken
//     token = getToken()
//     bearerToken = `Bearer ${token}`
//     response.headers.Authorization = bearerToken
//     return response
//   },
//   error => {
//     // 对请求错误做些什么
//     return error
//   }
// )
// 请求拦截
request.interceptors.request.use((config) => {
  // 在请求发出之前进行一些操作
  let token, bearerToken
  token = getToken()
  bearerToken = `Bearer ${token}`
  config.headers.Authorization = bearerToken
  console.log('请求之前')
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use((response) => {
  // 在这里对返回的数据进行处理
  console.log('在这里对返回的数据进行处理')
  return response
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})

export default {
  // post
  post (urlKey, params) {
    return request({
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'},
      method: 'post',
      url: apis[urlKey],
      data: qs.stringify(params)
    })
  },
  // get
  get (urlKey, params) {
    return request({
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'},
      method: 'post',
      url: apis[urlKey],
      data: params
    })
  },
  formDataPost (urlKey, params) {
    return request({
      method: 'post',
      url: apis[urlKey],
      data: params,
      headers: {'Content-Type': 'multipart/form-data'}
    })
  }
}
