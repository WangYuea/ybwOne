<template>
  <div class='order-popup'>
    <div class='mask'></div>
    <div class='popup'>
      <div class='close'><i class="el-icon-error" @click='closePopup'></i></div>
      <div class='table'>
        <h3>调整对比顺序</h3>
        <el-table
          :data="tableData3"
          height="380"
          style="width: 100%">
          <el-table-column
            label="置顶"
            width="80">
            <template slot-scope="scope">
              <i class="el-icon-upload2"></i>
            </template>
          </el-table-column>
          <el-table-column
            label="上移"
            width="80">
            <template slot-scope="scope">
              <i class="el-icon-arrow-up"></i>
            </template>
          </el-table-column>
          <el-table-column
            label="下移" width="80">
            <template slot-scope="scope">
              <i class="el-icon-arrow-down"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="info"
            label="">
          </el-table-column>
          <el-table-column
            label="删除" width="80">
            <template slot-scope="scope">
              <i class="el-icon-close"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class='determine'> <el-button type="primary" size='small'>确定</el-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order-popup",
    data() {
      return {
        isShow:false,
        tableData3: [{
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }, {
          info: '奥迪 A6L 三厢轿车2012 2.0T 手动款'
        }]
      }
    },
    created(){
      // console.log(this.isPopup)
    },
    methods:{
      closePopup(){
        // this.isShow=false
        // console.log(this.isPopup)
        this.$emit('isClose',this.isShow)
      }
    }

  }
</script>

<style scoped lang='scss'>
.el-button{
  width: 300px;
}
  .order-popup {
    position: fixed;
    left: 0;
    top: 0;
    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
    }
    .popup {
      width: 870px;
      height: 600px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      .close {
        text-align: right;
        padding: 20px;
        i {
          cursor: pointer;
          font-size: 20px;
        }
      }
      .table {
        border: 1px solid #eee;
        margin: 0 20px;
        h3 {
          text-align: center;
          line-height: 50px;
          border-bottom: 1px solid #eee;
        }
      }
      .determine{
        margin-top: 30px;
        text-align: center;
      }
    }

  }
</style>
