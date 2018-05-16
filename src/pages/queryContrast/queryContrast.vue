<template>
    <div class='query-contrast'>
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
      <QueryModel></QueryModel>
      <OfficialRecommendation :officialInfo='officialInfo'></OfficialRecommendation>
      <transition name="slide-fade">
        <SlidingLayer v-if='show' :isShow='show' @modifyShow='modifyShhow'></SlidingLayer>
      </transition>
       <!--这个按钮是用来显示右边的移动层的，之后把方法加到需要的元素上面，删除即可-->
      <input type='button' value='show' @click="show=true"/>
    </div>
</template>

<script>
  import QueryModel from './queryModel'
  import OfficialRecommendation from './officialRecommendation'
  import SlidingLayer from './slidingLayer'
    export default {
        name: "query-contrast",
      data(){
          return{
            tags: [
              {name: '配置查询与对比', type: ''}
            ],
            officialInfo:[
              {id:1,infos:[
                  {model:'车型1',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型2',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型3',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型1',style:'豪华款',price:'10万/9.2万/10万台'},
                  {model:'车型2',style:'豪华款',price:'10万/9.2万/10万台'}
                ]},
              {id:2,infos:[
                  {model:'车型4',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型5',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型6',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型7',style:'豪华款',price:'10万/9.2万/10万台'},
                  {model:'车型8',style:'豪华款',price:'10万/9.2万/10万台'}
                ]},
              {id:3,infos:[
                  {model:'车型12',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型22',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型32',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型12',style:'豪华款',price:'10万/9.2万/10万台'},
                  {model:'车型22',style:'豪华款',price:'10万/9.2万/10万台'}
                ]},
              {id:4,infos:[
                  {model:'车型14',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型24',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型34',style:'限量款',price:'10万/9.2万/10万台'},
                  {model:'车型14',style:'豪华款',price:'10万/9.2万/10万台'},
                  {model:'车型24',style:'豪华款',price:'10万/9.2万/10万台'}
                ]}
            ],
            show: false
          }
      },
      components:{
          QueryModel,
        OfficialRecommendation,
        SlidingLayer
      },
      methods:{
          /*==========定义的方法用来接受子元素传递过来的数据============*/
        modifyShhow(value){
          this.show=value
        }
      }
    }
</script>

<style scoped lang='scss'>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 1;
  }
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
  .query-contrast{
    position: relative;
    padding-top: 9px;
    .title {
      padding-bottom: 9px;
      border-bottom: 1px solid #eee;
    }
  }

</style>
