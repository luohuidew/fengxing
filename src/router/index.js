import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// import index from '@/views/tourFront/index'
// import main from '@/views/tourFront/main'
// import detail from '@/views/tourFront/detail'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: _import('tourFront/index')
  }, {
    path: '/main',
    name: 'main',
    component: _import('tourFront/main'),
    children: [
      {path: 'tuanJian', name: 'tuanJian', component: _import('tourFront/listTuanJian')},
      {path: 'lvYou', name: 'lvYou', component: _import('tourFront/ListLvYou')},
      {path: 'huoDong', name: 'huoDong', component: _import('tourFront/ListHuoDong')},
      {path: 'memory', name: 'memory', component: _import('tourFront/ListMemory')},
      {path: 'detail', name: 'detail', component: _import('tourFront/detail')}
    ]
  }
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
