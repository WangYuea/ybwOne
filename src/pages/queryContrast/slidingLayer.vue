<template>
    <div class='sliding'>
      <div class='times'>
        <h3>数据显示时间范围</h3>
        <el-radio-group v-model="radio2">
          <el-radio :label="12">近一年</el-radio>
          <el-radio :label="6">近半年</el-radio>
          <el-radio :label="3">近3个月</el-radio>
          <el-radio :label="0">自定义时间范围</el-radio>
        </el-radio-group>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="-"
          size='small'>
        </el-date-picker>
      </div>
      <div class='data-option'>
        <h3>数据显示项</h3>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="官方指导价（万元）"></el-checkbox>
          <el-checkbox label="成交价（万元）"></el-checkbox>
          <el-checkbox label="销量（万台）"></el-checkbox>
          <el-checkbox label="MIX值"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class='color-tag'>
        <h3>修改款型标签颜色</h3>
        <div class='color-selected'>
        <span class='colors'><b class='orange'></b></span>
        <span class='colors'><b class='light-green'></b></span>
        <span class='colors'><b class='green'></b></span>
        <span class='colors'><b class='deep-blue'></b></span>
        <span class='colors active'><b class='blue'><i>默认</i></b></span>
        </div>
      </div>
      <div class='update-btn'><el-button type="primary" size='small'>刷新数据</el-button></div>
      <div class='close' @click='closeSliding'><i class="el-icon-caret-right"></i></div>
    </div>
</template>

<script>
    export default {
        name: "sliding-layer",
      data () {
        return {
          radio2: 12,
          value6:'',
          checkList: ['MIX值','官方指导价（万元）'],
          radio3:14,
          notShow:null
        };
      },
      props:['isShow'],//接受父元素传递过来的数据
      created(){
        this.notShow=this.isShow//把父元素传递过来的数据复制给data的变量
        // console.log(this.notShow)
      },
      methods:{
          /*============隐藏层的点击事件，把数据传递给父元素============*/
        closeSliding(){
          this.notShow=false
          this.$emit('modifyShow',this.notShow)//触发父元素的事件
        }
      }
    }
</script>

<style scoped lang='scss'>
  .el-radio-group{
    margin-left: 28px;
  }
  .el-radio{
    display: block;
    margin-top: 18px;
  }
  .el-radio+.el-radio{
    margin-left: 0;
  }
  .el-date-editor .el-range-input{
    width: 60px;
  }
  .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
    width: 210px;
    margin-top: 20px;
  }
  .el-checkbox{
    margin-top: 18px;
    display: block;
  }
  .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
.sliding{
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 25px 6px 0;
  width: 210px;
  height: 100%;
  border-left: 1px solid #eee;
  background: #fff;
  h3{
    padding-left: 28px;
    font-size: 18px;
    font-weight: bold;
  }
  .data-option{
    padding-top: 28px;
  }
  .color-tag{
    padding-top: 28px;
    .color-selected{
      margin-top: 21px;
      margin-left: 20px;
      .colors{
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        border: 1px solid #FFF;
        margin-left: 5px;
        font-size: 0;
        cursor: pointer;
        b{
          width: 20px;
          height: 20px;
          display: inline-block;
          margin: 2px;
          border-radius: 100%;
          position: relative;
          i{
            position: absolute;
            left: -4px;
            bottom: -30px;
            font-style: normal;
            font-size: 14px;
            white-space: nowrap;
            font-weight: normal;
          }
          &.orange{
            background: #FF9800;
          }
          &.light-green{
            background: #8BC34A;
          }
          &.green{
            background: #259B24;
          }
          &.deep-blue{
            background: #001DB3 ;
          }
          &.blue{
            background: #3B70F7;
          }
        }
        &.active{
          border: 1px solid #101010;
        }
      }
    }

  }
  .update-btn{
    margin-top: 66px;
    text-align: center;
    .el-button{
      width: 200px;
    }
  }
  .close{
    position: absolute;
    top: 300px;
    left: -12px;
    font-size: 30px;
    color: #3B70F7;
    cursor: pointer;
  }
}
</style>
