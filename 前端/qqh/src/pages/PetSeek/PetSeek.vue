<template>
  <div id="petAdopt">
    <Header>
      <span class="title" slot="headerTitle">寻找宠物</span>
    </Header>
    <div class="content">
      <SearchWrap @searchText="getSearchText"  @provinceSelect="getProvinceSelect"/>
      <div class="pets">
        <div class="wrapper" ref="wrapper">
          <ul>
            <div class="top-tip">加载中...</div>
            <li v-for="(info, index) in infos" :key="index">
              <router-link :to="`/art_detail/${info.articleId}`">
                <div class="imgBox"><img :src="info.imgSrc"></div>
                <div class="info_wrap">
                  <div class="infos">
                    <div class="info">名字：{{info.nick}}</div>
                    <div class="info">性别：{{info.sex}}</div>
                    <div class="info">年龄：{{info.age}}</div>
                    <div class="info">丢失地址：{{info.addr}}</div>
                    <div class="desc" style="-webkit-box-orient: vertical;">描述：{{info.desc}}</div>
                  </div>
                </div>
                <div class="line"></div>
              </router-link>
            </li>
            <div class="underline">{{underText}}</div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import {reqPetSeekInfo} from '../../api'
import Header from '../../components/Header/Header.vue'
import SearchWrap from '../../components/SearchWrap/SearchWrap.vue'

export default {
  data () {
    return {
      searchText: '', // 搜索框输入文本
      pageNum: 1, // 当前第几页
      totalNum: 0, // 一共多少数据
      totalPage: 0, // 一共几页
      infos: [], // 宠物领养信息列表
      underText: '', // 底部文本
      provinceSelect: '' // 当前选中的省市
    }
  },

  mounted () {
    this.getInfos()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: {
          threshold: -40 // 当上拉距离超过30px时触发 pullingUp 事件
        },
        pullDownRefresh: {
          threshold: -10, // 下拉距离超过20px触发pullingDown事件
          stop: 40 // 回弹停留在距离顶部20px的位置
        }
      })

      this.scroll.on('pullingUp', () => {
        this.underText = '加载中...'
        this.getInfos()
      })

      this.scroll.on('pullingDown', () => {
        this.pageNum = 1
        this.underText = '加载中...'
        this.getInfos()
      })
    })
  },

  computed: {
    ...mapState(['province', 'pageSize', 'provinceArr'])
  },

  methods: {
    getSearchText (searchText) {
      this.searchText = searchText
      console.log('searchText=' + searchText)
    },

    getProvinceSelect (provinceSelect) {
      this.provinceSelect = provinceSelect
      console.log('provinceSelect=' + provinceSelect)
      this.pageNum = 1
      this.underText = '加载中...'
      this.getInfos()
    },

    async getInfos () {
      const {pageSize, pageNum, provinceSelect} = this
      if (this.pageNum === this.totalPage) {
        this.underText = '我是有底线的'
        return false
      }
      const result = await reqPetSeekInfo()
      if (this.pageNum === 1) {
        this.infos = []
      }
      this.totalNum = result.data.totalNum
      if (!this.totalNum) {
        this.underText = '暂无数据'
        return false
      }

      this.infos = this.infos.concat(result.data.list)
      this.totalPage = Math.ceil(this.totalNum / this.pageSize)
      this.scroll.finishPullUp()
      this.scroll.finishPullDown()

      if (this.pageNum === this.totalPage) {
        this.underText = '我是有底线的'
        return false
      }
      this.pageNum++
    }
  },

  watch: {
    infos () {
      setTimeout(() => {
        this.scroll.refresh()
      }, 50)
    }
  },

  components: {
    Header,
    SearchWrap
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  #petAdopt {
    width:100%;
    height:100%;
    background:#f0f0f0;
    .content {
      margin-top:44/@rem;
      .wrapper {
        position: absolute;
        left: 0;
        top: 95/@rem;
        bottom: 0;
        width: 100%;
        overflow:hidden;
        background:#f0f0f0;
        .list_info();
      }
    }
  }
</style>
