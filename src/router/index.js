import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
    hidden: true
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: 'welcome',
    hidden: true,
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: Index,
    meta: {title: '用户管理', icon: 'el-icon-s-custom'},
    children: [
      {
        path: '/addUser',
        name: 'AddUser',
        component: () => import('../views/user/add/Index.vue'),
        meta: {title: '添加用户', icon: 'el-icon-plus'}
      },
      {
        path: '/editUser',
        name: 'EditUser',
        component: () => import('../views/user/edit/Index.vue'),
        meta: {title: '编辑用户', icon: 'el-icon-edit'}
      }
    ]
  },
  {
    path: '/role',
    name: 'role',
    component: Index,
    meta: {title: '角色管理', icon: 'el-icon-menu'},
    children: [
      {
        path: '/addRole',
        name: 'AddRole',
        component: () => import('../views/role/add/Index.vue'),
        meta: {title: '添加角色', icon: 'el-icon-plus'}
      },
      {
        path: '/editRole',
        name: 'EditRole',
        component: () => import('../views/role/edit/Index.vue'),
        meta: {title: '编辑角色', icon: 'el-icon-edit'}
      }
    ]
  }
];

// 解决重复点击报错 element-ui.common.js?b705:3354 Error: Avoided redundant navigation to current location
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
