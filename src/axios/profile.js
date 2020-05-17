import { request } from './request'
import qs from 'qs'
export function login(username, password, cookie = null) {
  return request({
    method: 'post',
    url: '/profile/login.php',
    data: qs.stringify({
      username, password, cookie
    })
  })
}
export function register(username, password, register = 0) {
  return request({
    method: 'post',
    url: '/profile/register.php',
    data: qs.stringify({
      username, password, register
    })
  })
}
export function getUserInfo(cookie) {
  return request({
    method: 'post',
    url: '/profile/userInfo.php',
    data: qs.stringify({
      cookie
    })
  })
}