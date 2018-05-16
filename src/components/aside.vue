<template>
<div class='nav'>

  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    >
    <div class=title>配置研究</div>
    <el-menu-item index="1">
      <i class="el-icon-caret-right"></i>
      <router-link to='configurationGradient' slot="title" tag='span'>配置梯度</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-caret-right"></i>
      <router-link to='queryContrast' slot="title" tag='span'>配置查询与对比</router-link >
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-caret-right"></i>
      <span slot="title">配置趋势研究</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-caret-right"></i>
      <span slot="title">契合度研究</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-caret-right"></i>
      <span slot="title">配置反向查询</span>
    </el-menu-item>
  </el-menu>

</div>
</template>

<script>
export default {
  name: 'aside',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
  .el-menu-item{
    font-size: 16px;
    border-bottom: 1px solid #eee;
    padding-left: 80px !important;
    height: 43px;
    line-height: 43px;
  }
  .el-menu{
    border-right: 0;
  }
  .nav{
    position: absolute;
    left: 0;
    top: 60px;
    width: 270px;
    height: 100%;
    /*float: left;*/
    border-right: 1px solid #eee;
    .title{
      height: 61px;
      line-height: 61px;
     text-align: center;
      font-size: 18px;
      font-weight: bold;
      background: #3B70F7 ;
      color: #fff;
    }
  }

</style>
