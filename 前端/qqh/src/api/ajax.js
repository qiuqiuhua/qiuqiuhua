import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true
Vue.prototype.$qs = qs

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      let postData = new Vue().$qs.stringify(data)
      promise = axios.post(url, postData, {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'Accept': 'text/plain'}})
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
