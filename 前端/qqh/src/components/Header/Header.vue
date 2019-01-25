<template>
    <div id="head">
      <slot name="headerTitle"></slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  #head {
    position:fixed;
    z-index:100;
    left:0;
    top:0;
    width:100%;
    height:44/@rem;
    line-height:44/@rem;
    background:@bg-color;
    .title {
      font-size:18/@rem;
      color:#fff;
      padding-left:16/@rem;
    }
  }
</style>
