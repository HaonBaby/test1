<template>
  <div>
    <input type="text" v-model="phone">
    <input type="password" v-model="password">
    <input type="text" v-model="email">
    <span class="captcha-wrap" ref="captchaWrap"></span>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import '../captcha/gt'
export default {
  name: 'register',
  data () {
    return {
      phone: '',
      password: '',
      email: ''
    }
  },
  watch: {
    phone (val) {
      this.phone = val
    },
    password (val) {
      this.password = val
    },
    email (val) {
      this.email = val
    }
  },
  created () {
    this.initCaptcha()
  },
  methods: {
    // 初始认证码
    initCaptcha () {
      let params = {
        t: Date.now()
      }
      this.$request.get('verificationCode', params).then(response => {
        let data = response.data
        this.validToken = data.data.neican_token
        let options = {
          // 以下 4 个配置参数为必须，不能缺少
          gt: data.data.gt,
          challenge: data.data.challenge,
          offline: !data.data.success, // 表示用户后台检测极验服务器是否宕机
          new_captcha: data.data.new_captcha, // 用于宕机时表示是新验证码的宕机
          product: 'float', // 产品形式，包括：float，popup
          width: '100%',
          height: '46px'
          // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
        }
        // eslint-disable-next-line
        initGeetest(options, this.validateHandler)
      }).catch(error => {
        throw new Error('fetch captcha pre_valid error: ' + error)
      })
    },
    // 认证码加载handler
    validateHandler (captchaObj) {
      let captchaDom = this.$refs.captchaWrap
      captchaObj.appendTo(captchaDom)
      captchaObj.onReady(() => {
        this.captchaObj = captchaObj
        try {
          let timer = setInterval(() => {
            let result = captchaObj.getValidate()
            if (result) {
              this.submitValid()
              clearInterval(timer)
            }
          }, 100)
        } catch (error) {
          throw new Error('validate captcha error: ' + error)
        }
      })
    },
    verificaPhone () {
      let valData = [
        {
          regex: 'phone',
          message: '手机号码不能为空或者格式不正确',
          data: this.phone
        }
      ]
      var status = this.$validation(valData)
      if (status === true) {
        this.validateError = false
      } else {
        this.validateError = true
        this.str = status
      }
    },
    // 提交滑动认证码
    submitValid () {
      let result = this.captchaObj.getValidate()
      if (!result) {
        return alert('请完成验证')
      }

      let params = {
        geetest_challenge: result.geetest_challenge,
        geetest_validate: result.geetest_validate,
        geetest_seccode: result.geetest_seccode,
        neican_token: this.validToken
      }
      // use form data
      let fd = this.genFormData(params)
      // request.headers()
      this.$request.formDataPost('sendValid', fd).then(response => {
        if (response.data.code !== '200') {
          this.hasError = true
          this.errorTip = '滑动验证码验证错误，请刷新重试'
          // eslint-disable-next-line
          captchaObj.reset()
          return
        }
        let data = response.data.data
        this.cert = data.cert
        this.reqPhoneCaptcha()
      }, error => {
        throw new Error('post valid captcha error: ' + error)
      })
    },
    reqPhoneCaptcha () {
      const { phone, cert } = this
      // 电话号码校验
      // if (phoneNumber.valid) {
      //   // 手机号码格式不对
      //   // 拒绝发射验证码req
      //   return
      // }
      let params = {phone: phone, cert}, fd = this.genFormData(params)
      this.$request.formDataPost('sendMessage', fd).then(response => {
        if (response.code !== '200') {
          this.hasError = true
          this.errorTip = '验证码发送失败，请刷新重新发送'
        }
      }).catch(error => {
        throw new Error('send msg error: ' + error)
      })
    },
    genFormData (params) {
      let fd = new FormData()
      for (let x in params) {
        fd.append(x, params[x])
      }
      return fd
    },
    register () {
      let params = {
        'phone': this.phone,
        'password': this.password,
        'valid': this.email
      }
      console.log(params)
      this.$request.post('register', params

      ).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
