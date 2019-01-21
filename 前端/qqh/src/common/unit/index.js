export const saveCache = (_this) => {
  // 在页面加载时读取sessionStorage里的状态信息
  if (sessionStorage.getItem('store')) {
    _this.$store.replaceState(JSON.parse(sessionStorage.getItem('store')))
  }

  // 在页面刷新时将vuex里的信息保存到sessionStorage里
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(_this.$store.state))
  })
}
