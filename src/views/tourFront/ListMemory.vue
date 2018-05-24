<template>
  <div>
    <project-list navType="memory" :searchValue = searchValue></project-list>
  </div>
</template>

<script>
export default {
  name: 'listMemory',
  components: {
    'project-list': () => import('./components/list')
  },
  data() {
    return {
      searchValue: ''
    }
  },
  created() {
    console.log('detail path:' + this.$route.path)
  },
  methods: {

  },
  beforeRouteUpdate(to, from, next) {
    this.searchValue = to.query.searchValue
  }
}
</script>
