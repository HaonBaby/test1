<template>
  <div class="news-page">
这是首页
    <button @click="loginout">退出</button>
    <span>{{name}}</span>
    <div class="left-bar">
      <span>
        最新咨询
      </span>
      <span>
        热门话题
      </span>
      <span>
        我的订阅
      </span>
      <span>
        定制追踪
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      mingzi: ''
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    loginout () {
      localStorage.clear()
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="scss">
.left-bar{
  display: flex;
  flex-direction: column;
  span{
    width: 100px;
    padding: 10px 30px;
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
}
</style>
