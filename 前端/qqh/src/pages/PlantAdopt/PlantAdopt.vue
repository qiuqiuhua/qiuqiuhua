<template>
    <div>
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="content">
        植物领养
        {{text1.text1}}
        {{text1.text2}}
      </div>
      <Test :text="text" @text1="getText1"></Test>
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Test from '../../components/Test/Test.vue'

export default {
  data () {
    return {
      text: '父组件向子组件传递数据',
      text1: {}
    }
  },

  methods: {
    getText1 (text1) {
      this.text1 = text1
    }
  },

  components: {
    Header,
    Test
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .content {
    margin-top:44/@rem;
  }
</style>
