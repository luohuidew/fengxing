<template>
<el-container style="height: 100%;">
  <el-header height="130px">
    <el-col :span="8">
      <img :src="logoPic" style="width: 260px;height: 120px"/>
    </el-col>
    <el-col :span="8" style="padding-top: 40px">
      <el-input type="text" placeholder="搜索景点/目的/活动类型" v-model="searchKey" class="input-with-select">
        <el-select v-model="categoryId" slot="prepend">
          <el-option label="全部" value="-1"></el-option>
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.alias"
            :value="item.id">
          </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-col>
    <el-col :span="8">
      <el-row style="padding-top: 30px;">
        <el-col :span="10" align="right">
          <img :src="phonePic" style="width: 50px;height: 50px"/>
        </el-col>
        <el-col :span="8" align="center" style="padding-left: 5px; padding-top: 5px; color: #1993E8; font-weight: 900">
          热线电话<br/>
          010-12345678
        </el-col>
      </el-row>
    </el-col>
  </el-header>
  <el-main style="padding-top: 0px;">
    <el-row style="margin-bottom: 0px;">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="20" style="background-color: #1993E8; opacity: 0.8; position:relative;">
        <div class="si-jiao zuo-shang-div" @click="projectClick('tuanJian')">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="path1" d="M25,80 a1,1 0 0,1 90,-10" stroke="black" />
            </defs>
            <!-- <use xlink:href="#path1" fill="none" stroke="red" /> -->
            <text style="fill:black;" font-size="22">
              <textPath xlink:href="#path1">团建方案</textPath>
            </text>
          </svg>
        </div>
        <div class="si-jiao you-shang-div" @click="projectClick('lvYou')">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="path3" d="M7,30 a1,1 0 0,1 30,95" stroke="black" />
            </defs>
            <!-- <use xlink:href="#path3" fill="none" stroke="red" /> -->
            <text style="fill:black;" font-size="22">
              <textPath xlink:href="#path3">旅游方案</textPath>
            </text>
          </svg>
        </div>
        <div class="si-jiao zuo-xia-div" @click="projectClick('huoDong')">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="path2" d="M10,20 a1,1 0 0,0 100,30" stroke="black" />
            </defs>
            <!-- <use xlink:href="#path2" fill="none" stroke="red" /> -->
            <text style="fill:black;" font-size="22">
              <textPath xlink:href="#path2">活&nbsp;&nbsp;动&nbsp;&nbsp;方&nbsp;&nbsp;案</textPath>
            </text>
          </svg>
        </div>
        <div class="si-jiao you-xia-div" @click="projectClick('huiYi')">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="path4" d="M10,80 a1,1 0 0,0 60,-80" stroke="black" />
            </defs>
            <!-- <use xlink:href="#path4" fill="none" stroke="red" /> -->
            <text style="fill:black;" font-size="22">
              <textPath xlink:href="#path4">美&nbsp;&nbsp;好&nbsp;&nbsp;回&nbsp;&nbsp;忆</textPath>
            </text>
          </svg>
        </div>
        <el-carousel height="600px" :interval="5000" arrow="always"  style="border-radius: 25%;">
          <el-carousel-item v-for="item in shouYePics" :key="item.id">
          <img :src="item.src" style="width: 1400px;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="2">&nbsp;</el-col>
    </el-row>
  </el-main>
  <el-footer height="36px">
    &nbsp;
  </el-footer>
</el-container>
</template>
<script>
export default {
  name: 'indexPage',
  data() {
    return {
      logoPic: require('../../assets/img/logo.png'),
      phonePic: require('../../assets/img/phone.png'),
      shouYePics: [
        { id: 1, src: require('../../assets/img/shouye1.png') },
        { id: 2, src: require('../../assets/img/shouye2.png') },
        { id: 3, src: require('../../assets/img/shouye3.png') }
      ],
      categoryId: '-1',
      categoryList: [
        { id: '1', alias: '团建' },
        { id: '2', alias: '旅游' },
        { id: '3', alias: '活动' }
      ],
      searchKey: ''
    }
  },
  methods: {
    projectClick(navType) {
      console.log('index navType:' + navType)
      if (navType === 'tuanJian') {
        this.$router.push({name: 'tuanJian', params: {navType: 'tuanJian'}})
      }
      if (navType === 'lvYou') {
        this.$router.push({name: 'lvYou', params: {navType: 'lvYou'}})
      }
      if (navType === 'huoDong') {
        this.$router.push({name: 'huoDong', params: {navType: 'huoDong'}})
      }
    }
  }
}
</script>
<style>
  .el-header {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    padding-top: 5px;
  }
  .el-main {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    height: auto;
  }
  .el-footer {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
  }
 .el-select .el-input {
    width: 80px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .si-jiao {
    position:absolute;
    width:100px;
    height:100px;
    border:0px solid red;
    z-index:100;
    cursor:pointer;
  }
  .zuo-shang-div {
    left:0px;
    top:0px;
    border-radius:0 0 100% 0;
  }
  .zuo-xia-div {
    left:0px;
    bottom:0px;
    border-radius:0 100% 0 0;
  }
  .you-shang-div {
    right:0px;
    top:0px;
    border-radius:0 0 0 100%;
  }
  .you-xia-div {
    right:0px;
    bottom:0px;
    border-radius:100% 0 0 0;
  }
</style>
