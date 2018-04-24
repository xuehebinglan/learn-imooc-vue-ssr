[toc]
> 笔记第四章

## 4 router vuex
###  vue-router
#### 一、初始配置
`router.js`
```
import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes
  })
}
```

`index.js`

```
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

import createRouter from './config/router'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)

```
`route.js`
```
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/login',
    component: Login
    // component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    // component: Login
  }
]

```
在增加login.vue文件 引用进去就好啦

#### 二、router.js
- `mode: 'history'`可以将url默认不用加`/#/`
- 我发现用了上面的配置之后，只用先从localhost:18000进去之后再跳转
- 上一条解决办法 实在 webpack.config.client.js文件中增加配置
```
const devServer = {
  port: 18000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  historyApiFallback: {
    index: '/index.html'
  },
  hot: true
}
```
其中的
```
historyApiFallback: {
    index: '/index.html'
  },
```
这个配置的增加 就可以了


###  路由里面参数传递
> 文件 4-1 2 3  19:16
#### routes.js
- meta 是信息 路由守卫再讲

- transition
  - 27:42
- `this.$route`是当前路由里面的，放todo还会app都一样的

- 在`routes.js`加 `props:true`的话，会在对应组件（todo）的`props:['id']`里面获取到`console.log(this.id)`
```
 path: '/app/:id',
    component: Todo,
    name: 'app',
    props: (route) => ({id: route.query.b}),
    meta: {
      title: 'this is app',
      description: 'asdasd'
    }
```

#### 38：10 高级用法
- router-view可以命名


### 高级路由
> 文件4-4
#### 1 多种路由
```
    path: '/app',
    components: {
      default: Todo,
      a: Login
    },
```
- `<router-view name="a"/>`
#### 2 全局导航守卫
> 3:56
- `    beforeRouteUpdate (to, from, next) {`
当 `/app/123`变成`/app/456`会触发update

#### 3 异步加载组件
- 利用routes.js文件进行

```
    component: () => import('../views/todo/todo.vue'),

```
不在全局最上面写，而是在

### 4-5 Vuex
- store.js
- 需要变成export defalt一个function 这样每次都不同

### 4-6 vuex state action

- 在`app.vue`里面的`computed`里面增加`...mapState`和`...mapGetters`
- 先import mapState和 mapGetters
```
import {
    mapState,
    mapGetters
  } from 'vuex'
```
- 这都是默认的函数和用法

### 4-7 mutation 和 action

- mutation 只能接受2个参数，多个参数必须包装一下成 对象{}
- mutation专门修改state的

### 4-8 vuex模块
