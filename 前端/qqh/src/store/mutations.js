export default {
  // 首页
  // 轮播图
  setSwiper (state, {swipers}) {
    state.swipers = swipers
  },

  // 最新发布
  setNewInfo (state, {newInfos}) {
    state.newInfos = newInfos
  },

  // 附近发布
  setNearInfo (state, {nearInfos}) {
    state.nearInfos = nearInfos
  }
}
