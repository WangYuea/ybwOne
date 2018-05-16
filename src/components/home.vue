<template>
  <div class='home-container clearfix'>
    <vHeader></vHeader>
    <vNav></vNav>
    <vMain></vMain>
  </div>
</template>

<script>
  import vHeader from './header'
  import vNav from './aside'
  import vMain from './main'

  export default {
    name: "home",
    components: {
      vHeader,
      vNav,
      vMain
    }
  }
</script>

<style scoped>

</style>
