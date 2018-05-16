<template>
    <div class='model-item'>
      <h4 class='title'>基础类型</h4>
      <el-select v-model="value8" filterable placeholder="请选择" size='small'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value8" filterable placeholder="请选择" size='small'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value8" filterable placeholder="请选择" size='small'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class='btns'>
        <span><i class='el-icon-caret-left'></i>左移</span>
        <span><i class='el-icon-delete'></i>删除</span>
        <span>右移<i class='el-icon-caret-right'></i></span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "model-item",
      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value8: ''
        }
      }
    }
</script>

<style scoped lang='scss'>
  .el-select{
    margin-top: 10px;
  }
  .model-item{
    font-size: 14px;
    padding-top: 7px;
    text-align: center;
    .title{
      padding-bottom: 10px;
    }
    .btns{
      padding: 12px 0 30px;
      span{
        padding: 0 10px;
        color:#3B70F7;
        &:nth-child(2){
          color:#E51C23;
        }
        i{
          margin: 0 2px;
        }
      }
    }
  }
</style>
