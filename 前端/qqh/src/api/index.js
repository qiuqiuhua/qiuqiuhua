/*
包含n个接口请求函数的模块
*/
import ajax from './ajax'

export const SERVER_URL = `/MulinArticle/`

// 首页
// 首页轮播图
export const reqSwiper = () => ajax('/swiper')

// 首页最新发布
export const reqNewInfo = () => ajax('/newInfo')

// 首页附近发布
export const reqNearInfo = () => ajax('/nearInfo')

// 宠物领养页面
// 宠物领养信息
export const reqPetAdoptInfo = () => ajax('/petAdoptInfo')
