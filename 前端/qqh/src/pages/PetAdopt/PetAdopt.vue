<template>
    <div id="petAdopt">
      <Header>
        <span class="title" slot="headerTitle">宠物领养</span>
      </Header>
      <div class="content">
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
            <input type="text" v-model="searchText" v-show="showInput" >
          </div>
          <a href="javascript:;">搜索</a>
        </div>
        <div class="pets">
          <div class="wrapper" ref="wrapper">
            <ul>
              <div class="top-tip">加载中...</div>
              <li v-for="(info, index) in petAdoptInfos" :key="index">
                <router-link :to="`/art_detail/${info.articleId}`">
                  <div class="imgBox"><img :src="info.imgSrc"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字：{{info.nick}}</div>
                      <div class="info">性别：{{info.sex}}</div>
                      <div class="info">年龄：{{info.age}}</div>
                      <div class="info">地区：{{info.addr}}</div>
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
import {reqPetAdoptInfo} from '../../api'
import Header from '../../components/Header/Header.vue'
export default {
  data () {
    return {
      searchText: '', // 搜索框输入文本
      pageNum: 1, // 当前第几页
      totalNum: 0, // 一共多少数据
      totalPage: 0, // 一共几页
      petAdoptInfos: [], // 宠物领养信息列表
      underText: '', // 底部文本
      provinceSelect: '', // 当前选中的省市
      showInput: false
    }
  },

  mounted () {
    this.provinceSelect = this.$refs.provinceSel.value = this.province
    this.getPetAdoptInfos()
    let _this = this
    this.$nextTick(() => {
      _this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: {
          threshold: -10 // 当上拉距离超过30px时触发 pullingUp 事件
        },
        pullDownRefresh: {
          threshold: -10, // 下拉距离超过20px触发pullingDown事件
          stop: 40 // 回弹停留在距离顶部20px的位置
        }
      })

      _this.scroll.on('pullingUp', () => {
        _this.underText = '加载中...'
        _this.showUnderText = true
        _this.getPetAdoptInfos()
      })

      _this.scroll.on('pullingDown', () => {
        _this.showTopTip = true
        _this.pageNum = 1
        this.underText = '加载中...'
        _this.getPetAdoptInfos()
      })
    })
  },

  computed: {
    ...mapState(['province', 'pageSize', 'provinceArr'])
  },

  methods: {
    inputShow () {
      this.showInput = true
    },

    async getPetAdoptInfos () {
      const {pageSize, pageNum, provinceSelect} = this
      if (this.pageNum === this.totalPage) {
        this.underText = '我是有底线的'
        return false
      }
      const result = await reqPetAdoptInfo()
      if (this.pageNum === 1) {
        this.petAdoptInfos = []
      }
      this.totalNum = result.data.totalNum
      if (!this.totalNum) {
        this.underText = '暂无数据'
        return false
      }

      this.petAdoptInfos = this.petAdoptInfos.concat(result.data.list)
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
    showInput () {
      this.$nextTick(function () {
        this.$refs.searchInput.focus()
      })
    },

    petAdoptInfos () {
      let _this = this
      setTimeout(function () {
        _this.scroll.refresh()
      }, 50)
    }
  },

  components: {
    Header
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
