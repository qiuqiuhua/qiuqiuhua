<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  #app{
    width: 100%;
    height: 100%;
  }
</style>
