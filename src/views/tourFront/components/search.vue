<template>
    <div class = 'search search_wap'>
      <el-input type="text" placeholder="搜索景点/目的/活动类型" v-model="searchValue" class="input-with-select">
        <template slot="append" >
          <el-select v-model="categoryId"  class="search_select">
            <el-option
              v-for="item in categoryList"
              :key="item.id"
              :label="item.alias"
              :value="item.id">
            </el-option>
          </el-select>
          <el-button  icon="el-icon-search" class="search_bt"  @click = "searchMeth"></el-button>
        </template>
      </el-input>

    </div>
</template>

<script>
export default {
  name: 'search',
  props: [],
  data() {
    return {
      searchValue: null,
      categoryId: '1',
      categoryList: [
        { id: '1', alias: '团建' },
        { id: '2', alias: '旅游' },
        { id: '3', alias: '活动' },
        { id: '4', alias: '回忆' }
      ]
    }
  },
  computed: {
  },
  methods: {
    searchMeth() {
      const id = this.categoryId
      if (id === '1') {
        this.$router.push({name: 'tuanJian', query: {searchValue: this.searchValue}})
      } else if (id === '2') {
        this.$router.push({name: 'lvYou', query: {searchValue: this.searchValue}})
      } else if (id === '3') {
        this.$router.push({name: 'huoDong', query: {searchValue: this.searchValue}})
      } else if (id === '4') {
        this.$router.push({name: 'memory', query: {searchValue: this.searchValue}})
      }
    }
  }
}
</script>

<style scoped>
  .search {
    width: 100%;
    margin: 35px auto;
    overflow: hidden;
  }
  .search  .search_bt {
    color: #fff !important;
    border-radius: 0px;
    background-color: #409eff !important;
    border: 1px solid #409eff !important;
  }

</style>
