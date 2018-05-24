<template>
<el-container style="height: 100%;">
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
  <el-main style="padding-top: 0px;" class="banner_wrap">
        <el-carousel class="banner_content" :interval="5000" arrow="always" >
          <el-carousel-item v-for="item in shouYePics" :key="item.id">
          <img :src="item.src" style="width: 1400px;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
    <div class="leftTop"><router-link to="/main/tuanJian"><img src="../../assets/img/group.png" alt=""></router-link></div>
    <div class="leftBottom"><router-link to="/main/huoDong"><img src="../../assets/img/active.png" alt=""></router-link></div>
    <div class="rightTop"><router-link to="/main/lvYou"><img src="../../assets/img/lvyou.png" alt=""></router-link></div>
    <div class="rightbottom"><router-link to="/main/memory"><img src="../../assets/img/memory.png" alt=""></router-link></div>
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
  }
}
</script>
<style scoped>
  .banner_content {
    height: 600px;
    width: 100%;
    overflow: hidden;
  }
  .banner_wrap{width: 1100px;margin: 0px auto;position: relative;
  padding: 0px;}
  .banner_wrap .leftTop{
    left: 0px;top:0px;position: absolute;z-index: 10;
  }
  .banner_wrap .leftBottom{z-index: 10;
    left: 0px;bottom:0px;position: absolute;
  }
  .banner_wrap .rightTop{z-index: 10;
    right: 0px;top:0px;position: absolute;
  }
  .banner_wrap .rightbottom{z-index: 10;
    right: 0px;bottom:0px;position: absolute;
  }
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

</style>
