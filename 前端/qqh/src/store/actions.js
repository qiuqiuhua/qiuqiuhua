import {
  reqSwiper
} from '../api'

export default {
  // 获取轮播图
  async getSwiper ({commit}) {
    const result = await reqSwiper()
    const swipers = result.data
    commit('setSwiper', {swipers})
  }
}
