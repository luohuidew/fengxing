<template>
  <div>
    <project-list navType="active"  :searchValue = searchValue></project-list>
  </div>
</template>

<script>
export default {
  name: 'listHuoDong',
  components: {
    'project-list': () => import('./components/list')
  },
  data() {
    return {
      searchValue: ''
    }
  },
  created() {
    // alert(this.$route.params.searchValue)
  },
  beforeRouteUpdate(to, from, next) {
    this.searchValue = to.query.searchValue
  },
  methods: {

  }
}
</script>
