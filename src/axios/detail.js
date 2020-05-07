import { request } from "Axios/request"

export function getDetail(id) {
  return request({
    url: '/detail/detail.php',
    params: {
      id
    }
  })
}