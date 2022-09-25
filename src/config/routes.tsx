import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  // { path: '/', component: Foo},
  // { path: '/about', component: Bar }
  { path: '/welcome', 
    component: () => import('@/views/Welcome'),
    children: [
      // {
        // path: '/first', component: 
      // }
    ] 
  }
]
