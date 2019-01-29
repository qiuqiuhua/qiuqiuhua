<template>
    <div>
      <div class="card-contents" id="near_info">
        <div class="card-content">
          <ul>
            <li v-for="(info, index) in nearInfos" :key="index">
              <router-link :to="`/art_detail/${info.articleId}`">
                <div class="imgBox"><img :src="info.imgSrc"></div>
                <div class="info_wrap">
                  <div class="infos">
                    <div class="info">名字:{{info.nick}}</div>
                    <div class="info" v-show="info.type === '动物'">性别:{{info.sex}}</div>
                    <div class="info">年龄:{{info.age}}</div>
                    <div class="info">地区:{{info.addr}}</div>
                    <div class="desc" style="-webkit-box-orient: vertical;">描述:{{info.desc}}</div>
                  </div>
                </div>
                <div class="line"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('getNearInfo')
  },

  computed: {
    ...mapState(['nearInfos'])
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

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
              text-align:justify;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
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
</style>
