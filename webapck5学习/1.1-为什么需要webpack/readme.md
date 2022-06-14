我们的业务代码需要依赖库代码，需要第三方库加载完之后，才能加载业务代码

- 作用域问题
  window 作用域，变量绑定到 window 上面，会污染 window 环境
- 文件太大
  11 个文件分散加载，页面的内容会随着文件的加载而显示内容，如果我们将这 11 个文件合并成一个 js 文件，那么这个 js 脚本会带来网络瓶颈。用户需要等待一段时间之后才能看到页面内容，会有短暂白屏，用户体验感非常差。
- 如果我们把所有代码都合并到同一个文件夹里面，那么他的可读性以及可维护性将会带来灾难。
  如何解决这些问题？

## 作用域问题

grunt、gulp

把所有的项目文件拼接在一起，利用了`js的立即执行调用函数表达式` IIFE

当 js 脚本封装到 IIFE 函数中，我们可以安全的拼接或者组合，而不用担心作用域问题。

```js
(function () {
  var name = 'jing';
})();

console.log(name);
// name is not undefined
```

如果想要暴露一些值：

```js
var res = (function () {
  var myname = 'wangzhihao';
  return myname;
})();

console.log(res); // 'wangzhihao'
```

## 代码的拆分

node.js

node.js 是如何去加载新的代码文件呢？

commonjs 引入了 require 的机制

- 导出：

module.exports === exports

- 导入：

require(..)

## 浏览器支持模块化

```js
export default add;
```

```js
<script type='module'>
  import add from './ecmajs/add.js' console.log(add(4,5))
</script>
```

注意使用：http-server 打开，不然会报错跨域。

使用 webpack，同时支持 es6 模块化和，commonjs，扩展很多资源打包

## 本章小节

1. 使用 webpack 的需求
2. 如何解决作用域问题
3. 如何将解决代码拆分问题
4. 如何让浏览器支持模块
5. webpack 竞品
