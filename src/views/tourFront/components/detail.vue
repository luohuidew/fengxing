<template>
  <div>
    <div class="banner" :style="{ backgroundImage: backgroundImg }" >
      <div>
        <div class="content">
          <div class="photos">
            <p><img src="../../../assets/img/shouye2.png" alt=""></p>
            <p><img src="../../../assets/img/shouye1.png" alt=""></p>
            <p><img src="../../../assets/img/shouye2.png" alt=""></p>
          </div>
          <div class="descript">
            <div class="title">
              <span class="text">不到长城非好汉</span>
              <span class="ping"><span>评价:</span>
                            <el-rate class="start"
                                     v-model="score"
                                     disabled
                                     :colors="['#ff002a', '#ff002a', '#ff002a']"
                            ></el-rate>
              </span>
            </div>
            <div class="des">万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、万里长城，是中国古代的军事防御工程，是一道高大、</div>
            <p>
              <span>出发地：</span> 北京<br>
              <span>目的地：</span>北京<br>
              <span>活动天数：</span>1天<br>
              <span>交通工具：</span>大巴<br>
              <span>适合人数：</span>10人到30人<br>
              <span>领队电话：</span>18933330000<br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'detail',
  data() {
    return {
      score: 5,
      backgroundImg: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527085235826&di=f4b060310b1d3c787d0f43da1c3efcec&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D176e4adf49a98226accc2364e2ebd374%2Fcefc1e178a82b901b63a0b99798da9773812ef82.jpg)',
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
  components: {
  },
  created() {
    const url = this.$route.params.url
    bus.$emit('NAGATION', url)
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
<style scoped>
  .isFixed{
    width: 100%;
    z-index:999;
    top:5px;
    position:fixed;
    /* background-color:#00FF00; */
  }
  .banner{
    height: 647px;
    width: 100%;
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
  }
  .banner:after{
    z-index:1;
    top: 0px;bottom: 0px;left:0px;right:0px;
    background: rgba(255,255,255, 0.7);
    position: absolute;
    content: '';
  }
  .banner > div{
    z-index: 2;
    position: absolute;
    top: 0px;bottom: 0px;left:0px;right:0px;
  }
  .banner .content {
    width: 1080px;
    margin:70px auto ;
  }
  .banner .photos {
    float: left;
    width: 750px;
    height: 500px;
    position: relative;
  }
  .banner .photos p {
    position: absolute;
    padding: 10px;
    box-sizing:border-box;
    box-shadow: 0px 2px 2px #666;
  }
  .banner .photos p:nth-child(1){
    width:350px ;
    height: 235px;
    transform: rotate(-20deg);
    background-color: #fff;
    top:110px
  }

  .banner .photos p:nth-child(2){
    width:350px ;
    height: 235px;
    transform: rotate(8deg);
    background-color: #fff;
    top:80px;
    left: 328px;
  }
  .banner .photos p:nth-child(3){
    width:450px ;
    height: 300px;
    transform: rotate(-5deg);
    background-color: #fff;
    top:169px;
    left: 120px;
  }
  .banner .photos p img{
    width: 100%;
    height: 100%;
  }
  .banner .descript {
    float: right;
    margin-top: 88px;
    width: 325px;
  }
  .banner .descript .title{
  }
  .banner .descript .title .text{
    font-size: 20px;
    display: block;
    font-weight: bold;
  }
  .banner .descript .title .ping {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .banner .descript .title .ping>span{
    margin-right: 12px;
    color: #727272;
    font-size: 12px;
  }
  .banner .descript .des{
    font-size: 12px;
    color: #727272;
    line-height: 20px;
    margin: 10px 0px;
  }
  .banner .descript p{
    line-height: 30px;
    color: #727272;
  }
  .banner .descript p span {
    color: #959595}
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
