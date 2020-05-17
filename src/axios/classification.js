import { request } from './request'

export function getClassificationData(type, page) {
  return request({
    url: 'classification/classificationData.php',
    params: {
      type, page
    }
  })
}