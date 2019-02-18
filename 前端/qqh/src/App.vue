<template>
  <div id="app">
    <router-view/>
    <Footer v-show="showFooter" id="footer"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from './components/Footer/Footer.vue'

export default {
  computed: {
    ...mapState(['showFooter'])
  },

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
