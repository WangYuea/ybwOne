<template>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedOptions" @change="handleCheckedChange">
        <el-checkbox v-for="item in optionsAfter" :label="item" :key="item">{{item}}</el-checkbox>
      </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
      data() {
        return {
          checkAll: false,
          checkedOption: [],
          options: '',
          isIndeterminate: true,
          defaultOptions:[],
        };
      },
      props:['info','checkedNum'],//接受父组件传递过来的数据
      computed:{
        /*=============接收父组件传递过来的数据用于渲染=================*/
          optionsAfter(){
            return this.options=this.info
          },
        /*=============设置selectedOptions的值来判断哪些已经选择了=================*/
        checkedOptions:{
            get(){
              return this.checkedOption=this.defaultOptions
            },
          set(news){
            this.defaultOptions=news
          }
        }
      },
      created(){
        //接受父组件传递过来的数据复值给data上的变量
        this.defaultOptions=this.checkedNum
      },
      methods: {
        /*================全选==================*/
        handleCheckAllChange(val) {
          this.checkedOptions = val ? this.info : [];
          this.isIndeterminate = false;
        },
        /*================单独的选择==================*/
        handleCheckedChange(value) {
          // console.log(value)
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.optionsAfter.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.optionsAfter.length;
        }
      }
    }
</script>

<style lang='scss'>
</style>
