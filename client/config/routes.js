export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    props: true,
    // props: (route) => ({id: route.query.b}),
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    // component: Login
  },
  {
    path: '/login/exact',
    component: () => import('../views/login/login.vue')
  }
]
