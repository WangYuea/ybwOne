<template>
<div class=configuration-container>
  <cHeader></cHeader>
  <Linkage></Linkage>
  <Btn></Btn>
</div>
</template>

<script>
  import cHeader from './configurationInfoTop'
  import Linkage from './linkage'
  import Btn from './btns'
    export default {
        name: "configuration-gradient",
      data(){
          return{}
      },
      methods:{},
      components:{
          cHeader,
        Linkage,
        Btn
      }
    }
</script>

<style scoped>

</style>
