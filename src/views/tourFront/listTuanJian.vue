<template>
  <div>
    <project-list navType="group"></project-list>
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
    }
  },
  created() {
  //    console.log('detail path:' + this.$route.path)
  //    const paths = this.$route.path.split('/').pop()
  //    this.navType = this.$route.params.navType
  },
  methods: {

  }
}
</script>
