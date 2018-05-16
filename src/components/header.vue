<template>
    <div class=header>
            <div class="logo"><img src="../assets/images/logo.png"/><span class='title'>中国汽车产品决策支持系统</span></div>
<div class='right'>
  <div class=search>
    <el-input
      placeholder="关键字模糊搜索">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <!--<input type='text' class='input-box' placeholder="关键字模糊搜索"/>-->
    <!--<span class='search-icon'><Icon type="search" size=20></Icon></span>-->
  </div>
  <p class='login-info'>你好，<span>系统管理员</span></p>
  <span class='line'></span>
  <i class="el-icon-remove icons"></i>
  <i class="el-icon-circle-close icons"></i>
</div>
    </div>
</template>

<script>
    export default {
        name: "header",
      methods:{
clicks(){
  console.log(11)
}
      }
    }
</script>
<style>
        .ivu-input-icon{
          z-index: 4;
        }
</style>
<style scoped lang='scss'>

  .header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    height: 60px;
    box-sizing: border-box;
    .logo{
      img{
        margin: 16px 0 0 23px;
        width: 67px;
      }
      .title{
        font-size: 16px;
        vertical-align: 10px;
        color: #101010;
        font-weight: bold;
      }
    }
    .right{
      padding: 11px 20px 0 0;
      .search{
        width: 295px;
        height: 38px;
        /*border: 1px solid #EEE;*/
        display: inline-block;
        vertical-align: top;
        position: relative;
      }
      .input-box{
        border: 0;
        width: 100%;
        height: 36px;
        padding-right: 25px;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .search-icon{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
      .login-info{
        padding-left: 27px;
        display: inline-block;
        vertical-align: 7px;
        font-size: 14px;
        span{
          color:#5281FA;
        }
      }
      .line{
        margin-left:20px;
        width: 1px;
        background: #eee;
        display: inline-block;
        height: 30px;
      }
      .icons{
        font-size: 20px;
        cursor: pointer;
        margin-left: 20px;
        vertical-align: 7px;
        &.el-icon-remove{
          color:#5281FA;
        }
        &.el-icon-circle-close{
          color: #E51C23;
        }
      }
    }
  }
</style>
