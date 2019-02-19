<template>
  <div id="app">
    <router-view/>
    <Footer v-show="hidshow" id="footer"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from './components/Footer/Footer.vue'

export default {
  data () {
    return {
      docmHeight: '0', // 默认屏幕高度
      showHeight: '0', // 实时屏幕高度
      hidshow: true, // 显示或者隐藏footer,
      isResize: false // 默认屏幕高度是否已获取
    }
  },

  mounted () {
    // window.onresize监听页面高度的变化
    let _this = this
    window.onresize = () => {
      return (() => {
        if (!_this.isResize) {
          // 默认屏幕高度
          _this.docmHeight = document.documentElement.clientHeight
          _this.isResize = true
        }

        // 实时屏幕高度
        _this.showHeight = document.body.clientHeight
      })()
    }
  },

  computed: {
    ...mapState(['showFooter'])
  },

  watch: {
    showHeight: function () {
      if (this.docmHeight > this.showHeight) {
        this.hidshow = false
      } else {
        this.hidshow = true
      }
    }
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
