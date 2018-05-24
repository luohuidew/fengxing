<template>
  <div>
    <project-list navType="lvyou" :searchValue = searchValue></project-list>
  </div>
</template>

<script>
export default {
  name: 'listLYou',
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
    // alert(this.$route.params.searchValue)
  },
  methods: {

  }
}
</script>
