# JavaScript #
----

## 来历 ##

Branden Eich

ECMAScript

部分支持Unicode（高于两个字节不支持），支持usc-2

----

## 变量和常量 ##

命名:

变量：第一位可以为'$','_'，字母，不能是数字,其他字母可以为`$`,`_`，字母和数字

常量：'123' 直接声明
或者用const 如const pi = '3.14'

----

## 7种数据类型 ##

String,Number,Undefined,Null,Boolean,Object,Symble

string有length属性和下标

number 科学计数。0b(2) 0o(8) 0x(16)

undefined表示没有赋值的基本变量，null表示没有赋值的对象

boolean：短路逻辑

a = a || b 保底写法 b为保底值

console && console.log(1) &&符用来找假值。

找需要找的值，找到了就返回

<==>if(console){
	console.log(1)
}

6个假值：0 ,``,NaN,undefined,null,false
(document.all 为远古时期IE中的对象。为假值，IE里为真)

对象：要搞清内存图

----

## 运算符 ##

+=，-=，取余%

优先级：() 高于 , 高于 =

![console.log()的值为undefined](https://i.imgur.com/vttckzY.png)

----

## 函数 ##

对象的一种，特别奇怪的

call(this,arguments1,arguments2)或者apply(this,array),二者只有传值方式不一样

所有参数都必须传this和arguments，如果不传，就使用默认值，this默认值在浏览器中是window，[arguments]默认是一个空对象（伪的数组）

函数声明，赋值，调用

return 表示函数调用的返回值result

result = 函数 ，rusult就是这个函数

result = 函数() 或者 result = 函数.call() ，result是函数返回值

----

## 作用域--就近原则 ##

看当前所在作用域有没有此变量，如果没有就往上级找，如果还没有，就往全局找，如果全局没有，就报错。

使用变量必须先声明，没声明使用就会报错。

var会提升变量。提前到当前作用域的前面。所以可以在语句后面声明。不过就是没有初始化，是undefined

----

## ~~new和面向对象的东西~~(还没讲) ##

----

## JS的API ##

数组，数字，对象，日期等等，内置API

![JS内置API](https://i.imgur.com/2egd2OP.png)


----

### 以上为JS自身内容 ###

### 接下来将浏览器内容 ###

----

## 浏览器内容 ##

浏览器给我们提供的都放在window里

window下的document 所有的DOM操作都在document里。

浏览器最重要一环就是操作DOM

而history、前进后退、location（地址栏）、open/close都是浏览器的BOM。

浏览器主要提供的就是BOM和DOM两部分

新增的Fetch

----

## 编程的基本思想 ##

----

伪代码、流程图、煎蛋理论

在让计算机操作时，需要有条理，明确的给出操作指令。

需要讨论各种特殊情况。

编程主要思路占比很小，大多数情况下都需要考虑多种情况，比如某件事没有怎么办，出错了怎么办。

----

### 数据结构 ###

数组：
队列：先进先出

栈：先进后出

树：链表或者对象

hash：对象 

数据结构是用来抽象一些东西的。
例如可以把页面上的元素抽象成树，把事件监听抽象成队列。

“内存图”

----

## 库 ##

----

工具箱

自己写库 window.dom = {} -- 对象，hash

window.$ = function (){
   return {on , addclass}
}  -- 函数

----

