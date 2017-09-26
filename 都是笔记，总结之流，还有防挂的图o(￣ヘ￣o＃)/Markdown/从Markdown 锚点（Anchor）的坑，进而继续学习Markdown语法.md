从Markdown 锚点（Anchor）的坑，进而继续学习Markdown语法
========
写东西需要插锚点，链接回去。结果，踩坑了。:sob:

(以下都是基于Github Flavored Markdown Processor的，因为其他的没测过，可能也是一样的吧~)

**参考文章：**

[README文件语法解读，即Github Flavored Markdown语法介绍__by 果冻虾仁](https://github.com/guodongxiaren/README 'Repo里面还有github支持的emoji的查询~')

## Markdown 插入锚点语法 ##

#### `[显示的文字](#锚点名)` ####
方括号中是你要在文章中显示的文字，可以随意填。**但是**！坑就出现在后面的锚点名了。

括号中填入的是 #+锚点名 ，这个锚点名可以直接使用文中你填标题里的的内容，就是用不同数量 "#" 包裹起来的内容。**但是**！坑就出现在填入的内容了。
## 坑 ## 
1. 得填完整内容。
2. 不能有标点，空格。换言之，就是只能出现中英字符，数字。
3. 如果有**大写字母** **全部**！**转换成小写**！这很重要！如果需要单词间隔，用"-"代替。
> 例如：Github Flavored Markdown Processor 就要写成：github-flavored-markdown-processor

被第三点坑惨了。测了好久。因为我的锚点是中文和大写字母混杂的。:sob:

----
## 文章中学到的新东西 ##

### 图片和链接的URL的第二种写法 ###
因为图片和链接的本质比较像，都是引入URL。所以语法也比较像：

- 图片的语法：
> `![alt](URL "title")`
> alt和title即对应HTML中的alt和title属性（都可省略）：
> - alt表示图片显示失败时的替换文本
> - title表示鼠标悬停在图片时的显示文本（注意这里要加引号）

- 链接的语法：
> `[显示的文字](URL "title")`
> 这里[]中是链接所在的位置的提示文字，如果省略了的话，就没有文字显示了，所以跟alt还不太像。
> - 但title仍表示鼠标悬停链接时的显示文本（注意这里要加引号）

上面的语法都比较熟悉了。下面**讲的是新的URL表示法**（原作者给它起名叫**URL标识符**）
使用方法变成了这样：
- 图片：`![alt][URL标识符]`
- 链接：`[显示的文字][URL标识符]`

例如：`[百度][baidu]`
> 然后在文章底部有baidu这个标识符的定义：
>`[baidu]:https://www.baidu.com/`
> 这样也能成功定义显示为“百度”的链接，图片同理。
> URL标识符名称自定，可以是数字，字母的组合（估计还是不能用符号），只要上下能对应就行了。

### 多级列表 ###
**多级无序列表：**

* 编程语言
    * 脚本语言
        * Python

**多级有序列表：**

1. 这是一级的有序列表，数字1还是1
   1. 这是二级的有序列表，阿拉伯数字在显示的时候变成了罗马数字
      1. 这是三级的有序列表，数字在显示的时候变成了英文字母

（但是只能在github里解析，MP2里不能正确显示）

### 代码高亮 ###
很有用的格式：
在三个反引号后面加上编程语言的名字，另起一行开始写代码，最后一行再加上三个反引号。
例如：
```javascript
var people = function (name){
	this.name = name
	console.log(name)
}
var person = new people('Bird')
```
```Java
public static void main(String[]args){} //Java
```
```c
int main(int argc, char *argv[]) //C
```
```Bash
echo "hello GitHub" #Bash
```
```cpp
string &operator+(const string& A,const string& B) //cpp
```
没法做出展示，只能到文档中看格式~

复选框 

表格 

emoji

diff语法



