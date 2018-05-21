<template>
<el-container style="height: 100%;" class="search_wap">
  <el-header class="head">
    <el-col :span="8">
      <img :src="logoPic" class="logo"/>
    </el-col>
    <el-col :span="8">
      <search></search>
    </el-col>
    <el-col :span="8">
      <div class="phone">
        <img :src="phonePic"/>
        <p>
          热线电话<br>
          010-12345678
        </p>
      </div>
    </el-col>
  </el-header>
  <el-main style="padding-top: 0px;">
    <el-row style="margin-bottom: 0px;">
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="20" style="background-color: #1993E8; opacity: 0.8; position:relative;">
        <el-carousel height="600px" :interval="5000" arrow="always" >
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
import search from './components/search'

export default {
  name: 'indexPage',
  components: {
    search
  },
  data() {
    return {
      logoPic: require('../../assets/img/logo.png'),
      phonePic: require('../../assets/img/phone.png'),
      shouYePics: [
        { id: 1, src: require('../../assets/img/shouye1.png') },
        { id: 2, src: require('../../assets/img/shouye2.png') },
        { id: 3, src: require('../../assets/img/shouye3.png') }
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
<style scoped>
  .head {
    height: 120px !important;
    width: 1100px;
    margin: 10px auto;
  }
  .logo {
    float: left;
    margin-top: 16px;
    width: 160px;
  }

  .phone {float: right;margin-top: 20px; color: #1993e8;
    display: flex;
    align-items: center;/*垂直轴居中*/
  }
  .phone img  {
    display: inline-block;
    height: 50px;;
  }
  .phone p {
    margin-left: 10px;
    font-weight:bold;
    text-align: left;
    display: inline-block;
    line-height: 20px;
  }
</style>
<style>
  body {margin: 0px;}
  .search_wap .el-input__suffix {
    right: -4px;
  }
  .search_wap .el-button {
    margin: -10px 0px;
  }
  .search_wap .el-select .el-input {
    width: 60px;
  }
  .search_wap .el-input__inner {
    padding: 0px 10px;
  }
  .search_wap  .el-input-group__append .el-select {
  margin: -10px 0;
}
  .search_wap  .el-input-group__append{
    padding: 0px;
  }
</style>
