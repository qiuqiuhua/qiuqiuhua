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
                    <div class="info">名字：{{info.nick}}</div>
                    <div class="info" v-show="info.type === '动物'">性别：{{info.sex}}</div>
                    <div class="info">年龄：{{info.age}}</div>
                    <div class="info">地区：{{info.addr}}</div>
                    <div class="desc" style="-webkit-box-orient: vertical;">描述：{{info.desc}}</div>
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
import {reqNearInfo} from '../../api'

export default {
  data () {
    return {
      nearInfos: []
    }
  },

  mounted () {
    this.getNearInfo()
  },

  methods: {
    async getNearInfo () {
      const result = await reqNearInfo()
      this.nearInfos = result.data
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .card-content {
    .list_info();
  }
</style>
