import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import DisplayTasks from '../components/DisplayTasks'
import TaskChart from '../components/TaskChart'
import EditTasks from '../components/EditTasks'
Vue.use(VueRouter);

const routes = [
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
    path: '/tasks/edit/:user/:id',
    name: 'tasks-edit',
    component: EditTasks
  },
  {
    path: '/tasks/add',
    name: 'tasks-add',
    component: DisplayTasks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
