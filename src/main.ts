import { createApp, defineComponent } from 'vue'
import {App} from './App'

const Home = defineComponent({
  setup: (props, context) => {
    return () => (
      123
    )
  }
})
// const About = { template: '<div>About</div>' }

import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
