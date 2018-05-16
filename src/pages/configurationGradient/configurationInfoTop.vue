<template>
  <div class=info-container>
    <div class='title'>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        type='info'
        color="#ffffff">
        {{tag.name}}
      </el-tag>
    </div>
    <div class='options'>
      <div class='history'>
        <div class='history-left'><span class='title'>历史选择车型：</span>
          <el-tag type="info" color="#ffffff">奥迪 A6L</el-tag>
          <el-tag type="info" color="#ffffff">奥迪 A4L</el-tag>
          <el-tag type="info" color="#ffffff">宝马 X3</el-tag>
        </div>
        <div class='history-right'>清空历史记录</div>
      </div>
      <div class='options-container'>
        <ul>
          <li><span class='title'>车辆筛选：</span>
            <el-button type="danger" size='mini'>重置筛选条件</el-button>
          </li>
          <li><span class='title'>车型级别</span>
            <Checkbox style='display: inline-block' :info='modelCategory' :checkedNum='modelCategoryChecked'></Checkbox>
          </li>
          <li><span class='title'>车型级别</span>
            <Checkbox style='display: inline-block' :info='modelLevel' :checkedNum='modelLevelChecked'></Checkbox>
          </li>
          <li><span class='title'>车型系别</span>
            <Checkbox style='display: inline-block' :info='modelTie' :checkedNum='modelTieChecked'></Checkbox>
          </li>
          <li><span class='title'>燃料种类</span>
            <Checkbox style='display: inline-block' :info='fuelType' :checkedNum='fuelTypeChecked'></Checkbox>
          </li>
          <li><span class='title'>价格段</span>
            <Checkbox style='display: inline-block' :info='priceSection' :checkedNum='priceSectionChecked'></Checkbox>
            <el-input  size='mini'></el-input>—<el-input size='mini'></el-input>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Checkbox from './checkbox'
  export default {
    name: "configuration-info-top",
    data() {
      return {
        tags: [
          {name: '配置梯度', type: ''}
        ],
        modelCategory:['SUV', '轿车', 'MPV',],
        modelCategoryChecked:['SUV'],
        modelLevel:['A','A1','A0','B','B0','B1'],
        modelLevelChecked:['A','A1'],
        modelTie:['自主','日系','美系','韩系','德系','法系'],
        modelTieChecked:['日系','美系'],
        fuelType:['汽油','柴油','新能源','油电混合'],
        fuelTypeChecked:['汽油'],
        priceSection:['5万以下','5-8万','8-15万','15-25万','25-35万','35万以上'],
        priceSectionChecked:['5万以下']
      };
    },
    methods: {
    },
    components:{
      Checkbox
    }
  }
</script>
<style scoped lang='scss'>
  .el-tag {
    width: 157px;
    text-align: center;
    color: #101010;
    margin-left: 14px;
    .el-icon-close {
      right: -17px;
      color: #101010;
    }
  }
  .el-checkbox {
    color: #101010;
  }
.el-input{
  width: 65px;
  margin: 0 5px;
}
  .info-container {
    padding-top: 9px;
    .title {
      padding-bottom: 9px;
      border-bottom: 1px solid #eee;
    }
    .options {
      padding: 14px 14px 0;
      .history {
        display: flex;
        justify-content: space-between;
        .history-left {
          .title {
            border-bottom: 0;
            font-size: 18px;
          }
        }
        .history-right {
          font-size: 18px;
          cursor: pointer;
          color: #3B70F7;
        }
      }
      .options-container {
        padding-top: 23px;
        .title {
          width: 90px;
          display: inline-block;
          line-height: 26px;
          border-bottom: 0;
          font-size: 18px;
          padding-right: 20px;
        }
      }
    }
  }
</style>
