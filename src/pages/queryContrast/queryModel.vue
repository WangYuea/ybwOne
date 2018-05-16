<template>
  <div class='model-container'>
    <div class='title'>
      <el-button type="primary" size='small'>重新选车</el-button>
      <el-button type="danger" size='small'>重置</el-button>
      <div class='export'>
        <span class='export-ecxel'><i class="el-icon-download"></i>导出Ecxel</span>
        <span class='export-ppt'><i class="el-icon-download"></i>导出PPT</span>
      </div>
    </div>
    <div class='carInfo'>
      <div class='items'>
        <div class='item' v-for='item in modelInfos'>
          <h3>自选组对比</h3>
          <CheckBox :infos='item.model' :selected='item.defaultSeleted'></CheckBox>
        </div>
      </div>
    </div>
    <div class='selected-group'>
      <span class='text'>已选对比组：</span>
      <div class='tags'>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          :type="tag.type"
          color='#ffffff'
          size="small"
        >
          {{tag.name}}
        </el-tag>
      </div>
      <div class='show-all'>
  展开全部<i class="el-icon-d-arrow-right"></i>
</div>
    </div>
    <div class='btns'>
      <el-button type="primary" size='small' class='next-btn'>下一步</el-button>
      <span>清空已选项</span>
    </div>
  </div>
</template>

<script>
  import CheckBox from './checkbox'
  export default {
    name: "query-model",
    data() {
      return {
        modelInfos:[
          {id:1,model:['2.0T  双离合  限量款：10.2/10', '1.5T  双离合  豪华款：8.9/10', '1.2T  手自一体  家庭款：7.2/10', '1.2T  手动  家庭款：6.2/10','123','2.01T  双离合  限量款：10.21/10', '1.51T  双离合  豪华款：8.9/10', '1.21T  手自一体  家庭款：7.2/10', '1.22T  手动  家庭款：6.2/10','1234'],defaultSeleted:['2.0T  双离合  限量款：10.2/10', '1.5T  双离合  豪华款：8.9/10']},
          {id:2,model:['2.0T  双离合  限量款：10.2/10', '1.5T  双离合  豪华款：8.9/10', '1.2T  手自一体  家庭款：7.2/10'],defaultSeleted:['1.2T  手自一体  家庭款：7.2/10']},
          {id:3,model:[ '1.51T  双离合  豪华款：8.9/10', '1.21T  手自一体  家庭款：7.2/10', '1.22T  手动  家庭款：6.2/10','1234'],defaultSeleted:['1.51T  双离合  豪华款：8.9/10','1234']},
          {id:4,model:['1.2T  手自一体  家庭款：7.2/10', '1.2T  手动  家庭款：6.2/10','123','2.01T  双离合  限量款：10.21/10', '1.51T  双离合  豪华款：8.9/10'],defaultSeleted:[ '1.51T  双离合  豪华款：8.9/10']}
        ],
        tags: [
          { name: '车型1 限量款', type: 'info' },
        ]
      };
    },
    components:{
      CheckBox
    }
  }
</script>

<style scoped lang='scss'>
.el-button{
  width: 157px;
  margin-right: 20px;
  font-size: 14px;
}
.el-tag{
  margin-left: 12px;
  margin-bottom: 10px;
}
  .model-container{
    padding: 22px 10px 0;
    .title{
      margin-bottom: 10px;
      .export{
        display: inline-block;
        float: right;
        padding-right: 175px;
        i{
          margin-right: 10px;
        }
        .export-ecxel{
          cursor: pointer;
          color: #83BD3A;
          margin-right: 15px;
        }
        .export-ppt{
          color: #F28C41;
          cursor: pointer;
        }
      }
    }
    .carInfo{
      height: 430px;
      border: 1px solid #eee;
      overflow: auto;
      .items{
        display: flex;
        /*width: 500%;*/
        .item{
          width: 330px;
          height: 100%;
          border-right: 1px solid #eee;
          padding: 10px 0 10px 10px;
          box-sizing: border-box;
          float: left;
          h3{
            height: 40px;
            font-size: 18px;
            font-weight: bold;
            line-height: 36px;
          }
        }
      }
    }
    .selected-group{
      padding: 18px 67px 0 18px;
      .text{
        font-size: 18px;
        font-weight: bold;
        vertical-align: top;
      }
      .tags{
        width: 80%;
        height: 30px;
        overflow: hidden;
        display: inline-block;
      }
      .show-all{
        display: inline-block;
        color: #3B70F7;
        vertical-align: top;
        cursor: pointer;
        float: right;
      }
    }
    .btns{
      text-align: center;
      .next-btn{
        width: 297px;
      }
      span{
        color: #3B70F7;
        cursor: pointer;
      }
    }

  }
</style>
