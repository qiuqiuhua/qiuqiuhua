import {
  reqSwiper,
  reqNewInfo,
  reqNearInfo
} from '../api'

export default {
  // 首页
  // 获取轮播图
  async getSwiper ({commit}) {
    const result = await reqSwiper()
    const swipers = result.data
    commit('setSwiper', {swipers})
  },

  // 获取最新发布
  async getNewInfo ({commit}) {
    const result = await reqNewInfo()
    const newInfos = result.data
    commit('setNewInfo', {newInfos})
  },

  // 获取最近发布
  async getNearInfo ({commit}) {
    const result = await reqNearInfo()
    const nearInfo = result.data
    commit('setNearInfo', {nearInfo})
  }
}
