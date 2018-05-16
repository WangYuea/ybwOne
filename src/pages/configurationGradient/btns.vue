<template>
    <div class='btn-container'>
      <el-button type="primary">进行竞品组对比</el-button>
      <el-button type="primary">进行配置对比</el-button>
      <el-button type="primary">进行配置梯度对比</el-button>
    </div>
</template>

<script>
    export default {
        name: "btns"
    }
</script>

<style scoped>
.btn-container{
  margin-bottom: 60px;
  text-align: center;
}
.el-button{
  padding: 12px 35px;
  margin-right: 20px;
}
</style>
