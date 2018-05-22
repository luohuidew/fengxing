<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
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
  ul li {
    list-style: none;
    margin: 0px;
  }
  ul ,li ,dl,dt,dd,h1,h2,h3,h4,h5{
    margin: 0px;
  }
  .list .el-rate__icon {font-size: 16px;    margin-right: 1px;
    color: red;padding-top: 0px;}
</style>
