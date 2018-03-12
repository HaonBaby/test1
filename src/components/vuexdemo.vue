<template>
  <div>
    数字：{{result}}{{all}}
    <button @click="increment1">go</button>
    <button @click="decrement1">go</button>
    <button @click="add">go</button>
    <button @click="sub">go</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'vuexdemo',
    computed: {
      ...mapGetters([
        'result',
        'all'
      ])
    },
    methods: {
      ...mapActions([
        'increment1',
        'decrement1',
        'add',
        'sub'
      ])
    }
  }
</script>

<style lang="scss">

</style>
