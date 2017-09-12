## 试听课笔记 ##

事件绑定

1. 直接绑定
2. 监听(addEventListener)

> - .target 事件的目标元素
> - .preventDefault() 阻止默认事件
> - .stopPropagation() 停止冒泡

[阻止事件默认时间](http://js.jirengu.com/xapoz/1/edit?html,js,console,output)

[停止事件冒泡](http://js.jirengu.com/wevebanawu/1/edit?html,js,console,output)

IE下:
attachEvent
detachEvent

事件代理：

添加元素的这种请求的事件。用事件代理的方法绑定事件比较好。

[事件代理](http://js.jirengu.com/qulopuwibo/1/edit?html,js,console,output)

使用数组遍历去绑定事件处理函数就无法处理动态创建的元素

事件委托就是利用事件冒泡的原理,
使用数组遍历去绑定事件处理函数就无法处理动态创建的元素

    function fn(value, callack){
       callback(++value)
    }
    
    window.fn(3, function(e){
      console.log(e)
    })

----
    function fn(value, callack){
       var event = {}
       callback(event)
    }
    
    window.fn(3, function(e){
      console.log(e)
    })


[demo地址](http://book.jirengu.com/fe/code/projects/HungoouRadio/login.html)

dialogue -- 对话框

flip-modal -- 翻转模态窗口


实现思路和主要代码：

是把右上角icon再添加一个专门控制模态量显示的类'show',然后控制class的值

node.classList.toggle('show')
