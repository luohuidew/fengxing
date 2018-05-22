<template>
  <div>
    <project-list navType="active"></project-list>
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
    }
  },
  created() {
    // console.log('detail path:' + this.$route.path)
  },
  methods: {

  }
}
</script>
