<template>
  <div>
    <project-list navType="memory"></project-list>
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
    }
  },
  created() {
    console.log('detail path:' + this.$route.path)
  },
  methods: {

  }
}
</script>
