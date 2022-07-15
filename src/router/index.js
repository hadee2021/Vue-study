import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/ex01',
    name: 'Ex01',
    component: () => import(/* webpackChunkName: "ex01" */ '../views/Ex01.vue')
  },
  {
    path: '/ex02',
    name: 'Ex02',
    component: () => import(/* webpackChunkName: "ex02" */ '../views/Ex02.vue')
  },
  {
    path: '/ex03',
    name: 'Ex03',
    component: () => import(/* webpackChunkName: "ex03" */ '../views/Ex03.vue')
  },
  {
    path: '/ex04',
    name: 'Ex04',
    component: () => import(/* webpackChunkName: "ex04" */ '../views/Ex04.vue')
  },
  {
    path: '/ex05',
    name: 'Ex05',
    component: () => import(/* webpackChunkName: "ex05" */ '../views/Ex05.vue')
  },
  {
    path: '/ex06',
    name: 'Ex06',
    component: () => import(/* webpackChunkName: "ex06" */ '../views/Ex06.vue')
  },
  {
    path: '/ex07',
    name: 'Ex07',
    component: () => import(/* webpackChunkName: "ex07" */ '../views/Ex07.vue')
  },
  {
    path: '/ex08',
    name: 'Ex08',
    component: () => import(/* webpackChunkName: "ex08" */ '../views/Ex08.vue')
  },
  {
    path: '/ex09',
    name: 'Ex09',
    component: () => import(/* webpackChunkName: "ex09" */ '../views/Ex09.vue')
  },
  {
    path: '/ex10',
    name: 'Ex10',
    component: () => import(/* webpackChunkName: "ex10" */ '../views/Ex10.vue')
  },
  {
    path: '/ex11',
    name: 'Ex11',
    component: () => import(/* webpackChunkName: "ex11" */ '../views/Ex11.vue')
  },
  {
    path: '/ex12',
    name: 'Ex12',
    component: () => import(/* webpackChunkName: "ex12" */ '../views/Ex12Use.vue')
  },
  {
    path: '/ex13',
    name: 'Ex13',
    component: () => import(/* webpackChunkName: "ex13" */ '../views/Ex13.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "mixin" */ '../views/MixinTest.vue')
  },
  {
    path: '/ex14',
    name: 'Ex14',
    component: () => import(/* webpackChunkName: "ex14" */ '../views/Ex14.vue')
  },
  {
    path: '/ex142',
    name: 'Ex142',
    component: () => import(/* webpackChunkName: "ex142" */ '../views/Ex142.vue')
  },
  {
    path: '/ex143',
    name: 'Ex143',
    component: () => import(/* webpackChunkName: "ex143" */ '../views/Ex143.vue')
  },
  {
    path: '/ex144',
    name: 'Ex144',
    component: () => import(/* webpackChunkName: "ex144" */ '../views/Ex144.vue')
  },
  {
    path: '/ex15',
    name: 'Ex15',
    component: () => import(/* webpackChunkName: "ex15" */ '../views/Ex15.vue')
  },
  {
    path: '/ex16',
    name: 'Ex16',
    component: () => import(/* webpackChunkName: "ex16" */ '../views/Ex16.vue')
  },
  {
    path: '/ex17',
    name: 'Ex17',
    component: () => import(/* webpackChunkName: "ex17" */ '../views/Ex17.vue')
  },
  {
    path: '/ex18',
    name: 'Ex18',
    component: () => import(/* webpackChunkName: "ex18" */ '../views/Ex18.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
