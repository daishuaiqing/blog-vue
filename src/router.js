import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('./views/Index.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      children: [
        {
          path: '/admin/article',
          name: 'article',
          component: () => import('./views/Article.vue'),
        },
        {
          path: '/admin/article/add',
          name: 'articleAdd',
          component: () => import('./views/ArticleAdd.vue'),
        },
        {
          path: '/admin/type',
          name: 'articleType',
          component: () => import('./views/ArticleTypeManage.vue'),
        },
        {
          path: '/admin/viewAll',
          name: 'viewAll',
          component: () => import('./views/ViewAll.vue'),
        },
        {
          path: '/admin/setting',
          name: 'setting',
          component: () => import('./views/Setting.vue'),
        }
      ]
    }
  ]
})
