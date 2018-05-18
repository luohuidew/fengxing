<template>
 <el-container style="height: 100%;">
   <el-header height="130px">
    <el-col :span="8">
      <img :src="logoPic" style="width: 260px;height: 120px"/>
    </el-col>
    <el-col :span="10" style="padding-top: 50px">
      <el-menu :default-active="navType" :router="true" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0" :route="{path: '/'}">首页</el-menu-item>
        <el-menu-item index="tuanJian" :route="{name: 'tuanJian', params: {navType: 'tuanJian'}}">团建方案</el-menu-item>
        <el-menu-item index="lvYou" :route="{name: 'lvYou', params: {navType: 'lvYou'}}">旅游方案</el-menu-item>
        <el-menu-item index="huoDong" :route="{name: 'huoDong', params: {navType: 'huoDong'}}">活动方案</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4" style="padding-top: 60px">
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
  </el-header>
  <el-main style="padding-top: 0px;">
    <div style="background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);height:2px;"></div>
    <router-view/>
  </el-main>
  <el-footer height="36px">
    &nbsp;
  </el-footer>
</el-container>
</template>

<script>
export default {
  name: 'mainPage',
  data() {
    return {
      navType: 'tuanJian',
      logoPic: require('../../assets/img/logo.png'),
      categoryId: '-1',
      categoryList: [
        { id: '1', alias: '团建' },
        { id: '2', alias: '旅游' },
        { id: '3', alias: '活动' }
      ],
      searchKey: ''
    }
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
  .el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
  }
  .el-menu-item {
    font-size: 30px;
  }
</style>
