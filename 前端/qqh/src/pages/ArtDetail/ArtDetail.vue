<template>
    <div>
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="content">
        文章详情{{articleId}}
      </div>
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
export default {
  data () {
    return {
      articleId: ''
    }
  },

  mounted () {
    this.articleId = this.$route.params.articleId
  },

  components: {
    Header
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .content {
    margin-top:44/@rem;
  }
</style>
