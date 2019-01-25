<template>
    <div id="home">
      <Header>
        <span class="title" slot="headerTitle">球球花宠物领养社区</span>
      </Header>
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img srcset="./images/banner1@2x.png 2x, ./images/banner1@3x.png 3x"></div>
            <div class="swiper-slide"><img srcset="./images/banner2@2x.png 2x, ./images/banner2@3x.png 3x"></div>
            <div class="swiper-slide"><img srcset="./images/banner3@2x.png 2x, ./images/banner3@3x.png 3x"></div>
            <div class="swiper-slide"><img srcset="./images/banner4@2x.png 2x, ./images/banner4@3x.png 3x"></div>
            <div class="swiper-slide"><img srcset="./images/banner5@2x.png 2x, ./images/banner5@3x.png 3x"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="tabs">
          <div class="tab-item">
            <img srcset="./images/tab1@2x.png 2x, ./images/tab1@3x.png 3x">
            <p>宠物领养</p>
          </div>
          <div class="tab-item">
            <img srcset="./images/tab2@2x.png 2x, ./images/tab2@3x.png 3x">
            <p>植物送养</p>
          </div>
          <div class="tab-item">
            <img srcset="./images/tab3@2x.png 2x, ./images/tab3@3x.png 3x">
            <p>寻找主人</p>
          </div>
          <div class="tab-item">
            <img srcset="./images/tab4@2x.png 2x, ./images/tab4@3x.png 3x">
            <p>文章推荐</p>
          </div>
        </div>
        <div class="card">
          <div class="card-tabs">
            <div class="card-tab active" @click="showNewContent">最新发布</div>
            <div class="card-tab split"></div>
            <div class="card-tab" @click="showNearContent">附近发布</div>
          </div>
          <div class="card-contents">
            <div class="card-content content-new">
              <ul>
                <li>
                  <div class="imgBox"><img src="./images/info1@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:萨萨</div>
                      <div class="info">性别:公</div>
                      <div class="info">年龄:1岁</div>
                      <div class="info">地区:上海</div>
                      <div class="desc">描述:因为本人怀孕家里不让养宠物，
                        希望找一个爱狗人士送养，萨萨很乖，很听话</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                <li>
                  <div class="imgBox"><img src="./images/info2@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:兜兜</div>
                      <div class="info">性别:公</div>
                      <div class="info">年龄:4个月</div>
                      <div class="info">地区:湖南</div>
                      <div class="desc">描述:在某小区一群狗结伴流浪，怕被
                        举报后一网打尽，朋友果断救下,望好心人收养。</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                <li>
                  <div class="imgBox"><img src="./images/info3@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:小柯</div>
                      <div class="info">性别:母</div>
                      <div class="info">年龄:6个月</div>
                      <div class="info">地区:上海</div>
                      <div class="desc">描述:因工作太忙，没有时间溜它，感
                        觉已经快憋出内伤了，希望爱狗人士收养。</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                <li>
                  <div class="imgBox"><img src="./images/info4@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:百合花</div>
                      <div class="info">年龄:8个月</div>
                      <div class="info">地区:辽宁</div>
                      <div class="desc">描述:因本人搬家不方便带走，希望会
                        养的花人士来好好照顾。</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                <li>
                  <div class="imgBox"><img src="./images/info5@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:发财树</div>
                      <div class="info">年龄:1年</div>
                      <div class="info">地区:甘肃</div>
                      <div class="desc">描述:因本人搬公司不方便带走，喜欢
                        发财树的联系我。</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                <li>
                  <div class="imgBox"><img src="./images/info6@3x.png"></div>
                  <div class="info_wrap">
                    <div class="infos">
                      <div class="info">名字:君子兰</div>
                      <div class="info">年龄:3个月</div>
                      <div class="info">地区:安徽</div>
                      <div class="desc">描述:因为本人家里花太多了，放不开
                        了，所以准备送人。</div>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
            <div class="card-content content-near"></div>
          </div>
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

  methods: {
    showNewContent () {

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
         width: auto;
         left:auto;
         right: 32/@rem;
         bottom: 10/@rem;
         .swiper-pagination-bullet {
           background:#F0F0F0;
           margin: 0 0 0 12/@rem;
           width:6/@rem;
           height:6/@rem;
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
       padding:12/@rem 20/@rem 9/@rem;
       display:flex;
       justify-content:space-between;
       .tab-item {
         text-align:center;
         font-size:@font-size;
         color:@font-color;
         width:61/@rem;
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
           width: 187/@rem;
           text-align:center;
           font-size:@font-size;
           color:@font-color;
           letter-spacing: @font-spacing;
           &.split {
             width: 1/@rem;
             background:#DFDFDF;
           }
           &.active {
             color: #FF9898;
           }
         }
       }
       .card-contents {
         .card-content {
           > ul {
             > li {
               position:relative;
               width: 100%;
               height: 118/@rem;
               padding: 11/@rem 22/@rem 11/@rem 16/@rem;
               box-sizing:border-box;
               .imgBox {
                 width: 90/@rem;
                 height: 90/@rem;
                 border-radius: 10/@rem;
                 display:inline-block;
                 vertical-align:middle;
                 img {
                   width: 100%;
                 }
               }
               .info_wrap {
                 display:inline-block;
                 vertical-align:middle;
                 padding-left: 16/@rem;
                 .infos {
                   line-height: 20/@rem;
                   font-size:@font-size1;
                   color:@font-color1;
                   letter-spacing: @font-spacing1;
                   width:222/@rem;
                   .info {
                     float: left;
                     width: 50%;
                     margin-bottom:8/@rem;
                   }
                   .desc {
                     width:100%;
                     .ellipsis2();
                   }
                 }
               }
               .line {
                 width: 269/@rem;
                 height: 1/@rem;
                 background:#f0f0f0;
                 position:absolute;
                 right:0;
                 bottom:0;
               }
               &:last-child{
                 .line {
                   display:none;
                 }
               }
             }
           }
         }
       }
     }
   }
 }

</style>
