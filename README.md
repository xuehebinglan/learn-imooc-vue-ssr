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
## 1 如果项目是目录结构，说明webpack配置里面的
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

## 2 之前一直报的错，（jsx不能变异）可能是因为.babelrc这个文件没放拷贝进来，因为是隐藏文件
