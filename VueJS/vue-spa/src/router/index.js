import Vue from 'vue'
import VueRouter from 'vue-router'
import List from "../views/List";
import Task from "../views/Task";
import Create from "../views/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/task/:id',
    name: 'task',
    component: Task
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
