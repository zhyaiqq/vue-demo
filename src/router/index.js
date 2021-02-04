import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index'),
    },
    {
      path: '/move-top',
      name: 'MoveTop',
      component: () => import('@/components/move-top'),
      meta: {
        title: '无限滚动动画',
        keepAlive: true
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/components/tree'),
      meta: {
        title: '组件树',
        keepAlive: true
      }
    },
  ]
});
