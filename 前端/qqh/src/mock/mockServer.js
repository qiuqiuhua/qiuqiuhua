import Mock from 'mockjs'

let swiper = Mock.mock({
  'list|1-5': [{
    'id|+1': 1,
    'imgSrc': 'http://qiuqiuhua.com/upload/img/banner1@3x.png'
  }]
})

console.log(JSON.stringify(swiper))

// 轮播图获取
Mock.mock('/swiper', {data: swiper.list})
