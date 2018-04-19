# About
这是慕课网上[Vue+Webpack打造todo应用](https://www.imooc.com/learn/935)课程的源码

# 使用方法
```
git clone https://github.com/Jokcy/vue-todo-tech.git
```
进入项目目录，运行
```
npm install
```
然后执行
```
npm run dev
```
开始开发项目


# 我的笔记
## 2.1 2.2 2.3
### 1 如果项目是目录结构，说明webpack配置里面的
```
 plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
```
这个没有写
而在`webpack.config.client.js`这文件里面是需要用concat链接起来的

### 2 之前一直报的错，（jsx不能变异）可能是因为.babelrc这个文件没放拷贝进来，因为是隐藏文件

### 3 vue-loader需要安装 `vue-style-loader`
- `style-loader`换成`vue-style-loader`就可以热加载css了
- 增加`vue-loader.config.js`配置
- `extractCSS`是单独打包出来css,将每个vue文件中的模块的css也一起提取出来，
- 还可以增加

### 4 cssModules可以改变css类名

## 2.4 eslint
### 1
`
npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
`

`  npm i eslint-plugin-html -D    `
`npm i eslint-loader balel-eslint -D`

- `npm run eslint-fix`之后会自动修复
- `npm run eslint`就不会报错了
- 安装了一大堆eslint相关的 少一个都不行
- 应该是`.eslintrc`文件之后默认会检测 否则不通过
- 上一句不对
```
{
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
```
用这个配置

## 3 vue
### 1 实例 instance
> 到 49：15结束

### 2
> 49:16开始

### 3 生命周期
- 服务端渲染只有beforecreated 和 created执行
- `beforemouted`是原始的div节点
- `mounted`的el才是渲染出来的
- 而且el有了之后，是相当于执行了render function的
- 而且执行实在mounted之前，因此就是用了render function才渲染出来页面的
-
> 1:08:00结束

### 4 computed watch
- computed在页面渲染的时候，不会执行，而methods里面会执行

- watch 一般来说 obj.a改变 不会触发watch的obj，如果增加deep：true就能改

- 不要在computed 和 watch不要改某个属性，否则会循环

### 5 vue原生指令
> 1:44:57

- v-for 中建议用item 作为key `:key='item'`
- v-model一般只用在 input上面
- 组件可以用某种方法 放上去

### 6 组件

#### 1 define.js
> 2:14:40
> 2:27:52结束

- props 在组件标签上面用  prop-one这种方式比较好
- 不可以修改props
#### 2 extend.js

#### 3 vue 组件 双向绑定
>开始   2：52：57
>结束   3:00:18

#### 4 高级属性
- slot

- provide inject 太高级了 学不进去了
- 跨级组件沟通

> 3:23:35结束

#### 5 render方法
- render方法是替换了 template
