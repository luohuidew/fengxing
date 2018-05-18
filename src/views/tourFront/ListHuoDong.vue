<template>
  <div>
    <project-list :navType="navType"></project-list>
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
      navType: ''
    }
  },
  created() {
    // console.log('detail path:' + this.$route.path)
    this.navType = this.$route.params.navType
  },
  methods: {

  }
}
</script>
