<template>
    <div class='analyse'>
      <h4 class='title'>P<br/>V<br/>A<br/>分析</h4>
      <table class='table-box' border width=988>
        <tr>
          <td width=160>PVA</td>
          <td width=276>362</td>
          <td width=276>350</td>
          <td width=276>350</td>
        </tr>
        <tr>
          <td>PVA绝对优先值</td>
          <td>0</td>
          <td>-12.6</td>
          <td>-12.6</td>
        </tr>
        <tr>
          <td>官方指导价</td>
          <td>304346</td>
          <td>304346</td>
          <td>304346</td>
        </tr>
        <tr>
          <td>成交价</td>
          <td>275643</td>
          <td>275643</td>
          <td>275643</td>
        </tr>
        <tr>
          <td>竞争力-官方指导价</td>
          <td>296332</td>
          <td>296332</td>
          <td>296332</td>
        </tr>
        <tr>
          <td>竞争力-成交价</td>
          <td>263421</td>
          <td>263421</td>
          <td>263421</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "p-a-vanalyse"
    }
</script>

<style scoped lang='scss'>
.analyse{
  border: 1px solid #eee;
  border-top: 0;
  padding: 5px 10px;
  box-sizing: border-box;
  .title{
    display: inline-block;
    padding-top: 15px;
    width: 30px;
    height: 150px;
    border: 1px solid #eee;
    text-align: center;
    line-height: 30px;
  }
  .table-box{
    display: inline-block;
    border-collapse: collapse;
    border-color: #eee;
    vertical-align: -38px;
    tr{
      td{
        height: 25px;
      }
    }
  }
}
</style>
