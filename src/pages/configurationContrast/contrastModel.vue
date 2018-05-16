<template>
  <div class='contrast-model'>
    <div class='header'>
      <el-button type="primary" size='small'>返回上一步</el-button>
      <span class='optimize'>对比优化</span>
      <div class='check-box'>
        <el-checkbox v-model="checked">隐藏相同项对比</el-checkbox>
        <el-checkbox v-model="checked">高亮差异显示</el-checkbox>
      </div>
      <span class='search'>搜索配置</span>
      <el-input placeholder="请输入内容"  size='small'>
        <el-button slot="append">搜索</el-button>
      </el-input>
      <el-button type="primary" icon="el-icon-d-caret" size='small' @click='showPopup'>调整对比顺序</el-button>
      <span class='export-ppt'><i class="el-icon-download"></i>导出PPT</span>
    </div>
    <AddModel></AddModel>
    <ConfigurationClass></ConfigurationClass>
    <PAVanalyse></PAVanalyse>
    <div class='btns'><el-button type="primary">下一步</el-button></div>
    <OrderPopup v-if='isShow' @isClose='close'></OrderPopup>
  </div>
</template>

<script>
  import AddModel from './addModel'
  import ConfigurationClass from './configurationClass'
  import PAVanalyse from './PAVanalyse'
  import OrderPopup from './orderPopup'
    export default {
        name: "contrast-model",
      data(){
          return{
            checked: false,
            isShow:false
          }
      },
      created(){
        // console.log(this.isShow)
      },
      methods:{
        showPopup(){
          this.isShow=true
        },
        close(data){
          this.isShow=data
        }
      },
      components:{
          AddModel,
        ConfigurationClass,
        PAVanalyse,
        OrderPopup
      }
    }
</script>

<style scoped lang='scss'>
  .el-button{
    width: 140px;
  }
  .el-input-group{
    width: 280px;
    margin-right: 15px;
    .el-button{
      width: auto;
    }
  }
  .el-input-group__append, .el-input-group__prepend{
    background-color: #3B70F7;
    color: #fff;
  }
.contrast-model{
  padding: 10px;
  .header{
    .optimize{
      padding: 0 18px;
      font-size: 18px;
      font-weight: bold;
    }
    .check-box{
      display: inline-block;
      vertical-align: middle;
      .el-checkbox{
        display: block;
        margin-bottom: 2px;
        &+.el-checkbox{
          margin-left: 0;
        }
      }
    }
    .search{
      font-size: 18px;
      font-weight: bold;
      padding: 0 18px 0 40px;
    }
    .export-ppt{
      padding-left: 15px;
      color: #83bd3a;
      cursor: pointer;
    }
  }
  .btns{
    margin-top: 27px;
    text-align: center;
    .el-button{
      width: 298px;
    }
  }
}
</style>
