<template>
  <div class="hello">
      <p>hello word</p>
    <span>emmmmmmmmmmmm....</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created () {
    this.$request.post('myTopic').then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  p{
    color: mediumvioletred;
  }
  span{
    color: red;
  }
}
</style>
