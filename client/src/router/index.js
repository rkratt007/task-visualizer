import Vue from 'vue'
import Router from 'vue-router'
import DisplayTasks from '@/components/DisplayTasks'
import TaskChart from '@/components/TaskChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tasks-overview',
      component: TaskChart
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: DisplayTasks
    },
    {
      path: '/tasks/view/:user',
      name: 'tasks-edit',
      component: DisplayTasks
    },
    {
      path: '/tasks/edit/:id',
      name: 'tasks-edit',
      component: DisplayTasks
    },
    {
      path: '/tasks/add',
      name: 'tasks-add',
      component: DisplayTasks
    }
  ]
})
