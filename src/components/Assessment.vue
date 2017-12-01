<template>
  <div>
    <vheader></vheader>
    <div class="a-body w90">
      <h1 class="title-h1"><img src="./img/title-logo.png" alt="">利润考核</h1>
      <h2 class="title-h2">聚能·赋变 让利润奔跑起来</h2>
      <div class="info">
                
      </div>
    </div>
  </div>
</template>
<script>
import vheader from './common/Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    vheader
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-h1{text-align: center;font-size: 32px;color: #e50012;font-weight: bolder;}
  .title-h1 img{margin-right: 4px;}
  .title-h2{text-align: center;margin-top: 20px;font-size: 18px;}
</style>
