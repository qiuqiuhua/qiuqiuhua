import Mock from 'mockjs'

// 轮播图模拟数据
let swiper = Mock.mock({
  'list|1-5': [{
    'id|+1': 1,
    'articleId|1-1000': 1,
    'imgSrc': 'http://qiuqiuhua.com/upload/img/banner1@3x.png'
  }]
})

console.log(JSON.stringify(swiper))

Mock.mock('/swiper', {data: swiper.list})
