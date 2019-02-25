<template>
    <div>
      {{text}}
    </div>
</template>

<script>
export default {
  props: {
    text: String
  },

  data () {
    return {
      text1: '子组件向父组件传递数据',
      text2: '子组件向父组件传递数据2'
    }
  },

  mounted () {
    this.test.$emit('text1', {text1: this.text1, text2: this.text2})
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
