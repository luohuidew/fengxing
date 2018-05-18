<template>
  <div>
    <el-row> <!-- 头部：开始 -->
      <el-col :span="12">
        <img src="" style="width: 270px;height: 120px"/>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12">{{project.name}}</el-col>
          <el-col :span="4">评分：</el-col>
          <el-col :span="8"><el-rate v-model="project.score" disabled></el-rate></el-col>
        </el-row>
        <el-row><el-col :span="24">{{project.summary}}</el-col></el-row>
        <el-row><el-col :span="24">出&nbsp;发&nbsp;地：{{project.placeFromLabel}}</el-col></el-row>
        <el-row><el-col :span="24">目&nbsp;的&nbsp;地：{{project.placeFromLabel}}</el-col></el-row>
        <el-row><el-col :span="24">活动时间：{{project.timeInterval}}{{project.unitLabel}}</el-col></el-row>
        <el-row><el-col :span="24">适合人数：{{project.peopleMinNum}}至{{project.peopleMaxNum}}人</el-col></el-row>
        <el-row><el-col :span="24">领队电话：{{project.leaderPhone}}</el-col></el-row>
      </el-col>
    </el-row> <!-- 头部：结束 -->
    <el-row id="searchBar" :class="searchBarFixed == true ? 'isFixed' :''">
    <!-- <el-row id="searchBar"> -->
      <el-col :span="4">特色活动</el-col>
      <el-col :span="4">行程介绍</el-col>
      <el-col :span="4">费用说明</el-col>
      <el-col :span="4">特别提醒</el-col>
      <el-col :span="4">联系方式</el-col>
    </el-row>
    <el-row v-for="(item, index) in 50" :key="item"> <!-- 内容：开始 -->
      <el-col :span="24">{{item}}aaaaaaaaaaa{{index}}</el-col>
    </el-row> <!-- 内容：结束 -->
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      searchBarFixed: false,
      project: {
        id: '6',
        name: '不到长城非好汉',
        coverImgUrl: '',
        score: 5,
        placeFromLabel: '北京',
        placeToLabel: '北京',
        timeInterval: 5,
        unitLabel: '天',
        peopleMinNum: 1,
        peopleMaxNum: 10,
        leaderPhone: '13800138000',
        summary: '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
      }
    }
  },
  created() {
    // this.project.id = window.opener.document.getElementById('selectProjectId').innerHTML
    this.project.id = this.$route.params.id
    console.log('aa' + this.project.id)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
.isFixed{
  width: 100%;
  z-index:999;
  top:5px;
  position:fixed;
  /* background-color:#00FF00; */
}
</style>
