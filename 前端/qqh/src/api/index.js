/*
包含n个接口请求函数的模块
*/
import ajax from './ajax'

export const SERVER_URL = `/MulinArticle/`

export const reqSwiper = () => ajax('/swiper')
