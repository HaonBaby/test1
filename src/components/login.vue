<template>
  <div>
    <input type="text" v-model="phone">
    <input type="password" v-model="password">
    <span>是否登录：{{status}}</span>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  watch: {
    phone (val) {
      this.phone = val
      console.log(this.phone)
    },
    password (val) {
      this.password = val
      console.log(this.password)
    }
  },
  computed: {
    ...mapGetters([
      'status'
    ])
  },
  methods: {
    ...mapActions([
      'log'
    ]),
    login () {
      const data = {
            phone: this.phone,
            password: this.password
          }
      this.log(data).then((res) => {
        if (res.data.code === '200') {
          this.$router.push({name: 'index'})
        }
      })
    }
    // login () {
    //   const data = {
    //     phone: this.phone,
    //     password: this.password
    //   }
    //   this.$request.post('login', data).then((res) => {
    //     if (res.data.code === '200') {
    //       localStorage.setItem('token', res.data.data.token)
    //       console.log('登录成功')
    //       this.$router.push({name: 'index'})
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss">

</style>
