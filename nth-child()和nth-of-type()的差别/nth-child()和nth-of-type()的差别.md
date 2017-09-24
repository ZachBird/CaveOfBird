# :nth-child()和:nth-of-type()的差别 #

参考文章：
[教你发现CSS3的"nth-child"和"nth-of-type"的区别！__by Mr.柯小浩 ](https://juejin.im/post/59bce23c51882519777c5eb5 "参考文章")

----
周末参加了个面试，问了选子元素的问题，竟然忘了:nth-child()咋拼了。学艺不精学艺不精。正好看到了这篇文章。就写一篇，加深印象。

----
## 例子 ##
就从一个例子入手：在一个`div`块中选中其中包含的第二个`p`标签，给里面文字加颜色。

### 效果相同的情况 ###

HTML：

	 <div class="container1">
	   <p>First Paragraph</p>
	   <p>Second Paragraph</p>
	 </div>
	
	 <div class="container2">
	   <p>First Paragraph</p>
	   <p>Second Paragraph</p>
	 </div>

CSS：

	.container1 > p:nth-child(2){
	  color: red;
	}
	.container2 > p:nth-of-type(2){
	  color: blue;
	}
Result：

![e.g.1.png](https://i.loli.net/2017/09/24/59c72880480d7.png '二者效果一样的情况')

这种情况下，二者都把对应`container`中的第二个段落选中，改变了字体颜色。然而我们把前面加入其他的内容之后，就出现了差异。

### 出现差异 ###

HTML：

	 <div class="container3">
	   <h3>:nth-child() doesn't choose the second paragraph correctly</h3>
	   <p>First Paragraph</p>
	   <p>Second Paragraph</p>
	 </div>
	 <div class="container4">
	   <h3>:nth-of-type() chooses the second paragraph correctly</h3>
	   <p>First Paragraph</p>
	   <p>Second Paragraph</p>
	 </div>
CSS：

	.container3 > p:nth-child(2){
	  color: red;
	}
	.container4 > p:nth-of-type(2){
	  color: blue;
	}

Result：

![e.g.2.png](https://i.loli.net/2017/09/24/59c7288086cb7.png '有区别的情况')

如图中结果所示：
`p:nth-child(2)`选中了`container3`中的第一个`p`标签。
而`p:nth-of-type(2)`则如我们所期待的正确选中了`container4`中的第二个`p`标签

----
## 究其原因 ##

### 从:nth-child()语义上来看： ###
`container3 > p:nth-child(2)`意思是：一个container3下的p标签，并且是第二个子元素。

就是说，`nth-child(2)`选择的是父元素下的第二个位置的那个元素。然后根据前面的选择器，再确定是否选中特定的标签。
所以这个`p:nth-child(2)`就是要选中container3的第二个标签，并且这个标签要是p标签。如果不能同时满足，就无法选中正确的标签。

下例在第二个p前面加了一个`h4`标签，看效果：

HTML：

	 <div class="container3">
	   <h3>:nth-child() doesn't choose the second paragraph correctly</h3>
	   <h4>If not p tag here</h4>
	   <p>First Paragraph</p>
	   <p>Second Paragraph</p>
	 </div>

CSS：

	.container3 > p:nth-child(2){
	  color: red;
	}

![e.g.3.png](https://i.loli.net/2017/09/24/59c7b26621944.png)

因为此时`p`的位置变成了`container3`的第三个子元素，所以无法正确选中。

----
这里为了能更好的理解：**“选中第二个元素”** 和 **“正好是`p`标签”** 我们稍稍改一下CSS代码：

**把p的限定去掉：**

	.container3 > :nth-child(2){
	  color: red;
	}
选中的是现在的container3的**第二个子元素**h4标签。

![e.g.4.png](https://i.loli.net/2017/09/24/59c7cb2815959.png)

**再次选中p标签：**

	.container3 > p:nth-child(3){
	  color: red;
	}
此时，因为p变成了**第三个子元素**，所以，只需略做更改，便可以再次选中它！

![e.g.5.png](https://i.loli.net/2017/09/24/59c7b786da772.png)

以上，讲的是:nth-child()为什么会出现些许差池的原因。

----
### 从:nth-of-type()语义上来看： ###
`.container4 > p:nth-of-type(2)`的意思是container4下的子元素，第二个类型为p的标签。
语意已经很明确了，就是选某类型的第几个元素。所以才会一直正确的选中第二个p标签。

----
## 总结 ##
`:nth-child()`这个伪类的侧重点还是选择某父元素的第n个**子元素**，从其语意中就能看出来。前面加个`p`之类的标签是限定了它的选择范围，只能选`p`标签。二者必须同时满足，才能正确选取。但如果你不加这个限定条件，它自然就选择的是父元素的第n个元素了，毕竟这是他的本职工作（选子元素）
`:nth-of-type()`这个伪类其实也很容易理解，根据语意，就是选择某个类别的第n个元素，有上面的结果，也是无可厚非的。

[例子在这儿，自行增删改看效果吧](https://codepen.io/DejectedBird/pen/pWNNmQ "codePen")
