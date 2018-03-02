import axios from 'axios'
// 请求超时重复请求次数
axios.defaults.retry = 4
// 请求超时时间重复延迟时间
axios.defaults.retryDelay = 500

axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  var config = err.config
  // 如果配置不存在，或重试选项没有设置，则拒绝。
  if (!config || !config.retry) return Promise.reject(err)

  // 设置用于跟踪重试计数的变量
  config.__retryCount = config.__retryCount || 0

  // 检查我们是否已经完成了重试的总数
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }

  // 增加重试计数
  config.__retryCount += 1

  // 创造新的承诺来处理指数的倒退
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  // 返回的承诺，在其中回忆axios重试请求
  return backoff.then(function () {
    return axios(config)
  })
})
