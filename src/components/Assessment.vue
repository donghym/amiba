<template>
  <div>
    <vheader></vheader>
    <div class="a-body w90">
      <h1 class="title-h1"><img src="./img/title-logo.png">利润考核</h1>
      <h2 class="title-h2">聚能·赋变 让利润奔跑起来</h2>
      <div class="clear10"></div>
      <el-row :gutter="20">
        <el-col :span="13">
          <p class="text"> &nbsp;&nbsp;&nbsp;&nbsp; U8+“利润考核”（利润中心） 基于阿米巴经营管理体系，借鉴了阿米巴经营与量化的思想，多维度、多层级，以地区、产品、组织等多层级权限灵活展现阿米巴《经营会计报表》，将经营报表连接起来，逐步实现进度可视化、流程可视化、成本可视化、战略可视化，为企业飞速发展提供流程保障。</p>
          <h2 class="sub-title">应用场景</h2>
          <ul class="list">
            <li>单法人有内部虚拟独立核算想法或已经进行的企业</li>
            <li>按照事业部或利润中心进行管理的企业</li>
            <li>按照品类、产品、订单等进行绩效考核的企业</li>
          </ul>
        </el-col>
        <el-col :span="11">
          <div class="text-center">
            <img src="./img/m-sence.png">
          </div>
        </el-col>
      </el-row>
      <h2 class="sub-title">产品特性</h2>
      <el-row :gutter="40">
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_1.png">
            <h3 class="title-h3">自由构建利润中心</h3>
            <p class="text">按需构建核算范围，支持按成本中心、部门对照利润中心</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_2.png">
            <h3 class="title-h3">灵活定义交易价</h3>
            <p class="text">建立利润中心商品档案；支持从业务数据获取；支持批量、灵活配置及更新交易价格</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_3.png">
            <h3 class="title-h3">个性化配置收入、成本来源</h3>
            <p class="text">支持确定期间费用、收入、支出明细项目；支持从总账取得间接费用数据</p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_4.png">
            <h3 class="title-h3">方便的费用调节</h3>
            <p class="text">支持对各成本中心的制造费用、人工费用明细内容、金额进行调整；支持获取成本管理费用金额</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_5.png">
            <h3 class="title-h3">快捷的利润计算</h3>
            <p class="text">核算利润中心生产订单或品种的收入、成本、利润 ，一键计算，方便快捷；提供检查报告，根据系统提供的“错误位置、原因、解决方案”，进行数据分析、调整</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="text-center pro_list">
            <img src="./img/m_pro_6.png">
            <h3 class="title-h3">经营绩效分析</h3>
            <p class="text">精准分析每个利润中心、产品、每张订单毛利率；实时利润预测</p>
          </div>
        </el-col>
      </el-row>
      <h2 class="sub-title">应用价值</h2>
      <el-row :gutter="20">
        <el-col :span="17">
          <ul class="list">
            <li><strong>科学支撑企业战略决策：</strong>帮助企业经营者合理规划业务、有效配置企业资源，让内部执行更加高效。</li>
            <li><strong>合理梳理企业管理思路，明确成本分析模型和方法：</strong>实时呈现企业经营成果及问题，根据原始业务单据来展现，能真正做到实时分析，实时发现企业经营过程中的问题。</li>
            <li><strong>实现企业组织架构的灵活定义：</strong>实现原始数据跟随企业组织变更而变更，真正实现企业的柔性组织需求，而且不会改变ERP本身的业务流程。</li>
            <li><strong>通过数字看清经营的本质：</strong>通过利润核算作为衡量员工贡献的重要指标，让企业的每个员工都能参与到经营中来，都清楚的看到属于自己的贡献，增强员工的归属感、责任感，把成本与费用的控制由被动变为主动。</li>
          </ul>
        </el-col>
        <el-col :span="7">
          <div class="text-center">
            <img src="./img/m_value.png">
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
  name: 'Assessment',
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
