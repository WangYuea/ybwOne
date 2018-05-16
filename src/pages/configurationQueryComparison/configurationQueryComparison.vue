<template>
    <div class='configuration-comparison'>
      <div class='header'>
        <el-button type="primary" size='small'>返回上一步</el-button>
        <span class='optimize'>对比优化</span>
        <div class='check-box'>
          <el-checkbox v-model="checked">变速器不参与对比</el-checkbox>
          <el-checkbox v-model="checked">变速器不参与对比</el-checkbox>
        </div>
        <el-button type="primary" icon="el-icon-d-caret" size='small'>调整对比顺序</el-button>
        <span class='export-ppt'><i class="el-icon-download"></i>导出Execel<i class="el-icon-download"></i>导出PPT </span>
      </div>
      <div class='main'>
        <div class='select-container clearfix'>
          <div class='item'><ModelItem></ModelItem></div>
          <div class='item'><ModelItem></ModelItem></div>
          <div class='item'><ModelItem></ModelItem></div>
          <div class='item'><i class="el-icon-circle-plus"></i></div>
        </div>
        <ConfigurationDetail></ConfigurationDetail>
      </div>
    </div>
</template>

<script>
  import ModelItem from '../common/modelItem'
  import ConfigurationDetail from './configurationDetail'
    export default {
        name: "configuration-query-comparison",
      data(){
          return{
            checked:false
          }
      },
      components:{
          ModelItem,
        ConfigurationDetail
      }
    }
</script>

<style scoped lang='scss'>
  .configuration-comparison{
    padding:10px 0 0 9px;
    .header{
      .optimize{
        padding: 0 18px;
        font-size: 18px;
        font-weight: bold;
      }
      .check-box{
        margin-right: 50px;
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
      .export-ppt{
        float: right;
        padding-right: 20px;
        padding-left: 15px;
        color: #83bd3a;
        cursor: pointer;
        i{
          padding: 0 10px 0 15px;
        }
      }
    }
    .main{
      margin-top: 10px;
      border: 1px solid #eee;
      .select-container{
        border-bottom: 1px solid #eee;
        .item{
          width: 32%;
          float: left;
          height: 223px;
          border-left: 1px solid #eee;
          box-sizing: border-box;
          &:first-child{
            border-left: 0;
          }
          &:last-child{
            padding-top: 100px;
            padding-left: 0.7%;
            text-align: center;
            font-size: 20px;
            color: #3B70F7;
            width: 3%;
          }
        }
      }
    }
  }

</style>
