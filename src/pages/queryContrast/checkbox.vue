<template>
    <div class='checkbox-container'>
      <div class='item-info'>
        <h4>车型1</h4>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class='checked-all'>全选</el-checkbox>
        <div class='checked-items'>
          <div class='num'>
            <span v-for='(item,index) in this.infos'><b>{{10-index}}</b>  <i class="el-icon-caret-right icons"></i></span>
            <!--<span><b>9</b>  <i class="el-icon-caret-right icons"></i></span>-->
            <!--<span><b>8</b>  <i class="el-icon-caret-right icons"></i></span>-->
            <!--<span><b>7</b>  <i class="el-icon-caret-right icons"></i></span>-->
            <!--<span><b>6</b>  <i class="el-icon-caret-right icons"></i></span>-->
          </div>
        <div class='select'>
        <el-checkbox-group v-model="selectedOptions" @change="handleCheckedChange">
          <el-checkbox v-for="item in models" :label="item" :key="item" >{{item}}</el-checkbox>
        </el-checkbox-group>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
      data() {
        return {
          checkAll: false,
          checkedOption: [],
          cities: '',
          isIndeterminate: true,
          defaults:[],
          num:10
        };
      },
      props:['infos','selected'],//接受父组件传递过来的数据
      computed:{
        /*=============接收父组件传递过来的数据用于渲染=================*/
        models(){
          return this.cities=this.infos
        },
        /*=============设置selectedOptions的值来判断哪些已经选择了=================*/
        selectedOptions:{
          get(){
            return this.checkedOption=this.defaults
          },
          set(newValue){
            this.defaults=newValue
          }
        }
      },
      created(){
        this.defaults=this.selected//接受父组件传递过来的数据复值给data上的变量
        // console.log(this.selected)
      },
      methods: {
          /*================全选==================*/
        handleCheckAllChange(val) {
          this.selectedOptions = val ? this.infos : [];
          this.isIndeterminate = false;
        },
        /*================单独的选择==================*/
        handleCheckedChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.models.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.models.length;
        }
      }
    }
</script>

<style scoped lang='scss'>
  .el-checkbox{
    display: block;
    padding: 15px 0;
  }
  .el-checkbox-group,.el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .checked-all{
    padding-left: 53px;
  }
  .checkbox-container{
    .item-info{
      h4{
        text-align: center;
        line-height: 30px;
      }
    }
    .checked-items{
      height: 301px;
      overflow: auto;
      display: flex;
      justify-content: space-between;
      .num{
        display: inline-block;
        vertical-align: top;
        padding-top: 15px;
        width: 50px;
        span{
          display: block;
          font-size: 16px;
          position: relative;
          width: 30px;
          text-align: right;
          padding-bottom: 30px;
          border-right: 1px solid #eee;
          b{
            font-weight: normal;
            padding-right: 10px;
          }
          i{
            position: absolute;
            right: -12px;
            top: 0;
            font-size: 20px;
            color: #3B70F7;
          }
        }
      }
      .select{
        padding-right: 10px;
        display: inline-block;
      }
    }

  }

</style>
