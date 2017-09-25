# src和href属性的使用说明 #
在写页面中需要引用的标签时，必须要使用这两个标签，有时候就会混掉，不知道该用哪个属性，就需要去查询，感觉有些麻烦。所以学习一下二者的区别，辅助记忆。

## 1.src ##
> src是source的缩写。意思是“来源”，是引用一个资源把该标签的内容整体替换。如果不写src，其本身没有内容。`<script>`会不存在脚本，`<img>`会显示×，`<iframe>`框架内显示空白页。
> 
> 例如：<script type="text/javascript" src="b.js">alert(1)</script>
> 
> b.js文件里写alert(2);
> 会显示2，因为本身的内容已经被替代了。

会用到src属性的标签：
- img 图片 `<img src="/img/1.png" alt="1" />`
- frame (H5已废除) iframe 框架集 `<iframe src="girl.gif"></iframe>`
- input type 为image的提交按钮 `<input type="image" src="submit.jpg"
alt="Submit" align="right" />`
- scirpt 脚本 `<script type="text/javascript" src="javascript.js"></script>`
- style 样式表（胎死腹中的XHTML2中就将src属性推广到了所有元素。比如可以： `<style src="common.css"> </style>`）（仅作了解）

## 2.href ##
> href 是Hypertext Reference的缩写。表示“超文本链接”，目的不是为了引用一个资源，而且为了建立一个“通道”，让当前标签能够链接到目标地址，并不是为了把目标拉进页面来替换引用标签的内容。
> 
> 例如：`<a>`标签的href不会被当作一个资源替换标签内容；
> 
> `<link>`标签本身并不包含实际的元素意义来做内容，他需要`rel`属性来明确表示“被链接的文档是用来做什么的”。至于为什么要用`<link>`标签来链接外部样式表，可能是因为样式表更符合外部链接资源特征，更接近附属资源，而不是嵌入内容。

会用到href属性的标签：
- `<a>`超链接`<a href="http://www.github.com" target="_blank">章鱼猫</a>`
- `<link>`定义文档与外部资源的关系`<link type="text/css" href="stylesheet.css" rel="stylesheet" />`
- `<input>` type 中的onclick事件
`<input type=button onclick="window.location.href('#')" />`

本文参考来自：[http://http://www.jianshu.com/p/797bceab922b](http://http://www.jianshu.com/p/797bceab922b "via...")