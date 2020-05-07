import { request } from 'Axios/request'


export function getHomeMutidata() {
  return request({
    url: '/home/mutidata.php'
  }
  )
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/goodsdata.php',
    params: {
      type,
      page
    }
  })
}
export function getDetailGoods(type, page) {
  return request({
    url: '/home/goodsdata.php',
    params: {
      type,
      page
    }
  })
}

