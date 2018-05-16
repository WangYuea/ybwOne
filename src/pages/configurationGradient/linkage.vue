<template>
  <div class='linkage'>
    <div class='infos'>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <h3 class='title'>选择品牌</h3>
              <div class='brand-select'>
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  size='medium '>
                </el-input>
                <div class='select-texts'>
                  <div class=left>
                    <p>A</p><p>B</p><p>C</p><p>D</p><p>F</p><p>G</p><p>H</p><p>J</p><p>K</p><p>L</p><p>M</p><p>N</p><p>O</p><p>P</p><p>Q</p><p>R</p><p>S</p><p>T</p><p>W</p><p>X</p><p>Y</p><p>Z</p>
                  </div>
                  <div class='right'>
                    <ul>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                      <li>A奥迪</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span='1'  class='arrow'>
            <i class="el-icon-arrow-right"></i>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <h3 class='title'>选择车型</h3>
              <div class='brand-select'>
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  size='medium '>
                </el-input>
                <div class='select-texts w100'>
                  <div class='right'>
                    <ul>
                      <li><el-radio v-model="radio" label="1">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="2">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="3">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="4">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="5">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="6">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="7">A奥迪</el-radio></li>
                      <li><el-radio v-model="radio" label="8">A奥迪</el-radio></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span='1' class='arrow'>
            <i class="el-icon-arrow-right"></i>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <h3 class='title'>选择款型</h3>
              <div class='brand-select'>
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  size='medium '>
                </el-input>
                <div class='select-texts w100'>
                  <div class='right'>
                    <h3 class='title'>奥迪A4 allroad</h3>
                    <ul>
                      <li>
                        <h4>2017年款</h4>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 运动款</el-checkbox></div>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 豪华款</el-checkbox></div>
                      </li>
                      <li>
                        <h4>2016年款</h4>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 2016款</el-checkbox></div>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 舒适款</el-checkbox></div>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 2016A款</el-checkbox></div>
                        <div class='checked-option'><el-checkbox>奥迪A4 allroad 2016B款</el-checkbox></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class=all-select><el-checkbox>全选</el-checkbox></div>
            </div>
          </el-col>
        </el-row>
      </div>
<div class='selected-type'>
  <span>已选款型：</span>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    type='info'
    color="#ffffff" size='small'>
    {{tag.name}}
  </el-tag>
  <span class='clear'>清空已选项</span>
</div>
  </div>
</template>

<script>
  export default {
    name: "linkage",
    data () {
      return {
        radio: '1',
        tags: [
          {name: '车型限量款', type: ''}
        ],
      };
    }

  }
</script>
<style scoped lang='scss'>
  .el-radio{
    color:#101010;
  }
  .linkage{
    border-top: 1px solid #eee;
    padding-top: 25px;
    margin: 25px 14px 0;
  }
.grid-content{
  .title{
    text-align: center;
    font-size: 18px;
    padding-bottom: 22px;
  }
  .brand-select{
    border:1px solid #eee;
    border-top:0;
    border-radius: 5px;
    .select-texts{
      height: 520px;
      .left{
        float: left;
        vertical-align: top;
        padding-left: 10px;
        box-sizing: border-box;
        width: 15%;
        border-right: 1px solid #eee;
        line-height: 24px;
        p{
          cursor: pointer;
        }
      }
      .right{
        float: left;
        line-height: 30px;
        overflow-y: auto;
        width: 85%;
        height: 520px;
        ul{
          li{
            padding-left: 10px;
            &.active{
              background: #3B70F7;
            }
            &:hover{
              background: #3B70F7;
            }
          }
        }
      }
      &.w100{
       .right{
         padding-top: 10px;
         width: 100%;
         .title{
           font-size: 14px;
           text-align: left;
           padding: 8px 0 0 12px;
           font-weight: bold;
         }
         li{
           &.active{
             background: none;
           }
           &:hover{
             background: none;
           }
           .checked-option{
             padding-left: 25px;
           }
         }
       }
      }
    }

  }
.all-select{
  padding-left: 40px;
}
}
  .arrow{
    text-align: center;
    margin-top: 300px;
  }
  .selected-type{
    padding-top: 65px;
    padding-bottom: 40px;
    span{
      margin-right: 16px;
    }
    .clear{
      padding-right: 32px;
      float: right;
      color: #3B70F7;
    }
  }
</style>
