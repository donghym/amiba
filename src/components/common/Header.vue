<template>
  <div class="a-header">
    <header>
        <p class="w90">
          <a>用友首页</a>
          <a>用友U8<sup>+</sup></a>
          <a>U8<sup>+</sup>体验中心</a>
        </p>
    </header>
    <div class="clear10"></div>
    <div class="top w90">
      <img src="../img/logo.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{height: 30px;background-color: #3c3c3c;}
  header p{height:inherit;color: #fff;text-align: right;}
  header p a{padding: 0 10px;line-height: 25px;}
  header p a:not(:last-child){border-right:#fff solid 1px;}
</style>
