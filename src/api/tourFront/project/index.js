import request from '@/utils/request'

export function page(query) {
  return request({
    url: '/api/tour/baseGoods/page',
    method: 'get',
    params: query
  })
}
export function allOnLine(query) {
  return request({
    url: '/api/tour/baseGoods/allOnLine',
    method: 'get',
    params: query
  })
}
export function getObj(id) {
  return request({
    url: '/api/tour/baseGoods/' + id,
    method: 'get'
  })
}
