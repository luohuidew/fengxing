<template>
  <div class="list">
    <ul>
      <li  v-for="(item, index) in listDate" :key="index" @click="itemClick(item.id)">
        <img :src="item.coverImgUrl" alt="">
        <dl>
          <dt>
            <span class="title" >{{item.name}}</span>
            <span class="ping"><span>评价:  </span>
              <el-rate class="start"
              v-model="item.score"
              disabled
              :colors="['#ff002a', '#ff002a', '#ff002a']"
              >
            </el-rate>
            </span>
          </dt>
          <dd>
            {{item.summary}}
          </dd>
        </dl>
      </li>
    </ul>
    <!--<{}el-row :gutter="40" v-for="item in list" :key="item.rowId" style="margin-bottom: 30px; margin-top: 10px">-->
      <!--<el-col :push="4" :span="5" v-for="sub in item.colList" :key="sub.id" @click.native="projectClick(sub.id)">-->
        <!--<el-card>-->
          <!--<img :src="sub.coverImgUrl" style="width: 270px;height: 180px"/>-->
          <!--<div style="font-weight:900;font-size: 18px;">{{sub.name}}</div>-->
          <!--&lt;!&ndash; <div>-->
            <!--<div style="display:inline; font-weight:900;font-size: 18px;">{{sub.name}}</div>-->
            <!--<div style="display:inline;font-size: 14px;">&nbsp;&nbsp;评分：</div>-->
            <!--<el-rate v-model="sub.score" disabled style="display:inline"></el-rate>-->
          <!--</div> &ndash;&gt;-->
          <!--<div>-->
            <!--{{sub.summary}}-->
          <!--</div>-->
        <!--</el-card>-->
      <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['navType', 'searchValue'],
  data() {
    return {
      value1: 4.7,
      listDate: [
        {
          id: '1',
          name: '不到长城非好汉',
          coverImgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527075151&di=f9f0bfdeb1a845389049d04e5d3c551c&src=http://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/c7/tupuna-safari.jpg',
          score: 4,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        },
        {
          id: '2',
          name: '不到长城非好汉',
          coverImgUrl: '../../../assets/img/shouye2.png',
          score: 5,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        },
        {
          id: '3',
          name: '不到长城非好汉',
          coverImgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527075151&di=f9f0bfdeb1a845389049d04e5d3c551c&src=http://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/c7/tupuna-safari.jpg',
          score: 5,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        },
        {
          id: '1',
          name: '不到长城非好汉',
          coverImgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527075151&di=f9f0bfdeb1a845389049d04e5d3c551c&src=http://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/c7/tupuna-safari.jpg',
          score: 4,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        },
        {
          id: '2',
          name: '不到长城非好汉',
          coverImgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527075151&di=f9f0bfdeb1a845389049d04e5d3c551c&src=http://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/c7/tupuna-safari.jpg',
          score: 5,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        },
        {
          id: '3',
          name: '不到长城非好汉',
          coverImgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1527075151&di=f9f0bfdeb1a845389049d04e5d3c551c&src=http://media-cdn.tripadvisor.com/media/photo-s/03/2b/29/c7/tupuna-safari.jpg',
          score: 5,
          summary:
            '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
        }
      ],
      list: [
        {
          rowId: '1',
          colList: [
            {
              id: '1',
              name: '不到长城非好汉',
              coverImgUrl: '../../../assets/img/shouye2.png',
              score: 4,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            },
            {
              id: '2',
              name: '不到长城非好汉',
              coverImgUrl: '',
              score: 5,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            },
            {
              id: '3',
              name: '不到长城非好汉',
              coverImgUrl: '',
              score: 5,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            }
          ]
        },
        {
          rowId: '2',
          colList: [
            {
              id: '4',
              name: '不到长城非好汉',
              coverImgUrl: '',
              score: 4,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            },
            {
              id: '5',
              name: '不到长城非好汉',
              coverImgUrl: '',
              score: 5,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            },
            {
              id: '6',
              name: '不到长城非好汉',
              coverImgUrl: '',
              score: 5,
              summary:
                '长城（Greate Wall），万里长城，是中国古代的军事防御工程，是一道高大、坚固'
            }
          ]
        }
      ]
    }
  },
  computed: {
  },
  created() {
    alert('初始化list' + this.navType + this.$route.query.searchValue)
  },
  watch: {
    searchValue(val) {
      alert(val)
    }
  },
  methods: {
    itemClick(id) {
    //      this.$router.push({name: 'detail', params: {id: id}})
      // this.selectProjectId = id
      // let routeData = this.$router.resolve({
      //   name: 'detail'
      // })
      const url = this.$route.path.split('/').pop()
      this.$router.push({name: 'detail', params: { id, url }})
      // window.location.href = `http://${window.location.host}/detail.html#id=${id}`
      // window.open(`http://${window.location.host}/#/main/detail`, '_blank')
    }
  },
  destroyed() {
  }
}
</script>
<style scoped>
  .list {width: 860px;margin: 0px auto;}
  .list{font-size: 0px;padding-bottom: 30px;overflow: hidden;}
  .list li dl{font-size: 14px;}
  .list li .title {
    display: inline-block;
    width: 120px;
    font-size: 14px;
    font-weight: bold;
    color: #424242;
  }
  .list li .ping {
    font-size: 12px;
    display: inline-block;
    display: flex;
    align-items: center;
    color:#727272;
  }
  .start {margin-top: 2px;}

  .list li dl {
    padding: 5px;
  }
  .list li dt {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  .list li dd {
   height: 40px;
    line-height: 20px;
    font-size: 12px;
    margin-top:-5px;
    color:#727272;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .list ul {padding: 0px}
  .list ul li{
    margin-top: 30px;
    list-style: none;
    width: 270px;
    height: 254px;
    box-shadow: 0px 1px 5px #666;
    float: left;
    margin-left: 24px;
  }
  .list ul li img{width: 270px;height: 180px;display: inline-block;}
  .list ul li:nth-child(3n+1){
    margin-left: 0px;
  }
</style>
