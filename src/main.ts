import { createApp, defineComponent } from 'vue'
import {App} from './App'

import {createRouter, createWebHashHistory} from 'vue-router'
import { routes } from '@/config/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
}) 

const app = createApp(App)
app.use(router)
app.mount('#app')
