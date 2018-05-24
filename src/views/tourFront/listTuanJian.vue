<template>
  <div>
    <project-list navType="group" :searchValue = searchValue></project-list>
  </div>
</template>

<script>
export default {
  name: 'listTuanjian',
  components: {
    'project-list': () => import('./components/list')
  },
  data() {
    return {
      searchValue: ''
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.searchValue = to.query.searchValue
  },
  created() {
  //    console.log('detail path:' + this.$route.path)
  //    const paths = this.$route.path.split('/').pop()
  },
  methods: {

  }
}
</script>
