<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        document.title = '死鬼，又去哪鬼混了！'
      }
      if (document.visibilityState === 'visible') {
        document.title = '亲，欢迎回家！'
        const timer = setTimeout(() => {
          document.title = 'vue-demo'
          clearTimeout(timer)
        }, 500)
      }
    })
  },
  beforeDestroy() {
    //document.removeEventListener('visibilitychange')
  }
}
</script>
<style scoped></style>
