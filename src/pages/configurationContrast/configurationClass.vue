<template>
    <div class='configuration-class'>
      <div class='item'>
        <div class='first'>
          <h4 class='title'>配置大类1</h4>
          <i class='el-icon-caret-right'></i>
          <ul class='info'>
            <li>整车质保</li>
            <li>排量(L)</li>
            <li>变速箱</li>
            <li>综合工况油耗<br/>(L/100km)</li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
      </div>
      <div class='item'>
        <div class='first'>
          <h4 class='title'>配置大类1</h4>
          <i class='el-icon-caret-right'></i>
          <ul class='info'>
            <li>整车质保</li>
            <li>排量(L)</li>
            <li>变速箱</li>
            <li>综合工况油耗<br/>(L/100km)</li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
        <div class='second'>
          <ul>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='left'>三年或10万公里</span><span class='right'>PVA</span></li>
            <li><span class='right'>PVA</span></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "configuration-class"
    }
</script>

<style scoped lang='scss'>
.configuration-class{
  border:1px solid #eee;
  border-top:0;
  padding-bottom: 40px;
  .item{
    margin-bottom: 10px;
    font-size: 0;
  }
  .first{
    display: inline-block;
    padding-left: 9px;
    width: 200px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    font-size: 14px;
    .title{
      display: inline-block;
      width: 30px;
      height: 174px;
      border: 1px solid #eee;
      text-align: center;
      padding-top: 56px;
      box-sizing: border-box;
    }
    .el-icon-caret-right{
      font-size: 20px;
    }
    .info{
      display: inline-block;
      width: 132px;
      border: 1px solid #eee;
      border-right: 0;
      vertical-align: top;
      li{
        word-break: break-all;
        height: 42px;
        padding-left: 10px;
        border-bottom: 1px solid #eee;
        line-height: 42px;
        &:last-child{
          line-height:22px;
        }
      }
    }
  }
  .second{
    display: inline-block;
    /*padding-left: 1px;*/
    vertical-align: top;
    /*border-bottom: 1px solid #eee;*/
    border-right: 1px solid #eee;
    width: 252px;
    font-size: 14px;
    ul{
      li{
        height: 42px;
        line-height: 42px;
        border-top: 1px solid #eee;
        .left{
          padding-left: 10px;
          float: left;
        }
        .right{
          float: right;
          padding: 0 20px;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
}
</style>
