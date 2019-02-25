<template>
    <div>
      <div class="search_wrap">
        <div class="selectBox">
          <select id="provinceSel" ref="provinceSel">
            <option value="">全部</option>
            <option v-for="(item, index) in provinceArr" :key="index" :value="item.provinceName">
              {{item.provinceName}}
            </option>
          </select>
          <label for="provinceSel">
            <i class="iconfont icon-iconarrowdown01"></i>
          </label>
        </div>
        <div class="inputBox">
          <div v-show="!showInput" @click="inputShow">
            <div>
              请输入搜索内容
            </div>
          </div>
          <input type="text" v-model="searchText" v-show="showInput" ref="searchInput">
        </div>
        <a href="javascript:;">搜索</a>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      searchText: '', // 搜索框输入文本
      provinceSelect: '', // 当前选中的省市
      showInput: false
    }
  },

  mounted () {
    this.provinceSelect = this.$refs.provinceSel.value = this.province
  },

  computed: {
    ...mapState(['province', 'provinceArr'])
  },

  methods: {
    inputShow () {
      this.showInput = true
    }
  },

  watch: {
    showInput () {
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },

    searchText (value) {

    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .search_wrap {
    width: 100%;
    height: 51/@rem;
    padding: 11/@rem 16/@rem 11/@rem;
    background:#fff;
    box-sizing:border-box;
    .selectBox {
      float:left;
      position:relative;
      background:#fff;
      width: 61/@rem;
      height: 29/@rem;
      select {
        color:#999;
        font-size:15/@rem;
        height: 29/@rem;
        line-height:29/@rem;
        background:#fff;
      }
      label {
        float:right;
        i {
          font-size:11.3/@rem;
          color:#999;
          line-height:29/@rem;
        }
      }
    }
    .inputBox {
      float:left;
      margin-left:17/@rem;
      width:219/@rem;
      height:29/@rem;
      border-radius:14.5/@rem;
      > div {
        width:100%;
        text-align:center;
        background:#f0f0f0;
        border-radius:14.5/@rem;
        > div {
          display:inline-block;
          color:#999;
          height:29/@rem;
          line-height:29/@rem;
          font-size:13/@rem;
          background-size:12/@rem 12/@rem;
          background-position: 0 8/@rem;
          background-repeat: no-repeat;
          padding-left: 15/@rem;
          .bg-image('./images/sousuo');
        }
      }
      input {
        display:block;
        width:100%;
        box-sizing:border-box;
        color:#333;
        font-size:13/@rem;
        height:29/@rem;
        line-height:29/@rem;
        background:#f0f0f0;
        padding:0 10/@rem;
        border-radius:14.5/@rem;
        &::-webkit-input-placeholder{
          color:#999;
        }
      }
    }
    > a {
      float:right;
      line-height:29/@rem;
      font-size:15/@rem;
      color:#999;
    }
  }

</style>
