# todo-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

https://www.youtube.com/watch?v=C-n0ZWSTsUc&list=PLO5e_-yXpYLD87yPeyNUOJK02GhOFHVNd&index=2#t=18.274116

## Webpack 是什么？

Webpack 是一个模块打包工具。在开发中，它把一堆文件中每个都作为一个模块处理，找出它们间的依赖关系，并打包成待发布的静态资源。

列举一个基本例子，设想我们有一堆的 CommonJS 的引用。它们是不能在浏览器直接运行，所以需要把它们 捆绑 成 <script> 标记内的单一文件。Webpack 就能按照 require() 调用的依赖关系为我们做到这点。

实际上，Webpack 能做的更多，通过 "loaders" 我们能让 Webpack 按照我们想要的任何方式打包输出。例如：

编译 ES2015、CoffeeScript 或 TypeScript 模块成 ES5 CommonJS 的模块；

编译之前，可以通过 linter 校验源代码。

编译 Jade 模板成 HTML 并内联 JavaScript 字符串。

编译 SASS 文件成 CSS，然后把生成的CSS插入到 <style> 标签内，然后再转译成 JavaScript 代码段。

处理在 HTML 或 CSS 文件中引用的图片文件，根据配置路径把它们移动到任意位置，根据 MD5 hash 命名。

如果你学会了Webpack，就会知道它有多么强大，它非常显著地改善你前端开发的效率。它主要的缺点是配置方式有点麻烦，但是有了我这份使用指南，那使用 Webpack + Vue + vue-loader 的时候，基本上就扫清了大多数障碍了。

## Vue-loader 是什么？

vue-loader 是一个加载器，把Vue组件转化成JavaScript模块。


## vue-router 是什么？

vue-router 是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并**将路径和组件映射起来**。传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。
   

