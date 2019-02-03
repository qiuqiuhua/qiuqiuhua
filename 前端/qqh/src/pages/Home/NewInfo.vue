<template>
    <div>
        <div class="card-content" id="new_info">
          <ul>
            <li v-for="(info, index) in newInfos" :key="index">
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
</template>

<script>
import {reqNewInfo} from '../../api'

export default {
  data () {
    return {
      newInfos: []
    }
  },

  mounted () {
    this.getNewInfo()
  },

  methods: {
    async getNewInfo () {
      const result = await reqNewInfo()
      this.newInfos = result.data
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
