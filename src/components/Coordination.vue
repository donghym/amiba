<template>
  <div>
    <vheader></vheader>
    <div class="a-body w90">
      <h1 class="title-h1"><img src="./img/title-logo.png">多组织协同</h1>
      <h2 class="title-h2">跨越组织间应用的桥梁</h2>
      <p class="text">随着企业集团化规模发展，协作经营成为工业化的趋势。U8+多组织协同即是应对这种应用模式而设计的。U8+多组织协同的发布，搭建了一座跨越组织间应用的桥梁。</p>
      <div class="clear10"></div>
      <el-row :gutter="20">
        <el-col :span="13">
          <h2 class="sub-title">应用场景</h2>
          <ul class="list">
            <li>中等规模集团企业，多工厂模式或销售-生产分离模式，需要管理各个组织的经营数据以及组织间的业务协同</li>
            <li>在U8系统中已存在多个账套,各账套独立进行完整财务业务处理，但账套（法人）间有业务协同需求的U8老用户</li>
            <li>上下游组织间存在订单协同业务</li>
            <li>多地点仓库之间存在出入库单据协同业务</li>
            <li>存在多组织资金、经营数据集中监控需求</li>
          </ul>
        </el-col>
        <el-col :span="11">
          <div class="text-center">
            <img src="./img/c-sence.png">
          </div>
        </el-col>
      </el-row>
      <h2 class="sub-title">产品特性</h2>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="text-center pro_list">
            <img src="./img/c_pro_1.png">
            <h3 class="title-h3">组织协同关系设置</h3>
            <p class="text">支持组织上下游关系设置、协同线路设置、客户及供应商关系设置</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="text-center pro_list">
            <img src="./img/c_pro_2.png">
            <h3 class="title-h3">组织间的协同</h3>
            <p class="text">支持组织间的销售订单-采购订单、销售出库-采库入库等业务协同、静态数据协同，支持协同单据生单。</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="text-center pro_list">
            <img src="./img/c_pro_3.png">
            <h3 class="title-h3">协同数据的统一管理</h3>
            <p class="text">支持多个组织的基础档案、资金，重点客户，订单发货及收入等经营数据及资金状况的集中监控。</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="text-center pro_list">
            <img src="./img/c_pro_4.png">
            <h3 class="title-h3">多组织的数据汇总查询</h3>
            <p class="text">支持基于主账套进行汇总查询，提供统计报表，实现对关键业务数据汇总统计以及各组织经营情况排名</p>
          </div>
        </el-col>
      </el-row>
      <div class="text-center">
        <div class="clear10"></div>
        <div class="clear10"></div>
        <p class="text">多组织界面展示</p>
        <div class="clear10"></div>
        <div class="clear10"></div>
      </div>
      <el-row :gutter="40">
        <el-col :span="12">
          <div class="text-center">
            <img src="./img/c_show_1.png">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="text-center">
            <img src="./img/c_show_2.png">
          </div>
        </el-col>
      </el-row>
      <h2 class="sub-title">应用价值</h2>
      <el-row :gutter="20">
        <el-col :span="17">
          <ul class="list">
            <li>破除信息孤岛，根据不同业务形态，按照单据协同规则，实现业务数据在不同组织间流转，支持内部销售、并可扩展支持集采分产直销、集采分产分销等应用场景。</li>
            <li>保证协同单据数据唯一、准确，可配置不同的转换规则，保证协同流转的数据正确，减少人工成本及误操作。</li>
            <li>辅助决策，业务协同提供辅助决策的关键报表，包括集团下属公司的仓储、资金流动态信息。</li>
          </ul>
        </el-col>
        <el-col :span="7">
          <div class="text-center">
            <img src="./img/c_value.png">
          </div>
        </el-col>
      </el-row>
    </div>
    <vfooter></vfooter>
  </div>
</template>
<script>
import vheader from './common/Header'
import vfooter from './common/Footer'
export default {
  name: 'Coordination',
  data () {
    return {
    }
  },
  components:{
    vheader,vfooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
