<template>
  <div>
    <!-- {{navType}} -->
    <h3 id="selectProjectId" style="display: none"></h3>
    <el-row :gutter="40" v-for="item in list" :key="item.rowId" style="margin-bottom: 30px; margin-top: 10px">
      <el-col :push="4" :span="5" v-for="sub in item.colList" :key="sub.id" @click.native="projectClick(sub.id)">
        <el-card>
          <img :src="sub.coverImgUrl" style="width: 270px;height: 120px"/>
          <div style="font-weight:900;font-size: 18px;">{{sub.name}}</div>
          <!-- <div>
            <div style="display:inline; font-weight:900;font-size: 18px;">{{sub.name}}</div>
            <div style="display:inline;font-size: 14px;">&nbsp;&nbsp;评分：</div>
            <el-rate v-model="sub.score" disabled style="display:inline"></el-rate>
          </div> -->
          <div>
            {{sub.summary}}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['navType'],
  data() {
    return {
      selectProjectId: '',
      list: [
        {
          rowId: '1',
          colList: [
            {
              id: '1',
              name: '不到长城非好汉',
              coverImgUrl: '',
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
  methods: {
    projectClick(id) {
      this.$router.push({name: 'detail', params: {id: id}})
      // this.selectProjectId = id
      // let routeData = this.$router.resolve({
      //   name: 'detail'
      // })
      // window.open(routeData.href, '_blank')
    }
  }
}
</script>
