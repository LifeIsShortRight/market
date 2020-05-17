import axios from "axios"

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.1.101',
    timeout: 30000,
  })
  //拦截并处理请求
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log(err)
  })
  //拦截并处理返回
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}