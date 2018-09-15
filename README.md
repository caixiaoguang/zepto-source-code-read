# zepto源码阅读
## 整体入口分析
代码全部折叠后可以看到把Zepto这个自执行函数的返回值设置为window对象的属性，并设置一个别名$。
```
var Zepto = (function() {...})()

window.Zepto = Zepto
// '$'未定义的话，把它指向Zepto
window.$ === undefined && (window.$ = Zepto)
```
展开代码看最后，可以看到Zepto这个自执行函数的返回值为'$',和上文那个$并不是一个
```
var Zepto = (function() {
    ...
    return $
    })()
```
往上可以找到Zepto函数返回的$也是一个函数,以类似$('div')的形式使用zepto时，等同于执行这个$函数
```
$ = function(selector, context){
    return zepto.init(selector, context)
  }
```
可以看到$函数的返回值是zepto.init(selector, context)，往上可以找到zepto 和init()的定义，即zepto是一个对象，init是这个对象上的一个方法
```
...
zepto = {}
...

zepto.init = function(selector, context) {...}
```
从init函数开始是功能性的代码，在开发时使用全局的$即是执行init这个函数
## 下面只介绍关键性的代码，其他的在源码中以注释形式写出
