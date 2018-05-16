<template>
    <div class='add-model'>
      <div class='neglecting-texts'>
        <p>最小差异忽略值<br/>（长宽高轴距，mm）</p>
        <el-radio-group v-model="radio2">
          <el-radio :label="3">0</el-radio>
          <el-radio :label="6">0-5</el-radio>
          <el-radio :label="9">0-10</el-radio>
          <el-radio :label="1">0-20</el-radio>
          <el-radio :label="2">自定义&nbsp;&nbsp;0 - <el-input placeholder="数字" size='mini'></el-input></el-radio>
        </el-radio-group>
      </div>
      <div class='item'>
        <ModelItem></ModelItem>
      </div>
      <div class='item'>
        <ModelItem></ModelItem>
      </div>
      <div class='item'>
        <ModelItem></ModelItem>
      </div>
      <div class='add'>
        <p>添加对比款型</p>
        <i class='el-icon-circle-plus'></i>
      </div>
    </div>
</template>

<script>
  import ModelItem from './modelItem'
    export default {
        name: "add-model",
      data(){
          return{
            radio2: 3
          }
      },
      components:{
        ModelItem
      }
    }
</script>

<style scoped lang='scss'>
  .el-radio{
    margin-top:25px;
    width: 80px;
  }
  .el-radio+.el-radio{
    margin-left: 0;
  }
  .add-model{
    border: 1px solid #eee;
    margin-top: 10px;
    .neglecting-texts{
      display: inline-block;
      padding: 14px 0 25px 14px;
      box-sizing: border-box;
      border-right: 1px solid #eee;
      width: 200px;
      p{
        font-weight: bold;
        font-size: 18px;
      }
    }
    .item{
      border-right: 1px solid #eee;
      display: inline-block;
      width: 250px;
      /*height: 100%;*/
      vertical-align: top;
      box-sizing: border-box;
      font-size: 0;
    }
    .add{
      display: inline-block;
      cursor: pointer;
      text-align: center;
      color:#3B70F7;
      line-height: 25px;
      /*font-size: 16px;*/
    }
  }


</style>
