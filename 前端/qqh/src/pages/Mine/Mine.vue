<template>
    <div>
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="content">
        我的
      </div>
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
export default {
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
