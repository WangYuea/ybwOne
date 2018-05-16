<template>
    <div class='main'>
      <div class='welcome' v-if='$route.name=="home"'>
        欢迎
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped lang='scss'>
.main{
  width: 100%;
  padding-left: 270px;
  box-sizing: border-box;
  /*overflow: hidden;*/
  .welcome{
    font-size:30px;
    text-align: center;
    padding-top: 50px;
  }
}
</style>
