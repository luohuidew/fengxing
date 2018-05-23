<template>
<div>
  <header>
    <el-row class="head_wap">
      <el-col :span="4">
        <router-link to="/"><img :src="logoPic" width="154" class="logo"/></router-link>
      </el-col>
      <el-col :span="12">
        <!--<el-menu :default-active="navType" :router="true" mode="horizontal" @select="handleSelect">-->
          <!--<el-menu-item index="0" :route="{path: '/'}">首页</el-menu-item>-->
          <!--<el-menu-item index="tuanJian" :route="{name: 'tuanJian'}">团建方案</el-menu-item>-->
          <!--<el-menu-item index="lvYou" :route="{name: 'lvYou'}">旅游方案</el-menu-item>-->
          <!--<el-menu-item index="huoDong" :route="{name: 'huoDong'}">活动方案</el-menu-item>-->
        <!--</el-menu>-->
        <ul>
          <li><router-link to="/main/tuanJian">团建方案</router-link></li>
          <li><router-link to="/main/lvYou">旅游方案</router-link></li>
          <li><router-link to="/main/huoDong">活动方案</router-link></li>
          <li><router-link to="/main/memory">美好回忆</router-link></li>
        </ul>
      </el-col>
      <el-col :span="8" >
        <search></search>
      </el-col>
    </el-row>
  </header>
</div>
</template>

<script>
import search from './search'
export default {
  name: 'mainPage',
  data() {
    return {
      navType: 'tuanJian',
      logoPic: require('../../../assets/img/logo.png'),
      categoryId: '-1',
      categoryList: [
        { id: '1', alias: '团建' },
        { id: '2', alias: '旅游' },
        { id: '3', alias: '活动' }
      ],
      searchKey: ''
    }
  },
  components: {
    search
  },
  created() {
    this.navType = this.$route.params.navType
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log('click menu:' + key, keyPath)
    }
  }
}
</script>
<style scoped>
  header {
    height: 100px;
    border-bottom: 1px solid #eeeff2;
    box-shadow: 0px 1px 2px  #eeeff2;
  }
  .head_wap {
    height: 100px;
    width: 1100px;
    margin: 0px auto;
    display: flex;
    align-items: center;
  }
  .head_wap .logo {
    line-height: 100px;
  }
  .head_wap ul {
    padding: 0px 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .head_wap ul li {
    list-style: none;
    flex: 1;
  }
  .head_wap ul li a{display: block;
  height: 100px;
  line-height: 100px;text-align:center;text-decoration: none;
  }
  .head_wap ul li a.router-link-active {
    background-color: #1993e8;
    color: #fff;
  }
  .head_wap ul li a:active{color: #000}

</style>

<style>
  /*.el-header {*/
    /*background-color: #FFFFFF;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*padding-top: 5px;*/
  /*}*/
  /*.el-main {*/
    /*background-color: #FFFFFF;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*height: auto;*/
  /*}*/
  /*.el-footer {*/
    /*background-color: #FFFFFF;*/
    /*color: #333;*/
    /*text-align: center;*/
  /*}*/
   /*.el-select .el-input {*/
    /*width: 80px;*/
  /*}*/
  /*.input-with-select .el-input-group__prepend {*/
    /*background-color: #fff;*/
  /*}*/
  /*.el-menu--horizontal {*/
    /*border-bottom: solid 0px #e6e6e6;*/
  /*}*/
  /*.el-menu-item {*/
    /*font-size: 30px;*/
  /*}*/
</style>
