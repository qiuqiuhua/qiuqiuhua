<template>
    <div id="home">
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(swiper, index) in swipers" :key="index">
              <router-link :to="`/art_detail/${swiper.articleId}`">
                <img :src="swiper.imgSrc">
              </router-link>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="tabs">
          <div class="tab-items">
            <div class="tab-item">
              <router-link to="/pet_adopt">
                <img srcset="./images/tab1@2x.png 2x, ./images/tab1@3x.png 3x">
                <p>宠物领养</p>
              </router-link>
            </div>
            <div class="tab-item">
              <router-link to="/plant_adopt">
                <img srcset="./images/tab2@2x.png 2x, ./images/tab2@3x.png 3x">
                <p>植物送养</p>
              </router-link>
            </div>
            <div class="tab-item">
              <router-link to="/pet_seek">
                <img srcset="./images/tab3@2x.png 2x, ./images/tab3@3x.png 3x">
                <p>寻找主人</p>
              </router-link>
            </div>
            <div class="tab-item">
              <router-link to="/article_recommendation">
                <img srcset="./images/tab4@2x.png 2x, ./images/tab4@3x.png 3x">
                <p>文章推荐</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-tabs">
            <div class="card-tab left">
              <router-link to="/home/new_info" replace>最新发布</router-link>
            </div>
            <div class="card-tab">
              <router-link to="/home/near_info" replace>附近发布</router-link>
            </div>
          </div>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
        <p class="underline">我是有底线的</p>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from '../../components/Header/Header.vue'

export default {
  data () {
    return {
      msg: ''
    }
  },

  mounted () {
    this.$store.dispatch('getSwiper')
  },

  computed: {
    ...mapState(['swipers'])
  },

  watch: {
    swipers (value) {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          loop: true, //  可以循环轮播
          pagination: { //  分页器
            el: '.swiper-pagination'
          },
          autoplay: true
        })
      })
    }
  },

  components: {
    Header
  }
}
</script>

<style lang="less" rel="stylesheet/less">
 @import '../../common/less/mixins';

 #home {
   width:100%;
   height:100%;
   background:@bg-color1;
   .content {
     background: @bg-color1;
     margin-top:44/@rem;
     .swiper-container {
       width: 100%;
       height: 160/@rem;
       background:#fff;
       .swiper-wrapper {
         width: 100%;
         height: 100%;
         .swiper-slide {
           width: 100%;
           height: 100%;
           img {
             width: 100%;
           }
         }
       }
       .swiper-pagination {
         text-align:right;
         right:32/@rem;
         left:auto;
         .swiper-pagination-bullet {
           background:#F0F0F0;
           margin: 0 0 0 12/@rem;
           opacity:1;
         }
         .swiper-pagination-bullet-active {
           background:#9E9E9E;
         }
       }
     }
     .tabs {
       width:100%;
       box-sizing:border-box;
       height:100/@rem;
       background:#fff;
       padding:12/@rem 15/@rem 9/@rem;
       .tab-items {
         width:345/@rem;
         display:flex;
         justify-content:space-between;
         .tab-item {
           a {
             display:block;
             text-align:center;
             font-size:@font-size;
             color:@font-color;
             letter-spacing: @font-spacing;
             img {
               width:50/@rem;
               height:50/@rem;
             }
             p {
               height:21/@rem;
               line-height:21/@rem;
               margin-top:8/@rem;
             }
           }
         }
       }

     }
     .card {
       width: 100%;
       box-sizing:border-box;
       margin-top:10/@rem;
       background:#fff;
       padding: 14/@rem 0;
       border-bottom: 1px solid #f0f0f0;
       .card-tabs {
         .clearfix();
         .card-tab {
           float:left;
           height: 21/@rem;
           line-height: 21/@rem;
           width: 50%;
           box-sizing:border-box;
           text-align:center;
           font-size:@font-size;
           letter-spacing: @font-spacing;
           &.left {
             border-right:1px solid #DFDFDF;
           }
           a {
             color:@font-color;
           }
           .router-link-active {
             color: @font-color2;
           }
         }
       }
     }
     .underline {
       font-size:12/@rem;
       line-height:17/@rem;
       letter-spacing: @font-spacing1;
       color: #B9B9B9;
       width:100%;
       padding-top:8/@rem;
       padding-bottom:30/@rem;
       text-align:center;
       margin-bottom:50/@rem;
     }
   }
 }

</style>
