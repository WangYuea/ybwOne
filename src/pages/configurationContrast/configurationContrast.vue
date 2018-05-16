<template>
    <div class='configuration-contrast'>
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
      <ContrastModel></ContrastModel>
    </div>
</template>

<script>
  import ContrastModel from './contrastModel'

    export default {
        name: "configuration-contrast",
      data(){
          return{
            tags: [
              {name: '配置查询与对比', type: ''}
            ]
          }
      },
      created(){
      },
      components:{
          ContrastModel
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
  .configuration-contrast{
    padding-top: 9px;
    .title{
      border-bottom: 1px solid #eee;
      padding-bottom: 9px;
    }
  }
</style>
