import Mock from 'mockjs'

// 首页
// 轮播图模拟数据
let swiper = Mock.mock({
  'list|1-5': [{
    'articleId|1-1000': 1,
    'imgSrc': 'http://qiuqiuhua.com/upload/img/banner1@3x.png'
  }]
})

Mock.mock('/swiper', {data: swiper.list})

// 最新发布模拟数据
let sexArr = ['公', '母']
let ageArr = ['1岁', '4个月', '3岁', '1岁2个月', '8个月', '6个月']
let type = ['动物', '植物']
let imgArr = [
  'http://qiuqiuhua.com/upload/img/info1@3x.png',
  'http://qiuqiuhua.com/upload/img/info2@3x.png',
  'http://qiuqiuhua.com/upload/img/info3@3x.png',
  'http://qiuqiuhua.com/upload/img/info4@3x.png',
  'http://qiuqiuhua.com/upload/img/info5@3x.png',
  'http://qiuqiuhua.com/upload/img/info6@3x.png'
]

let newInfo = Mock.mock({
  'list|10': [{
    'articleId|1-1000': 1,
    'type|1': type,
    'nick': '@cword(2, 5)',
    'sex|1': sexArr,
    'age|1': ageArr,
    'addr': '@province()',
    'imgSrc|1': imgArr,
    'desc': '@cword(5,40)'
  }]
})

Mock.mock('/newInfo', {data: newInfo.list})

// 附近发布数据
let nearInfo = Mock.mock({
  'list|10': [{
    'articleId|1-1000': 1,
    'type|1': type,
    'nick': '@cword(2, 5)',
    'sex|1': sexArr,
    'age|1': ageArr,
    'addr': '上海',
    'imgSrc|1': imgArr,
    'desc': '@cword(5,40)'
  }]
})

Mock.mock('/nearInfo', {data: nearInfo.list})

// 宠物领养页面
let petImgArr = [
  'http://qiuqiuhua.com/upload/img/info1@3x.png',
  'http://qiuqiuhua.com/upload/img/info2@3x.png',
  'http://qiuqiuhua.com/upload/img/info3@3x.png',
  'http://qiuqiuhua.com/upload/img/info7@3x.png',
  'http://qiuqiuhua.com/upload/img/info8@3x.png',
  'http://qiuqiuhua.com/upload/img/info9@3x.png',
  'http://qiuqiuhua.com/upload/img/info10@3x.png',
  'http://qiuqiuhua.com/upload/img/info11@3x.png'
]

let petAdoptInfo = Mock.mock({
  'totalNum': 45,
  'list|10': [{
    'articleId|1-1000': 1,
    'nick': '@cword(2, 5)',
    'sex|1': sexArr,
    'age|1': ageArr,
    'addr': '上海',
    'imgSrc|1': petImgArr,
    'desc': '@cword(5,40)'
  }]
})

Mock.mock('/petAdoptInfo', {data: petAdoptInfo})
