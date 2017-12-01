<template>
  <div class="a-footer">
    <div class="w70 clearfix">
      <img src="../img/code.png" class="fl">
      <div class="fl">
        <p>
          <a href="">关于U8</a>
          <a href="">关于用友</a>
          <a>客服热线：400-6600-588</a>
          <a>公司地址：北京市海淀区北清路68号用友产业园   邮编：100094 </a>
        </p>
        <p>版权所有：用友公司 © yonyou information technology Co., Ltd. 京ICP备05007539号-10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a-footer{background-color: #3c3c3c;padding: 20px;margin-top:20px;text-align: center;}
  .a-footer>div{display: inline-block;}
  .a-footer img{margin-right: 20px;}
  .a-footer p{line-height: 30px;padding-top:10px;text-align:left;}
  .a-footer p,.a-footer p a{color: #919191;font-size: 14px;}
  .a-footer p a{padding: 0 10px;}
  .a-footer p a:first-child{padding-left: 0;}
  .a-footer p a:not(:last-child){border-right:#919191 solid 1px;}
</style>
