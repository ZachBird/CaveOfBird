# BFC学习小结 #
也不知道在翻什么教程的时候翻到了慕课网的前端面试CSS相关问题的页面（天天就本来学一个知识点，结果翻着翻着就跑偏了，结果概念术语看了一堆，要学的东西反而没学到。不专心！没目标！得改），大体浏览了一下，看到了BFC这个概念，是个没听说过的名词。百度之！（百度用惯了，感觉一时半会儿改不过来，而且没有稳定的梯子）
看了大概五六篇博文。还有旭鑫大神的文章。感觉算是有些理解了。但是不知道这个概念是不是过时了，还是被新技术取代了。因为实在是太不了解真实的前端开发是怎么样的了。既然学了，还是记录一下吧。
扯了这么多，开始进入正题吧~

参考文章：
- [深入理解BFC和Margin Collapse](http://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html)
- [CSS深入理解流体特性和BFC特性下多栏自适应布局](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

### 1.什么是BFC？ ###
> **w3c规范中的BFC定义：**
> 
> 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
> 
> 在BFC中，盒子从顶端开始垂直地一个接一个地排列，两个盒子之间的垂直的间隙是由他们的margin 值所决定的。在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠。
> 
> 在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）。
> 
> **BFC的通俗理解：**
> 
> 首先BFC是一个名词，是一个独立的布局环境，我们可以理解为一个箱子（实际上是看不见摸不着的），箱子里面物品的摆放是不受外界的影响的。转换为BFC的理解则是：BFC中的元素的布局是不受外界的影响（我们往往利用这个特性来消除浮动元素对其非浮动的兄弟元素和其子元素带来的影响。）并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

就是页面中独立的块级区域，其中子元素是不会影响到外面的元素的一块区域。

### 2.常见的触发BFC的条件 ###
> **什么时候会触发BFC呢？常见的如下：**
> 
> - float的值不为none。
> - overflow的值为auto,scroll或hidden。
> - display的值为table-cell, table-caption, inline-block中的任何一个。
> - position的值不为relative和static。

### 3.BFC的作用 ###
两篇文章中用BFC处理的问题，大致总结如下：（具体例子还是点进去看吧，太懒了，不想挪过来。）
1. 消除浮动（就是浮动带来的影响）
2. 处理外边距塌陷的情况（margin-collapsing）
3. 实现自适应布局也会设计BFC的相关知识（比如清除浮动←_←）

### 4.实现BFC的方式 ###

1. overflow: auto/hidden `IE7+`
2. display: inline-block `IE6/IE7`
3. display: table/table-cell `IE8+`
4. 使用after伪元素：
>
	.clearfix{
                *zoom: 1;
                } 
	.clearfix::after{
                content: '';
                display: block;
                height: 0;
                clear: both;
                }
>
           