import { createRouter, createWebHashHistory } from 'vue-router'
import ConsoleToolPage from '@/feature/console-tool/pages/index/index.vue'
import HelloWorldVue from '../../feature/console-tool/pages/hello-world/index.vue'

const routes = [
  { path: '/', component: ConsoleToolPage },
  { path: '/newtab', component: HelloWorldVue },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})