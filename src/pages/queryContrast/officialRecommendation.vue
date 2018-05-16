<template>
    <div class='official-container'>
        <div class=title>官方推荐对比组：</div>
      <div class='official-box' v-for='item in infos'>
        <table  cellpadding=0 cellspacing=0>
          <tr v-for='info in item.infos'>
            <td>{{info.model}}</td>
            <td>{{info.style}}</td>
            <td>{{info.price}}</td>
          </tr>

        </table>
        <div class='btn-see'><el-button type="primary" size='medium'>查看</el-button></div>
      </div>
      </div>
</template>

<script>
    export default {
      name: "official-recommendation",
      data() {
        return {
          infos:[]
        }
      },
      props:['officialInfo'],//获取父元素传递过来的数据
      created(){
        this.infos=this.officialInfo//把父元素传递过来的数据复制给data上定义的变量
        // console.log(this.officialInfo)
      }
    }
</script>

<style scoped lang='scss'>

.official-container{
  padding: 16px 0 10px 10px;
  .title{
font-size: 18px;
    font-weight: bold;
    margin-bottom: 28px;
  }
  .official-box{
    display: inline-block;
    width: 23%;
    margin-right: 25px;
    &:last-child{
      margin-right: 0;
    }
    table{
      border:1px solid #bbb;
      tr{
        line-height: 50px;
        td{
          padding:0 3px ;
          border-bottom: 1px solid #bbb;
          &:first-child{
            padding-left: 10px;
          }
          &:last-child{
            padding-right: 10px;
          }
        }
        &:last-child{
          td{
            border-bottom: 0;
          }
        }
      }
    }
    .btn-see{
      margin-top: 12px;
      text-align: center;
    }
  }

}
</style>
