<template>
    <div id="home">
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/banner.png"></div>
          <div class="swiper-slide"><img src="./images/banner1.png"></div>
          <div class="swiper-slide"><img src="./images/banner2.png"></div>
          <div class="swiper-slide"><img src="./images/banner3.png"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="tabs">
        <div class="tab-item">
          <img src="./images/tab1@3x.png"  srcset="./images/tab1@2x.png 2x, ./images/tab1@3x.png 3x">
          <p>宠物领养</p>
        </div>
        <div class="tab-item">
          <img src="./images/tab2@3x.png"  srcset="./images/tab2@2x.png 2x, ./images/tab2@3x.png 3x">
          <p>植物送养</p>
        </div>
        <div class="tab-item">
          <img src="./images/tab3@3x.png"  srcset="./images/tab3@2x.png 2x, ./images/tab3@3x.png 3x">
          <p>寻找主人</p>
        </div>
        <div class="tab-item">
          <img src="./images/tab4@3x.png"  srcset="./images/tab4@2x.png 2x, ./images/tab4@3x.png 3x">
          <p>文章推荐</p>
        </div>
      </div>
    </div>
</template>

<script>
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
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true, //  可以循环轮播
      pagination: { //  分页器
        el: '.swiper-pagination'
      },
      autoplay: true
    })
  },

  components: {
    Header
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
 @import '../../common/less/mixins';

 #home {
   background:@bg-color1;
   .swiper-container {
     width: 100%;
     height: 160/@rem;
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
       .swiper-pagination-bullet-active {
         background:#02a774;
       }
     }
   }
   .tabs {
     width:100%;
     box-sizing:border-box;
     height:100/@rem;
     background:#fff;
     padding:12/@rem 20/@rem 9/@rem;
     display:flex;
     justify-content:space-between;
     .tab-item {
       text-align:center;
       font-size:@font-size;
       color:@font-color;
       width:61/@rem;
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

</style>
