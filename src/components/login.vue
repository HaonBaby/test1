<template>
  <div>
    <input type="text" v-model="phone">
    <input type="password" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
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
  methods: {
    login () {
      const data = {
        phone: this.phone,
        password: this.password
      }
      // this.$request.post('login', data).then((res) => {
      //   if (res.data.code === '200') {
      //     localStorage.setItem('token', res.data.data.token)
      //     console.log('登录成功')
      //     this.$router.push({name: 'index'})
      //   }
      // })
      this.$store.dispatch('user/login', data).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
